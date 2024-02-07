import { useEffect } from "react";
import useContactContext from "../context/useContactContext";

export default function useFetchContact() {
  const { dispatchContact } = useContactContext();

  useEffect(() => {
    async function getContact() {
      const resContact = await fetch("http://localhost:8000/api/contact");
      const jsonContact = await resContact.json();
      const dataContact = jsonContact.data;

      dispatchContact({ type: "SET", payload: dataContact });
    }
    getContact();
  }, []);
}
