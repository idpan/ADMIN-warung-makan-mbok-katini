import { Link, NavLink, Navigate, Outlet } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <div className="main-wrapper">
        <aside className=" ">
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
      <Navigate to="/content" />
    </>
  );
}

export default App;
