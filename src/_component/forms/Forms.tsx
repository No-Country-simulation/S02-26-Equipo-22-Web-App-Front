import React from 'react';

interface FormsProps {
  children?: React.ReactNode;
}

// Componente Base de Formulario
// Actualmente actúa como un envoltorio simple para la etiqueta <form>
// Se puede extender para manejar validaciones globales o estilos por defecto
export default function Forms({ children }: FormsProps) {
  return (
    <form>
      {children}
    </form>
  );
}
