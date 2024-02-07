import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";

export default function useContactContext() {
  const context = useContext(ContactContext);
  if (!context) {
    throw Error("useContactContext must be use in ContactContextProvider !!");
  }
  return context;
}
