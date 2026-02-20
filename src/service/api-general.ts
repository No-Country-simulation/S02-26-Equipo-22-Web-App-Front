// Utilidades y configuraciones generales de la API
import axios from 'axios';

// Define la URL base de la API.
// Si existe la variable de entorno NEXT_PUBLIC_API_URL, la usa. De lo contrario, usa localhost:3001.
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Crea una instancia de Axios con la configuración base
const api = axios.create({
  baseURL: API_URL, // Todas las peticiones usarán esta URL base
  headers: {
    'Content-Type': 'application/json', // Define que el contenido enviado/recibido es JSON
  },
});

export default api;


