import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface SideModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const SideModal: React.FC<SideModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = ''
}) => {
  // Fechar modal com ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevenir scroll do body
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className={`modal-content ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <X size={20} />
        </button>
        
        <div className="modal-header">
          <h2 id="modal-title" className="text-2xl font-bold text-white mb-4">
            {title}
          </h2>
        </div>
        
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

// Hook para gerenciar estado do modal
export const useSideModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState<any>(null);

  const openModal = (data?: any) => {
    setModalData(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData(null);
  };

  return {
    isOpen,
    modalData,
    openModal,
    closeModal
  };
};