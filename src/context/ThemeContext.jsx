import React, { createContext, useState, useEffect, useContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // 1. Lấy theme từ localStorage, nếu không có thì mặc định là 'light'
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light';
    });

    // 2. Cập nhật data-theme và localStorage mỗi khi theme thay đổi
    useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            // Hoặc có thể dùng document.documentElement.setAttribute('data-theme', 'light');
            // Tuy nhiên trong index.css, chế độ sáng là thẻ không có data-theme='dark'.
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook tiện lợi để sử dụng ThemeContext
export const useTheme = () => useContext(ThemeContext);
