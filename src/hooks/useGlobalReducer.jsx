import { createContext, useContext, useState, useEffect } from "react";
import getState from "../store/store.jsx"; // tu store actual

// Crear contexto global
const StoreContext = createContext();

// Provider que envuelve toda la app
export function StoreProvider({ children }) {
  const [store, setStore] = useState({}); // estado global inicial vacío

  // Inicializar store y acciones
  const state = getState({
    getStore: () => store,
    setStore: (updatedStore) => setStore((prev) => ({ ...prev, ...updatedStore }))
  });

  // Al montar el provider, inicializamos el store con los datos iniciales
  useEffect(() => {
    setStore(state.store);
  }, []);

  return (
    <StoreContext.Provider value={{ store, actions: state.actions }}>
      {children}
    </StoreContext.Provider>
  );
}

// Hook personalizado para usar el store
export default function useGlobalReducer() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useGlobalReducer must be used within a StoreProvider");
  }
  return context;
}