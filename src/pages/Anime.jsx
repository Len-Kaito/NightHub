import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterModal from '../components/FilterModal';
import HeroSlider from '../components/HeroSlider';
import MovieRow from '../components/MovieRow';
import MovieCardVertical from '../components/MovieCardVertical';
import { useContent } from '../context/ContentContext';

const heroImages = [
  { id: 'm_31', url: '/DanhMuc/Hoạt hình/Poster/Attack On Titan _Đại Chiến Người Khổng Lồ.jpg', title: 'Attack on Titan', year: '2013', age: 'T16', duration: '4 Mùa', quality: '2K', rating: '4.9/5.0', description: 'Nhân loại ẩn náu sau những bức tường khổng lồ để chống lại những con quái vật ăn thịt người được gọi là Titan.', badges: [{ label: 'Tập mới', type: 'new' }] },
  { url: '/DanhMuc/Hoạt hình/Poster/Kungfu Panda 4.jpg', title: 'Kung Fu Panda 4', year: '2024', age: 'P', duration: '1h 34m', quality: '2K', rating: '4.5/5.0', description: 'Po đối mặt với một kẻ thù mới có khả năng biến hình và phải tìm người kế thừa danh hiệu Thần Long Đại Hiệp.', badges: [{ label: 'Chiếu rạp', type: 'quality' }] },
  { id: 'm_3', url: '/DanhMuc/Hoạt hình/Poster/Naruto Shippudden.jpg', title: 'Naruto: Shippuden', year: '2007', age: 'T13', duration: '500 Tập', quality: 'Full HD', rating: '4.8/5.0', description: 'Naruto Uzumaki tiếp tục hành trình tập luyện để trở thành Hokage vĩ đại nhất và bảo vệ bạn bè khỏi tổ chức Akatsuki.', badges: [{ label: 'Vietsub', type: 'glass' }] },
  { id: 'm_16', url: '/DanhMuc/Hoạt hình/Poster/Oggy & The Cockroaches.jpg', title: 'Oggy and the Cockroaches', year: '1998', age: 'P', duration: '7 Mùa', quality: 'Full HD', rating: '4.6/5.0', description: 'Cuộc chiến bất tận và hài hước giữa chú mèo lười Oggy và ba con gián tinh nghịch sống trong nhà.', badges: [{ label: 'Hài hước', type: 'new' }] },
  { id: 'm_35', url: '/DanhMuc/Hoạt hình/Poster/Toy Story.jpg', title: 'Toy Story', year: '1995', age: 'P', duration: '1h 21m', quality: '2K', rating: '4.8/5.0', description: 'Cảnh sát vũ trụ Buzz Lightyear xuất hiện làm đảo lộn thế giới của chàng cao bồi Woody và những món đồ chơi khác.', badges: [{ label: 'Kinh điển', type: 'quality' }] },
];

const Anime = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { getMoviesByTag } = useContent();

  return (
    <>
      <Navbar onToggleFilter={() => setIsFilterOpen(!isFilterOpen)} />
      <FilterModal isActive={isFilterOpen} onToggle={() => setIsFilterOpen(!isFilterOpen)} />
      
      <HeroSlider images={heroImages} />

      <main className="movie-sections">
        <MovieRow title="Đang phổ biến">
          {getMoviesByTag('Đang phổ biến').map((m, i) => (
            <MovieCardVertical key={`pop-${i}`} movie={m} />
          ))}
        </MovieRow>
        <MovieRow title="Anime dài tập">
          {getMoviesByTag('Anime dài tập').map((m, i) => (
            <MovieCardVertical key={`long-${i}`} movie={m} />
          ))}
        </MovieRow>
        <MovieRow title="Cơn sốt phòng vé">
          {getMoviesByTag('Cơn sốt phòng vé').map((m, i) => (
            <MovieCardVertical key={`box-${i}`} movie={m} />
          ))}
        </MovieRow>
        <MovieRow title="Phiêu lưu kì thú">
          {getMoviesByTag('Phiêu lưu kì thú').map((m, i) => (
            <MovieCardVertical key={`adv-${i}`} movie={m} />
          ))}
        </MovieRow>
        <MovieRow title="Những người bạn nhỏ">
          {getMoviesByTag('Những người bạn nhỏ').map((m, i) => (
            <MovieCardVertical key={`kid-${i}`} movie={m} />
          ))}
        </MovieRow>
        <MovieRow title="Thể thao cực hạn">
          {getMoviesByTag('Thể thao cực hạn').map((m, i) => (
            <MovieCardVertical key={`spt-${i}`} movie={m} />
          ))}
        </MovieRow>
      </main>

      <Footer />
    </>
  );
};

export default Anime;
