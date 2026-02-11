## 📁 Arquitectura

```
src/
│
├── _component/
│   ├── context/                 # Providers globales
│   ├── columns/                 # Columnas de las DataTables (shadcn)
│   ├── tables/                  # Header y body de tablas (shadcn)
│   ├── ui/                      # Componentes reutilizables
│   ├── layout.tsx               # Layout principal
│   ├── Login.tsx                # Página/Login
│   └── ...                      # Otros componentes generales
│
├── app/
│   └── components/ui/           # Componentes descargados de shadcn
│
├── mock/                        # JSON y datos mockeados para tablas
│
├── lib/                         # Utilidades internas (conectadas a shadcn)
│
├── schemas/                     # Schemas con Zod + React Hook Form
│
├── service/
│   ├── mutations/
│   │   └── funciones de react query conectadas a peticiones rest de axios
│   ├── use-cases/
│   │   └── funciones conectadas al .env y al axios para peticiones rest
│   └── api.general.ts => acá guardamos las constantes conectadas al archivo .env 
└── types/
    └── todas nuestras interfaces para typescript diferenciadas por entidad o uso

│   ├── mutations/               # React Query mutations + Axios
│   ├── use-cases/               # Lógica de negocio + conexión .env
│   └── api.general.ts           # Configuración base y constantes (.env)
│
└── types/                       # Interfaces TypeScript por entidad o uso
```
