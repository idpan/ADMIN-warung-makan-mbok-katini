import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import { ContactContextProvider } from "./contexts/ContactContext.jsx";
import { ContentContextProvider } from "./contexts/ContentContext.jsx";
import Contact from "./page/Contact.jsx";
import Content from "./page/Content.jsx";
import Menu from "./page/menu/Menu.jsx";
import MenuSatuan from "./page/menu/menuSatuan/MenuSatuan.jsx";
import Tumpeng from "./page/menu/tumpeng/Tumpeng.jsx";
import NasiBox from "./page/menu/nasiBox/NasiBox.jsx";
import { TumpengContextProvider } from "./contexts/TumpengContext.jsx";
import { NasiBoxContextProvider } from "./contexts/NasiBoxContext.jsx";
import { MenuSatuanContextProvider } from "./contexts/MenuSatuanContext.jsx";
import NasiBoxCreate from "./page/menu/nasiBox/NasiBoxCreate.jsx";
import DetailTumpeng from "./page/menu/tumpeng/DetailTumpeng.jsx";
import DetailNasiBox from "./page/menu/nasiBox/DetailNasiBox.jsx";
import TumpengCreate from "./page/menu/tumpeng/TumpengCreate.jsx";
import MenuSatuanCreate from "./page/menu/menuSatuan/MenuSatuanCreate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/content",
        element: <Content />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu",
        element: <Menu />,
        children: [
          {
            path: "menu-satuan",
            element: <MenuSatuan />,
          },
          {
            path: "/menu/",
            element: <MenuSatuan />,
          },
          {
            path: "tumpeng",
            element: <Tumpeng />,
          },
          {
            path: "nasi-box",
            element: <NasiBox />,
            children: [{ path: "create", element: <NasiBoxCreate /> }],
          },
        ],
      },
      { path: "/menu/tumpeng/detail/:id", element: <DetailTumpeng /> },
      { path: "/menu/nasi-box/detail/:id", element: <DetailNasiBox /> },
      { path: "/menu/tumpeng/add", element: <TumpengCreate /> },
      { path: "/menu/nasi-box/add", element: <NasiBoxCreate /> },
      // { path: "/menu/tumpeng/add", element: <TestUpdate /> },
      { path: "/menu/menu-satuan/add", element: <MenuSatuanCreate /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContactContextProvider>
      <ContentContextProvider>
        <TumpengContextProvider>
          <NasiBoxContextProvider>
            <MenuSatuanContextProvider>
              <RouterProvider router={router} />
            </MenuSatuanContextProvider>
          </NasiBoxContextProvider>
        </TumpengContextProvider>
      </ContentContextProvider>
    </ContactContextProvider>
  </React.StrictMode>
);
