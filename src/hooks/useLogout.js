import { Type } from "react-bootstrap-icons";
import useAuthContext from "./context/useAuthContext";

export const useLogout = () => {
  const { dispatchAuth } = useAuthContext();

  const logout = () => {
    localStorage.removeItem("user");
    dispatchAuth({ type: "LOGOUT" });
  };
  return logout;
};
