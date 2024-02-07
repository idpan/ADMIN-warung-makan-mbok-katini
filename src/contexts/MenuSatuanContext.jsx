import { createContext, useReducer } from "react";
export const MenuSatuanContext = createContext();

export function menuSatuanReducer(state, action) {
  switch (action.type) {
    case "SET":
      return {
        menu: action.payload,
      };

    case "CREATE":
      return {
        menu: [action.payload, ...state.menu],
      };

    case "DELETE":
      const id = action.payload;
      return {
        menu: state.menu.filter((m) => {
          return m.menu_satuan_id !== id;
        }),
      };
    default:
      return state;
  }
}
export function MenuSatuanContextProvider({ children }) {
  const [state, dispatchMenu] = useReducer(menuSatuanReducer, { menu: null });

  return (
    <MenuSatuanContext.Provider value={{ ...state, dispatchMenu }}>
      {children}
    </MenuSatuanContext.Provider>
  );
}
