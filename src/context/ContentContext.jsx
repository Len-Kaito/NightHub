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

// --- DEMO USER PROFILES (for comment avatar click) ---
export const DEMO_USERS = {
  'Mê xem phim': {
    name: 'Mê xem phim',
    avatar: AVATARS[2],
    bio: 'Mê phim từ nhỏ, review phim mỗi ngày 🎬',
    joined: 'Tháng 3, 2024',
    favorites: ['Hành động', 'Kinh dị', 'Hoạt hình'],
    totalComments: 148,
    showActivity: true,  // Cho phép xem hồ sơ
  },
  'TranBao99': {
    name: 'TranBao99',
    avatar: AVATARS[5],
    bio: '',
    joined: 'Tháng 8, 2024',
    favorites: ['Tâm lý', 'Khoa học viễn tưởng'],
    totalComments: 52,
    showActivity: false,  // Không cho phép xem hồ sơ
  },
};

// --- MOCK DATA ---
export const mockMovies = generatedMovies;

export const initialContinueWatching = [
  { id: 'm_1', progress: 45, remaining: '1h 15m' },
  { id: 'm_2', progress: 80, remaining: '12 phút' },
  { id: 'm_3', progress: 25, remaining: '2h 05m' }
];

const mockInitialComments = {
  '1': [
    { id: 'c1', author: 'Mê xem phim', time: '2 giờ trước', text: 'Phim quá đỉnh, phần kỹ xảo làm cực kỳ mãn nhãn. Kịch bản có chiều sâu hơn mình kỳ vọng! Rất đáng xem lại lần 2.', likes: 245, avatar: AVATARS[2], replies: [] },
    { id: 'c2', author: 'TranBao99', time: '5 giờ trước', text: 'Đoạn cuối hơi rush một xíu nhưng tổng thể thì đạo diễn vẫn quá xuất sắc.', likes: 120, avatar: AVATARS[5], replies: [] }
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
      [movieId]: [{ ...commentObj, replies: commentObj.replies || [] }, ...(prev[movieId] || getCommentsForMovie(movieId))]
    }));
  };

  const addReply = (movieId, commentId, replyObj) => {
    setComments(prev => {
      const movieComments = prev[movieId] || getCommentsForMovie(movieId);
      const updatedComments = movieComments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), replyObj]
          };
        }
        return comment;
      });
      return { ...prev, [movieId]: updatedComments };
    });
  };

  const deleteComment = (movieId, commentId) => {
    setComments(prev => {
      const movieComments = prev[movieId] || [];
      return { ...prev, [movieId]: movieComments.filter(c => c.id !== commentId) };
    });
  };

  const deleteReply = (movieId, commentId, replyId) => {
    setComments(prev => {
      const movieComments = prev[movieId] || [];
      const updatedComments = movieComments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: (comment.replies || []).filter(r => r.id !== replyId)
          };
        }
        return comment;
      });
      return { ...prev, [movieId]: updatedComments };
    });
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
      addComment,
      addReply,
      deleteComment,
      deleteReply
    }}>
      {children}
    </ContentContext.Provider>
  );
};
