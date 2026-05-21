import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useTheme } from '../../context/ThemeContext';
import { useChat } from '../../context/ChatContext';
import { useUser } from '../../context/UserContext';
import { useToast } from '../../context/ToastContext';
import CustomSelect from '../ui/CustomSelect';

const SUBTITLE_SIZES = [
    { label: 'Nhỏ', value: 'small', fontSize: '14px' },
    { label: 'Vừa', value: 'medium', fontSize: '20px' },
    { label: 'Lớn', value: 'large', fontSize: '28px' },
];

const PersonalizationTab = ({ isActive }) => {
    const { theme, setTheme } = useTheme();
    const { isBubbleEnabled, toggleBubbleEnabled } = useChat();
    const { showSkipIntro, setShowSkipIntro, autoPlayNext, setAutoPlayNext, subtitleSize, setSubtitleSize } = useUser();
    const { showToast } = useToast();

    const handleThemeChange = (value) => {
        if (value === 'dark') {
            setTheme('dark');
        } else if (value === 'light' || value === 'auto') {
            setTheme('light');
        }
    };

    const themeOptions = [
        { label: 'Tự động', value: 'auto' },
        { label: 'Chế độ Sáng', value: 'light' },
        { label: 'Chế độ Tối', value: 'dark' }
    ];
    const currentThemeValue = theme === 'dark' ? 'dark' : 'light';

    const langOptions = [
        { label: 'Tiếng Việt', value: 'vi' },
        { label: 'Tiếng Anh', value: 'en' }
    ];
    const [langValue, setLangValue] = useState('vi');

    const videoQualityOptions = [
        { label: 'Tự động (Khuyên dùng)', value: 'auto' },
        { label: 'Cao (1080p-2K)', value: 'high' },
        { label: 'Tiết kiệm dữ liệu (380p-720p)', value: 'low' }
    ];
    const [videoQuality, setVideoQuality] = useState('auto');

    const audioOptions = [
        { label: 'Tiếng Việt', value: 'vi' },
        { label: 'Tiếng Anh', value: 'en' }
    ];
    const [audioValue, setAudioValue] = useState('vi');

    const subLangOptions = [
        { label: 'Tiếng Việt', value: 'vi' },
        { label: 'Tiếng Anh', value: 'en' },
        { label: 'Tắt phụ đề', value: 'off' }
    ];
    const [subLangValue, setSubLangValue] = useState('vi');

    // Subtitle customization modal
    const [isSubModalOpen, setIsSubModalOpen] = useState(false);
    const [tempSubSize, setTempSubSize] = useState('medium');

    const openSubModal = () => {
        setTempSubSize(subtitleSize);
        setIsSubModalOpen(true);
    };
    const closeSubModal = () => setIsSubModalOpen(false);
    const saveSubModal = () => {
        setSubtitleSize(tempSubSize);
        setIsSubModalOpen(false);
        showToast('Đã lưu thay đổi giao diện phụ đề!');
    };

    const currentSizeObj = SUBTITLE_SIZES.find(s => s.value === tempSubSize) || SUBTITLE_SIZES[1];
    const previewText = subLangValue === 'en' ? 'This is a subtitle preview' : 'Đây là bản xem trước của phụ đề';

    return (
        <div className={`tab-pane ${isActive ? 'active' : ''}`}>
            <div className="tab-header">
                <h2 className="tab-title">Cá Nhân Hóa</h2>
                <p className="tab-desc">Tùy chỉnh giao diện, video, âm thanh và thông báo.</p>
            </div>

            {/* ===== Card 1: Giao Diện ===== */}
            <div className="setting-card" style={{ zIndex: 10, position: 'relative' }}>
                <h3>GIAO DIỆN & HIỂN THỊ</h3>
                
                <div className="setting-row">
                    <div className="setting-row-info">
                        <h5>Chế độ hiển thị</h5>
                        <p>Chuyển đổi giữa giao diện sáng, tối hoặc theo hệ thống</p>
                    </div>
                    <CustomSelect 
                        options={themeOptions}
                        value={currentThemeValue}
                        onChange={handleThemeChange}
                        width="180px"
                    />
                </div>

                <div className="setting-row">
                    <div className="setting-row-info">
                        <h5>Ngôn ngữ ứng dụng</h5>
                        <p>Thay đổi ngôn ngữ hiển thị của toàn bộ ứng dụng</p>
                    </div>
                    <CustomSelect 
                        options={langOptions}
                        value={langValue}
                        onChange={setLangValue}
                        width="180px"
                    />
                </div>
                
                <div className="setting-row" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                    <div className="setting-row-info">
                        <h5>Trợ lý AI Nighthub</h5>
                        <p>Bật bong bóng chat của trợ lý</p>
                    </div>
                    <label className="toggle-switch">
                        <input 
                            type="checkbox" 
                            checked={isBubbleEnabled} 
                            onChange={(e) => toggleBubbleEnabled(e.target.checked)} 
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>

            {/* ===== Card 2: Chất Lượng Video ===== */}
            <div className="setting-card" style={{ zIndex: 9, position: 'relative' }}>
                <h3>CHẤT LƯỢNG VIDEO</h3>
                <div className="setting-row">
                    <div className="setting-row-info">
                        <h5>Chất lượng video mặc định</h5>
                        <p>Chọn độ phân giải video mặc định khi xem</p>
                    </div>
                    <CustomSelect 
                        options={videoQualityOptions}
                        value={videoQuality}
                        onChange={setVideoQuality}
                        width="280px"
                    />
                </div>
                <div className="setting-row">
                    <div className="setting-row-info">
                        <h5>Tự động phát tập tiếp theo</h5>
                        <p>Hiển thị nút để có thể ấn chuyển sang tập tiếp theo</p>
                    </div>
                    <label className="toggle-switch">
                        <input 
                            type="checkbox" 
                            checked={autoPlayNext} 
                            onChange={(e) => setAutoPlayNext(e.target.checked)} 
                        />
                        <span className="slider"></span>
                    </label>
                </div>
                <div className="setting-row" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                    <div className="setting-row-info">
                        <h5>Bỏ qua đoạn giới thiệu</h5>
                        <p>Hiển thị nút để có thể ấn bỏ qua intro khi phát tập phim</p>
                    </div>
                    <label className="toggle-switch">
                        <input 
                            type="checkbox" 
                            checked={showSkipIntro} 
                            onChange={(e) => setShowSkipIntro(e.target.checked)} 
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>

            {/* ===== Card 3: Âm Thanh & Phụ Đề (Layout dọc) ===== */}
            <div className="setting-card" style={{ zIndex: 8, position: 'relative' }}>
                <h3>ÂM THANH & PHỤ ĐỀ</h3>
                <div className="setting-row">
                    <div className="setting-row-info">
                        <h5>Tùy chỉnh âm thanh mặc định</h5>
                        <p>Chọn ngôn ngữ âm thanh mặc định khi phát phim</p>
                    </div>
                    <CustomSelect 
                        options={audioOptions}
                        value={audioValue}
                        onChange={setAudioValue}
                        width="180px"
                    />
                </div>
                <div className="setting-row">
                    <div className="setting-row-info">
                        <h5>Ngôn ngữ phụ đề mặc định</h5>
                        <p>Chọn ngôn ngữ phụ đề hiển thị mặc định</p>
                    </div>
                    <CustomSelect 
                        options={subLangOptions}
                        value={subLangValue}
                        onChange={setSubLangValue}
                        width="180px"
                    />
                </div>
                <div className="setting-row" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                    <div className="setting-row-info">
                        <h5>Giao diện phụ đề</h5>
                        <p>Điều chỉnh cỡ chữ phụ đề trên trình phát video</p>
                    </div>
                    <button className="btn-secondary" style={{ padding: '8px 16px', fontSize: '13px' }} onClick={openSubModal}>
                        Tùy chỉnh giao diện
                    </button>
                </div>
            </div>

            {/* ===== Card 4: Thông Báo ===== */}
            <div className="setting-card" style={{ zIndex: 7, position: 'relative' }}>
                <h3>THÔNG BÁO</h3>
                <div className="setting-row">
                    <div className="setting-row-info">
                        <h5>Thông báo phim mới</h5>
                        <p>Nhận email khi có phim mới trên hệ thống</p>
                    </div>
                    <label className="toggle-switch"><input type="checkbox" defaultChecked /><span className="slider"></span></label>
                </div>
                <div className="setting-row">
                    <div className="setting-row-info">
                        <h5>Thông báo tập mới</h5>
                        <p>Nhận email khi có tập phim mới được phát hành</p>
                    </div>
                    <label className="toggle-switch"><input type="checkbox" defaultChecked /><span className="slider"></span></label>
                </div>
                <div className="setting-row" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                    <div className="setting-row-info">
                        <h5>Khuyến mãi</h5>
                        <p>Nhận thông báo về các chương trình ưu đãi và giảm giá</p>
                    </div>
                    <label className="toggle-switch"><input type="checkbox" /><span className="slider"></span></label>
                </div>
            </div>

            {/* ===== Subtitle Customization Modal ===== */}
            {isSubModalOpen && ReactDOM.createPortal(
                <div className="modal-overlay" onClick={closeSubModal}>
                    <div className="subtitle-modal glass-box" onClick={(e) => e.stopPropagation()}>
                        <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '20px' }}>Tùy chỉnh giao diện phụ đề</h3>
                        
                        {/* Preview Area */}
                        <div className="subtitle-preview-area">
                            <div className="subtitle-preview-overlay">
                                <p className="subtitle-preview-text" style={{ fontSize: currentSizeObj.fontSize }}>
                                    {previewText}
                                </p>
                            </div>
                        </div>

                        {/* Control Area */}
                        <div style={{ marginTop: '20px' }}>
                            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>Kích thước phụ đề</p>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                {SUBTITLE_SIZES.map(size => (
                                    <button 
                                        key={size.value}
                                        className={`btn-subtitle-size ${tempSubSize === size.value ? 'active' : ''}`}
                                        onClick={() => setTempSubSize(size.value)}
                                    >
                                        {size.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '24px' }}>
                            <button className="btn-cancel" onClick={closeSubModal}>Hủy</button>
                            <button className="btn-primary" onClick={saveSubModal}>Lưu thay đổi</button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default PersonalizationTab;
