import React, { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isBubbleEnabled, setIsBubbleEnabled] = useState(() => {
        const saved = localStorage.getItem('nighthub_chat_enabled');
        return saved !== null ? JSON.parse(saved) : true;
    });

    const toggleBubbleEnabled = (enabled) => {
        setIsBubbleEnabled(enabled);
        localStorage.setItem('nighthub_chat_enabled', JSON.stringify(enabled));
        if (!enabled) setIsChatOpen(false); // Đóng chat nếu tắt bong bóng
    };

    return (
        <ChatContext.Provider value={{ isChatOpen, setIsChatOpen, isBubbleEnabled, toggleBubbleEnabled }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error("useChat must be used within a ChatProvider");
    }
    return context;
};
