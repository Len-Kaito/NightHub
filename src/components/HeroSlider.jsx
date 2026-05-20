import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieBadges from './MovieBadges';
import { useContent } from '../context/ContentContext';
import { useUser } from '../context/UserContext';

const ageTooltips = {
  'K': 'Không giới hạn độ tuổi',
  'P': 'Phổ biến - Mọi lứa tuổi',
  'T13': 'Phim dành cho người từ 13 tuổi trở lên',
  'T16': 'Phim dành cho người từ 16 tuổi trở lên',
  'T18': 'Phim dành cho người từ 18 tuổi trở lên',
};

import { getMovies } from '../data/movieData';

const movies = getMovies();
const findMovie = (title) => movies.find(m => m.title === title) || {};

// Default hero images cho trang chủ
const defaultHeroImages = [
  { ...findMovie('Khi Cuộc Đời Cho Bạn Quả Quýt'), url: findMovie('Khi Cuộc Đời Cho Bạn Quả Quýt')?.posterHorizontal },
  { ...findMovie('Mưa đỏ'), url: findMovie('Mưa đỏ')?.posterHorizontal },
  { ...findMovie('Mắt biếc'), url: findMovie('Mắt biếc')?.posterHorizontal },
  { ...findMovie('One Piece'), url: findMovie('One Piece')?.posterHorizontal },
  { ...findMovie('Queen Of Tears'), url: findMovie('Queen Of Tears')?.posterHorizontal }
].filter(m => m.id);

const HeroSlider = ({ images }) => {
  const heroImages = images || defaultHeroImages;
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const { isInMyList, addToMyList, removeFromMyList } = useContent();
  const { isLoggedIn } = useUser();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [currentIndex, heroImages.length]);

  const goToSlide = (index) => setCurrentIndex(index);
  const goToPrev = () => setCurrentIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % heroImages.length);

  const currentSlide = heroImages[currentIndex];
  // Ưu tiên dùng id thực từ data, fallback sang index-based để tránh crash
  const slideId = currentSlide.id || `hero-${currentIndex}`;
  const isSaved = isInMyList(slideId);

  const handleToggleList = () => {
    if (isSaved) removeFromMyList(slideId);
    else addToMyList(slideId);
  };

  return (
    <section className="hero" style={{ backgroundImage: `url('${currentSlide.url}')`, transition: 'background-image 0.8s ease-in-out' }}>
      <div className="hero-overlay"></div>

      {/* Age badge ở góc phải */}
      {currentSlide.age && (
        <div className="hero-age-badge" title={ageTooltips[currentSlide.age] || currentSlide.age}>
          {currentSlide.age}
        </div>
      )}

      <div className="hero-content animate-fade-in" key={currentIndex}>
        <h1 className="hero-title">{currentSlide.title}</h1>
        
        <div className="hero-meta">
          <span className="meta-item">{currentSlide.year}</span>
          <span className="meta-separator">&middot;</span>
          <span className="meta-item">{currentSlide.age}</span>
          <span className="meta-separator">&middot;</span>
          <span className="meta-item">{currentSlide.duration}</span>
          <span className="meta-separator">&middot;</span>
          <span className="meta-item" style={{ fontWeight: 700 }}>{currentSlide.quality}</span>
          <span className="meta-item meta-rating" style={{ marginLeft: '15px' }}>
            {currentSlide.rating}
            <svg className="star-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
          </span>
        </div>

        <p className="hero-desc">{currentSlide.description}</p>
        
        <div className="hero-buttons">
          <button onClick={() => isLoggedIn ? navigate(`/watch/${slideId}`) : navigate('/login')} className="btn btn-play">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Xem phim
          </button>
          {isLoggedIn && (
            <button className={`btn btn-info ${isSaved ? 'bookmarked' : ''}`} onClick={handleToggleList}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={isSaved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              {isSaved ? 'Đã lưu' : 'Thêm vào danh sách'}
            </button>
          )}
          <button onClick={() => isLoggedIn ? navigate(`/movie/${slideId}`) : navigate('/login')} className="btn btn-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            Chi tiết
          </button>
        </div>
      </div>

      {/* Hero Controls */}
      <div className="hero-controls">
        <div className="hero-indicators">
          {heroImages.map((_, idx) => (
            <div key={idx} className={`indicator-dot ${idx === currentIndex ? 'active' : ''}`} onClick={() => goToSlide(idx)} />
          ))}
        </div>
        <div className="hero-nav-buttons">
          <button className="hero-nav-btn prev" onClick={goToPrev}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>
          </button>
          <button className="hero-nav-btn next" onClick={goToNext}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
