import React from 'react';

interface TablesProps {
  children?: React.ReactNode;
}

// Componente Base de Tabla
// Actúa como un contenedor para tablas, ideal para estandarizar estilos o comportamientos
export default function Tables({ children }: TablesProps) {
  return (
    <table>
      {children}
    </table>
  );
}
