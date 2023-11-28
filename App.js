import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import RestaurantContainer from "./components/RestaurantContainer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => (
  <div className="app-layout">
    <HeaderComponent />
    <Outlet/>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent/>,
    children: [
      {
        path: "/",
        element: <RestaurantContainer />,
        errorElement: <ErrorComponent/>
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorComponent/>
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorComponent/>
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
        errorElement: <ErrorComponent/>
      }
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
