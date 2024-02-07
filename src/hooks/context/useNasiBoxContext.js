import { useContext } from "react";
import { NasiBoxContext } from "../../contexts/NasiBoxContext";
export default function useNasiBoxContext() {
  const context = useContext(NasiBoxContext);
  if (!context) {
    throw Error("useMenuContext must be use in MenuContextProvider !!");
  }
  return context;
}
