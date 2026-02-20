import api from '../api-general';

// Definición de las funciones de casos de uso (Use Cases) para realizar llamadas a la API
// Estas funciones utilizan la instancia de axios configurada previamente

// Endpoint base para los recordatorios
const endpoint = "/api/recordatorios";

// Petición GET: Obtiene datos del servidor
export const getRequest = async <T>(): Promise<T> => {
    const response = await api.get<T>(endpoint);
    return response.data; // Retorna solo los datos de la respuesta
};

// Petición POST: Envía nuevos datos al servidor
export const postRequest = async (data) => {
    const response = await api.post(endpoint, data);
    return response.data;
};

// Petición PUT: Actualiza un recurso existente
// Recibe el ID del recurso y los nuevos datos
export const putRequest = async (id: string, data: void) => {
    const response = await api.put(`${endpoint}/${id}`, data);
    return response.data;
};

// Petición PATCH: Usualmente para actualizaciones parciales (No implementada aquí)

// Petición DELETE: Elimina un recurso del servidor por su ID
export const deleteRequest = async (id: string) => {
    const response = await api.delete(`${endpoint}/${id}`);
    return response.data;
};


