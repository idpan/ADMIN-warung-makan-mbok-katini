import { createContext, useReducer } from "react";
export const NasiBoxContext = createContext();

export function nasiBoxReducer(state, action) {
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
          return m.nasi_box_id !== id;
        }),
      };

    default:
      return state;
  }
}

export function NasiBoxContextProvider({ children }) {
  const [state, dispatchMenu] = useReducer(nasiBoxReducer, { menu: null });

  return (
    <NasiBoxContext.Provider value={{ ...state, dispatchMenu }}>
      {children}
    </NasiBoxContext.Provider>
  );
}
