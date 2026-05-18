import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ChooseGenre.css';

const GENRES = [
  { id: 1, name: 'Kinh dị', image: '/images/TheLoai/Kinh dị.png' },
  { id: 2, name: 'Hành động', image: '/images/TheLoai/Hành động.png' },
  { id: 3, name: 'Hài hước', image: '/images/TheLoai/Hài hước.png' },
  { id: 4, name: 'Viễn tưởng', image: '/images/TheLoai/Viễn tưởng.png' },
  { id: 5, name: 'Lãng mạn', image: '/images/TheLoai/Lãng mạn.png' },
  { id: 6, name: 'Tài liệu', image: '/images/TheLoai/Tài liệu.png' },
  { id: 7, name: 'Hoạt hình', image: '/images/TheLoai/Hoạt hình.png' },
  { id: 8, name: 'Tâm lý', image: '/images/TheLoai/Tâm lý.png' },
  { id: 9, name: 'Cổ trang', image: '/images/TheLoai/Cổ trang.png' },
];

const ChooseGenre = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const navigate = useNavigate();

  const toggleGenre = (id) => {
    setSelectedGenres((prev) => 
      prev.includes(id) ? prev.filter((genreId) => genreId !== id) : [...prev, id]
    );
  };

  const handleSkip = () => {
    navigate('/');
  };

  const handleSelect = () => {
    if (selectedGenres.length > 0) {
      navigate('/');
    }
  };

  return (
    <div className="choose-genre-page">
      <div className="ambient-light"></div>

      <div className="selection-container">
        
        {/* HEADER CÓ LOGO LÀ THẺ A VÀ TIÊU ĐỀ */}
        <div className="header">
          <Link to="/" className="logo">
            <img src="/images/logo.png" alt="Nighthub logo" />
          </Link>
          <div>
            <h2 className="title">Bạn thích xem gì?</h2>
            <p className="subtitle">Chọn 1 hoặc nhiều hơn để Nighthub gợi ý tốt nhất cho bạn.</p>
          </div>
        </div>

        {/* DANH SÁCH THỂ LOẠI */}
        <div className="genre-grid">
          {GENRES.map((genre) => (
            <div 
              key={genre.id} 
              className={`genre-item ${selectedGenres.includes(genre.id) ? 'active' : ''}`}
              onClick={() => toggleGenre(genre.id)}
            >
              <div className="genre-circle">
                <img src={genre.image} alt={genre.name} />
              </div>
              <span className="genre-name">{genre.name}</span>
            </div>
          ))}
        </div>

        {/* CÁC NÚT ĐIỀU HƯỚNG */}
        <div className="footer-actions">
          <button className="btn btn-skip" onClick={handleSkip}>Bỏ qua</button>
          <button 
            className={`btn btn-select ${selectedGenres.length > 0 ? 'highlight' : ''}`} 
            onClick={handleSelect}
            disabled={selectedGenres.length === 0}
          >
            {selectedGenres.length > 0 ? `Tiếp tục (${selectedGenres.length})` : 'Tiếp tục'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ChooseGenre;
