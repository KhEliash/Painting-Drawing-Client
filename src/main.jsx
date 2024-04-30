import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home";
import Mylist from "./Components/Mylist";
import LogIn from "./Components/LogIn";
import Register from "./Components/Register";
import AuthProvider from "./Authprovider/AuthProvider";
import AddCraft from "./Components/AddCraft";
import AllCraft from "./Components/AllCraft";
import Error from "./Components/Error";
import PrivetRouts from "./Routs/PrivateRouts";
import ViewDetails from "./Components/ViewDetails";
 import UpdateCraft from "./Components/UpdateCraft";
import ArtCategory from "./HomeComponents/ArtCategory";
import Category from "./Components/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch("https://painting-drawing-server.vercel.app/addCraft"),
      },
      {
        path: "/allcraft",
        element: <AllCraft></AllCraft>,
        loader: () =>fetch("https://painting-drawing-server.vercel.app/addCraft"),
      },
      {
        path: "/addcraft",
        element: (
          <PrivetRouts>
            <AddCraft></AddCraft>
          </PrivetRouts>
        ),
      },
      {
        path: "/mylist",
        element: (
          <PrivetRouts>
            <Mylist></Mylist>
          </PrivetRouts>
        ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/category",
        element: <Category></Category>,
      },

      {
        path: "/viewdetails/:id",
        element: (
          <PrivetRouts>
            <ViewDetails></ViewDetails>
          </PrivetRouts>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateCraft></UpdateCraft>,
      },
       
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
