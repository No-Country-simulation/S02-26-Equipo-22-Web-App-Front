import { create } from "zustand";

export interface Tokens {
  access_token: string;
}

interface AuthStore {
  token: Tokens | null;
  setToken: (token: Tokens) => void;
  removeToken: () => void;
}

const getTokenFromStorage = (): Tokens | null => {
  if (typeof window === "undefined") return null;
  // si el token no existe, se retorna null
  try {
    // se intenta obtener el token
    const stored = window.localStorage.getItem("access_token");
    if (!stored) return null;
    return JSON.parse(stored) as Tokens;
  } catch (error) {
    console.warn("Failed to parse token from localStorage:", error);
    // si es un token expirado o invalido, se elimina para que no crashee la pagina
    window.localStorage.removeItem("access_token");
    return null;
  }
};

// se crea el store
export const authStore = create<AuthStore>()((set) => ({
  token: getTokenFromStorage(),
  // se crea la funcion para setear el token
  setToken: (token: Tokens) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("access_token", JSON.stringify(token));
    }
    set({ token });
  },
  // funcion para eliminar el token
  removeToken: () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("access_token");
    }
    set({ token: null });
  },
}));