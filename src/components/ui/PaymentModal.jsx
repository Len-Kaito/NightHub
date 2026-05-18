import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CustomSelect from './CustomSelect';

const COUNTRY_OPTIONS = [
    { label: 'Việt Nam', value: 'vn' },
    { label: 'Hoa Kỳ (USA)', value: 'us' },
    { label: 'Nhật Bản', value: 'jp' },
    { label: 'Hàn Quốc', value: 'kr' },
    { label: 'Trung Quốc', value: 'cn' },
    { label: 'Châu Âu', value: 'eu' },
];

const PaymentModal = ({ isOpen, onClose, onSuccess }) => {
    const [view, setView] = useState('options'); // 'options' | 'card' | 'momo'
    const [country, setCountry] = useState('vn');
    
    // Momo states
    const [momoPhone, setMomoPhone] = useState('');

    // Card states
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const [cardName, setCardName] = useState('');

    const isMomoValid = momoPhone.length === 10 && /^\d+$/.test(momoPhone);
    const isCardValid = cardNumber.trim().length > 0 && cardExpiry.trim().length > 0 && cardCvv.trim().length > 0 && cardName.trim().length > 0;

    if (!isOpen) return null;

    const handleClose = () => {
        setView('options');
        setMomoPhone('');
        setCardNumber('');
        setCardExpiry('');
        setCardCvv('');
        setCardName('');
        onClose();
    };

    const handleMomoSuccess = () => {
        const last4 = momoPhone.slice(-4);
        onSuccess({ id: Date.now().toString(), type: 'momo', text: `MoMo **** ${last4}` });
        handleClose();
    };

    const handleCardSuccess = () => {
        const last4 = cardNumber.slice(-4) || 'XXXX';
        onSuccess({ id: Date.now().toString(), type: 'card', text: `Visa **** ${last4}` });
        handleClose();
    };

    const modalContent = (
        <div className="modal-overlay" style={{ display: 'flex', opacity: 1 }} onClick={handleClose}>
            <div className="modal-box" style={{ maxWidth: '440px', textAlign: 'left', overflow: 'visible' }} onClick={(e) => e.stopPropagation()}>
                <h3 style={{ textAlign: 'center', marginBottom: '8px' }}>Thêm Phương Thức Thanh Toán</h3>
                <p style={{ textAlign: 'center', marginBottom: '20px' }}>Chọn phương thức thanh toán bên dưới</p>

                {view === 'options' && (
                    <div className="payment-options">
                        <button 
                            className="payment-btn" 
                            style={{ background: 'var(--momo-color, #a50064)', borderColor: 'var(--momo-color, #a50064)', color: 'var(--always-white)', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                            onClick={() => setView('momo')}
                        >
                            <img src="/images/momo.png" alt="MoMo" style={{ width: '24px', height: '24px', objectFit: 'contain', borderRadius: '4px' }} onError={(e) => { e.target.src = 'https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png' }} />
                            MoMo e-wallet
                        </button>
                        <button 
                            className="payment-btn"
                            onClick={() => setView('card')}
                        >
                            Thẻ tín dụng hoặc thẻ ghi nợ
                        </button>
                    </div>
                )}

                {view === 'momo' && (
                    <div className="card-form" style={{ display: 'block', background: 'var(--bg-input, #f8fafc)' }}>
                        <div className="form-group" style={{ marginBottom: '20px' }}>
                            <label style={{ margin: 0, marginBottom: '8px' }}>Số điện thoại MoMo</label>
                            <input 
                                type="text" className="form-control" placeholder="Nhập 10 số điện thoại đăng ký MoMo" 
                                value={momoPhone} onChange={(e) => setMomoPhone(e.target.value)}
                            />
                        </div>
                        
                        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.5' }}>
                            Bạn sẽ được chuyển hướng sang ứng dụng MoMo để xác nhận liên kết. Vui lòng đảm bảo ứng dụng MoMo đã được cài đặt trên thiết bị của bạn.
                        </p>

                        <button 
                            className="btn-primary" 
                            style={{ width: '100%', background: '#a50064', opacity: isMomoValid ? 1 : 0.5, cursor: isMomoValid ? 'pointer' : 'not-allowed' }} 
                            onClick={handleMomoSuccess}
                            disabled={!isMomoValid}
                        >
                            Xác Nhận Liên Kết
                        </button>

                        <button 
                            className="btn-cancel" 
                            style={{ width: '100%', marginTop: '10px', textAlign: 'center' }}
                            onClick={() => setView('options')}
                        >
                            Quay lại
                        </button>
                    </div>
                )}

                {view === 'card' && (
                    <div className="card-form" style={{ display: 'block', background: 'var(--bg-input, #f8fafc)' }}>
                        <div className="form-group" style={{ marginBottom: '12px' }}>
                            <label style={{ margin: 0 }}>Số thẻ</label>
                            <div className="card-input-wrapper">
                                <input 
                                    type="text" className="form-control" placeholder="0000 0000 0000 0000" 
                                    value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}
                                />
                                <div className="tooltip-icon">?
                                    <div className="tooltip-content">
                                        <img src="/images/card_JCB.jpg" alt="JCB" />
                                        <img src="/images/card_VISA.png" alt="VISA" />
                                        <img src="/images/card_MTC.png" alt="MasterCard" />
                                        <img src="/images/card_NP.jpg" alt="Napas" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-row" style={{ marginBottom: '12px' }}>
                            <div className="form-group">
                                <label style={{ margin: 0 }}>MM/YY</label>
                                <input 
                                    type="text" className="form-control" placeholder="MM/YY" 
                                    value={cardExpiry} onChange={(e) => setCardExpiry(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ margin: 0 }}>Mã bảo mật</label>
                                <input 
                                    type="text" className="form-control" placeholder="CVV" 
                                    value={cardCvv} onChange={(e) => setCardCvv(e.target.value)}
                                />
                            </div>
                        </div>

                        <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                            Mã bảo mật là 3 chữ số nằm ở mặt sau của thẻ.
                        </p>

                        <div className="form-group" style={{ marginBottom: '12px' }}>
                            <label style={{ margin: 0 }}>Tên chủ thẻ</label>
                            <input 
                                type="text" className="form-control" placeholder="Tên in trên thẻ" 
                                value={cardName} onChange={(e) => setCardName(e.target.value)}
                            />
                        </div>

                        <div className="form-group" style={{ marginBottom: '20px' }}>
                            <label style={{ margin: 0 }}>Quốc gia/Khu vực</label>
                            <CustomSelect 
                                options={COUNTRY_OPTIONS}
                                value={country}
                                onChange={setCountry}
                                maxHeight="129px"
                            />
                        </div>

                        <button 
                            className="btn-primary" 
                            style={{ width: '100%', opacity: isCardValid ? 1 : 0.5, cursor: isCardValid ? 'pointer' : 'not-allowed' }} 
                            onClick={handleCardSuccess}
                            disabled={!isCardValid}
                        >
                            Lưu Thẻ
                        </button>

                        <button 
                            className="btn-cancel" 
                            style={{ width: '100%', marginTop: '10px', textAlign: 'center' }}
                            onClick={() => setView('options')}
                        >
                            Quay lại
                        </button>
                    </div>
                )}

                {view === 'options' && (
                    <button 
                        className="btn-cancel" 
                        style={{ width: '100%', marginTop: '10px', textAlign: 'center' }}
                        onClick={handleClose}
                    >
                        Đóng
                    </button>
                )}
            </div>
        </div>
    );

    return ReactDOM.createPortal(modalContent, document.body);
};

export default PaymentModal;
