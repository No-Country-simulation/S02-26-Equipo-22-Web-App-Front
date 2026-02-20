'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

// Definición de las props que recibe el proveedor de contexto
interface ContextProviderProps {
  children: ReactNode; // Elementos hijos que tendrán acceso al contexto
}

// Componente ContextProvider
// Configura y provee el cliente de React Query a toda la aplicación
export default function ContextProvider({ children }: ContextProviderProps) {
  // Crea una instancia de QueryClient usando useState para asegurar que sea única por sesión
  // y no se recree en cada renderizado del componente
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // Tiempo de "frescura" de los datos: 1 minuto
            refetchOnWindowFocus: false, // Evita recargar los datos automáticamente al enfocar la ventana
          },
        },
      })
  );

  return (
    // Envuelve a los hijos con el QueryClientProvider para habilitar el uso de hooks como useQuery
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
