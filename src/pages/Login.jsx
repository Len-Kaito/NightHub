import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useUser();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    // Navigate to home after successful login
    navigate('/');
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
        <h2 className="card-title">Đăng Nhập</h2>
        <form className="auth-form" onSubmit={handleLogin}>
          <div className="input-group">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </span>
            <input type="text" placeholder="Email hoặc số điện thoại" required />
          </div>
          
          <div className="input-group">
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </span>
            <input type="password" placeholder="Mật khẩu" required />
          </div>
          
          <div className="auth-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Ghi nhớ đăng nhập</span>
            </label>
            <Link to="/forgot-password" className="forgot-pwd-link">Quên mật khẩu?</Link>
          </div>
          
          <button type="submit" className="auth-btn-submit">Đăng Nhập</button>
          
          <div className="divider"><span>Hoặc đăng nhập bằng</span></div>
          
          <div className="social-login">
            <button type="button" className="social-btn fb" onClick={handleLogin}>
              <img src="/images/logo_fb.webp" alt="Facebook Logo" /> Đăng nhập bằng Facebook
            </button>
            <button type="button" className="social-btn gg" onClick={handleLogin}>
              <img src="/images/logo_gg.png" alt="Google Logo" /> Đăng nhập bằng Google
            </button>
            <button type="button" className="social-btn ap" onClick={handleLogin}>
              <img src="/images/logo_apple_white.png" alt="Apple Logo" /> Đăng nhập bằng Apple
            </button>
          </div>
          
          <div className="auth-nav-text">
            Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
