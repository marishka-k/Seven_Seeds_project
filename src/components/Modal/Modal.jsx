import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useEscape, useScrollLock } from '../../hooks/useScrollLock';
import { asset } from '../../utils/asset';
import styles from './Modal.module.css';

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Модальное окно: закрытие по крестику, Escape и клику по фону,
// фокус держится внутри и возвращается на кнопку, которая открыла окно
export default function Modal({ isOpen, onClose, labelledBy, children }) {
  const dialogRef = useRef(null);
  const openerRef = useRef(null);

  useScrollLock(isOpen);
  useEscape(isOpen, onClose);

  useEffect(() => {
    if (!isOpen) return undefined;
    openerRef.current = document.activeElement;
    // фокус на первое поле формы, иначе на само окно
    const first = dialogRef.current?.querySelector('input');
    (first || dialogRef.current)?.focus();

    return () => {
      openerRef.current?.focus?.({ preventScroll: true });
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Tab и Shift+Tab не выпускают фокус из окна
  const handleKeyDown = (event) => {
    if (event.key !== 'Tab') return;
    const nodes = dialogRef.current.querySelectorAll(FOCUSABLE);
    if (!nodes.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];

    if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const handleBackdrop = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  return createPortal(
    <div className={styles.modal} onMouseDown={handleBackdrop}>
      <div
        ref={dialogRef}
        className={styles.modal__dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      >
        <button type="button" className={styles.modal__close} aria-label="Закрыть" onClick={onClose}>
          <img src={asset('images/icons/close.svg')} alt="" width="20" height="20" />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
