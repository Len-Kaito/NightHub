import React, { useState, useRef } from 'react';
import CustomSelect from '../ui/CustomSelect';
import ConfirmModal from '../ui/ConfirmModal';
import CustomDatePicker from '../ui/CustomDatePicker';
import { useToast } from '../../context/ToastContext';
import { useContent } from '../../context/ContentContext';

const PrivacyTab = ({ isActive }) => {
    const deleteOptions = [
        { label: 'Xóa toàn bộ lịch sử', value: 'all' },
        { label: 'Xóa hôm nay', value: 'today' },
        { label: 'Xóa 7 ngày qua', value: '7days' },
        { label: 'Xóa 30 ngày qua', value: '30days' },
        { label: 'Chọn khoảng ngày tùy chỉnh...', value: 'range' }
    ];
    const [deleteOption, setDeleteOption] = useState('all');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [modalState, setModalState] = useState({ isOpen: false, type: '', title: '', desc: '' });
    const { showToast } = useToast();
    const { movies } = useContent();

    const openModal = (type, title, desc) => {
        setModalState({ isOpen: true, type, title, desc });
    };
    const closeModal = () => {
        setModalState({ isOpen: false, type: '', title: '', desc: '' });
    };
    const handleConfirm = () => {
        closeModal();
        if (modalState.type === 'delete_history') {
            showToast('Đã xóa lịch sử xem thành công!');
        }
    };

    // --- Destructive Action Preview Logic ---
    const parseDate = (dateStr) => {
        if (dateStr.length !== 10) return null;
        const [d, m, y] = dateStr.split('/');
        const parsed = new Date(`${y}-${m}-${d}`);
        return isNaN(parsed.getTime()) ? null : parsed;
    };

    const dFrom = parseDate(dateFrom);
    const dTo = parseDate(dateTo);

    // previewState cho mode 'range': 0=chưa đủ, 1=lỗi, 2=rỗng, 3=có data
    let rangePreviewState = 0;
    if (deleteOption === 'range' && dFrom && dTo) {
        if (dFrom > dTo) rangePreviewState = 1;
        else if (dFrom > new Date('2026-06-01')) rangePreviewState = 2;
        else rangePreviewState = 3;
    }

    // Có nên show danh sách phim preview không?
    const showPreviewList = ['today', '7days', '30days'].includes(deleteOption) || (deleteOption === 'range' && rangePreviewState === 3);
    const isDeleteDisabled = deleteOption === 'range' && rangePreviewState !== 3;

    const previewLabels = {
        today: 'Sẽ xóa các phim đã xem hôm nay (10% lịch sử):',
        '7days': 'Sẽ xóa các phim đã xem trong 7 ngày qua (50% lịch sử):',
        '30days': 'Sẽ xóa các phim đã xem trong 30 ngày qua (90% lịch sử):',
        range: 'Sẽ xóa các phim sau:',
    };

    const fullHistory = movies.slice(0, 10).map((m, i) => ({
        id: m.id,
        title: m.title,
        thumb: m.backdropUrl || m.posterHorizontal,
        episode: m.episodes ? 'Tập ' + (i + 1) : '',
        progress: Math.floor(Math.random() * 80) + 10
    }));

    let previewMovies = [];
    if (showPreviewList) {
        if (deleteOption === 'today') {
            previewMovies = fullHistory.slice(0, 1);
        } else if (deleteOption === '7days') {
            previewMovies = fullHistory.slice(0, 5);
        } else if (deleteOption === '30days') {
            previewMovies = fullHistory.slice(0, 9);
        } else if (deleteOption === 'range' && rangePreviewState === 3) {
            const daysDiff = (dTo - dFrom) / (1000 * 60 * 60 * 24);
            if (daysDiff > 30) {
                previewMovies = fullHistory; // 100%
            } else {
                const count = Math.max(1, Math.ceil(10 * (Math.max(1, daysDiff) / 30)));
                previewMovies = fullHistory.slice(0, count);
            }
        }
    }

    // Render danh sách phim preview (dùng chung cho mọi option trừ 'all')
    const renderMovieList = () => (
        <div style={{ maxHeight: '250px', overflowY: 'auto', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '10px', marginBottom: '15px' }}>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '10px', padding: '0 5px' }}>{previewLabels[deleteOption]}</p>
            {previewMovies.map(movie => (
                <div key={movie.id} style={{ display: 'flex', gap: '15px', padding: '10px', borderBottom: '1px solid var(--border-color)' }}>
                    <div style={{ flexShrink: 0, width: '120px', aspectRatio: '16/9', borderRadius: '6px', overflow: 'hidden', background: 'var(--always-black)' }}>
                        <img src={movie.thumb} alt={movie.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                        <h5 style={{ fontSize: '14px', color: 'var(--text-main)', marginBottom: '4px' }}>{movie.title}</h5>
                        {movie.episode && <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>{movie.episode}</p>}
                        <div style={{ width: '100%', height: '4px', background: 'var(--bg-input)', borderRadius: '2px', overflow: 'hidden', marginTop: movie.episode ? '0' : '8px' }}>
                            <div style={{ width: `${movie.progress}%`, height: '100%', background: 'var(--accent-red)' }}></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className={`tab-pane ${isActive ? 'active' : ''}`}>
            <div className="tab-header">
                <h2 className="tab-title">Quyền Riêng Tư</h2>
                <p className="tab-desc">Kiểm soát dữ liệu và lịch sử xem của bạn.</p>
            </div>

            <div className="setting-card">
                <h3>TÙY CHỌN HIỂN THỊ</h3>
                <div className="setting-row">
                    <div className="setting-row-info">
                        <h5>Hiển thị lịch sử xem</h5>
                        <p>Cho phép người khác xem danh sách phim bạn đã xem gần đây</p>
                    </div>
                    <label className="toggle-switch"><input type="checkbox" defaultChecked /><span className="slider"></span></label>
                </div>
                <div className="setting-row" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                    <div className="setting-row-info">
                        <h5>Hiển thị hoạt động trên hồ sơ</h5>
                        <p>Hiển thị trạng thái trực tuyến và hoạt động gần đây trên hồ sơ</p>
                    </div>
                    <label className="toggle-switch"><input type="checkbox" defaultChecked /><span className="slider"></span></label>
                </div>
            </div>

            <div className="setting-card">
                <h3>DỮ LIỆU & PHÂN TÍCH</h3>
                <div className="setting-row">
                    <div className="setting-row-info">
                        <h5>Chia sẻ dữ liệu thống kê</h5>
                        <p>Sử dụng các dữ liệu thống kê của người dùng để cải thiện dịch vụ</p>
                    </div>
                    <label className="toggle-switch"><input type="checkbox" /><span className="slider"></span></label>
                </div>
                <div className="setting-row" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                    <div className="setting-row-info">
                        <h5>Cải thiện đề xuất nội dung</h5>
                        <p>Cho phép hệ thống phân tích sở thích để đề xuất phim phù hợp hơn</p>
                    </div>
                    <label className="toggle-switch"><input type="checkbox" defaultChecked /><span className="slider"></span></label>
                </div>
            </div>

            <div className="setting-card danger-box">
                <h3 style={{ color: 'var(--accent-red)' }}>XÓA LỊCH SỬ XEM</h3>

                <div className="form-group" style={{ marginBottom: '15px', marginTop: '15px' }}>
                    <CustomSelect
                        options={deleteOptions}
                        value={deleteOption}
                        onChange={setDeleteOption}
                    />
                </div>

                {/* Date pickers — chỉ hiện cho 'range' */}
                {deleteOption === 'range' && (
                    <div style={{ marginBottom: '15px' }}>
                        <div className="form-row" style={{ marginBottom: rangePreviewState > 0 ? '15px' : '0' }}>
                            <div className="form-group">
                                <label>Từ ngày</label>
                                <CustomDatePicker value={dateFrom} onChange={setDateFrom} placeholder="dd/mm/yyyy" />
                            </div>
                            <div className="form-group">
                                <label>Đến ngày</label>
                                <CustomDatePicker value={dateTo} onChange={setDateTo} placeholder="dd/mm/yyyy" />
                            </div>
                        </div>

                        {rangePreviewState === 1 && (
                            <p style={{ color: 'var(--accent-red)', fontSize: '13px', fontWeight: 500 }}>
                                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: '-2px', marginRight: '5px' }}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                                Ngày kết thúc phải lớn hơn hoặc bằng ngày bắt đầu.
                            </p>
                        )}

                        {rangePreviewState === 2 && (
                            <div style={{ background: 'var(--bg-input, #f8fafc)', padding: '20px', borderRadius: '8px', textAlign: 'center', border: '1px dashed var(--border-color)' }}>
                                <p style={{ color: 'var(--text-muted)', fontSize: '14px', margin: 0 }}>Không có lịch sử xem trong khoảng thời gian này.</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Danh sách phim preview — hiện cho today/7days/30days/range(valid) */}
                {showPreviewList && renderMovieList()}

                <button
                    className="btn-primary"
                    style={{ background: 'var(--accent-red)', color: 'var(--always-white)', opacity: isDeleteDisabled ? 0.4 : 1, cursor: isDeleteDisabled ? 'not-allowed' : 'pointer' }}
                    disabled={isDeleteDisabled}
                    onClick={() => openModal('delete_history', 'Xóa lịch sử xem', 'Bạn có chắc chắn muốn xóa lịch sử xem không? Hành động này không thể hoàn tác.')}
                >
                    Thực Hiện Xóa
                </button>
            </div>

            <ConfirmModal
                isOpen={modalState.isOpen}
                title={modalState.title}
                description={modalState.desc}
                onConfirm={handleConfirm}
                onCancel={closeModal}
                confirmText="Xóa lịch sử"
                cancelText="Quay lại"
                isDanger={modalState.type === 'delete_history'}
            />
        </div>
    );
};

export default PrivacyTab;
