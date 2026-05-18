import React, { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext(null);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

import generatedMovies from '../data/generatedMovies.json';
import { AVATARS } from './UserContext';

// --- MOCK DATA ---
export const mockMovies = generatedMovies;

export const initialContinueWatching = [
  { id: 'm_1', progress: 45, remaining: '1h 15m' },
  { id: 'm_2', progress: 80, remaining: '12 phút' },
  { id: 'm_3', progress: 25, remaining: '2h 05m' }
];

const mockInitialComments = {
  '1': [
    { id: 'c1', author: 'Mê xem phim', time: '2 giờ trước', text: 'Phim quá đỉnh, phần kỹ xảo làm cực kỳ mãn nhãn. Kịch bản có chiều sâu hơn mình kỳ vọng! Rất đáng xem lại lần 2.', likes: 245, avatar: AVATARS[2] },
    { id: 'c2', author: 'TranBao99', time: '5 giờ trước', text: 'Đoạn cuối hơi rush một xíu nhưng tổng thể thì đạo diễn vẫn quá xuất sắc.', likes: 120, avatar: AVATARS[5] }
  ]
};

export const ContentProvider = ({ children }) => {
  const [movies] = useState(mockMovies);
  
  // Khởi tạo danh sách từ localStorage (nếu có)
  const [myList, setMyList] = useState(() => {
    const saved = localStorage.getItem('nighthub_mylist');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [comments, setComments] = useState(mockInitialComments);
  
  const [continueWatching, setContinueWatching] = useState(initialContinueWatching);

  // Lưu vào localStorage mỗi khi danh sách thay đổi
  useEffect(() => {
    localStorage.setItem('nighthub_mylist', JSON.stringify(myList));
  }, [myList]);

  const addToMyList = (movieId) => {
    if (!myList.includes(movieId)) {
      setMyList([...myList, movieId]);
    }
  };

  const removeFromMyList = (movieId) => {
    setMyList(myList.filter(id => id !== movieId));
  };

  const isInMyList = (movieId) => {
    return myList.includes(movieId);
  };

  // Helper selectors
  const getMoviesByCategory = (category) => movies.filter(m => m.category === category);
  const getMoviesByTag = (tag) => movies.filter(m => m.tags?.includes(tag));
  const getMovieById = (id) => movies.find(m => m.id === id) || null;
  const continueWatchingList = React.useMemo(() => {
    const cwMovies = movies.filter(m => m.tags?.includes('Tiếp tục xem'));
    return cwMovies.map((movie, index) => ({
      ...movie,
      progress: [45, 80, 25, 60, 30, 90, 15, 75][index % 8],
      remaining: ['1h 15m', '12 phút', '2h 05m', '40 phút', '1h 30m', '5 phút', '2h 45m', '18 phút'][index % 8]
    }));
  }, [movies]);
  // Trả về danh sách phim theo thứ tự lưu, mới nhất ở đầu (reverse stack)
  const getMyListMovies = () =>
    [...myList]
      .reverse()
      .map(id => movies.find(m => m.id === id))
      .filter(Boolean);

  const getCommentsForMovie = (movieId) => {
    return comments[movieId] || mockInitialComments['1'] || [];
  };

  const addComment = (movieId, commentObj) => {
    setComments(prev => ({
      ...prev,
      [movieId]: [commentObj, ...(prev[movieId] || getCommentsForMovie(movieId))]
    }));
  };

  return (
    <ContentContext.Provider value={{
      movies,
      myList,
      continueWatching: continueWatchingList,
      addToMyList,
      removeFromMyList,
      isInMyList,
      getMoviesByCategory,
      getMoviesByTag,
      getMovieById,
      getMyListMovies,
      getCommentsForMovie,
      addComment
    }}>
      {children}
    </ContentContext.Provider>
  );
};
