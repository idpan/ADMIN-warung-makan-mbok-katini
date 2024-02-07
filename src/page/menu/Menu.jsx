import React from "react";
import { Outlet, NavLink } from "react-router-dom";
function Menu() {
  return (
    <>
      {/* [--tab-bg:salmon] [--tab-border-color:salmon] */}
      <div role="tablist" className="tabs tabs-bordered tabs-lg border-none">
        <NavLink
          role="tab"
          className={({ isActive }) => (isActive ? "tab tab-active" : "tab")}
          to="menu-satuan"
        >
          <p className="text-nowrap">Menu Satuan</p>
        </NavLink>
        <Outlet />
        <NavLink
          role="tab"
          className={({ isActive }) => (isActive ? "tab tab-active" : "tab")}
          to="tumpeng"
        >
          <p className="text-nowrap">Tumpeng</p>
        </NavLink>
        <Outlet />
        <NavLink
          role="tab"
          className={({ isActive }) => (isActive ? "tab tab-active" : "tab")}
          to="nasi-box"
        >
          <p className="text-nowrap">Nasi Box</p>
        </NavLink>
        <Outlet />
      </div>
    </>
  );
}

export default Menu;
