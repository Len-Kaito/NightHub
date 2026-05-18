import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterModal from '../components/FilterModal';
import { useContent } from '../context/ContentContext';

// ─── SVG Icons ───────────────────────────────────────
const IconPlay = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
);
const IconBookmark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
);
const IconInfo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
);
const IconChevronLeft = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" fill="none"><polyline points="15 18 9 12 15 6"></polyline></svg>
);
const IconChevronRight = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
);

const CATEGORY_DATA = {
  'dien-anh': {
    title: 'Phim Điện Ảnh',
    rows: [
      { 
        label: 'Siêu Phẩm Hot Hit', 
        movies: [
          { title: 'Interstellar', genres: 'Khoa học viễn tưởng &bull; Phiêu lưu', desc: 'Khi Trái Đất đang chết mòn, một nhóm phi hành gia phải thực hiện sứ mệnh quan trọng nhất lịch sử nhân loại...', img: '/images/poster_doc_2.webp' },
          { title: 'The Dark Knight', genres: 'Hành động &bull; Tội phạm', desc: 'Hiệp sĩ bóng đêm Batman phải đối mặt với thử thách lớn nhất từ trước đến nay mang tên Joker...', img: '/images/poster_doc_2.webp' },
          { title: 'Oppenheimer', genres: 'Tâm lý &bull; Lịch sử', desc: 'Bộ phim kể lại câu chuyện về J. Robert Oppenheimer và sự ra đời của bom nguyên tử...', img: '/images/poster_doc_2.webp' },
          { title: 'Tenet', genres: 'Hành động &bull; Viễn tưởng', desc: 'Hành trình qua một thế giới bóng tối gián điệp quốc tế với nhiệm vụ thao túng nghịch lý thời gian.', img: '/images/poster_doc_2.webp' },
          { title: 'Dune: Part Two', genres: 'Viễn tưởng &bull; Hành động', desc: 'Hành trình báo thù những kẻ đã hủy gia tộc anh, đồng thời đối mặt với sự lựa chọn giữa tình yêu và định mệnh vũ trụ.', img: '/images/poster_doc_2.webp' },
          { title: 'Oppenheimer', genres: 'Tâm lý &bull; Lịch sử', desc: 'Sự ra đời của bom nguyên tử làm thay đổi hoàn toàn cục diện thế giới.', img: '/images/poster_doc_2.webp' },
        ]
      },
      { 
        label: 'Tiệc Phim Cuối tuần', 
        movies: [
          { title: 'Interstellar', genres: 'Khoa học viễn tưởng &bull; Phiêu lưu', desc: 'Khi Trái Đất đang chết mòn, một nhóm phi hành gia phải thực hiện sứ mệnh quan trọng nhất lịch sử nhân loại...', img: '/images/poster_doc_2.webp' },
          { title: 'The Dark Knight', genres: 'Hành động &bull; Tội phạm', desc: 'Hiệp sĩ bóng đêm Batman phải đối mặt với thử thách lớn nhất từ trước đến nay mang tên Joker...', img: '/images/poster_doc_2.webp' },
          { title: 'Oppenheimer', genres: 'Tâm lý &bull; Lịch sử', desc: 'Bộ phim kể lại câu chuyện về J. Robert Oppenheimer và sự ra đời của bom nguyên tử...', img: '/images/poster_doc_2.webp' },
          { title: 'Tenet', genres: 'Hành động &bull; Viễn tưởng', desc: 'Hành trình qua một thế giới bóng tối gián điệp quốc tế với nhiệm vụ thao túng nghịch lý thời gian.', img: '/images/poster_doc_2.webp' },
          { title: 'Dune: Part Two', genres: 'Viễn tưởng &bull; Hành động', desc: 'Hành trình báo thù những kẻ đã hủy gia tộc anh, đồng thời đối mặt với sự lựa chọn giữa tình yêu và định mệnh vũ trụ.', img: '/images/poster_doc_2.webp' },
          { title: 'Oppenheimer', genres: 'Tâm lý &bull; Lịch sử', desc: 'Sự ra đời của bom nguyên tử làm thay đổi hoàn toàn cục diện thế giới.', img: '/images/poster_doc_2.webp' },
        ]
      },
      { 
        label: 'Tuyệt Tác Oscar', 
        movies: [
          { title: 'Interstellar', genres: 'Khoa học viễn tưởng &bull; Phiêu lưu', desc: 'Khi Trái Đất đang chết mòn, một nhóm phi hành gia phải thực hiện sứ mệnh...', img: '/images/poster_doc_2.webp' },
          { title: 'The Dark Knight', genres: 'Hành động &bull; Tội phạm', desc: 'Hiệp sĩ bóng đêm Batman phải đối mặt với thử thách lớn nhất...', img: '/images/poster_doc_2.webp' },
          { title: 'Oppenheimer', genres: 'Tâm lý &bull; Lịch sử', desc: 'Bộ phim kể lại câu chuyện về J. Robert Oppenheimer...', img: '/images/poster_doc_2.webp' },
          { title: 'Tenet', genres: 'Hành động &bull; Viễn tưởng', desc: 'Hành trình qua một thế giới bóng tối gián điệp quốc tế...', img: '/images/poster_doc_2.webp' },
          { title: 'Dune: Part Two', genres: 'Viễn tưởng &bull; Hành động', desc: 'Hành trình báo thù những kẻ đã hủy gia tộc anh...', img: '/images/poster_doc_2.webp' },
          { title: 'Oppenheimer', genres: 'Tâm lý &bull; Lịch sử', desc: 'Sự ra đời của bom nguyên tử làm thay đổi hoàn toàn cục diện thế giới.', img: '/images/poster_doc_2.webp' },
        ]
      },
      { 
        label: 'Cổ Điển Tôn Trọng', 
        movies: [
          { title: 'Interstellar', genres: 'Khoa học viễn tưởng &bull; Phiêu lưu', desc: 'Khi Trái Đất đang chết mòn...', img: '/images/poster_doc_2.webp' },
          { title: 'The Dark Knight', genres: 'Hành động &bull; Tội phạm', desc: 'Hiệp sĩ bóng đêm Batman...', img: '/images/poster_doc_2.webp' },
          { title: 'Oppenheimer', genres: 'Tâm lý &bull; Lịch sử', desc: 'Bộ phim kể lại câu chuyện...', img: '/images/poster_doc_2.webp' },
          { title: 'Tenet', genres: 'Hành động &bull; Viễn tưởng', desc: 'Hành trình qua một thế giới...', img: '/images/poster_doc_2.webp' },
          { title: 'Dune: Part Two', genres: 'Viễn tưởng &bull; Hành động', desc: 'Hành trình báo thù...', img: '/images/poster_doc_2.webp' },
          { title: 'Oppenheimer', genres: 'Tâm lý &bull; Lịch sử', desc: 'Sự ra đời của bom nguyên tử...', img: '/images/poster_doc_2.webp' },
        ]
      },
    ],
  },
  'truyen-hinh': {
    title: 'Phim Truyền Hình',
    rows: [
      { label: 'Phim Đang Hot', movies: [
        { title: 'Squid Game 2', genres: 'Kinh dị &bull; Hành động', desc: 'Cuộc chiến sinh tồn tàn khốc tiếp tục...', img: '/images/poster_doc_2.webp' },
        { title: 'Stranger Things S5', genres: 'Kinh dị &bull; Viễn tưởng', desc: 'Thị trấn Hawkins đối mặt với thử thách lớn nhất...', img: '/images/poster_doc_2.webp' },
        { title: 'The Last of Us S2', genres: 'Hành động &bull; Hậu tận thế', desc: 'Hành trình đầy gian nan của Ellie...', img: '/images/poster_doc_2.webp' },
        { title: 'House of the Dragon S2', genres: 'Kỳ ảo &bull; Drama', desc: 'Cuộc nội chiến của gia tộc Targaryen...', img: '/images/poster_doc_2.webp' },
        { title: 'Wednesday S2', genres: 'Hài hước &bull; Kinh dị', desc: 'Wednesday Addams trở lại Học viện Nevermore...', img: '/images/poster_doc_2.webp' },
        { title: 'Reacher S3', genres: 'Hành động &bull; Tội phạm', desc: 'Jack Reacher đối mặt với kẻ thù mới...', img: '/images/poster_doc_2.webp' },
      ]},
    ],
  },
  'hoat-hinh': {
    title: 'Phim Hoạt Hình',
    rows: [
      { label: 'Disney & Pixar', movies: [
        { title: 'Inside Out 2', genres: 'Hoạt hình &bull; Gia đình', desc: 'Những cảm xúc mới của Riley...', img: '/images/poster_doc_2.webp' },
        { title: 'Elemental', genres: 'Hoạt hình &bull; Tình cảm', desc: 'Tình yêu giữa hai nguyên tố lửa và nước...', img: '/images/poster_doc_2.webp' },
        { title: 'Turning Red', genres: 'Hoạt hình &bull; Hài hước', desc: 'Cô bé biến thành gấu trúc đỏ...', img: '/images/poster_doc_2.webp' },
        { title: 'Encanto', genres: 'Hoạt hình &bull; Âm nhạc', desc: 'Gia đình phép thuật Madrigal...', img: '/images/poster_doc_2.webp' },
        { title: 'Soul', genres: 'Hoạt hình &bull; Drama', desc: 'Hành trình tìm lại linh hồn...', img: '/images/poster_doc_2.webp' },
        { title: 'Luca', genres: 'Hoạt hình &bull; Phiêu lưu', desc: 'Mùa hè tuyệt vời của hai cậu bé người cá...', img: '/images/poster_doc_2.webp' },
      ]},
    ],
  },
  'tai-lieu': {
    title: 'Phim Tài Liệu',
    rows: [
      { label: 'Thiên Nhiên & Vũ Trụ', movies: [
        { title: 'Our Planet II', genres: 'Tài liệu &bull; Thiên nhiên', desc: 'Hành trình khám phá hành tinh của chúng ta...', img: '/images/poster_doc_2.webp' },
        { title: 'Planet Earth III', genres: 'Tài liệu &bull; Thiên nhiên', desc: 'Những kỳ quan thiên nhiên thế giới...', img: '/images/poster_doc_2.webp' },
        { title: 'Cosmos: Possible Worlds', genres: 'Tài liệu &bull; Khoa học', desc: 'Khám phá vũ trụ bao la...', img: '/images/poster_doc_2.webp' },
        { title: 'Deep Ocean', genres: 'Tài liệu &bull; Thiên nhiên', desc: 'Bí ẩn dưới đáy đại dương...', img: '/images/poster_doc_2.webp' },
        { title: 'The Universe', genres: 'Tài liệu &bull; Khoa học', desc: 'Vũ trụ và những điều chưa biết...', img: '/images/poster_doc_2.webp' },
        { title: 'Blue Planet II', genres: 'Tài liệu &bull; Thiên nhiên', desc: 'Hành tinh xanh huyền bí...', img: '/images/poster_doc_2.webp' },
      ]},
    ],
  },
};

const MovieCardHasInfo = ({ id, title, genres, desc, img, match, age, duration, badge }) => {
  const navigate = useNavigate();
  const { addToMyList, removeFromMyList, isInMyList } = useContent();
  const movieId = id || 'm_1';
  const isSaved = isInMyList(movieId);

  const handleToggleList = (e) => {
    e.preventDefault();
    if (isSaved) removeFromMyList(movieId);
    else addToMyList(movieId);
  };
  return (
    <Link to={`/watch/${movieId}`} className="movie-card has-info">
      {badge && <div className="badge series">{badge}</div>}
      <img src={img} alt={title} onError={e => { e.target.src = '/images/poster_doc_2.webp'; }} />
      <div className="card-info">
        <div className="card-actions">
          <button className="action-btn play" title="Xem phim" onClick={(e) => { e.preventDefault(); navigate(`/watch/${movieId}`); }}><IconPlay /></button>
          <button className={`action-btn bookmark-btn ${isSaved ? 'bookmarked' : ''}`} title={isSaved ? 'Bỏ lưu' : 'Lưu phim'} onClick={handleToggleList}><IconBookmark /></button>
          <button className="action-btn info-btn" title="Chi tiết" onClick={(e) => { e.preventDefault(); navigate(`/movie/${movieId}`); }}><IconInfo /></button>
        </div>
        {match && <div className="card-meta-info"><span className="card-meta-match">{match}</span><span className="card-meta-duration">{duration}</span></div>}

        <h4 className="card-title">{title}</h4>
        {desc && <p className="card-desc">{desc}</p>}
      </div>
    </Link>
  );
};

const MovieRow = ({ label, movies }) => {
  const handleSlide = (dir, btn) => {
    const grid = btn.closest('.slider-wrapper').querySelector('.card-grid');
    grid.scrollBy({ left: dir * 600, behavior: 'smooth' });
  };

  const updateSlideButtons = (e) => {
    const grid = e.target;
    const wrapper = grid.parentElement;
    const leftBtn = wrapper.querySelector('.left-btn');
    const rightBtn = wrapper.querySelector('.right-btn');
    if(leftBtn && rightBtn) {
      leftBtn.style.display = grid.scrollLeft > 10 ? 'flex' : 'none';
      rightBtn.style.display = Math.ceil(grid.scrollLeft + grid.clientWidth) >= grid.scrollWidth - 10 ? 'none' : 'flex';
    }
  };

  return (
    <>
      <h3 className="row-title">{label}</h3>
      <div className="slider-wrapper">
        <button className="slide-btn left-btn" onClick={e => handleSlide(-1, e.currentTarget)} style={{ display: 'none' }}><IconChevronLeft /></button>
        <div className="card-grid" onScroll={updateSlideButtons} ref={(el) => { if(el) updateSlideButtons({target: el}); }}>
          {movies.map((m, i) => <MovieCardHasInfo key={i} {...m} />)}
        </div>
        <button className="slide-btn right-btn" onClick={e => handleSlide(1, e.currentTarget)}><IconChevronRight /></button>
      </div>
    </>
  );
};

const MovieCategory = () => {
  const { category } = useParams();
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [filters, setFilters] = useState({ region: 'Tất cả', genre: 'Tất cả', year: 'Tất cả', sort: 'Phổ biến nhất' });

  const data = CATEGORY_DATA[category] || CATEGORY_DATA['dien-anh'];

  return (
    <>
      <Navbar onToggleFilter={() => setIsFilterActive(!isFilterActive)} />
      <FilterModal isActive={isFilterActive} onToggle={() => setIsFilterActive(!isFilterActive)} />

      <main className="movie-sections" style={{ marginTop: '80px' }}>
        <h1 className="section-title" style={{ fontSize: '28px', fontWeight: 800, marginBottom: '16px' }}>{data.title}</h1>

        <div className="quick-filters" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {[
            { key: 'region', label: 'Khu vực', options: ['Tất cả', 'Việt Nam', 'Âu Mỹ', 'Hàn Quốc', 'Nhật Bản', 'Trung Quốc'] },
            { key: 'genre', label: 'Thể loại', options: ['Tất cả', 'Hành động', 'Tình cảm', 'Kinh dị', 'Hài hước', 'Viễn tưởng'] },
            { key: 'year', label: 'Năm', options: ['Tất cả', '2025', '2024', '2023', '2022', 'Trước 2022'] },
            { key: 'sort', label: 'Sắp xếp', options: ['Phổ biến nhất', 'Mới cập nhật', 'Đánh giá cao', 'Nhiều lượt xem'] },
          ].map(f => (
            <select
              key={f.key}
              className="filter-select"
              style={{ width: 'auto', padding: '8px 32px 8px 12px', fontSize: '13px' }}
              value={filters[f.key]}
              onChange={e => setFilters({ ...filters, [f.key]: e.target.value })}
            >
              {f.options.map(o => <option key={o}>{o}</option>)}
            </select>
          ))}
        </div>

        {data.rows.map((row, i) => <MovieRow key={i} {...row} />)}
      </main>

      <Footer />
    </>
  );
};

export default MovieCategory;
