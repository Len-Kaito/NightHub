import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useContent } from '../context/ContentContext';
import ConfirmModal from './ui/ConfirmModal';

const Navbar = ({ onToggleFilter }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isNotiActive, setIsNotiActive] = useState(false);
  const [isUserMenuActive, setIsUserMenuActive] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      img: '/DanhMuc/Trang chủ/Tiếp tục xem/One Piece _ ngang.jpg',
      title: 'Tập mới đã có sẵn!',
      desc: 'One Piece (Tập 1089) vừa được cập nhật. Xem ngay nào!',
      time: '10 phút trước',
      isRead: false
    },
    {
      id: 2,
      img: '/public/DanhMuc/Phim điện ảnh/Hot Hit/Interstellar _ ngang.jpg',
      title: 'Gợi ý cho bạn',
      desc: "Dựa trên sở thích của bạn, chúng tôi đề xuất phim 'Interstellar'.",
      time: '2 giờ trước',
      isRead: false
    },
    {
      id: 3,
      img: '/public/images/broken-shield-icon-removebg-preview (1).png',
      title: 'Cảnh báo bảo mật',
      desc: 'Tài khoản của bạn vừa được đăng nhập từ một thiết bị mới.',
      time: '1 ngày trước',
      isRead: false
    },
    {
      id: 4,
      img: '/public/images/logo_VIP.png',
      title: 'Khuyến mãi đặc biệt',
      desc: 'Nâng cấp tài khoản Premium để trải nghiệm không quảng cáo với giá ưu đãi.',
      time: '3 ngày trước',
      isRead: true
    }
  ]);
  
  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, isRead: true } : n));
  };
  const [searchQuery, setSearchQuery] = useState('');
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const { currentAvatar, isLoggedIn, logout } = useUser();
  const { movies } = useContent();
  const navigate = useNavigate();

  const handleLogoutConfirm = () => {
    setIsLogoutModalOpen(false);
    logout();
    setIsUserMenuActive(false);
    navigate('/login');
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      setIsSearchActive(false);
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const searchRef = useRef(null);
  const notiRef = useRef(null);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchActive(false);
      }
      if (notiRef.current && !notiRef.current.contains(event.target)) {
        setIsNotiActive(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchIconClick = () => {
    if (isSearchActive && searchQuery.trim()) {
      setIsSearchActive(false);
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      setIsSearchActive(!isSearchActive);
    }
  };

  const searchResults = searchQuery.trim() 
    ? movies.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
    : [];

  return (
    <>
    <header>
      <div className="nav-left">
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="Nighthub logo" />
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Trang chủ</NavLink>
          <NavLink to="/movies" className={({ isActive }) => isActive ? 'active' : ''}>Phim điện ảnh</NavLink>
          <NavLink to="/tv-shows" className={({ isActive }) => isActive ? 'active' : ''}>Phim truyền hình</NavLink>
          <NavLink to="/anime" className={({ isActive }) => isActive ? 'active' : ''}>Phim hoạt hình</NavLink>
          <NavLink to="/documentaries" className={({ isActive }) => isActive ? 'active' : ''}>Phim tài liệu</NavLink>
          {isLoggedIn && <NavLink to="/my-list" className={({ isActive }) => isActive ? 'active' : ''}>Danh sách của tôi</NavLink>}
        </nav>
      </div>

      <div className="nav-right">
        {/* Tìm Kiếm */}
        <div className="search-wrapper" id="searchWrapper" ref={searchRef}>
          <div className={`search-box ${isSearchActive ? 'active' : ''}`} id="searchBox">
            <button 
              className="search-trigger" 
              onClick={handleSearchIconClick} 
              title="Tìm kiếm"
            >
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <input 
              type="text" 
              className="search-input" 
              id="searchInput" 
              placeholder="Tìm kiếm phim..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchSubmit}
            />
            <button className="filter-toggle-btn" onClick={onToggleFilter} title="Bộ lọc nâng cao">
              <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="17" cy="8" r="3"></circle>
                <line x1="3" y1="8" x2="14" y2="8"></line>
                <circle cx="7" cy="16" r="3"></circle>
                <line x1="10" y1="16" x2="21" y2="16"></line>
              </svg>
            </button>
            
            {/* Live Search Dropdown */}
            {isSearchActive && searchQuery.trim().length > 0 && (
              <div className="search-dropdown">
                {searchResults.length > 0 ? (
                  searchResults.map(m => (
                    <div 
                      key={m.id} 
                      className="search-dropdown-item"
                      onClick={() => {
                        setIsSearchActive(false);
                        setSearchQuery('');
                        isLoggedIn ? navigate(`/movie/${m.id}`) : navigate('/login');
                      }}
                    >
                      <img 
                        src={m.posterHorizontal || m.posterVertical || m.backdropUrl || '/images/poster_1.jpeg'} 
                        alt={m.title} 
                        style={{ width: '50px', height: '35px', objectFit: 'cover', borderRadius: '4px' }}
                      />
                      <div style={{ flex: 1, overflow: 'hidden' }}>
                        <div className="sd-title">{m.title}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{m.year || ''} {m.genres ? `· ${m.genres[0]}` : ''}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={{ padding: '15px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px' }}>
                    Không tìm thấy "{searchQuery}"
                  </div>
                )}
                <div 
                  className="search-dropdown-footer"
                  onClick={() => {
                    setIsSearchActive(false);
                    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                  }}
                >
                  Xem tất cả kết quả
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Thông báo - chỉ hiện khi đã đăng nhập */}
        {isLoggedIn && (
        <div className="notification-wrapper" ref={notiRef}>
          <div className="noti-btn-container" onClick={() => { setIsNotiActive(!isNotiActive); setIsUserMenuActive(false); }}>
            <svg className="bell-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            {unreadCount > 0 && <div className="noti-badge">{unreadCount > 9 ? '9+' : unreadCount}</div>}
          </div>

          <div className={`notification-dropdown ${isNotiActive ? 'active' : ''}`} id="notiDropdown">
            <div className="noti-header">Thông báo<span style={{cursor: 'pointer'}} onClick={markAllAsRead}>Đánh dấu đã đọc</span></div>
            <div className="noti-list">
              {notifications.map(noti => (
                <div 
                  key={noti.id} 
                  className={`noti-item ${noti.isRead ? '' : 'unread'}`}
                  onClick={() => markAsRead(noti.id)}
                >
                  <img src={noti.img} alt="Phim" className="noti-img" />
                  <div className="noti-content">
                    <div className="noti-title">{noti.title}</div>
                    <div className="noti-desc">{noti.desc}</div>
                    <div className="noti-time">{noti.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        )}

        {/* User Menu / Login Button */}
        {!isLoggedIn ? (
          <Link to="/login" className="btn-login-guest">Đăng Nhập</Link>
        ) : (
          <div className={`user-menu-wrapper ${isUserMenuActive ? 'active' : ''}`} ref={userMenuRef}>
            <div 
              className="avatar" 
              title="Tài khoản" 
              onClick={() => { setIsUserMenuActive(!isUserMenuActive); setIsNotiActive(false); }}
              style={{ backgroundImage: `url('${currentAvatar}')` }}
            ></div>
            <div className={`user-dropdown ${isUserMenuActive ? 'active' : ''}`} id="userDropdown">
              <Link to="/profile" className="user-menu-item">
                <svg viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Trang Cá Nhân</span>
              </Link>
              <Link to="/switch-profile" className="user-menu-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>Chuyển Hồ Sơ</span>
              </Link>
              <Link to="/settings" className="user-menu-item">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                <span>Cài Đặt</span>
              </Link>
              <div className="user-menu-divider"></div>
              <a href="#" className="user-menu-item logout-btn" onClick={(e) => { e.preventDefault(); setIsUserMenuActive(false); setIsLogoutModalOpen(true); }}>
                <svg viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                <span>Đăng Xuất</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
      <ConfirmModal
        isOpen={isLogoutModalOpen}
        title="Đăng xuất"
        description="Bạn có chắc chắn muốn đăng xuất khỏi Nighthub không?"
        onConfirm={handleLogoutConfirm}
        onCancel={() => setIsLogoutModalOpen(false)}
        confirmText="Đăng xuất"
        cancelText="Quay lại"
        isDanger={true}
      />
    </>
  );
};

export default Navbar;
