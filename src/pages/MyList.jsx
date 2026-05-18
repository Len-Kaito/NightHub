import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterModal from '../components/FilterModal';
import MovieCardVertical from '../components/MovieCardVertical';
import { useContent } from '../context/ContentContext';

const MyList = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const { getMyListMovies } = useContent();

  const savedMovies = getMyListMovies();
  const toggleFilter = () => setIsFilterActive(!isFilterActive);

  return (
    <>
      <Navbar onToggleFilter={toggleFilter} />
      <FilterModal isActive={isFilterActive} onToggle={toggleFilter} />

      <main className="movie-sections" style={{ paddingTop: '150px', minHeight: '80vh' }}>
        <div className="section-header" style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>
            Danh sách của tôi
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '5px' }}>
            Tổng cộng {savedMovies.length} phim
          </p>
        </div>

        {savedMovies.length > 0 ? (
          <div className="card-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
            gap: '20px' 
          }}>
            {savedMovies.map((movie, index) => (
              <MovieCardVertical key={index} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty-list-message" style={{ textAlign: 'center', padding: '80px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '200px', height: '220px', marginBottom: '30px' }}>
              <div style={{ position: 'absolute', top: '20px', left: '10px', width: '130px', height: '170px', background: '#d1d5db', border: '6px solid #fff', transform: 'rotate(-15deg)', zIndex: 1, boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }}>
                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', width: '60px', height: '25px', background: '#ff0000', zIndex: 2 }}></div>
                <div style={{ position: 'absolute', top: '-28px', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '16px', border: '3px solid #ff0000', borderRadius: '50%', zIndex: 1, background: 'transparent' }}></div>
              </div>
              <div style={{ position: 'absolute', top: '40px', left: '60px', width: '130px', height: '170px', background: '#d1d5db', border: '6px solid #fff', zIndex: 3, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', width: '60px', height: '25px', background: '#ff0000', zIndex: 4 }}></div>
                <div style={{ position: 'absolute', top: '-28px', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '16px', border: '3px solid #ff0000', borderRadius: '50%', zIndex: 3, background: 'transparent' }}></div>
              </div>
            </div>
            <h2 style={{ fontSize: '26px', fontWeight: '500', marginBottom: '12px', color: 'var(--text-main)' }}>Danh sách của bạn trống rỗng:(</h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>Bạn chưa thêm bất cứ phim nào vào đây</p>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default MyList;
