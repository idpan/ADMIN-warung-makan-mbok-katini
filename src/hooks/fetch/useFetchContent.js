import { useEffect } from "react";
import useContentContext from "../context/useContentContext";
import useAuthContext from "../context/useAuthContext";

export default function useFetchContent() {
  const { dispatchContent } = useContentContext();
  const { user } = useAuthContext();
  useEffect(() => {
    async function getContent() {
      const resContent = await fetch("http://localhost:8000/api/content", {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      });
      const jsonContent = await resContent.json();
      const dataContent = jsonContent.data;

      dispatchContent({ type: "SET", payload: dataContent });
    }
    getContent();
  }, []);
}
