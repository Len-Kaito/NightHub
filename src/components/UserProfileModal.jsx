import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { DEMO_USERS } from '../context/ContentContext';
import { useContent } from '../context/ContentContext';
import MovieCardHorizontal from './MovieCardHorizontal';
import MovieCardVertical from './MovieCardVertical';
import MovieRow from './MovieRow';

const DEFAULT_AVATAR = 'https://static2.vieon.vn/vieplay-image/profile_avatar/2023/03/28/9rdo8k24_asset24x.webp';

const UserProfileModal = ({ isOpen, onClose, authorName }) => {
  const { movies } = useContent();
  const [showAllHistory, setShowAllHistory] = useState(false);
  const [showAllSaved, setShowAllSaved] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const user = DEMO_USERS[authorName];
  
  // Lấy vài phim ngẫu nhiên làm demo
  const demoHistory = movies.slice(0, 6);
  const demoSaved = movies.slice(6, 14);

  return createPortal(
    <div className="profile-modal-overlay" onClick={onClose}>
      <div className="profile-modal-card expanded" onClick={e => e.stopPropagation()}>
        <button className="profile-modal-close" onClick={onClose}>
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="profile-modal-scroll-area">
          {user && user.showActivity ? (
          <>
            {/* PROFILE HEADER */}
            <div className="pm-header-card">
              <div className="pm-info-section">
                <img
                  src={user.avatar || DEFAULT_AVATAR}
                  alt={user.name}
                  className="pm-avatar-large"
                />
                <div className="pm-user-details">
                  <h2>{user.name}</h2>
                  {user.bio && <p className="pm-bio">{user.bio}</p>}
                  <div className="pm-info-row">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>Thành viên</span>
                  </div>
                </div>
              </div>

              <div className="pm-stats-section">
                <div className="pm-stat-box">
                  <div className="pm-stat-number">{user.totalComments}</div>
                  <div className="pm-stat-label">Bình luận</div>
                </div>
                <div className="pm-stat-box">
                  <div className="pm-stat-number">{user.favorites?.length || 0}</div>
                  <div className="pm-stat-label">Thể loại</div>
                </div>
              </div>
            </div>

            {/* THÔNG TIN CHI TIẾT */}
            <div className="pm-detail-section" style={{ paddingBottom: '15px' }}>
              <div className="pm-detail-row">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>Tham gia từ {user.joined}</span>
              </div>
              {user.favorites && user.favorites.length > 0 && (
                <div className="pm-detail-row">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <div className="pm-tags">
                    {user.favorites.map(f => (
                      <span key={f} className="pm-tag">{f}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* DANH SÁCH PHIM DEMO */}
            <div className="pm-movies-section" style={{ padding: '0 30px 30px' }}>
              
              {/* LỊCH SỬ XEM */}
              <div style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px', position: 'relative', zIndex: 30 }}>
                  <h3 className="row-title" style={{ margin: 0, fontSize: '18px' }}>Lịch sử xem gần đây</h3>
                  <button
                    onClick={() => setShowAllHistory(v => !v)}
                    style={{ background: 'transparent', border: '1px solid var(--accent-color)', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', color: 'var(--accent-color)', fontWeight: '600', padding: '4px 12px', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-color)'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent-color)'; }}
                  >
                    {showAllHistory ? 'Thu gọn' : 'Xem tất cả'}
                  </button>
                </div>
                
                {showAllHistory ? (
                  <div className="pm-movies-grid">
                    {demoHistory.map(m => (
                      <div key={m.id}>
                        <MovieCardHorizontal movie={m} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <MovieRow title="">
                    {demoHistory.map(m => (
                      <MovieCardHorizontal key={m.id} movie={m} />
                    ))}
                  </MovieRow>
                )}
              </div>

              {/* DANH SÁCH ĐÃ LƯU */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px', position: 'relative', zIndex: 30 }}>
                  <h3 className="row-title" style={{ margin: 0, fontSize: '18px' }}>Danh sách của {user.name}</h3>
                  <button
                    onClick={() => setShowAllSaved(v => !v)}
                    style={{ background: 'transparent', border: '1px solid var(--accent-color)', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', color: 'var(--accent-color)', fontWeight: '600', padding: '4px 12px', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-color)'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent-color)'; }}
                  >
                    {showAllSaved ? 'Thu gọn' : 'Xem tất cả'}
                  </button>
                </div>
                
                {showAllSaved ? (
                  <div className="pm-movies-grid vertical-cards">
                    {demoSaved.map(m => (
                      <div key={m.id}>
                        <MovieCardVertical movie={m} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <MovieRow title="">
                    {demoSaved.map(m => (
                      <MovieCardVertical key={m.id} movie={m} />
                    ))}
                  </MovieRow>
                )}
              </div>

            </div>
          </>
        ) : (
          /* PRIVATE PROFILE */
          <div className="pm-private" style={{ padding: '80px 30px' }}>
            <img src={user?.avatar || DEFAULT_AVATAR} alt={authorName} className="pm-avatar-large pm-avatar-private" />
            <div className="pm-lock-icon">
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3>{authorName || 'Người dùng'}</h3>
            <p className="pm-private-msg">
              {authorName || 'Người dùng này'} đang không muốn chia sẻ hoạt động của bản thân.
            </p>
          </div>
        )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default UserProfileModal;
