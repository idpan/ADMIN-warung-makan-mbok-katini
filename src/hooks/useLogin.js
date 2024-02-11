import { useState } from "react";
import useAuthContext from "./context/useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatchAuth } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(false);

    const api_url = import.meta.env.VITE_API_SERVER + "/api/user/login";
    // console.log(requestBody);
    const respon = await fetch(api_url, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await respon.json();
    const user = { email: json.email, token: json.token };

    if (!respon.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (respon.ok) {
      //   save user into local storage
      localStorage.setItem("user", JSON.stringify(user));
      //   update auth context
      dispatchAuth({
        type: "LOGIN",
        payload: user,
      });

      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
