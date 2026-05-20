import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterModal from '../components/FilterModal';
import MovieCardVertical from '../components/MovieCardVertical';
import { useContent } from '../context/ContentContext';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { movies } = useContent();
  
  const query = searchParams.get('q') || '';
  const categoryFilter = searchParams.get('category') || '';
  const genresParam = searchParams.get('genres') || '';
  const genresFilter = genresParam ? genresParam.split(',') : [];
  const regionParam = searchParams.get('region') || '';
  const sortFilter = searchParams.get('sort') || 'popular';

  const regionMap = {
    'vn': 'Việt Nam',
    'us': 'Âu Mỹ',
    'kr': 'Hàn Quốc',
    'cn': 'Trung Quốc'
  };
  const regionLabel = regionMap[regionParam] || '';

  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    let result = [...movies];

    // 1. Filter by Keyword (AND)
    if (query) {
      const q = query.toLowerCase();
      result = result.filter(m => m.title.toLowerCase().includes(q));
    }

    // 2. Filter by Category (AND)
    if (categoryFilter && categoryFilter !== 'Tất cả') {
      const catMap = {
        'Phim điện ảnh': 'phim-dien-anh',
        'Phim truyền hình': 'phim-truyen-hinh',
        'Phim hoạt hình': 'hoat-hinh',
        'Phim tài liệu': 'phim-tai-lieu'
      };
      const jsonCat = catMap[categoryFilter];
      if (jsonCat) {
        result = result.filter(m => m.category === jsonCat);
      }
    }

    // 3. Filter by Genres (AND)
    if (genresFilter.length > 0) {
      result = result.filter(m => {
        if (!m.genres) return false;
        return genresFilter.every(g => m.genres.includes(g));
      });
    }

    // 4. Sorting
    if (sortFilter === 'popular' || sortFilter === 'views') {
      result.sort((a, b) => parseInt(a.id.replace('m_','')) - parseInt(b.id.replace('m_','')));
    } else if (sortFilter === 'new') {
      result.sort((a, b) => parseInt(b.year || 0) - parseInt(a.year || 0));
    } else if (sortFilter === 'rating') {
      result.sort((a, b) => parseFloat(b.rating || 0) - parseFloat(a.rating || 0));
    }

    setFilteredMovies(result);
  }, [movies, query, categoryFilter, genresParam, sortFilter]);

  return (
    <>
      <Navbar onToggleFilter={() => setIsFilterOpen(!isFilterOpen)} />
      <FilterModal isActive={isFilterOpen} onToggle={() => setIsFilterOpen(!isFilterOpen)} />
      
      <main className="movie-sections" style={{ paddingTop: '150px', minHeight: '80vh' }}>
        <div className="section-header" style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>
            {query ? (
              <>Kết quả tìm kiếm cho: <span style={{ color: 'var(--accent-color)' }}>"{query}"</span></>
            ) : (
              'Kết quả lọc phim'
            )}
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '5px' }}>
            Tìm thấy {filteredMovies.length} kết quả
          </p>
          
          {(categoryFilter || regionLabel || genresFilter.length > 0) && (
            <div style={{ display: 'flex', gap: '8px', marginTop: '15px', flexWrap: 'wrap' }}>
              {categoryFilter && <span style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: '16px', fontSize: '13px', color: 'var(--text-main)' }}>{categoryFilter}</span>}
              {regionLabel && <span style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: '16px', fontSize: '13px', color: 'var(--text-main)' }}>{regionLabel}</span>}
              {genresFilter.map(g => <span key={g} style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: '16px', fontSize: '13px', color: 'var(--text-main)' }}>{g}</span>)}
            </div>
          )}
        </div>

        {filteredMovies.length > 0 ? (
          <div className="card-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
            gap: '20px' 
          }}>
            {filteredMovies.map(m => (
              <MovieCardVertical key={m.id} movie={m} showMatch={true} />
            ))}
          </div>
        ) : (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '80px 0',
            textAlign: 'center'
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ width: '80px', height: '80px', color: 'var(--text-muted)', marginBottom: '20px' }}>
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="8" y1="8" x2="14" y2="14"></line>
              <line x1="14" y1="8" x2="8" y2="14"></line>
            </svg>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Không tìm thấy phim phù hợp</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px', maxWidth: '400px' }}>
              Chúng tôi không thể tìm thấy phim nào khớp với tiêu chí của bạn. Hãy thử thay đổi từ khóa hoặc bỏ bớt các bộ lọc.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <Link to="/search" className="btn btn-secondary" style={{ textDecoration: 'none', padding: '10px 20px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)' }}>
                Xóa tất cả bộ lọc
              </Link>
              <Link to="/" className="btn btn-play" style={{ textDecoration: 'none', padding: '10px 20px', borderRadius: '8px', background: 'var(--accent-color)', color: '#fff' }}>
                Trở về trang chủ
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default SearchResults;
