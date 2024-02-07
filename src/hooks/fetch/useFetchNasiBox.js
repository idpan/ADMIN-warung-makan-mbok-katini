import { useEffect } from "react";
import useNasiBoxContext from "../context/useNasiBoxContext";

export default function useFetchNasiBox() {
  const { dispatchMenu } = useNasiBoxContext();
  useEffect(() => {
    async function getMenu() {
      const respon = await fetch(
        import.meta.env.VITE_API_SERVER + "/api/nasi-box"
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
