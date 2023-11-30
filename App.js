import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import RestaurantContainer from "./components/RestaurantContainer";
// Dynamic Loading/ lazy Loading/ Chunking
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorComponent from "./components/ErrorComponent";
import useOnlineStatus from "./utils/useOnlineStatus";

const AppLayout = () => {
  const isOnline = useOnlineStatus();
return(
  <div className="app-layout">
    <HeaderComponent />
    {isOnline ? <Outlet/> : <h1>Please connect to the interet and try again!</h1>}
  </div>
);
}

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
        element: <Suspense fallback={<h1>Loading</h1>}><RestaurantMenu /></Suspense>,
        errorElement: <ErrorComponent/>
      }
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
