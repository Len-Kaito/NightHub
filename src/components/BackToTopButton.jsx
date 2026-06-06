import { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsAnimating(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <button
      id="back-to-top-btn"
      className={`back-to-top-btn${visible ? ' visible' : ''}${isAnimating ? ' animating' : ''}`}
      onClick={scrollToTop}
      aria-label="Quay lại đầu trang"
      title="Quay lại đầu trang"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 12 12 6 6 12" />
        <polyline points="18 18 12 12 6 18" />
      </svg>
    </button>
  );
};

export default BackToTopButton;
