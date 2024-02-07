import { createContext, useReducer } from "react";
export const TumpengContext = createContext();

export function tumpengReducer(state, action) {
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
          return m.tumpeng_id !== id;
        }),
      };

    default:
      return state;
  }
}

export function TumpengContextProvider({ children }) {
  const [state, dispatchMenu] = useReducer(tumpengReducer, { menu: null });

  return (
    <TumpengContext.Provider value={{ ...state, dispatchMenu }}>
      {children}
    </TumpengContext.Provider>
  );
}
