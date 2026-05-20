import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterModal from '../components/FilterModal';
import HeroSlider from '../components/HeroSlider';
import MovieRow from '../components/MovieRow';
import MovieCardHorizontal from '../components/MovieCardHorizontal';
import MovieCardVertical from '../components/MovieCardVertical';
import { useContent } from '../context/ContentContext';
import { useUser } from '../context/UserContext';
import { homeRows } from '../data/movieData';

// ─── COMPONENT CHÍNH ─────────────────────────────────
const Home = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { continueWatching, getMovieById } = useContent();
  const { isLoggedIn } = useUser();

  return (
    <>
      <Navbar onToggleFilter={() => setIsFilterOpen(!isFilterOpen)} />
      <FilterModal isActive={isFilterOpen} onToggle={() => setIsFilterOpen(!isFilterOpen)} />

      {/* HERO BANNER (Dynamic Carousel) */}
      <HeroSlider />

      {/* CHUYÊN MỤC PHIM */}
      <main className="movie-sections">

        {/* 1. TIẾP TỤC XEM - Dùng Poster Ngang */}
        {isLoggedIn && continueWatching.length > 0 && (
          <MovieRow title="Tiếp tục xem">
            {continueWatching.map((m, i) => (
              <MovieCardHorizontal key={i} movie={m} />
            ))}
          </MovieRow>
        )}

        {/* Render dynamic rows from homeRows */}
        {homeRows.map((row, index) => {
          if (row.title === 'Tiếp tục xem') return null; // Đã render ở trên
          if (row.title === 'Đề xuất cho bạn' && !isLoggedIn) return null; // Chỉ hiện khi đã đăng nhập
          const rowMovies = row.movies.map(id => getMovieById(id)).filter(Boolean);
          if (rowMovies.length === 0) return null;

          const isTop10 = row.title.toLowerCase().includes('top');

          return (
            <MovieRow key={index} title={row.title} isTop10={isTop10}>
              {rowMovies.map((movie, idx) => (
                <MovieCardVertical key={`${row.title}-${idx}`} index={idx} movie={movie} isTop10={isTop10} showMatch={row.title === 'Đề xuất cho bạn'} />
              ))}
            </MovieRow>
          );
        })}

      </main>

      <Footer />
    </>
  );
};

export default Home;
