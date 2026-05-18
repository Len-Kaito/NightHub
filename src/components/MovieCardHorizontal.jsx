import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import { useUser } from '../context/UserContext';

const seriesList = ['GameOfThrones', 'One Piece', 'OnePiece', 'Phineas', 'Stranger Thing', 'StrangerThing', 'The Boys', 'TheBoys', 'The Walking Dead', 'TheWalkingDead', 'True Beauty', 'TrueBeauty', 'Game of Thrones'];

const MovieCardHorizontal = ({ movie }) => {
  const navigate = useNavigate();
  const { addToMyList, removeFromMyList, isInMyList } = useContent();
  const { isLoggedIn } = useUser();
  const isSaved = isInMyList(movie.id);

  const handlePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isLoggedIn) return navigate('/login');
    navigate(`/watch/${movie.id}`);
  };

  const handleInfo = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isLoggedIn) return navigate('/login');
    navigate(`/movie/${movie.id}`);
  };

  const handleToggleList = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isLoggedIn) return navigate('/login');
    if (isSaved) removeFromMyList(movie.id);
    else addToMyList(movie.id);
  };

  return (
    <Link to={isLoggedIn ? `/watch/${movie.id}` : '/login'} className="movie-card movie-card-horizontal has-info">
      <div className="image-wrapper">
        <img src={movie.posterHorizontal || movie.posterVertical || '/images/poster_doc_2.webp'} alt={movie.title} onError={e => { e.target.src = '/images/poster_doc_2.webp'; }} />
      </div>

      <div className="card-info">
        <div className="card-actions">
          {/* Thứ tự: Play - Lưu phim - Chi tiết (phải) */}
          <button className="action-btn play" title="Xem tiếp" onClick={handlePlay}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </button>
          <button className={`action-btn bookmark-btn ${isSaved ? 'bookmarked' : ''}`} title={isSaved ? "Bỏ lưu" : "Lưu phim"} onClick={handleToggleList}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          </button>
          <button className="action-btn info-btn" title="Chi tiết" onClick={handleInfo} style={{ marginLeft: 'auto' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          </button>
        </div>
        <h4 className="card-title">{movie.title}</h4>
        
        {movie?.title && seriesList.some(s => movie.title.toLowerCase().replace(/\s+/g, '').includes(s.toLowerCase().replace(/\s+/g, ''))) && (
          <p className="card-episode">Tập 1</p>
        )}

        {(movie.progress !== undefined || movie.remaining) && (
          <div className="card-cw-row">
            {movie.progress !== undefined && (
              <div className="card-cw-progress">
                <div className="card-cw-fill" style={{ width: `${movie.progress}%` }}></div>
              </div>
            )}
            {movie.remaining && <span className="card-cw-time">Còn {movie.remaining}</span>}
          </div>
        )}
      </div>
    </Link>
  );
};

export default MovieCardHorizontal;
