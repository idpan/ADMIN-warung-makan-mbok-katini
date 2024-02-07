import { useEffect } from "react";
import useTumpengContext from "../context/useTumpengContext";

export default function useFetchTumpeng() {
  const { dispatchMenu } = useTumpengContext();
  useEffect(() => {
    async function getMenu() {
      const respon = await fetch(
        import.meta.env.VITE_API_SERVER + "/api/tumpeng"
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
