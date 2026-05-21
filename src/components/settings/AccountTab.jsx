import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import ConfirmModal from '../ui/ConfirmModal';
import { useUser } from '../../context/UserContext';

import { useToast } from '../../context/ToastContext';
import { useTheme } from '../../context/ThemeContext';

// ===== Initial data =====
const INITIAL_PROFILE = { name: 'Nguyễn Văn A', email: 'user@facebook.com', phone: '0123 456 789', gender: 'male' };

const AccountTab = ({ isActive, navigate }) => {
    const { currentAvatar, profiles, activeProfileId, switchProfile } = useUser();
    const { showToast } = useToast();
    const { theme } = useTheme();

    // --- Thông tin cá nhân ---
    const [isEditing, setIsEditing] = useState(false);
    const [savedProfile, setSavedProfile] = useState(INITIAL_PROFILE);
    const [formProfile, setFormProfile] = useState(INITIAL_PROFILE);

    const isProfileChanged = JSON.stringify(formProfile) !== JSON.stringify(savedProfile);

    const handleProfileField = (field, value) => setFormProfile(prev => ({ ...prev, [field]: value }));

    const handleProfileSave = () => {
        setSavedProfile(formProfile);
        setIsEditing(false);
        showToast('Cập nhật thông tin thành công!');
    };

    const handleProfileCancel = () => {
        setFormProfile(savedProfile);
        setIsEditing(false);
    };

    // --- Đổi mật khẩu ---
    const [isPwdFormOpen, setIsPwdFormOpen] = useState(false);
    const [pwdValues, setPwdValues] = useState({ oldPwd: '', newPwd: '', confirmPwd: '' });
    const [showPwd, setShowPwd] = useState({ old: false, new: false, confirm: false });
    const toggleShowPwd = (field) => setShowPwd(prev => ({ ...prev, [field]: !prev[field] }));
    const [logoutAllDevices, setLogoutAllDevices] = useState(false);

    // --- Thiết bị đã đăng nhập (mock) ---
    const INITIAL_DEVICES = [
        { id: 'dev1', name: 'Chrome - Windows', location: 'Hà Nội, Việt Nam • Đang hoạt động', isCurrent: true },
        { id: 'dev2', name: 'Safari - iPhone 14 Pro', location: 'TP.HCM, Việt Nam • 2 giờ trước', isCurrent: false },
        { id: 'dev3', name: 'Nighthub App - Smart TV', location: 'Đà Nẵng, Việt Nam • Hôm qua', isCurrent: false },
    ];
    const [devices, setDevices] = useState(INITIAL_DEVICES);
    
    // --- Mạng xã hội liên kết ---
    const [socialLinks, setSocialLinks] = useState({ google: true, facebook: false, apple: false });

    const toggleSocialLink = (platform) => {
        setSocialLinks(prev => ({ ...prev, [platform]: !prev[platform] }));
        showToast(socialLinks[platform] ? `Đã hủy liên kết ${platform}` : `Đã liên kết ${platform} thành công`);
    };

    const handleLogoutAllDevices = () => {
        setDevices(prev => prev.filter(d => d.isCurrent));
        showToast('Đã đăng xuất tất cả thiết bị khác!');
    };

    const isPwdFilled = pwdValues.oldPwd.length > 0 && pwdValues.newPwd.length > 0 && pwdValues.confirmPwd.length > 0;

    const handlePwdField = (field, value) => setPwdValues(prev => ({ ...prev, [field]: value }));

    const handlePwdSave = () => {
        if (logoutAllDevices) {
            handleLogoutAllDevices();
        } else {
            showToast('Mật khẩu đã được cập nhật thành công!');
        }
        setPwdValues({ oldPwd: '', newPwd: '', confirmPwd: '' });
        setLogoutAllDevices(false);
        setIsPwdFormOpen(false);
    };

    const handlePwdCancel = () => {
        setPwdValues({ oldPwd: '', newPwd: '', confirmPwd: '' });
        setLogoutAllDevices(false);
        setIsPwdFormOpen(false);
    };

    // --- Modals ---
    const [modalState, setModalState] = useState({ isOpen: false, type: '', title: '', desc: '', confirmText: '', cancelText: '', isDanger: false, platform: '' });

    // --- PIN để đổi hồ sơ bị khóa ---
    const [pinModal, setPinModal] = useState({ isOpen: false, profile: null, pinArray: ['','','',''], error: '' });
    const settingPinRefs = [useRef(), useRef(), useRef(), useRef()];

    const openSettingPinModal = (profile) => {
        setPinModal({ isOpen: true, profile, pinArray: ['','','',''], error: '' });
        setTimeout(() => settingPinRefs[0].current?.focus(), 80);
    };
    const closeSettingPinModal = () => setPinModal({ isOpen: false, profile: null, pinArray: ['','','',''], error: '' });

    const handleSettingPinChange = (val, idx) => {
        const newVal = val.replace(/\D/g, '').slice(-1);
        const arr = [...pinModal.pinArray];
        arr[idx] = newVal;
        setPinModal(prev => ({ ...prev, pinArray: arr, error: '' }));
        if (newVal && idx < 3) settingPinRefs[idx + 1].current?.focus();
        if (newVal && idx === 3) {
            // auto-submit khi nhập xong số cuối
            const fullPin = arr.join('');
            if (fullPin === pinModal.profile?.pin) {
                switchProfile(pinModal.profile.id);
                showToast(`Đã chuyển sang hồ sơ ${pinModal.profile.name}`);
                closeSettingPinModal();
            } else {
                setPinModal(prev => ({ ...prev, pinArray: ['','','',''], error: 'Mã PIN không đúng. Vui lòng thử lại.' }));
                setTimeout(() => settingPinRefs[0].current?.focus(), 50);
            }
        }
    };
    const handleSettingPinKeyDown = (e, idx) => {
        if (e.key === 'Backspace' && !pinModal.pinArray[idx] && idx > 0)
            settingPinRefs[idx - 1].current?.focus();
    };

    const openModal = (type, title, desc, confirmText, cancelText, isDanger = false, extraData = {}) => {
        setModalState({ isOpen: true, type, title, desc, confirmText, cancelText, isDanger, ...extraData });
    };
    const closeModal = () => setModalState(prev => ({ ...prev, isOpen: false }));
    const handleConfirm = () => {
        if (modalState.type === 'logout_all') {
            handleLogoutAllDevices();
        } else if (modalState.type === 'logout_device') {
            setDevices(prev => prev.filter(d => d.id !== modalState.deviceId));
            showToast('Đã đăng xuất thiết bị thành công!');
        } else if (modalState.type === 'unlink_social') {
            toggleSocialLink(modalState.platform);
        }
        closeModal();
    };

    return (
        <div className={`tab-pane ${isActive ? 'active' : ''}`}>
            <div className="tab-header">
                <h2 className="tab-title">Tài Khoản & Hồ Sơ</h2>
                <p className="tab-desc">Quản lý thông tin cá nhân, các hồ sơ người dùng và bảo mật.</p>
            </div>

            {/* ===== Card Thông Tin Cá Nhân ===== */}
            <div className="setting-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <h3 style={{ marginBottom: 0 }}>THÔNG TIN CÁ NHÂN</h3>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {!isEditing && (
                            <button className="btn-secondary" style={{ padding: '8px 16px', fontSize: '13px' }} onClick={() => setIsEditing(true)}>
                                Chỉnh sửa
                            </button>
                        )}
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Họ và tên</label>
                        <input
                            type="text" className="form-control"
                            value={formProfile.name} disabled={!isEditing}
                            onChange={(e) => handleProfileField('name', e.target.value)}
                            style={{ opacity: isEditing ? 1 : 0.7, cursor: isEditing ? 'text' : 'default' }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email" className="form-control"
                            value={formProfile.email} disabled={!isEditing}
                            onChange={(e) => handleProfileField('email', e.target.value)}
                            style={{ opacity: isEditing ? 1 : 0.7, cursor: isEditing ? 'text' : 'default' }}
                        />
                    </div>
                </div>

                <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label>Giới tính</label>
                    <div className="radio-group">
                        {[['male', 'Nam'], ['female', 'Nữ'], ['other', 'Khác']].map(([val, label]) => (
                            <label className="radio-item" key={val} style={{ opacity: isEditing ? 1 : 0.7, cursor: isEditing ? 'pointer' : 'not-allowed' }}>
                                <input
                                    type="radio" name="gender" value={val}
                                    checked={formProfile.gender === val}
                                    disabled={!isEditing}
                                    onChange={() => handleProfileField('gender', val)}
                                /> {label}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label>Số điện thoại</label>
                    <input
                        type="text" className="form-control"
                        value={formProfile.phone} disabled={!isEditing}
                        onChange={(e) => handleProfileField('phone', e.target.value)}
                        style={{ opacity: isEditing ? 1 : 0.7, cursor: isEditing ? 'text' : 'default' }}
                    />
                </div>

                {isEditing && (
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
                        <button className="btn-cancel" style={{ padding: '8px 16px', fontSize: '13px' }} onClick={handleProfileCancel}>
                            Hủy
                        </button>
                        <button
                            className="btn-primary"
                            style={{ padding: '8px 16px', fontSize: '13px', opacity: isProfileChanged ? 1 : 0.4, cursor: isProfileChanged ? 'pointer' : 'not-allowed' }}
                            disabled={!isProfileChanged}
                            onClick={handleProfileSave}
                        >
                            Cập Nhật
                        </button>
                    </div>
                )}
            </div>

            {/* ===== Card Quản Lý Hồ Sơ ===== */}
            <div className="setting-card">
                <h3>QUẢN LÝ HỒ SƠ</h3>
                <p className="card-desc">Chỉ hiển thị các hồ sơ hiện có</p>
                <div className="profile-list" style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
                    {profiles && profiles.map(profile => {
                        const isCurrent = profile.id === activeProfileId;
                        return (
                            <div key={profile.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: isCurrent ? 'default' : 'pointer', opacity: isCurrent ? 1 : 0.85 }}
                                onClick={() => {
                                    if (isCurrent) return;
                                    if (profile.pin) {
                                        openSettingPinModal(profile);
                                    } else {
                                        switchProfile(profile.id);
                                        showToast(`Đã chuyển sang hồ sơ ${profile.name}`);
                                    }
                                }}
                            >
                                <div style={{ position: 'relative' }}>
                                    <img
                                        src={profile.avatarUrl}
                                        className={`profile-avatar-small ${isCurrent ? 'active' : ''}`}
                                        title={profile.name}
                                        alt={profile.name}
                                        style={{ display: 'block' }}
                                    />
                                    {profile.pin && (
                                        <div style={{
                                            position: 'absolute', top: 0, left: 0,
                                            width: 18, height: 18, borderRadius: '50%',
                                            background: '#0284c7', border: '2px solid var(--modal-bg)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                                        }}>
                                            <svg width="9" height="9" viewBox="0 0 24 24" fill="white">
                                                <path d="M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z"/>
                                                <path d="M7 11V7a5 5 0 0 1 10 0v4" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <span style={{ fontSize: 11, color: isCurrent ? 'var(--accent-color)' : 'var(--text-muted)', fontWeight: isCurrent ? 700 : 500, maxWidth: 56, textAlign: 'center', lineHeight: 1.2, wordBreak: 'break-word' }}>{profile.name}</span>
                            </div>
                        );
                    })}
                    <button className="btn-secondary" onClick={() => navigate('/switch-profile')} style={{ marginLeft: 'auto', alignSelf: 'center' }}>Chỉnh Sửa Hồ Sơ</button>
                </div>

                {/* PIN Modal — portal ra document.body để tránh stacking context */}
                {pinModal.isOpen && ReactDOM.createPortal(
                    <div className="modal-overlay animate-fade-in" style={{ zIndex: 999999 }} onClick={closeSettingPinModal}>
                        <div className="modal-box modal-sm pin-wrapper" onClick={e => e.stopPropagation()}>
                            <button onClick={closeSettingPinModal} className="btn-icon" style={{ position: 'absolute', top: 16, right: 16 }}>
                                <img src="https://cdn-icons-png.flaticon.com/512/2961/2961937.png" alt="Đóng" />
                            </button>
                            <div className="pin-icon-box">
                                <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="Khóa" />
                            </div>
                            <h2 className="pin-title">Nhập mã PIN</h2>
                            <p className="pin-desc" style={{ color: 'var(--text-muted)', marginBottom: pinModal.error ? 16 : 32 }}>
                                Nhập mã PIN để truy cập hồ sơ của {pinModal.profile?.name}
                            </p>
                            {pinModal.error && <div style={{ color: 'var(--accent-red)', fontSize: '14px', marginBottom: '16px', fontWeight: 500 }}>{pinModal.error}</div>}
                            <div className="pin-inputs-container">
                                {[0, 1, 2, 3].map(i => (
                                    <input
                                        key={i}
                                        ref={settingPinRefs[i]}
                                        type="password"
                                        inputMode="numeric"
                                        maxLength="1"
                                        className="pin-input"
                                        value={pinModal.pinArray[i]}
                                        onChange={e => handleSettingPinChange(e.target.value, i)}
                                        onKeyDown={e => handleSettingPinKeyDown(e, i)}
                                    />
                                ))}
                            </div>
                            <div className="pin-footer">Ghi nhớ mã PIN của bạn để truy cập</div>
                        </div>
                    </div>,
                    document.body
                )}
            </div>

            {/* ===== Card Bảo Mật ===== */}
            <div className="setting-card">
                <h3>BẢO MẬT</h3>
                <p className="card-desc">Quản lý mật khẩu và các thiết bị đã đăng nhập</p>

                <div className="setting-section">
                    <div className="setting-row" style={{ borderBottom: isPwdFormOpen ? '1px solid var(--border-color)' : 'none', paddingBottom: isPwdFormOpen ? '15px' : '0' }}>
                        <div className="setting-row-info">
                            <h5>Mật khẩu</h5>
                            <p>Thay đổi mật khẩu đăng nhập của bạn</p>
                        </div>
                        {!isPwdFormOpen && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                                <button className="btn-secondary" onClick={() => setIsPwdFormOpen(true)}>
                                    Đổi mật khẩu
                                </button>
                            </div>
                        )}
                    </div>

                    {isPwdFormOpen && (
                        <div id="changePwdForm" style={{ background: 'var(--bg-input, #f8fafc)', padding: '20px', borderRadius: '12px', marginTop: '15px', border: '1px solid var(--border-color)' }}>
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label>Mật khẩu cũ</label>
                                <div className="password-wrapper" style={{ position: 'relative' }}>
                                    <input
                                        type={showPwd.old ? "text" : "password"} className="form-control pwd-input"
                                        placeholder="Nhập mật khẩu hiện tại"
                                        value={pwdValues.oldPwd}
                                        onChange={(e) => handlePwdField('oldPwd', e.target.value)}
                                        style={{ paddingRight: '40px' }}
                                    />
                                    {pwdValues.oldPwd.length > 0 && (
                                      <button 
                                        type="button" 
                                        onClick={() => toggleShowPwd('old')}
                                        style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', padding: 0 }}
                                      >
                                        {showPwd.old ? (
                                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                                        ) : (
                                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                        )}
                                      </button>
                                    )}
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Mật khẩu mới</label>
                                    <div className="password-wrapper" style={{ position: 'relative' }}>
                                        <input
                                            type={showPwd.new ? "text" : "password"} className="form-control pwd-input"
                                            placeholder="Nhập mật khẩu mới"
                                            value={pwdValues.newPwd}
                                            onChange={(e) => handlePwdField('newPwd', e.target.value)}
                                            style={{ paddingRight: '40px' }}
                                        />
                                        {pwdValues.newPwd.length > 0 && (
                                          <button 
                                            type="button" 
                                            onClick={() => toggleShowPwd('new')}
                                            style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', padding: 0 }}
                                          >
                                            {showPwd.new ? (
                                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                                            ) : (
                                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                            )}
                                          </button>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Xác nhận mật khẩu</label>
                                    <div className="password-wrapper" style={{ position: 'relative' }}>
                                        <input
                                            type={showPwd.confirm ? "text" : "password"} className="form-control pwd-input"
                                            placeholder="Nhập lại mật khẩu mới"
                                            value={pwdValues.confirmPwd}
                                            onChange={(e) => handlePwdField('confirmPwd', e.target.value)}
                                            style={{ paddingRight: '40px' }}
                                        />
                                        {pwdValues.confirmPwd.length > 0 && (
                                          <button 
                                            type="button" 
                                            onClick={() => toggleShowPwd('confirm')}
                                            style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', padding: 0 }}
                                          >
                                            {showPwd.confirm ? (
                                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                                            ) : (
                                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                            )}
                                          </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Checkbox đăng xuất tất cả */}
                            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '15px 0', fontSize: '14px', color: 'var(--text-main)', cursor: 'pointer' }}>
                                <input
                                    type="checkbox"
                                    checked={logoutAllDevices}
                                    onChange={(e) => setLogoutAllDevices(e.target.checked)}
                                    style={{ width: '16px', height: '16px', accentColor: 'var(--accent-color)', cursor: 'pointer' }}
                                />
                                Đăng xuất trên tất cả các thiết bị
                            </label>

                            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                                <button className="btn-cancel" onClick={handlePwdCancel}>Hủy</button>
                                <button
                                    className="btn-primary"
                                    style={{ opacity: isPwdFilled ? 1 : 0.4, cursor: isPwdFilled ? 'pointer' : 'not-allowed' }}
                                    disabled={!isPwdFilled}
                                    onClick={handlePwdSave}
                                >
                                    Lưu mật khẩu
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="setting-section">
                    <div className="setting-row" style={{ borderBottom: 'none', paddingBottom: '15px' }}>
                        <div className="setting-row-info">
                            <h5>Liên kết tài khoản</h5>
                            <p>Kết nối với các mạng xã hội để đăng nhập nhanh</p>
                        </div>
                    </div>

                    <div>
                        {/* Apple */}
                        <div className="list-item" style={{ padding: '15px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid rgba(255,255,255,0.05)', borderBottomWidth: '1px' }}>
                            <div className="list-item-left">
                                <div className="list-icon">
                                    <img src={theme === 'dark' ? '/images/logo_apple_white.png' : '/images/logo_apple_black.png'} alt="Apple" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                                </div>
                                <div className="list-info" style={{ marginLeft: '5px' }}>
                                    <h5 style={{ fontSize: '15px', color: 'var(--text-main)', marginBottom: socialLinks.apple ? '3px' : '0' }}>Apple</h5>
                                    {socialLinks.apple && <p style={{ color: 'var(--accent-green)', fontSize: '13px', fontWeight: 500 }}>Đã kết nối</p>}
                                </div>
                            </div>
                            {socialLinks.apple ? (
                                <button className="list-action red" style={{ fontWeight: 500 }} onClick={() => openModal('unlink_social', 'Hủy liên kết Apple', 'Bạn có chắc chắn muốn hủy liên kết tài khoản Apple này không?', 'Hủy liên kết', 'Quay lại', true, { platform: 'apple' })}>Ngắt kết nối</button>
                            ) : (
                                <button className="list-action" style={{ color: '#3b82f6', fontWeight: 500 }} onClick={() => toggleSocialLink('apple')}>Kết nối</button>
                            )}
                        </div>
                        {/* Facebook */}
                        <div className="list-item" style={{ padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <div className="list-item-left">
                                <div className="list-icon">
                                    <img src="/images/logo_fb.webp" alt="Facebook" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                                </div>
                                <div className="list-info" style={{ marginLeft: '5px' }}>
                                    <h5 style={{ fontSize: '15px', color: 'var(--text-main)', marginBottom: socialLinks.facebook ? '3px' : '0' }}>Facebook</h5>
                                    {socialLinks.facebook && <p style={{ color: 'var(--accent-green)', fontSize: '13px', fontWeight: 500 }}>Đã kết nối</p>}
                                </div>
                            </div>
                            {socialLinks.facebook ? (
                                <button className="list-action red" style={{ fontWeight: 500 }} onClick={() => openModal('unlink_social', 'Hủy liên kết Facebook', 'Bạn có chắc chắn muốn hủy liên kết tài khoản Facebook này không?', 'Hủy liên kết', 'Quay lại', true, { platform: 'facebook' })}>Ngắt kết nối</button>
                            ) : (
                                <button className="list-action" style={{ color: '#3b82f6', fontWeight: 500 }} onClick={() => toggleSocialLink('facebook')}>Kết nối</button>
                            )}
                        </div>
                        {/* Google */}
                        <div className="list-item" style={{ padding: '15px 0' }}>
                            <div className="list-item-left">
                                <div className="list-icon">
                                    <img src="/images/logo_gg.png" alt="Google" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                                </div>
                                <div className="list-info" style={{ marginLeft: '5px' }}>
                                    <h5 style={{ fontSize: '15px', color: 'var(--text-main)', marginBottom: socialLinks.google ? '3px' : '0' }}>Google</h5>
                                    {socialLinks.google && <p style={{ color: 'var(--accent-green)', fontSize: '13px', fontWeight: 500 }}>Đã kết nối</p>}
                                </div>
                            </div>
                            {socialLinks.google ? (
                                <button className="list-action red" style={{ fontWeight: 500 }} onClick={() => openModal('unlink_social', 'Hủy liên kết Google', 'Bạn có chắc chắn muốn hủy liên kết tài khoản Google này không?', 'Hủy liên kết', 'Quay lại', true, { platform: 'google' })}>Ngắt kết nối</button>
                            ) : (
                                <button className="list-action" style={{ color: '#3b82f6', fontWeight: 500 }} onClick={() => toggleSocialLink('google')}>Kết nối</button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="setting-section">
                    <div className="setting-row" style={{ borderBottom: 'none', paddingBottom: '15px' }}>
                        <div className="setting-row-info">
                            <h5 style={{ margin: 0 }}>Thiết bị đã đăng nhập</h5>
                            <p>Quản lý và kiểm soát các phiên đăng nhập đang hoạt động</p>
                        </div>
                        <button 
                            className="list-action red" 
                            onClick={() => openModal('logout_all', 'Đăng xuất tất cả thiết bị', 'Bạn có chắc chắn muốn đăng xuất khỏi tất cả các thiết bị khác không?', 'Đăng xuất tất cả', 'Quay lại', true)}
                            style={{ opacity: devices.length <= 1 ? 0.5 : 1, cursor: devices.length <= 1 ? 'not-allowed' : 'pointer' }}
                            disabled={devices.length <= 1}
                        >
                            Đăng xuất tất cả thiết bị
                        </button>
                    </div>

                    <div>
                        {devices.map(dev => (
                            <div className="list-item" key={dev.id} style={{ borderTop: dev.id === devices[0].id ? '1px solid var(--border-color)' : 'none' }}>
                                <div className="list-item-left">
                                    <div className="list-icon">
                                        {dev.isCurrent ? (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                        ) : dev.name.includes('iPhone') ? (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                        ) : (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                                        )}
                                    </div>
                                    <div className="list-info">
                                        <h5>{dev.name} {dev.isCurrent && <span style={{ background: 'rgba(4, 120, 87, 0.1)', color: 'var(--accent-green)', padding: '2px 6px', borderRadius: '4px', fontSize: '11px', marginLeft: '8px' }}>Thiết bị này</span>}</h5>
                                        <p>{dev.location}</p>
                                    </div>
                                </div>
                                {!dev.isCurrent && (
                                    <button className="list-action red" onClick={() => openModal('logout_device', 'Đăng xuất thiết bị', `Bạn có muốn đăng xuất khỏi thiết bị ${dev.name}?`, 'Đăng xuất', 'Quay lại', true, { deviceId: dev.id })}>Đăng xuất</button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== Card Xóa Tài Khoản ===== */}
            <div className="setting-card danger-box">
                <h3 style={{ color: 'var(--accent-red)' }}>XÓA TÀI KHOẢN</h3>
                <p className="card-desc">Sau khi xóa tài khoản, tất cả dữ liệu sẽ bị xóa vĩnh viễn.</p>
                <button
                    className="btn-primary"
                    style={{ background: 'var(--accent-red)', color: 'var(--always-white)' }}
                    onClick={() => openModal('delete_account', 'Xóa tài khoản', 'Hành động này không thể hoàn tác. Tất cả dữ liệu của bạn sẽ bị xóa vĩnh viễn.', 'Xóa tài khoản', 'Quay lại', true)}
                >
                    Xóa Tài Khoản
                </button>
            </div>

            <ConfirmModal
                isOpen={modalState.isOpen}
                title={modalState.title}
                description={modalState.desc}
                onConfirm={handleConfirm}
                onCancel={closeModal}
                confirmText={modalState.confirmText}
                cancelText={modalState.cancelText}
                isDanger={modalState.isDanger}
            />
        </div>
    );
};

export default AccountTab;
