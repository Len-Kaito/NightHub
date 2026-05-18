import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

const CustomSelect = ({ options, value, onChange, width = '100%', id, maxHeight = '220px' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);
    const dropdownRef = useRef(null);
    const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });

    // Handle clicking outside to close
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                wrapperRef.current && !wrapperRef.current.contains(event.target) &&
                dropdownRef.current && !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const updateCoords = () => {
        if (wrapperRef.current) {
            const rect = wrapperRef.current.getBoundingClientRect();
            setCoords({
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX,
                width: rect.width
            });
        }
    };

    useEffect(() => {
        if (isOpen) {
            updateCoords();
            window.addEventListener('resize', updateCoords);
            window.addEventListener('scroll', updateCoords);
        } else {
            window.removeEventListener('resize', updateCoords);
            window.removeEventListener('scroll', updateCoords);
        }
        return () => {
            window.removeEventListener('resize', updateCoords);
            window.removeEventListener('scroll', updateCoords);
        };
    }, [isOpen]);

    const selectedOption = options.find(opt => opt.value === value) || options[0] || { label: '', value: '' };

    const handleSelect = (optionValue) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    const dropdownContent = isOpen ? ReactDOM.createPortal(
        <div 
            ref={dropdownRef}
            className="custom-select-options"
            style={{
                top: `${coords.top + 5}px`,
                left: `${coords.left}px`,
                width: `${coords.width}px`,
                maxHeight: maxHeight,
                zIndex: 2147483647, // Max z-index
                animation: 'dpFadeIn 0.15s ease-out'
            }}
        >
            {options.map((opt, idx) => (
                <div 
                    key={idx} 
                    className="custom-option" 
                    onClick={() => handleSelect(opt.value)}
                >
                    <span>
                        {opt.label}
                        {opt.icon && <span style={{ marginLeft: '8px' }}>{opt.icon}</span>}
                    </span>
                </div>
            ))}
        </div>,
        document.body
    ) : null;

    return (
        <div 
            className={`custom-select-wrapper ${isOpen ? 'open' : ''}`} 
            style={{ width }} 
            ref={wrapperRef}
            id={id}
        >
            <div className="custom-select-trigger" onClick={() => setIsOpen(!isOpen)}>
                <span>
                    {selectedOption.label}
                    {selectedOption.icon && <span style={{ marginLeft: '8px' }}>{selectedOption.icon}</span>}
                </span> 
                <div className="arrow"></div>
            </div>
            {dropdownContent}
        </div>
    );
};

export default CustomSelect;
