import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterModal from '../components/FilterModal';
import HeroSlider from '../components/HeroSlider';
import MovieRow from '../components/MovieRow';
import MovieCardVertical from '../components/MovieCardVertical';
import { useContent } from '../context/ContentContext';
import { animeRows, animeHero } from '../data/movieData';

const Anime = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { getMovieById } = useContent();

  const heroImages = animeHero.map(id => {
    const m = getMovieById(id);
    if (!m) return null;
    return { ...m, url: m.posterHorizontal };
  }).filter(Boolean);

  return (
    <>
      <Navbar onToggleFilter={() => setIsFilterOpen(!isFilterOpen)} />
      <FilterModal isActive={isFilterOpen} onToggle={() => setIsFilterOpen(!isFilterOpen)} />
      
      {heroImages.length > 0 && <HeroSlider images={heroImages} />}

      <main className="movie-sections">
        {animeRows.map((row, index) => {
          const rowMovies = row.movies.map(id => getMovieById(id)).filter(Boolean);
          if (rowMovies.length === 0) return null;
          return (
            <MovieRow key={index} title={row.title}>
              {rowMovies.map((movie, idx) => (
                <MovieCardVertical key={`${row.title}-${idx}`} index={idx} movie={movie} />
              ))}
            </MovieRow>
          );
        })}
      </main>

      <Footer />
    </>
  );
};

export default Anime;
