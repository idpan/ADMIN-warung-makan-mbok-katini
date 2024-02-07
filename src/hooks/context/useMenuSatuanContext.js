import { useContext } from "react";
import { MenuSatuanContext } from "../../contexts/MenuSatuanContext";
export default function useMenuSatuanContext() {
  const context = useContext(MenuSatuanContext);
  if (!context) {
    throw Error("useMenuContext must be use in MenuContextProvider !!");
  }
  return context;
}
