import { useContext } from "react";
import { TumpengContext } from "../../contexts/TumpengContext";
export default function useTumpengContext() {
  const context = useContext(TumpengContext);
  if (!context) {
    throw Error("useMenuContext must be use in MenuContextProvider !!");
  }
  return context;
}
