import React from 'react';

interface ModalProps {
  isOpen: boolean; // Indica si el modal está visible
  onClose: () => void; // Función para cerrar el modal
  children?: React.ReactNode; // Contenido del modal
}

// Componente Modal Básico
// Muestra una ventana emergente simple con un botón de cierre
export default function Modal({ isOpen, onClose, children }: ModalProps) {
  // Si no está abierto, no renderiza nada (retorna null)
  if (!isOpen) return null;

  return (
    <div>
      <div>
        <button onClick={onClose}>Close</button>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
