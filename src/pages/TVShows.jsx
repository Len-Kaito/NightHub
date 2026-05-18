import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterModal from '../components/FilterModal';
import HeroSlider from '../components/HeroSlider';
import MovieRow from '../components/MovieRow';
import MovieCardVertical from '../components/MovieCardVertical';
import { useContent } from '../context/ContentContext';

const heroImages = [
  { id: 'm_49', url: '/DanhMuc/Phim truyền hình/Poster/Breaking Bad.jpg', title: 'Breaking Bad', year: '2008', age: 'T18', duration: '5 Mùa', quality: '2K', rating: '4.9/5.0', description: 'Một giáo viên hóa học trung học bị ung thư quyết định chế tạo methamphetamine để bảo đảm tương lai cho gia đình.', badges: [{ label: 'Kinh điển', type: 'new' }] },
  { url: '/DanhMuc/Phim truyền hình/Poster/Đồ Tể Dexter.jpg', title: 'Dexter', year: '2006', age: 'T18', duration: '8 Mùa', quality: 'Full HD', rating: '4.7/5.0', description: 'Chuyên gia pháp y Dexter Morgan có một bí mật: anh ta là một kẻ giết người hàng loạt săn lùng những kẻ tội phạm thoát tội.', badges: [{ label: 'Kịch tính', type: 'quality' }] },
  { url: '/DanhMuc/Phim truyền hình/Poster/Prison Break _ Vượt Ngục.jpg', title: 'Prison Break', year: '2005', age: 'T16', duration: '5 Mùa', quality: 'Full HD', rating: '4.8/5.0', description: 'Kỹ sư Michael Scofield tự đưa mình vào tù để lập kế hoạch giải cứu người anh trai bị kết án tử hình oan.', badges: [{ label: 'Hấp dẫn', type: 'glass' }] },
  { url: '/DanhMuc/Phim truyền hình/Poster/THE 100.jpg', title: 'The 100', year: '2014', age: 'T16', duration: '7 Mùa', quality: 'Full HD', rating: '4.6/5.0', description: 'Sau khi Trái Đất bị hủy diệt, 100 tội phạm thiếu niên được gửi xuống để kiểm tra xem hành tinh có thể sinh sống lại được không.', badges: [{ label: 'Viễn tưởng', type: 'new' }] },
  { id: 'm_178', url: '/DanhMuc/Phim truyền hình/Poster/The Walking Dead.jpg', title: 'The Walking Dead', year: '2010', age: 'T18', duration: '11 Mùa', quality: 'Full HD', rating: '4.7/5.0', description: 'Nhóm người sống sót phải chiến đấu với thây ma và cả những người sống sót khác trong thế giới hậu tận thế.', badges: [{ label: 'Kinh dị', type: 'quality' }] },
];

const TVShows = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { getMoviesByTag } = useContent();

  return (
    <>
      <Navbar onToggleFilter={() => setIsFilterOpen(!isFilterOpen)} />
      <FilterModal isActive={isFilterOpen} onToggle={() => setIsFilterOpen(!isFilterOpen)} />
      
      <HeroSlider images={heroImages} />

      <main className="movie-sections">
        <MovieRow title="Bạn không nên bỏ lỡ">
          {getMoviesByTag('Bạn không nên bỏ lỡ').map((m, i) => (
            <MovieCardVertical key={`miss-${i}`} movie={m} />
          ))}
        </MovieRow>
        <MovieRow title="Phim bất hủ">
          {getMoviesByTag('Phim bất hủ').map((m, i) => (
            <MovieCardVertical key={`imm-${i}`} movie={m} />
          ))}
        </MovieRow>
        <MovieRow title="Series đi cùng năm tháng">
          {getMoviesByTag('Series đi cùng năm tháng').map((m, i) => (
            <MovieCardVertical key={`ser-${i}`} movie={m} />
          ))}
        </MovieRow>
      </main>

      <Footer />
    </>
  );
};

export default TVShows;
