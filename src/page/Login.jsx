import React, { useState } from "react";

import SubmitButton from "../components/atom/button/SubmitButton";
import { useLogin } from "../hooks/useLogin";

import { EyeFill, EyeSlash } from "react-bootstrap-icons";
import useAuthContext from "../hooks/context/useAuthContext";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const { login, isloading, error } = useLogin();
  const { user } = useAuthContext();
  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(email, password);
  };
  const handleVisible = (event) => {
    setIsVisible(event.target.checked);
  };

  return (
    <>
      {user ? (
        <Navigate to="/" />
      ) : (
        <div className="border h-dvh flex justify-center items-center">
          <form onSubmit={handleSubmit} className="shadow-2xl py-8 px-16">
            <h1 className="text-3xl mb-8">login</h1>
            {user && <h5>you already loged in</h5>}
            <div className="mb-3">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                id="email"
                className="input input-bordered w-full  "
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="label ">
                Password
              </label>
              <div className="join bg-slate-300 ">
                <input
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type={isVisible ? "text" : "password"}
                  id="password"
                  className="input input-bordered join-item"
                />

                <label
                  htmlFor="visible"
                  className="join-item px-4 flex items-center cursor-pointer"
                >
                  {isVisible ? <EyeSlash /> : <EyeFill />}
                  <input
                    id="visible"
                    type="checkbox"
                    onChange={handleVisible}
                    className="checkbox hidden"
                  />
                </label>
              </div>
            </div>
            <div className="mb-3">
              <SubmitButton disabled={isloading}>Login</SubmitButton>
            </div>
            {error && (
              <div className="alert alert-error ale " role="alert">
                {error}
              </div>
            )}
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
