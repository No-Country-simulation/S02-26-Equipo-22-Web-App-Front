import React from 'react';

interface UIReusableProps {
  children?: React.ReactNode;
}

// Componente Contenedor Reutilizable
// Un div genérico que puede servir como base para otros componentes de UI
export default function UIReusable({ children }: UIReusableProps) {
  return (
    <div>
      {children}
    </div>
  );
}
