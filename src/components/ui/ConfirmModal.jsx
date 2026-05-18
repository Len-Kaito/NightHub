import React from 'react';
import ReactDOM from 'react-dom';

/**
 * ConfirmModal — UX chuẩn theo quy tắc:
 * - Normal: Nút trái = Hủy (outline xám) | Nút phải = Xác nhận (fill xanh accent)
 * - Danger: Nút trái = Quay lại (fill xanh đậm, để thu hút) | Nút phải = Xác nhận (viền đỏ, không fill)
 * - Alert: Chỉ 1 nút "Đã hiểu" (full width, fill xanh)
 */
const ConfirmModal = ({
    isOpen,
    title,
    description,
    onConfirm,
    onCancel,
    confirmText,
    cancelText,
    isDanger = false,
    isAlert = false,
}) => {
    if (!isOpen) return null;

    const resolvedConfirmText = confirmText || (isDanger ? 'Xác nhận' : 'Đồng ý');
    const resolvedCancelText = cancelText || (isDanger ? 'Quay lại' : 'Hủy');

    const modalContent = (
        <div className="modal-overlay" style={{ opacity: 1, display: 'flex' }} onClick={isAlert ? onConfirm : undefined}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="modal-buttons">
                    {isAlert ? (
                        // Alert mode: chỉ 1 nút
                        <button className="btn-primary" onClick={onConfirm} style={{ width: '100%' }}>
                            Đã hiểu
                        </button>
                    ) : isDanger ? (
                        // Danger mode: Trái fill xanh, Phải viền đỏ không fill
                        <>
                            <button className="btn-primary" onClick={onCancel}>
                                {resolvedCancelText}
                            </button>
                            <button className="btn-danger-outline" onClick={onConfirm}>
                                {resolvedConfirmText}
                            </button>
                        </>
                    ) : (
                        // Normal mode: Trái outline xám, Phải fill xanh
                        <>
                            <button className="btn-cancel" onClick={onCancel}>
                                {resolvedCancelText}
                            </button>
                            <button className="btn-primary" onClick={onConfirm}>
                                {resolvedConfirmText}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(modalContent, document.body);
};

export default ConfirmModal;
