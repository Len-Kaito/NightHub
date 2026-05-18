import React, { useState } from 'react';
import CustomSelect from './ui/CustomSelect';

const REGION_OPTIONS = [
  { label: 'Tất cả', value: 'all' },
  { label: 'Việt Nam', value: 'vn' },
  { label: 'Âu Mỹ', value: 'us' },
  { label: 'Hàn Quốc', value: 'kr' },
  { label: 'Trung Quốc', value: 'cn' }
];

const GENRE_OPTIONS = [
  'Cổ trang', 'Hoạt hình', 'Hài hước', 'Hành động', 'Kinh dị', 'Lãng mạn', 'Tài liệu', 'Tâm lý', 'Viễn tưởng'
];

const SORT_OPTIONS = [
  { label: 'Phổ biến', value: 'popular' },
  { label: 'Mới cập nhật', value: 'new' },
  { label: 'Đánh giá cao', value: 'rating' },
  { label: 'Xem nhiều nhất', value: 'views' }
];

const CATEGORY_OPTIONS = [
  'Tất cả', 'Phim điện ảnh', 'Phim truyền hình', 'Phim hoạt hình', 'Phim tài liệu'
];

import { useNavigate } from 'react-router-dom';

const FilterModal = ({ isActive, onToggle }) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('Phim điện ảnh');
  const [region, setRegion] = useState('all');
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState('popular');

  const toggleGenre = (g) => {
    if (genres.includes(g)) {
      setGenres(genres.filter(x => x !== g));
    } else {
      setGenres([...genres, g]);
    }
  };

  const handleApply = () => {
    onToggle();
    const params = new URLSearchParams();
    if (category !== 'Tất cả') params.append('category', category);
    if (region !== 'all') params.append('region', region);
    if (genres.length > 0) params.append('genres', genres.join(','));
    params.append('sort', sort);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <>
      <div className={`filter-overlay ${isActive ? 'active' : ''}`} onClick={onToggle}></div>
      <div className={`filter-modal ${isActive ? 'active' : ''}`}>
        <div className="filter-header-title">
          <h3>Bộ lọc nâng cao</h3>
        </div>

        <div className="filter-group">
          <label>Danh mục</label>
          <div className="filter-options">
            {CATEGORY_OPTIONS.map((cat, idx) => (
              <span 
                key={idx} 
                className={`filter-tag ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(cat)}
                style={{ cursor: 'pointer' }}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <div className="filter-group" style={{ flex: 1 }}>
            <label>Khu vực</label>
            <CustomSelect 
              options={REGION_OPTIONS}
              value={region}
              onChange={setRegion}
              maxHeight="129px"
            />
          </div>

          <div className="filter-group" style={{ flex: 1 }}>
            <label>Sắp xếp theo</label>
            <CustomSelect 
              options={SORT_OPTIONS}
              value={sort}
              onChange={setSort}
              maxHeight="129px"
            />
          </div>
        </div>

        <div className="filter-group">
          <label>Thể loại (Có thể chọn nhiều)</label>
          <div className="filter-options" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {GENRE_OPTIONS.map((g, idx) => (
              <span 
                key={idx} 
                className={`filter-tag ${genres.includes(g) ? 'active' : ''}`}
                onClick={() => toggleGenre(g)}
                style={{ cursor: 'pointer' }}
              >
                {g}
              </span>
            ))}
          </div>
        </div>

        <div className="filter-footer">
          <button className="btn-filter-cancel" onClick={onToggle}>Hủy bỏ</button>
          <button className="btn-filter-apply" onClick={handleApply}>Áp dụng bộ lọc</button>
        </div>
      </div>
    </>
  );
};

export default FilterModal;
