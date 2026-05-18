import React, { useRef, useEffect } from 'react';

const MovieRow = ({ title, children, isTop10 }) => {
  const gridRef = useRef(null);
  const rightBtnRef = useRef(null);
  const leftBtnRef = useRef(null);

  const handleSlide = (dir) => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: dir * 600, behavior: 'smooth' });
    }
  };

  const updateButtons = (grid) => {
    if (!grid || !leftBtnRef.current || !rightBtnRef.current) return;
    const atStart = grid.scrollLeft <= 10;
    const atEnd = Math.ceil(grid.scrollLeft + grid.clientWidth) >= grid.scrollWidth - 10;
    leftBtnRef.current.style.display = atStart ? 'none' : 'flex';
    rightBtnRef.current.style.display = atEnd ? 'none' : 'flex';
  };

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    // Kiểm tra ngay sau khi mount
    updateButtons(grid);
    // Cập nhật khi resize cửa sổ
    const onResize = () => updateButtons(grid);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [children]);

  return (
    <>
      {title && <h3 className="row-title">{title}</h3>}
      <div className="slider-wrapper">
        <button
          ref={leftBtnRef}
          className="slide-btn left-btn"
          onClick={() => handleSlide(-1)}
          style={{ display: 'none' }}
        >
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" fill="none"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <div
          className={`card-grid ${isTop10 ? 'top10-grid' : ''}`}
          onScroll={(e) => updateButtons(e.target)}
          ref={gridRef}
        >
          {children}
        </div>
        <button
          ref={rightBtnRef}
          className="slide-btn right-btn"
          onClick={() => handleSlide(1)}
          style={{ display: 'none' }}
        >
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>
    </>
  );
};

export default MovieRow;
