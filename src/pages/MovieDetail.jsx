import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import { useUser } from '../context/UserContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterModal from '../components/FilterModal';
import MovieCardVertical from '../components/MovieCardVertical';
import CommentSection from '../components/CommentSection';

// ─── SVG Icons ───────────────────────────────────────
const IconPlay = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>;
const IconBookmark = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>;
const IconLike = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>;
const IconReply = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getMovieById, movies, addToMyList, removeFromMyList, isInMyList } = useContent();
  const { profiles, activeProfileId } = useUser();
  const [isFilterActive, setIsFilterActive] = useState(false);
  
  const movie = getMovieById(id) || movies[0];
  const isMovieSeries = movie ? (
    String(movie.duration || '').toLowerCase().includes('tập') ||
    movie.category === 'phim-truyen-hinh'
  ) : false;

  const [activeTab, setActiveTab] = useState(isMovieSeries ? 'episodes' : 'trailers');
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  // Cuộn lên đầu trang mỗi khi id thay đổi
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // ── Error state: phim không tồn tại ──
  if (!movie) {
    return (
      <>
        <Navbar onToggleFilter={() => setIsFilterActive(!isFilterActive)} />
        <FilterModal isActive={isFilterActive} onToggle={() => setIsFilterActive(!isFilterActive)} />
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', minHeight: '70vh', padding: '150px 20px',
          textAlign: 'center', gap: '20px'
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--text-main)', maxWidth: '480px', lineHeight: 1.4 }}>
            Rất tiếc, bộ phim bạn tìm kiếm không tồn tại hoặc đã bị gỡ.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>ID: <code>{id}</code></p>
          <button
            onClick={() => navigate('/')}
            style={{
              padding: '12px 28px', background: 'var(--accent-color)', color: '#fff',
              border: 'none', borderRadius: '8px', fontSize: '1rem',
              fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            Quay về Trang chủ
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const isSaved = isInMyList(movie.id);
  const toggleBookmark = () => {
    if (isSaved) removeFromMyList(movie.id);
    else addToMyList(movie.id);
  };

  // Lấy 5 phim liên quan (cùng tag/category, loại chính phim đang xem)
  const relatedMovies = movies
    .filter(m => m.id !== movie.id && (
      m.category === movie.category ||
      m.tags?.some(t => movie.tags?.includes(t))
    ))
    .slice(0, 5);

  const posterBg = movie.posterHorizontal || movie.posterVertical || movie.backdropUrl || '/images/poster_1.jpeg';

  return (
    <>
      <Navbar onToggleFilter={() => setIsFilterActive(!isFilterActive)} />
      <FilterModal isActive={isFilterActive} onToggle={() => setIsFilterActive(!isFilterActive)} />

      {/* PHẦN CHI TIẾT PHIM */}
      <div className="detail-wrapper horizontal-poster">
        <div className="detail-bg" style={{ backgroundImage: `url('${posterBg}')` }}></div>

        <div className="detail-content">
          <h1 className="detail-title">{movie.title}</h1>

          <div className="detail-meta">
            {movie.year && <><span className="meta-item">{movie.year}</span><span className="meta-separator">&middot;</span></>}
            {movie.age && <><span className="meta-item">{movie.age}</span><span className="meta-separator">&middot;</span></>}
            {movie.duration && <><span className="meta-item">{movie.duration}</span><span className="meta-separator">&middot;</span></>}
            {movie.quality && <span className="meta-item">{movie.quality}</span>}
            {movie.rating && (
              <span className="meta-item meta-rating">
                {movie.rating}
                <svg className="star-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </span>
            )}
          </div>

          <div className="hero-buttons" style={{ marginTop: '20px' }}>
            <Link to={`/watch/${movie.id}`} className="btn btn-play" style={{ textDecoration: 'none' }}>
              <IconPlay /> Xem phim
            </Link>
            <button
              className={`btn btn-info ${isSaved ? 'bookmarked' : ''}`}
              title={isSaved ? 'Bỏ lưu' : 'Lưu phim'}
              onClick={toggleBookmark}
            >
              <IconBookmark /> {isSaved ? 'Đã lưu' : 'Lưu phim'}
            </button>
          </div>

          <p className="detail-desc">
            {movie.description || 'Chưa có mô tả cho bộ phim này.'}
          </p>

          <div className="detail-cast">
            {movie.genres?.length > 0 && (
              <p><span>Thể loại:</span> {movie.genres.join(', ')}</p>
            )}
            {movie.year && <p><span>Năm phát hành:</span> {movie.year}</p>}
            <p><span>Đạo diễn:</span> {movie.director || 'Đang cập nhật'}</p>
            <p><span>Diễn viên:</span> {movie.cast ? movie.cast.join(', ') : 'Đang cập nhật'}</p>
          </div>

          {/* TABS */}
          <div className="tabs-wrapper">
            <div className="tab-headers">
              {isMovieSeries && (
                <button className={`tab-btn ${activeTab === 'episodes' ? 'active' : ''}`} onClick={() => setActiveTab('episodes')}>Tập phim</button>
              )}
              <button className={`tab-btn ${activeTab === 'trailers' ? 'active' : ''}`} onClick={() => setActiveTab('trailers')}>Trailer</button>
              <button className={`tab-btn ${activeTab === 'comments' ? 'active' : ''}`} onClick={() => setActiveTab('comments')}>Bình luận</button>
            </div>

            <div className="tab-content">
              {/* TAB TẬP PHIM */}
              {isMovieSeries && activeTab === 'episodes' && (
                <div className="tab-pane active">
                  <div className="episode-list">
                    <div className="episode-item" onClick={() => navigate(`/watch/${movie.id}`)}>
                      <img src={posterBg} alt="Ep 1" className="ep-img" onError={e => { e.target.src = '/images/poster_1.jpeg'; }} />
                      <div className="ep-info">
                        <div className="ep-title">1. Tập đầu tiên</div>
                        <div className="ep-duration">{movie.duration || 'N/A'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB TRAILERS */}
              {activeTab === 'trailers' && (
                <div className="tab-pane active">
                  <div className="trailer-section" style={{ marginBottom: 0 }}>
                    <div className="trailer-list">
                      <div className="trailer-item" onClick={() => setIsTrailerOpen(true)} style={{ cursor: 'pointer' }}>
                        <img src={posterBg} alt="Trailer" onError={e => { e.target.src = '/images/poster_1.jpeg'; }} />
                        <div className="trailer-play">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB BÌNH LUẬN */}
              {activeTab === 'comments' && (
                <div className="tab-pane active">
                  <CommentSection movieId={movie.id} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* PHIM LIÊN QUAN (động từ context) */}
      <main className="movie-sections">
        <h3 className="row-title">Phim liên quan</h3>
        <div className="slider-wrapper">
          <div className="card-grid">
            {relatedMovies.length > 0 ? relatedMovies.map((m) => (
              <MovieCardVertical key={m.id} movie={m} showMatch={true} />
            )) : (
              <p style={{ color: 'var(--text-muted)', padding: '20px 0' }}>Không có phim liên quan.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
      
      {isTrailerOpen && (
        <div className="trailer-modal-overlay" onClick={() => setIsTrailerOpen(false)}>
          <div className="trailer-modal-content" onClick={e => e.stopPropagation()}>
            <button className="trailer-close-btn" onClick={() => setIsTrailerOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <video 
              src="/video/videoplayback.mp4" 
              controls 
              autoPlay 
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
              className="trailer-video-player"
            ></video>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
