import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterModal from '../components/FilterModal';
import HeroSlider from '../components/HeroSlider';
import MovieRow from '../components/MovieRow';
import MovieCardVertical from '../components/MovieCardVertical';
import { useContent } from '../context/ContentContext';

const heroImages = [
  { url: '/DanhMuc/Phim tài liệu/Poster/Billie Eilish_Hit Me Hard And Soft.jpg', title: 'Billie Eilish: Hit Me Hard and Soft', year: '2024', age: 'T16', duration: '1h 45m', quality: '2K', rating: '4.7/5.0', description: 'Khám phá quá trình sáng tác và cảm hứng đằng sau album phòng thu thứ ba mang tính đột phá của Billie Eilish.', badges: [{ label: 'Âm nhạc', type: 'new' }] },
  { url: '/DanhMuc/Phim tài liệu/Poster/Jeffrey Dahmer_NetFlix.jpg', title: 'Conversations with a Killer: The Jeffrey Dahmer Tapes', year: '2022', age: 'T18', duration: '3 Tập', quality: '2K', rating: '4.6/5.0', description: 'Những đoạn băng ghi âm chưa từng công bố hé lộ tâm lý bệnh hoạn của kẻ giết người hàng loạt Jeffrey Dahmer.', badges: [{ label: 'Tội phạm', type: 'quality' }] },
  { url: '/DanhMuc/Phim tài liệu/Poster/Should I Marry A Murder.jpg', title: 'Should I Marry a Murderer?', year: '2023', age: 'T18', duration: '1h 30m', quality: 'Full HD', rating: '4.5/5.0', description: 'Hành trình tìm hiểu tâm lý phức tạp của những phụ nữ quyết định kết hôn với những kẻ giết người đang ngồi tù.', badges: [{ label: 'Kỳ bí', type: 'glass' }] },
  { id: 'm_63', url: '/DanhMuc/Phim tài liệu/Poster/The Civil War _ Cuộc Nội Chiến.jpg', title: 'The Civil War', year: '1990', age: 'T13', duration: '9 Tập', quality: 'Full HD', rating: '4.9/5.0', description: 'Bộ phim tài liệu sử thi của Ken Burns về cuộc Nội chiến Hoa Kỳ, sử dụng hình ảnh và lá thư chân thực.', badges: [{ label: 'Lịch sử', type: 'new' }] },
  { id: 'm_83', url: '/DanhMuc/Phim tài liệu/Poster/The Last Dance.jpg', title: 'The Last Dance', year: '2020', age: 'T16', duration: '10 Tập', quality: 'Full HD', rating: '4.8/5.0', description: 'Nhìn lại sự nghiệp huyền thoại của Michael Jordan và đội Chicago Bulls trong thập niên 1990.', badges: [{ label: 'Thể thao', type: 'quality' }] },
];

const Documentaries = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { getMoviesByTag } = useContent();

  return (
    <>
      <Navbar onToggleFilter={() => setIsFilterOpen(!isFilterOpen)} />
      <FilterModal isActive={isFilterOpen} onToggle={() => setIsFilterOpen(!isFilterOpen)} />
      
      <HeroSlider images={heroImages} />

      <main className="movie-sections">
        <MovieRow title="Khám phá thế giới">
          {getMoviesByTag('Khám phá thế giới').map((m, i) => (
            <MovieCardVertical key={`exp-${i}`} movie={m} />
          ))}
        </MovieRow>
        <MovieRow title="Góc nhìn lịch sử">
          {getMoviesByTag('Góc nhìn lịch sử').map((m, i) => (
            <MovieCardVertical key={`his-${i}`} movie={m} />
          ))}
        </MovieRow>
        <MovieRow title="Khoa học và tương lai">
          {getMoviesByTag('Khoa học và tương lai').map((m, i) => (
            <MovieCardVertical key={`sci-${i}`} movie={m} />
          ))}
        </MovieRow>
        <MovieRow title="Những câu chuyện thực tế">
          {getMoviesByTag('Những câu chuyện thực tế').map((m, i) => (
            <MovieCardVertical key={`real-${i}`} movie={m} />
          ))}
        </MovieRow>
        <MovieRow title="Bí ẩn chưa giải mã">
          {getMoviesByTag('Bí ẩn chưa giải mã').map((m, i) => (
            <MovieCardVertical key={`mys-${i}`} movie={m} />
          ))}
        </MovieRow>
      </main>

      <Footer />
    </>
  );
};

export default Documentaries;
