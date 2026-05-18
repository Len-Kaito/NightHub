import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

const DAYS = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
const MONTHS = ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'];

const CustomDatePicker = ({ value, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const inputRef = useRef(null);
    const popupRef = useRef(null);

    const [currentMonth, setCurrentMonth] = useState(() => {
        if (value && value.length === 10) {
            const [d, m, y] = value.split('/');
            const parsed = new Date(`${y}-${m}-${d}`);
            if (!isNaN(parsed.getTime())) return parsed;
        }
        return new Date();
    });

    useEffect(() => {
        if (!isOpen) return;
        const rect = inputRef.current.getBoundingClientRect();
        setCoords({ top: rect.bottom + window.scrollY + 5, left: rect.left + window.scrollX });

        const handleClickOutside = (e) => {
            if (popupRef.current && !popupRef.current.contains(e.target) &&
                inputRef.current && !inputRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const generateMatrix = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        const daysInPrevMonth = getDaysInMonth(year, month - 1);

        let matrix = [];
        let week = [];

        for (let i = firstDay - 1; i >= 0; i--) {
            week.push({ day: daysInPrevMonth - i, isCurrentMonth: false, date: new Date(year, month - 1, daysInPrevMonth - i) });
        }
        for (let i = 1; i <= daysInMonth; i++) {
            week.push({ day: i, isCurrentMonth: true, date: new Date(year, month, i) });
            if (week.length === 7) { matrix.push(week); week = []; }
        }
        let nextDay = 1;
        while (week.length < 7 || matrix.length < 6) {
            if (week.length === 7) { matrix.push(week); week = []; }
            if (matrix.length === 6) break;
            week.push({ day: nextDay++, isCurrentMonth: false, date: new Date(year, month + 1, nextDay - 1) });
        }
        return matrix;
    };

    const handleDateClick = (dateObj) => {
        const d = String(dateObj.getDate()).padStart(2, '0');
        const m = String(dateObj.getMonth() + 1).padStart(2, '0');
        const y = dateObj.getFullYear();
        onChange(`${d}/${m}/${y}`);
        setIsOpen(false);
    };

    const handleInputChange = (e) => {
        let val = e.target.value.replace(/\D/g, '').slice(0, 8);
        if (val.length >= 3 && val.length <= 4) val = `${val.slice(0, 2)}/${val.slice(2)}`;
        else if (val.length > 4) val = `${val.slice(0, 2)}/${val.slice(2, 4)}/${val.slice(4)}`;
        onChange(val);
    };

    const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));

    const matrix = generateMatrix();

    // Style chung cho nút nav
    const navBtnStyle = {
        background: 'var(--bg-input)', border: 'none', color: 'var(--text-main)',
        cursor: 'pointer', padding: '4px 10px', borderRadius: '6px', fontSize: '14px',
        fontWeight: 600, transition: 'all 0.2s', lineHeight: 1,
    };

    // --- Mini Dropdown state cho tháng/năm ---
    const [openDropdown, setOpenDropdown] = useState(null); // 'month' | 'year' | null

    const MiniDropdown = ({ label, options, value, onSelect, id }) => {
        const isOpen = openDropdown === id;
        return (
            <div style={{ position: 'relative' }}>
                <div
                    onClick={() => setOpenDropdown(isOpen ? null : id)}
                    style={{
                        background: 'var(--bg-input)', border: '1px solid #cbd5e1',
                        borderRadius: '8px', padding: '5px 28px 5px 10px',
                        fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                        color: 'var(--text-main)', transition: 'border-color 0.2s',
                        whiteSpace: 'nowrap', position: 'relative', userSelect: 'none',
                        borderColor: isOpen ? 'var(--accent-color)' : '#cbd5e1',
                    }}
                >
                    {label}
                    <span style={{
                        position: 'absolute', right: '8px', top: '50%',
                        transform: isOpen ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)',
                        transition: 'transform 0.2s',
                        width: 0, height: 0,
                        borderLeft: '4px solid transparent', borderRight: '4px solid transparent',
                        borderTop: '4px solid var(--text-main)',
                    }} />
                </div>
                {isOpen && (
                    <div style={{
                        position: 'absolute', top: '100%', left: 0, marginTop: '4px',
                        background: 'var(--modal-bg, var(--always-white))', border: '1px solid var(--border-color)',
                        borderRadius: '8px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                        maxHeight: '180px', overflowY: 'auto', zIndex: 10,
                        minWidth: '100%', animation: 'dpFadeIn 0.15s ease-out',
                    }}>
                        {options.map(opt => (
                            <div key={opt.value}
                                onClick={() => { onSelect(opt.value); setOpenDropdown(null); }}
                                style={{
                                    padding: '8px 14px', fontSize: '13px', cursor: 'pointer',
                                    color: opt.value === value ? 'var(--accent-color)' : 'var(--text-main)',
                                    fontWeight: opt.value === value ? 700 : 400,
                                    background: opt.value === value ? 'rgba(2,132,199,0.08)' : 'transparent',
                                    transition: 'background 0.15s',
                                    borderBottom: '1px solid var(--border-color)',
                                    whiteSpace: 'nowrap',
                                }}
                                onMouseEnter={(e) => { if (opt.value !== value) e.currentTarget.style.background = 'var(--bg-hover, rgba(0,0,0,0.04))'; }}
                                onMouseLeave={(e) => { if (opt.value !== value) e.currentTarget.style.background = 'transparent'; }}
                            >
                                {opt.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    const monthOptions = MONTHS.map((m, i) => ({ label: m, value: i }));
    const yearOptions = Array.from({ length: 11 }, (_, i) => ({ label: String(2020 + i), value: 2020 + i }));

    const portalContent = isOpen ? ReactDOM.createPortal(
        <div ref={popupRef} style={{
            position: 'absolute', top: coords.top, left: coords.left,
            zIndex: 2147483647,
            background: 'var(--modal-bg, var(--always-white))',
            border: '1px solid var(--border-color)', borderRadius: '12px',
            padding: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            width: '300px', color: 'var(--text-main)',
            transformOrigin: 'top left',
            animation: 'dpFadeIn 0.2s ease-out'
        }}>
            {/* Header: [<]  [Tháng ▼] [Năm ▼]  [>] */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', gap: '6px' }}>
                <button
                    style={navBtnStyle}
                    onClick={prevMonth}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-color)'; e.currentTarget.style.color = 'var(--always-white)'; e.currentTarget.style.transform = 'scale(1.15)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-input)'; e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.transform = 'scale(1)'; }}
                >&lt;</button>

                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <MiniDropdown
                        id="month"
                        label={MONTHS[currentMonth.getMonth()]}
                        options={monthOptions}
                        value={currentMonth.getMonth()}
                        onSelect={(v) => setCurrentMonth(new Date(currentMonth.getFullYear(), v, 1))}
                    />
                    <MiniDropdown
                        id="year"
                        label={String(currentMonth.getFullYear())}
                        options={yearOptions}
                        value={currentMonth.getFullYear()}
                        onSelect={(v) => setCurrentMonth(new Date(v, currentMonth.getMonth(), 1))}
                    />
                </div>

                <button
                    style={navBtnStyle}
                    onClick={nextMonth}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-color)'; e.currentTarget.style.color = 'var(--always-white)'; e.currentTarget.style.transform = 'scale(1.15)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-input)'; e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.transform = 'scale(1)'; }}
                >&gt;</button>
            </div>

            {/* Days header */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '8px', textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>
                {DAYS.map(d => <div key={d}>{d}</div>)}
            </div>

            {/* Date cells */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center' }}>
                {matrix.map((row, r) => row.map((cell, c) => {
                    const isSelected = value && value === `${String(cell.date.getDate()).padStart(2,'0')}/${String(cell.date.getMonth()+1).padStart(2,'0')}/${cell.date.getFullYear()}`;
                    return (
                        <div key={`${r}-${c}`}
                             onClick={() => handleDateClick(cell.date)}
                             style={{
                                padding: '7px 0', fontSize: '13px', borderRadius: '6px', cursor: 'pointer',
                                color: cell.isCurrentMonth ? (isSelected ? 'var(--always-white)' : 'var(--text-main)') : 'var(--text-muted)',
                                background: isSelected ? 'var(--accent-red)' : 'transparent',
                                opacity: cell.isCurrentMonth ? 1 : 0.4,
                                transition: 'all 0.15s ease',
                                border: '1px solid transparent',
                             }}
                             onMouseEnter={(e) => {
                                if (!isSelected) {
                                    e.currentTarget.style.background = 'var(--bg-hover, rgba(0,0,0,0.06))';
                                    e.currentTarget.style.borderColor = 'var(--border-color)';
                                    e.currentTarget.style.transform = 'scale(1.12)';
                                }
                             }}
                             onMouseLeave={(e) => {
                                if (!isSelected) {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.borderColor = 'transparent';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }
                             }}
                        >
                            {cell.day}
                        </div>
                    );
                }))}
            </div>
            <style>{`@keyframes dpFadeIn { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }`}</style>
        </div>,
        document.body
    ) : null;

    return (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
            <input
                ref={inputRef} type="text" className="form-control"
                placeholder={placeholder} value={value} onChange={handleInputChange} maxLength={10}
            />
            <div
                style={{ position: 'absolute', right: '10px', width: '24px', height: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px', color: 'var(--text-muted)' }}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
            </div>
            {portalContent}
        </div>
    );
};

export default CustomDatePicker;
