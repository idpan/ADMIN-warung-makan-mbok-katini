import { useEffect } from "react";
import useContentContext from "../context/useContentContext";

export default function useFetchContent() {
  const { dispatchContent } = useContentContext();
  useEffect(() => {
    async function getContent() {
      const resContent = await fetch("http://localhost:8000/api/content");
      const jsonContent = await resContent.json();
      const dataContent = jsonContent.data;

      dispatchContent({ type: "SET", payload: dataContent });
    }
    getContent();
  }, []);
}
