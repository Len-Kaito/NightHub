import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const MovieCard = ({ title, img, remainingTime, badge, progress }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useUser();

  const handleAction = (e, path) => {
    e.preventDefault();
    if (!isLoggedIn) return navigate('/login');
    navigate(path);
  };

  return (
    <Link to={isLoggedIn ? "/watch/m_1" : "/login"} className="movie-card has-info">
      {badge && <div className="badge series">{badge}</div>}
      <img src={img || "/images/poster_doc_2.webp"} alt={title} />
      {progress && (
        <div className="cw-progress">
          <div className="cw-fill" style={{ width: `${progress}%` }}></div>
        </div>
      )}
      <div className="card-info">
        <div className="card-actions">
          <button className="action-btn play" title="Xem tiếp" onClick={(e) => handleAction(e, "/watch/m_1")}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
          <button className="action-btn info-btn" title="Chi tiết" onClick={(e) => handleAction(e, "/movie/m_1")} style={{ marginLeft: 'auto' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </button>
        </div>
        <h4 className="card-title">{title}</h4>
        {remainingTime && <p className="card-desc">Còn lại {remainingTime}</p>}
      </div>
    </Link>
  );
};

export default MovieCard;
