import { useEffect } from "react";
import useContactContext from "../context/useContactContext";
import useAuthContext from "../context/useAuthContext";

export default function useFetchContact() {
  const { dispatchContact } = useContactContext();
  const { user } = useAuthContext();
  useEffect(() => {
    async function getContact() {
      const resContact = await fetch(
        import.meta.env.VITE_API_SERVER + "/api/contact",
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );
      const jsonContact = await resContact.json();
      const dataContact = jsonContact.data;

      dispatchContact({ type: "SET", payload: dataContact });
    }
    getContact();
  }, []);
}
