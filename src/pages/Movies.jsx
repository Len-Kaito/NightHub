import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterModal from '../components/FilterModal';
import HeroSlider from '../components/HeroSlider';
import MovieRow from '../components/MovieRow';
import MovieCardVertical from '../components/MovieCardVertical';
import { useContent } from '../context/ContentContext';

const heroImages = [
  { url: '/DanhMuc/Phim điện ảnh/Poster/Caribean Pirates.jpg', title: 'Pirates of the Caribbean', year: '2003', age: 'T13', duration: '2h 23m', quality: '2K', rating: '4.8/5.0', description: 'Cướp biển Jack Sparrow và thợ rèn Will Turner hợp tác để cứu con gái thống đốc khỏi băng cướp biển bị nguyền rủa.', badges: [{ label: 'Phổ biến', type: 'new' }] },
  { id: 'm_125', url: '/DanhMuc/Phim điện ảnh/Poster/Dark Knight.jpg', title: 'The Dark Knight', year: '2008', age: 'T16', duration: '2h 32m', quality: '2K', rating: '4.9/5.0', description: 'Batman đối đầu với Joker - tên tội phạm điên loạn mang đến hỗn loạn và tàn phá cho thành phố Gotham.', badges: [{ label: 'Tuyệt tác', type: 'quality' }] },
  { id: 'm_105', url: '/DanhMuc/Phim điện ảnh/Poster/Lord Of The Rings.jpg', title: 'The Lord of the Rings', year: '2001', age: 'T13', duration: '2h 58m', quality: 'Full HD', rating: '4.9/5.0', description: 'Hành trình sử thi của Frodo và Hiệp hội bảo vệ nhẫn để tiêu diệt Chiếc nhẫn quyền lực và chúa tể bóng tối Sauron.', badges: [{ label: 'Vietsub', type: 'glass' }] },
  { url: '/DanhMuc/Phim điện ảnh/Poster/Memoris Of Murder.jpg', title: 'Memories of Murder', year: '2003', age: 'T16', duration: '2h 11m', quality: 'Full HD', rating: '4.8/5.0', description: 'Hai thám tử tại một tỉnh lẻ Hàn Quốc điều tra vụ án giết người hàng loạt bí ẩn gây chấn động dư luận.', badges: [{ label: 'Kinh điển', type: 'new' }] },
  { id: 'm_126', url: '/DanhMuc/Phim điện ảnh/Poster/TopGun_Maverick.jpg', title: 'Top Gun: Maverick', year: '2022', age: 'T13', duration: '2h 10m', quality: '2K', rating: '4.8/5.0', description: 'Pete "Maverick" Mitchell trở lại huấn luyện một đội phi công xuất sắc cho một nhiệm vụ sinh tử chưa từng có.', badges: [{ label: 'Bom tấn', type: 'quality' }] },
];

const Movies = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { getMoviesByTag } = useContent();

  return (
    <>
      <Navbar onToggleFilter={() => setIsFilterOpen(!isFilterOpen)} />
      <FilterModal isActive={isFilterOpen} onToggle={() => setIsFilterOpen(!isFilterOpen)} />
      
      <HeroSlider images={heroImages} />

      <main className="movie-sections">
        <MovieRow title="Hot Hit">
          {getMoviesByTag('Hot Hit').map((m, i) => (
            <MovieCardVertical key={`hot-${i}`} movie={m} />
          ))}
        </MovieRow>
        <MovieRow title="Tinh hoa Hollywood">
          {getMoviesByTag('Tinh hoa hollywood').map((m, i) => (
            <MovieCardVertical key={`hw-${i}`} movie={m} />
          ))}
        </MovieRow>
        <MovieRow title="Tuyệt tác Oscar">
          {getMoviesByTag('Tuyệt tác Oscar').map((m, i) => (
            <MovieCardVertical key={`osc-${i}`} movie={m} />
          ))}
        </MovieRow>
        <MovieRow title="Cổ điển tôn trọng">
          {getMoviesByTag('Cổ điển tôn trọng').map((m, i) => (
            <MovieCardVertical key={`cl-${i}`} movie={m} />
          ))}
        </MovieRow>
        <MovieRow title="Thư giãn cuối tuần">
          {getMoviesByTag('Thư giãn cuối tuần').map((m, i) => (
            <MovieCardVertical key={`rel-${i}`} movie={m} />
          ))}
        </MovieRow>
      </main>

      <Footer />
    </>
  );
};

export default Movies;
