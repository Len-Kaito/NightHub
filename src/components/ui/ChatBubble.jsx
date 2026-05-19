import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useChat } from '../../context/ChatContext';
import { useUser } from '../../context/UserContext';

const ChatBubble = () => {
    const location = useLocation();
    const { isChatOpen, setIsChatOpen, isBubbleEnabled } = useChat();
    const { isLoggedIn } = useUser();
    
    // Hide on specific routes
    const hiddenRoutes = ['/login', '/register', '/switch-profile', '/choose-genre', '/forgot-password'];
    const isHidden = hiddenRoutes.some(route => location.pathname.includes(route));

    // Chat state
    const [messages, setMessages] = useState([
        { text: 'Xin chào! 👋 Mình là trợ lý ảo của Nighthub. Mình có thể giúp gì cho bạn hôm nay?', sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    // Drag state
    const [position, setPosition] = useState({ x: window.innerWidth - 90, y: window.innerHeight - 90 });
    const [isDragging, setIsDragging] = useState(false); // chỉ dùng cho cursor style
    const hasDraggedRef = useRef(false); // ref để đọc đồng bộ trong event listener
    const dragRef = useRef({ startX: 0, startY: 0, currentX: window.innerWidth - 90, currentY: window.innerHeight - 90 });
    const wrapperRef = useRef(null);
    const windowRef = useRef(null);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            setPosition(prev => {
                const newX = Math.min(prev.x, window.innerWidth - 60);
                const newY = Math.min(prev.y, window.innerHeight - 60);
                dragRef.current.currentX = newX;
                dragRef.current.currentY = newY;
                return { x: newX, y: newY };
            });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isChatOpen) {
            scrollToBottom();
        }
    }, [messages, isChatOpen]);

    const [isTyping, setIsTyping] = useState(false);
    const [suggestions, setSuggestions] = useState([
        'Tìm phim hành động', 'Cách hủy gói VIP', 'Chi tiết về hỗ trợ kỹ thuật'
    ]);

    const handleSend = (textToSend) => {
        const text = typeof textToSend === 'string' ? textToSend : inputValue;
        if (!text.trim()) return;
        
        const newMessages = [...messages, { text, sender: 'user' }];
        setMessages(newMessages);
        setInputValue('');

        // Remove suggestions after first interaction if desired, or keep them
        setSuggestions([]);
        
        // Show typing indicator
        setIsTyping(true);

        // Mock auto-reply
        setTimeout(() => {
            setIsTyping(false);
            let replyText = 'Cảm ơn bạn đã liên hệ. Hiện tại hệ thống đang trong quá trình nâng cấp, mình sẽ ghi nhận phản hồi của bạn nhé!';
            
            const lowerText = text.toLowerCase();
            if (lowerText.includes('hành động') || lowerText.includes('phim')) {
                replyText = 'Nighthub có rất nhiều phim hành động hấp dẫn như "John Wick 4", "Mission: Impossible" hay "Fast X". Bạn có muốn mình điều hướng đến danh mục Hành Động không?';
            } else if (lowerText.includes('vip')) {
                replyText = 'Để hủy gói VIP, bạn vui lòng truy cập vào Cài đặt > Gói cước & Thanh toán, sau đó cuộn xuống và chọn "Hủy gia hạn" nhé.';
            } else if (lowerText.includes('kỹ thuật') || lowerText.includes('hỗ trợ')) {
                replyText = 'Nếu bạn gặp lỗi giật lag, hãy thử kiểm tra lại kết nối mạng hoặc đổi server phát. Để được hỗ trợ chuyên sâu, bạn có thể gửi email đến support@nighthub.com.';
            }
            
            setMessages(prev => [...prev, { text: replyText, sender: 'bot' }]);
        }, 1500); // 1.5s delay to show typing animation
    };

    // Drag handlers
    const handlePointerDown = (e) => {
        // Don't drag if clicking inside chat window, only FAB
        if (isChatOpen && e.target.closest('.chat-window')) return;
        
        // Reset drag tracking mỗi lần nhấn
        hasDraggedRef.current = false;
        setIsDragging(false);
        dragRef.current.startX = e.clientX - dragRef.current.currentX;
        dragRef.current.startY = e.clientY - dragRef.current.currentY;
        
        document.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('pointerup', handlePointerUp);
    };

    const handlePointerMove = (e) => {
        // Đánh dấu đã kéo bằng ref (đọc được đồng bộ trong handlePointerUp)
        hasDraggedRef.current = true;
        setIsDragging(true); // chỉ dùng cho cursor style

        let newX = e.clientX - dragRef.current.startX;
        let newY = e.clientY - dragRef.current.startY;

        // Boundary check
        newX = Math.max(0, Math.min(newX, window.innerWidth - 60));
        newY = Math.max(0, Math.min(newY, window.innerHeight - 60));

        dragRef.current.currentX = newX;
        dragRef.current.currentY = newY;
        setPosition({ x: newX, y: newY });

        // Calculate dynamic origin for chat window based on position
        if (windowRef.current) {
            if (newX < 320) {
                windowRef.current.style.right = 'auto';
                windowRef.current.style.left = '0';
                windowRef.current.style.transformOrigin = 'bottom left';
            } else {
                windowRef.current.style.right = '0';
                windowRef.current.style.left = 'auto';
                windowRef.current.style.transformOrigin = 'bottom right';
            }

            if (newY < window.innerHeight / 3) {
                windowRef.current.style.bottom = 'auto';
                windowRef.current.style.top = '75px';
                if (windowRef.current.style.transformOrigin.includes('left')) {
                    windowRef.current.style.transformOrigin = 'top left';
                } else {
                    windowRef.current.style.transformOrigin = 'top right';
                }
            } else {
                windowRef.current.style.bottom = '75px';
                windowRef.current.style.top = 'auto';
            }
        }
    };

    const handlePointerUp = (e) => {
        document.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('pointerup', handlePointerUp);
        
        // Đọc ref thay vì state — luôn có giá trị mới nhất
        const wasDragging = hasDraggedRef.current;
        hasDraggedRef.current = false;
        setIsDragging(false);

        // Chỉ toggle chat nếu là click thuần (không kéo)
        if (!wasDragging && !e.target.closest('.chat-window')) {
            setIsChatOpen(prev => !prev);
        }
    };

    if (isHidden || !isBubbleEnabled || !isLoggedIn) return null;

    return (
        <div 
            className="chat-widget-wrapper" 
            ref={wrapperRef}
            style={{ 
                left: position.x, 
                top: position.y,
                bottom: 'auto',
                right: 'auto',
                cursor: isDragging ? 'grabbing' : 'auto'
            }}
        >
            <div 
                className={`chat-window ${isChatOpen ? 'active' : ''}`} 
                ref={windowRef}
                onPointerDown={(e) => e.stopPropagation()} // Prevent dragging when interacting with window
            >
                <div className="chat-header">
                    <h4>
                        <img src="/images/chatbot.png" alt="Bot" className="chat-header-avatar" />
                        NightBot
                    </h4>
                    <button className="close-chat-btn" onClick={() => setIsChatOpen(false)}>✖</button>
                </div>
                <div className="chat-body">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`chat-msg-wrapper ${msg.sender}`}>
                            <div className={`chat-msg ${msg.sender}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="chat-msg-wrapper bot">
                            <div className="chat-msg bot typing-indicator">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                
                {suggestions.length > 0 && (
                    <div className="chat-suggestions">
                        {suggestions.map((sug, idx) => (
                            <button key={idx} className="suggestion-chip" onClick={() => handleSend(sug)}>
                                {sug}
                            </button>
                        ))}
                    </div>
                )}

                <div className="chat-input-wrapper">
                    <div className="chat-input-area">
                        <input 
                            type="text" 
                            placeholder="Nhập tin nhắn..." 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && inputValue.trim() && handleSend()}
                        />
                        <button className="chat-send-btn" onClick={handleSend} disabled={!inputValue.trim()}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
                        </button>
                    </div>
                    <div className="chat-disclaimer">NightBot là AI và có thể mắc sai sót.</div>
                </div>
            </div>

            <div 
                className="chat-fab" 
                title="Hỗ trợ trực tuyến"
                onPointerDown={handlePointerDown}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
                <img src="/images/chatbot.png" alt="Chatbot Icon" draggable={false} />
            </div>
        </div>
    );
};

export default ChatBubble;
