import React from 'react';
import { DEMO_USERS } from '../context/ContentContext';

const DEFAULT_AVATAR = 'https://static2.vieon.vn/vieplay-image/profile_avatar/2023/03/28/9rdo8k24_asset24x.webp';

const UserHoverPopover = ({ authorName, x, y, onMouseEnter, onMouseLeave }) => {
  const user = DEMO_USERS[authorName];
  if (!user) return null;

  // Đảm bảo popover không tràn màn hình bên phải
  const maxLeft = window.innerWidth - 440; // 420px width + padding
  const safeX = Math.min(x, maxLeft);

  return (
    <div 
      className="user-hover-popover" 
      style={{ left: safeX, top: y }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {user.showActivity ? (
        <>
          <div className="pm-header-card" style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="pm-info-section" style={{ gap: '15px' }}>
              <img
                src={user.avatar || DEFAULT_AVATAR}
                alt={user.name}
                className="pm-avatar-large"
                style={{ width: '70px', height: '70px' }}
              />
              <div className="pm-user-details">
                <h2 style={{ fontSize: '18px' }}>{user.name}</h2>
                {user.bio && <p className="pm-bio" style={{ fontSize: '13px', marginBottom: '4px' }}>{user.bio}</p>}
                <div className="pm-info-row" style={{ fontSize: '12px' }}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span>Thành viên</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pm-stats-section" style={{ padding: '15px 20px', display: 'flex', justifyContent: 'center', gap: '20px', background: 'rgba(0,0,0,0.2)' }}>
            <div className="pm-stat-box" style={{ padding: '10px 15px', minWidth: '80px', background: 'transparent', border: 'none' }}>
              <div className="pm-stat-number" style={{ fontSize: '20px' }}>{user.totalComments}</div>
              <div className="pm-stat-label">Bình luận</div>
            </div>
            <div className="pm-stat-box" style={{ padding: '10px 15px', minWidth: '80px', background: 'transparent', border: 'none' }}>
              <div className="pm-stat-number" style={{ fontSize: '20px' }}>{user.favorites?.length || 0}</div>
              <div className="pm-stat-label">Thể loại</div>
            </div>
          </div>
        </>
      ) : (
        <div className="pm-private" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img src={user?.avatar || DEFAULT_AVATAR} alt={authorName} className="pm-avatar-large pm-avatar-private" style={{ width: '60px', height: '60px' }} />
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>{authorName || 'Người dùng'}</h3>
              <div className="pm-lock-icon" style={{ marginBottom: 0, display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '13px' }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                Riêng tư
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserHoverPopover;
