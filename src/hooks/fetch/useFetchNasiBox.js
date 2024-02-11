import { useEffect } from "react";
import useNasiBoxContext from "../context/useNasiBoxContext";
import useAuthContext from "../context/useAuthContext";

export default function useFetchNasiBox() {
  const { dispatchMenu } = useNasiBoxContext();
  const { user } = useAuthContext();
  useEffect(() => {
    async function getMenu() {
      const respon = await fetch(
        import.meta.env.VITE_API_SERVER + "/api/nasi-box",
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
