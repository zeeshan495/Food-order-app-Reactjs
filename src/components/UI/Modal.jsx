import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';

export default function Modal({ children, open, className = '' }) {
  const dialog = useRef(null);
  useEffect(() => {
    const modal = dialog.current;
    if (open) modal.showModal();
    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className ? className : ''}`}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}
