import { useEffect } from "react";
import useTumpengContext from "../context/useTumpengContext";
import useAuthContext from "../context/useAuthContext";

export default function useFetchTumpeng() {
  const { dispatchMenu } = useTumpengContext();
  const { user } = useAuthContext();
  useEffect(() => {
    async function getMenu() {
      const respon = await fetch(
        import.meta.env.VITE_API_SERVER + "/api/tumpeng",
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );
      const json = await respon.json();
      const data = json.data;

      if (!respon.ok) {
        throw Error;
      }
      if (respon.ok) {
        dispatchMenu({ type: "SET", payload: data });
      }
    }
    getMenu();
  }, []);
}
