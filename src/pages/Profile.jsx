import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterModal from '../components/FilterModal';
import MovieCardHorizontal from '../components/MovieCardHorizontal';
import MovieRow from '../components/MovieRow';
import MovieCardVertical from '../components/MovieCardVertical';
import { useContent } from '../context/ContentContext';
import { useUser } from '../context/UserContext';
import './Profile.css';
import './SwitchProfile.css';

const AVATARS = [
  'https://static2.vieon.vn/vieplay-image/profile_avatar/2023/03/28/9rdo8k24_asset24x.webp',
  'https://static2.vieon.vn/vieplay-image/profile_avatar/2023/03/28/5k104vv9_asset34x.webp',
  'https://static2.vieon.vn/vieplay-image/profile_avatar/2023/03/28/6qpy3mtk_asset44x.webp',
  'https://static2.vieon.vn/vieplay-image/profile_avatar/2023/03/28/cy48bhoe_asset54x.webp',
  'https://static2.vieon.vn/vieplay-image/profile_avatar/2023/03/28/7634rbqo_asset74x.webp',
  'https://static2.vieon.vn/vieplay-image/profile_avatar/2023/03/28/qd2hhjm8_asset84x.webp',
  'https://static2.vieon.vn/vieplay-image/profile_avatar/2023/03/28/9tn0n6qa_asset94x.webp',
];

const ICONS = {
  lock: 'https://cdn-icons-png.flaticon.com/512/3064/3064155.png',
  edit: 'https://cdn-icons-png.flaticon.com/512/1159/1159633.png',
};

const Profile = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [showAllHistory, setShowAllHistory] = useState(false);
  const [showAllSaved, setShowAllSaved] = useState(false);

  // Edit modal state
  const [showEditModal, setShowEditModal] = useState(false);
  const [editName, setEditName] = useState('');
  const [editAvatar, setEditAvatar] = useState('');
  const [editGender, setEditGender] = useState('nam');
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [nameError, setNameError] = useState('');

  // PIN modal state
  const [showPinModal, setShowPinModal] = useState(false);
  const [pinMode, setPinMode] = useState('set'); // 'set' | 'verify'
  const [pinStep, setPinStep] = useState(1);
  const [firstPin, setFirstPin] = useState('');
  const [pinArray, setPinArray] = useState(['', '', '', '']);
  const [pinError, setPinError] = useState('');
  const [tempPin, setTempPin] = useState(null);
  const pinRefs = [useRef(), useRef(), useRef(), useRef()];

  const { getMyListMovies, continueWatching } = useContent();
  const { profiles, activeProfileId, updateProfile } = useUser();
  const activeProfile = profiles.find(p => p.id === activeProfileId) || profiles[0];
  const savedMovies = getMyListMovies();

  // Open edit modal pre-filled with active profile data
  const openEditModal = () => {
    setEditName(activeProfile.name || '');
    setEditAvatar(activeProfile.avatarUrl || AVATARS[0]);
    setEditGender(activeProfile.gender || 'nam');
    setTempPin(activeProfile.pin || null);
    setNameError('');
    setShowAvatarPicker(false);
    setShowEditModal(true);
  };

  const saveProfile = () => {
    if (!editName.trim()) { setNameError('Tên hồ sơ không được để trống'); return; }
    updateProfile(activeProfile.id, {
      name: editName.trim(),
      avatarUrl: editAvatar,
      gender: editGender,
      pin: tempPin,
    });
    setShowEditModal(false);
  };

  // PIN handlers
  const openPinModal = (mode) => {
    setPinMode(mode);
    setPinStep(1);
    setFirstPin('');
    setPinArray(['', '', '', '']);
    setPinError('');
    setShowPinModal(true);
    setTimeout(() => pinRefs[0].current?.focus(), 100);
  };

  const handlePinInput = (val, idx) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...pinArray];
    next[idx] = val;
    setPinArray(next);
    if (val && idx < 3) pinRefs[idx + 1].current?.focus();
    if (next.every(d => d !== '')) handlePinSubmit(next);
  };

  const handlePinKey = (e, idx) => {
    if (e.key === 'Backspace' && !pinArray[idx] && idx > 0) pinRefs[idx - 1].current?.focus();
  };

  const handlePinSubmit = (arr) => {
    const pin = arr.join('');
    if (pin.length !== 4) return;
    if (pinStep === 1) {
      setFirstPin(pin);
      setPinStep(2);
      setPinArray(['', '', '', '']);
      setTimeout(() => pinRefs[0].current?.focus(), 50);
    } else {
      if (pin === firstPin) {
        setTempPin(pin);
        setShowPinModal(false);
      } else {
        setPinError('Mã PIN không khớp. Nhập lại từ đầu.');
        setPinStep(1);
        setFirstPin('');
        setPinArray(['', '', '', '']);
        setTimeout(() => pinRefs[0].current?.focus(), 50);
      }
    }
  };

  return (
    <>
      <Navbar onToggleFilter={() => setIsFilterActive(!isFilterActive)} />
      <FilterModal isActive={isFilterActive} onToggle={() => setIsFilterActive(!isFilterActive)} />

      {/* MOVIE SECTIONS - full width */}
      <main className="movie-sections" style={{ marginTop: 0, paddingTop: '100px' }}>
        <h1 className="profile-page-title" style={{ marginBottom: '20px', marginLeft: '10px' }}>Hồ Sơ Của Tôi</h1>

        {/* PROFILE CARD - ngang dài full width */}
        <div className="profile-header-card" style={{ marginBottom: '40px' }}>
          {/* Bên trái: Avatar + Tên */}
          <div className="user-info-section">
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <img
                src={activeProfile.avatarUrl || AVATARS[0]}
                alt="Avatar"
                className="user-avatar-large"
              />
              <button
                className="btn-edit-avatar"
                title="Chỉnh sửa hồ sơ"
                onClick={openEditModal}
              >
                <svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </button>
            </div>
            <div className="user-details">
              <h2>{activeProfile.name || 'Người dùng'}</h2>
              <div className="info-row">
                <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <span>VIP (Đang hoạt động)</span>
              </div>
            </div>
          </div>

          {/* Bên phải: Thống kê */}
          <div className="user-stats-section">
            <div className="stat-box vip">
              <div className="stat-number">45</div>
              <div className="stat-label">Ngày VIP</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{continueWatching.length}</div>
              <div className="stat-label">Đang Xem</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{savedMovies.length}</div>
              <div className="stat-label">Đã Lưu</div>
            </div>
          </div>
        </div>

        {/* LỊCH SỬ XEM - full width */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px', position: 'relative', zIndex: 30 }}>
            <h3 className="row-title" style={{ margin: 0 }}>Lịch sử xem gần đây</h3>
            <button
              onClick={() => setShowAllHistory(v => !v)}
              style={{ background: 'transparent', border: '1px solid var(--accent-color)', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', color: 'var(--accent-color)', fontWeight: '600', padding: '5px 14px', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-color)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent-color)'; }}
            >
              {showAllHistory ? 'Thu gọn' : 'Xem tất cả'}
            </button>
          </div>

          {showAllHistory ? (
            <div className="mylist-grid">
              {continueWatching.map((movie, i) => (
                <div key={i} style={{ width: '100%' }}>
                  <MovieCardHorizontal movie={movie} />
                </div>
              ))}
            </div>
          ) : (
            <MovieRow title="">
              {continueWatching.map((m, i) => (
                <MovieCardHorizontal key={i} movie={m} />
              ))}
            </MovieRow>
          )}
        </div>

        {/* ROW 2: DANH SÁCH CỦA TÔI - full width */}
        <div style={{ marginBottom: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px', position: 'relative', zIndex: 30 }}>
            <h3 className="row-title" style={{ margin: 0 }}>Danh sách của tôi</h3>
            <button
              onClick={() => setShowAllSaved(v => !v)}
              style={{ background: 'transparent', border: '1px solid var(--accent-color)', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', color: 'var(--accent-color)', fontWeight: '600', padding: '5px 14px', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-color)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent-color)'; }}
            >
              {showAllSaved ? 'Thu gọn' : 'Xem tất cả'}
            </button>
          </div>

          {savedMovies.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', padding: '20px 0' }}>Bạn chưa lưu phim nào.</p>
          ) : showAllSaved ? (
            <div className="mylist-grid">
              {savedMovies.map((movie, i) => (
                <div key={movie.id || i} style={{ width: '100%' }}>
                  <MovieCardVertical movie={movie} />
                </div>
              ))}
            </div>
          ) : (
            <MovieRow title="">
              {savedMovies.map((movie, i) => (
                <MovieCardVertical key={movie.id || i} movie={movie} />
              ))}
            </MovieRow>
          )}
        </div>

      </main>

      <Footer />

      {/* EDIT PROFILE MODAL */}
      {showEditModal && (
        <div className="modal-overlay animate-fade-in" onClick={e => { if (e.target === e.currentTarget) setShowEditModal(false); }}>
          <div className="modal-box modal-md">
            <div className="modal-header">
              <h2>Chỉnh sửa hồ sơ</h2>
              <button onClick={() => setShowEditModal(false)} className="btn-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/2961/2961937.png" alt="Đóng" />
              </button>
            </div>
            <div className="modal-body">
              {/* Avatar + Name */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ position: 'relative', width: '84px', height: '84px', flexShrink: 0 }}>
                  <img src={editAvatar} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '2px solid #e2e8f0' }} alt="Avatar" />
                  <div className="avatar-edit-btn" onClick={() => setShowAvatarPicker(!showAvatarPicker)} title="Đổi ảnh đại diện">
                    <img src={ICONS.edit} alt="Edit" />
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <label className="form-label" style={{ marginBottom: '8px' }}>Tên hồ sơ</label>
                  <input
                    type="text"
                    className="form-input"
                    style={{ borderColor: nameError ? 'var(--accent-red)' : undefined }}
                    placeholder="Nhập tên của bạn"
                    value={editName}
                    onChange={e => { setEditName(e.target.value); setNameError(''); }}
                  />
                  {nameError && <div style={{ color: 'var(--accent-red)', fontSize: '13px', marginTop: '6px', fontWeight: 500 }}>{nameError}</div>}
                </div>
              </div>

              {/* Avatar Picker */}
              {showAvatarPicker && (
                <div className="form-group animate-fade-in">
                  <label className="form-label">Chọn ảnh đại diện</label>
                  <div className="avatar-picker-grid">
                    {AVATARS.map(url => (
                      <button key={url} className={`avatar-option ${editAvatar === url ? 'active' : ''}`} onClick={() => { setEditAvatar(url); setShowAvatarPicker(false); }}>
                        <img src={url} alt="Avatar" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Gender */}
              <div className="form-group">
                <label className="form-label">Giới tính</label>
                <div className="radio-group">
                  <label className="radio-item"><input type="radio" name="pg" value="nam" checked={editGender === 'nam'} onChange={() => setEditGender('nam')} /> Nam</label>
                  <label className="radio-item"><input type="radio" name="pg" value="nu" checked={editGender === 'nu'} onChange={() => setEditGender('nu')} /> Nữ</label>
                  <label className="radio-item"><input type="radio" name="pg" value="khac" checked={editGender === 'khac'} onChange={() => setEditGender('khac')} /> Khác</label>
                </div>
              </div>

              {/* PIN Settings — NO delete option */}
              <div className="setting-list">
                <div className="setting-row-item">
                  <div className="setting-info">
                    <h4>{tempPin ? <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>Mã PIN <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2"><path d="M20 6L9 17l-5-5"></path></svg></span> : 'Mã PIN'}</h4>
                    <p>Bảo vệ hồ sơ bằng mã PIN 4 số</p>
                  </div>
                  <button
                    type="button"
                    className="action-text-btn"
                    onClick={() => {
                      if (tempPin) { setTempPin(null); }
                      else { openPinModal('set'); }
                    }}
                  >
                    {tempPin ? 'Xoá mã PIN' : 'Đặt mã PIN'}
                  </button>
                </div>
                <div className="setting-row-item">
                  <div className="setting-info"><h4 className={!tempPin ? 'disabled-text' : ''}>Đổi mã PIN</h4></div>
                  <button type="button" className={`action-text-btn ${!tempPin ? 'disabled' : ''}`} onClick={() => tempPin && openPinModal('set')}>Thay đổi</button>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={saveProfile} className="btn btn-primary" style={{ width: '100%', fontSize: '18px' }}>
                Lưu thiết lập hồ sơ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PIN MODAL */}
      {showPinModal && (
        <div className="modal-overlay animate-fade-in" onClick={e => { if (e.target === e.currentTarget) setShowPinModal(false); }}>
          <div className="modal-box modal-sm">
            <div className="modal-header">
              <h2>{pinStep === 1 ? 'Nhập mã PIN mới' : 'Xác nhận mã PIN'}</h2>
              <button onClick={() => setShowPinModal(false)} className="btn-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/2961/2961937.png" alt="Đóng" />
              </button>
            </div>
            <div className="modal-body" style={{ textAlign: 'center' }}>
              <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
                {pinStep === 1 ? 'Đặt mã PIN 4 số để bảo vệ hồ sơ của bạn' : 'Nhập lại mã PIN để xác nhận'}
              </p>
              <div className="pin-inputs">
                {pinArray.map((digit, i) => (
                  <input
                    key={i}
                    ref={pinRefs[i]}
                    type="password"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    className="pin-box"
                    onChange={e => handlePinInput(e.target.value, i)}
                    onKeyDown={e => handlePinKey(e, i)}
                  />
                ))}
              </div>
              {pinError && <div style={{ color: 'var(--accent-red)', fontSize: '13px', marginTop: '12px', fontWeight: 500 }}>{pinError}</div>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
