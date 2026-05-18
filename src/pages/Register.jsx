import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();
  const { login } = useUser();

  const handleRegister = (e) => {
    e.preventDefault();
    login();
    // Navigate to setup or login
    navigate('/choose-genre');
  };

  return (
    <div className="auth-page-container dark-theme" style={{ colorScheme: 'dark' }}>
      <Link to="/" className="back-link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg> Trang chủ
      </Link>

      <div className="logo-section">
        <div className="logo-wrapper">
          <Link to="/" className="logo">
            <img src="/images/only_logo.png" alt="Nighthub Logo" />
          </Link>
        </div>
      </div>

      <div className="auth-card">
        <h2 className="card-title">Đăng Ký</h2>
        <form className="auth-form" onSubmit={handleRegister}>
          <div className="input-group">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </span>
            <input type="email" placeholder="Email" required />
          </div>

          <div className="input-group">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </span>
            <input type="password" placeholder="Mật khẩu" required />
          </div>

          <div className="input-group">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </span>
            <input type="password" placeholder="Xác nhận mật khẩu" required />
          </div>

          <div className="input-group">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </span>
            <input type="tel" placeholder="Số điện thoại" required />
          </div>

          <label className="checkbox-label register-terms">
            <input type="checkbox" required />
            <span>Tôi đã đọc và đồng ý với <Link to="#" className="terms-link">Điều khoản sử dụng và Chính sách bảo mật</Link>.</span>
          </label>

          <button type="submit" className="auth-btn-submit mt-10">Đăng Ký</button>

          <div className="auth-nav-text">
            Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
