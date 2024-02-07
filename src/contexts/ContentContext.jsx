import { createContext, useReducer } from "react";

export const ContentContext = createContext();

export const contentReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return {
        content: action.payload,
      };
    default:
      return state;
  }
};

export const ContentContextProvider = ({ children }) => {
  const [state, dispatchContent] = useReducer(contentReducer, {
    content: null,
  });
  return (
    <ContentContext.Provider value={{ ...state, dispatchContent }}>
      {children}
    </ContentContext.Provider>
  );
};
