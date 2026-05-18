import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="nighthub logo" />
        </div>
        <div className="footer-links">
          <div className="link-column">
            <h4>Về chúng tôi</h4>
            <Link to="#">Giới thiệu Nighthub</Link>
            <Link to="#">Cơ hội nghề nghiệp</Link>
            <Link to="#">Thông báo báo chí</Link>
          </div>
          <div className="link-column">
            <h4>Hỗ trợ khách hàng</h4>
            <Link to="#">Trung tâm trợ giúp</Link>
            <Link to="#">Câu hỏi thường gặp</Link>
            <Link to="#">Liên hệ với chúng tôi</Link>
          </div>
          <div className="link-column">
            <h4>Điều khoản & Chính sách</h4>
            <Link to="#">Điều khoản sử dụng</Link>
            <Link to="#">Quyền riêng tư</Link>
            <Link to="#">Bảo mật & Cookie</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Nighthub. Nền tảng xem phim trực tuyến hàng đầu.</p>
      </div>
    </footer>
  );
};

export default Footer;
