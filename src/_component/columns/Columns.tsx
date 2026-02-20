import React from 'react';

interface ColumnsProps {
  children?: React.ReactNode;
}

// Componente de Columnas
// Estructura básica para organizar contenido en columnas (layout)
export default function Columns({ children }: ColumnsProps) {
  return (
    <div>
      {children}
    </div>
  );
}
