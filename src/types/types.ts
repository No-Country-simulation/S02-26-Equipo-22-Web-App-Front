// Definición de tipos globales para la aplicación

// Interfaz genérica para datos
export interface Data {
    data: string
    id?: number | void // El ID puede ser número, undefined o void (aunque void es inusual aquí)
}