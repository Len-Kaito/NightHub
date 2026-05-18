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

// ─── COMPONENT CHÍNH ─────────────────────────────────
const Home = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { movies, continueWatching, getMoviesByTag } = useContent();
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

        {/* 2. ĐỀ XUẤT CHO BẠN (Mới thêm) */}
        {isLoggedIn && (
          <MovieRow title="Đề xuất cho bạn">
            {getMoviesByTag('Đề xuất cho bạn').map((m, i) => (
              <MovieCardVertical key={`rec-${i}`} movie={m} showMatch />
            ))}
          </MovieRow>
        )}

        {/* CẢ NHÀ CÙNG XEM */}
        <MovieRow title="Cả nhà cùng xem">
          {getMoviesByTag('Cả nhà cùng xem').map((m, i) => (
            <MovieCardVertical key={`fam-${i}`} movie={m} />
          ))}
        </MovieRow>

        {/* TOP 5 */}
        <MovieRow title="Top 5 Phim Thịnh Hành Hôm Nay" isTop10>
          {getMoviesByTag('Top 5').slice(0, 5).map((movie, idx) => (
            <MovieCardVertical key={`top-${idx}`} index={idx} movie={movie} isTop10 />
          ))}
        </MovieRow>

        {/* PHIM MỚI CẬP NHẬT */}
        <MovieRow title="Phim mới cập nhật">
          {getMoviesByTag('Phim mới cập nhật').map((m, i) => (
            <MovieCardVertical key={`new-${i}`} movie={m} />
          ))}
        </MovieRow>

        {/* KINH DỊ ÂU MỸ */}
        <MovieRow title="Kinh dị Âu Mỹ">
          {getMoviesByTag('Kinh dị Âu Mỹ').map((m, i) => (
            <MovieCardVertical key={`hor-${i}`} movie={m} />
          ))}
        </MovieRow>

        {/* PHIM CHIẾU RẠP VIỆT NAM */}
        <MovieRow title="Phim chiếu rạp Việt Nam">
          {getMoviesByTag('Phim chiếu rạp Việt Nam').map((m, i) => (
            <MovieCardVertical key={`vn-${i}`} movie={m} />
          ))}
        </MovieRow>

        {/* HÀNH ĐỘNG VÀ PHIÊU LƯU */}
        <MovieRow title="Hành động và phiêu lưu">
          {getMoviesByTag('Hành động và phiêu lưu').map((m, i) => (
            <MovieCardVertical key={`act-${i}`} movie={m} />
          ))}
        </MovieRow>

        {/* PHIM DÀNH GIẢI THƯỞNG */}
        <MovieRow title="Phim dành giải thưởng">
          {getMoviesByTag('Phim dành giải thưởng').map((m, i) => (
            <MovieCardVertical key={`awd-${i}`} movie={m} />
          ))}
        </MovieRow>

        {/* PHIM CŨ MÀ CHẤT */}
        <MovieRow title="Phim cũ mà chất">
          {getMoviesByTag('Phim cũ mà chất').map((m, i) => (
            <MovieCardVertical key={`old-${i}`} movie={m} />
          ))}
        </MovieRow>

        {/* LÃNG MẠN HÀN QUỐC */}
        <MovieRow title="Lãng mạn Hàn Quốc">
          {getMoviesByTag('Lãng mạn Hàn Quốc').map((m, i) => (
            <MovieCardVertical key={`rom-${i}`} movie={m} />
          ))}
        </MovieRow>

        {/* THỊNH HÀNH */}
        <MovieRow title="Thịnh hành">
          {getMoviesByTag('Thịnh hành').map((m, i) => (
            <MovieCardVertical key={`trend-${i}`} movie={m} />
          ))}
        </MovieRow>

      </main>

      <Footer />
    </>
  );
};

export default Home;
