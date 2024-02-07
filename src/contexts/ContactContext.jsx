import { createContext, useReducer } from "react";

export const ContactContext = createContext();

export const contactReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return {
        contact: action.payload,
      };
    default:
      return state;
  }
};

export const ContactContextProvider = ({ children }) => {
  const [state, dispatchContact] = useReducer(contactReducer, {
    contact: null,
  });
  return (
    <ContactContext.Provider value={{ ...state, dispatchContact }}>
      {children}
    </ContactContext.Provider>
  );
};
