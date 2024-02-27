import { useEffect } from "react";
import useContentContext from "../context/useContentContext";
import useAuthContext from "../context/useAuthContext";

export default function useFetchContent() {
  const { dispatchContent } = useContentContext();
  const { user } = useAuthContext();
  useEffect(() => {
    async function getContent() {
      console.log(user)
      const resContent = await fetch(
        import.meta.env.VITE_API_SERVER + "/api/content",
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );
      const jsonContent = await resContent.json();
      const dataContent = jsonContent.data;

      dispatchContent({ type: "SET", payload: dataContent });
    }
    getContent();
  }, []);
}
