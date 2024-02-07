import { useEffect } from "react";
import useMenuSatuanContext from "../context/useMenuSatuanContext";

export default function useFetchMenuSatuan() {
  const { dispatchMenu } = useMenuSatuanContext();

  useEffect(() => {
    async function getMenu() {
      const respon = await fetch(
        import.meta.env.VITE_API_SERVER + "/api/menu-satuan"
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
