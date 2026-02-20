'use client';

import { useMutation, useQueryClient, UseMutationOptions, useQuery } from '@tanstack/react-query';
import { deleteRequest, getRequest, postRequest, putRequest } from '../use-cases/api-use-cases';
import { Data } from '@/types/types';

// Mutaciones genéricas para manipular datos (CRUD) usando React Query
// Este archivo contiene hooks personalizados para realizar peticiones y gestionar el estado del cliente

// Función global que retorna todos los hooks de mutación REST
export const RestMutations = () => {
    // Obtiene el cliente de React Query para invalidar queries y refrescar datos
    const queryClient = useQueryClient();

    // Hook para obtener recordatorios (GET)
    const GetQueryRecordatorio = useQuery({
        queryKey: ["key_"], // Clave única para identificar esta consulta en caché
        queryFn: () => {
            return getRequest(); // Llama a la función de API
        },
    });

    // Hook para crear un nuevo registro (POST)
    // Recibe los datos a enviar
    const usePostMutation = ({ data }: Data) => {

        return useMutation({
            // Función de mutación que ejecuta la petición POST
            mutationFn: async ({ data }: { data: Data }) => {
                return postRequest(data);
            },
            // Se ejecuta si la petición es exitosa
            onSuccess: () => {
                // Invalida la caché para refrescar la lista de datos
                queryClient.invalidateQueries({
                    queryKey: ["key_"],
                });
                console.log("exitoso");
                alert("registro de recordatorio exitoso");
            }
        });
    };

    // Hook para actualizar un registro existente (PUT)
    // Recibe los datos y el ID del elemento a modificar
    const usePutMutation = ({ data, id }) => {

        return useMutation({
            mutationFn: async ({ data, id }: Data) => {
                return putRequest({ data, id }); // Llama a la API de actualización
            },
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ["key_recordatorio"], // Refresca los datos asociados a esta clave
                });
                console.log("exitoso");
                alert("registro de recordatorio exitoso");
            }
        });
    };


    // Hook para eliminar un registro (DELETE)
    // Recibe el ID del elemento a eliminar
    const useDeleteMutation = (id: string) => {

        return useMutation({
            mutationFn: async (id: string) => {
                return deleteRequest(id);
            },
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ["key_recordatorio"],
                });
                console.log("exitoso");
                alert("registro de recordatorio exitoso");
            }
        });
    };

    // Devuelve todos los hooks para que puedan ser usados en los componentes
    return {
        usePostMutation,
        usePutMutation,
        useDeleteMutation,
        GetQueryRecordatorio
    };
};
