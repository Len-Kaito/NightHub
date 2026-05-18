import React, { createContext, useState, useContext, useCallback } from 'react';
import ReactDOM from 'react-dom';

const ToastContext = createContext(null);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({ visible: false, message: '', isError: false });

    const showToast = useCallback((message, isError = false) => {
        setToast({ visible: true, message, isError });
        setTimeout(() => {
            setToast((prev) => ({ ...prev, visible: false }));
        }, 2000);
    }, []);

    const toastContent = toast.visible ? (
        <div style={{
            position: 'fixed',
            top: 'auto',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 99999,
            backgroundColor: toast.isError ? '#ef4444' : '#0284c7',
            color: 'white',
            padding: '12px 22px',
            borderRadius: '10px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
            fontSize: '15px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            whiteSpace: 'nowrap',
            animation: 'toastFadeIn 0.3s ease forwards',
        }}>
            {toast.isError ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
            ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                </svg>
            )}
            {toast.message}
            <style>
                {`
                @keyframes toastFadeIn {
                    from { opacity: 0; transform: translateX(-50%) translateY(16px); }
                    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
                }
                `}
            </style>
        </div>
    ) : null;

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toast.visible && ReactDOM.createPortal(toastContent, document.body)}
        </ToastContext.Provider>
    );
};
