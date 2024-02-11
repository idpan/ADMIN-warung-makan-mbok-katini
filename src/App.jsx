import { Link, NavLink, Navigate, Outlet } from "react-router-dom";
import "./App.css";
import { BoxArrowLeft } from "react-bootstrap-icons";
import { useLogout } from "./hooks/useLogout";
import useAuthContext from "./hooks/context/useAuthContext";
function App() {
  const logout = useLogout();
  const { user } = useAuthContext();
  return (
    <>
      {user ? (
        <div className="main-wrapper">
          <aside className=" ">
            <button
              onClick={logout}
              className="btn btn-neutral text-base rounded-none absolute top-8 left-4"
            >
              <BoxArrowLeft width="18" height="18" /> Logout
            </button>
            <ul className="menu">
              <li>
                <NavLink className="" to="/content">
                  Content
                </NavLink>
              </li>
              <li>
                <NavLink className="" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink className="" to="/menu/menu-satuan">
                  Menu
                </NavLink>
              </li>
            </ul>
            {/* <nav className="grid flex-col h-fit gap-4 menu">
          </nav> */}
          </aside>
          <main className="pb-28 ">
            <Outlet />
          </main>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default App;
