import { useContext } from "react";
import { ContentContext } from "../../contexts/ContentContext";

export default function useContentContext() {
  const context = useContext(ContentContext);
  if (!context) {
    throw Error("useContentContext must be use in CententContextProvider !!");
  }
  return context;
}
