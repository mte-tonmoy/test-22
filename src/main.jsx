import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./assets/Home.jsx";
import About from "./assets/About.jsx";
import Signin from "./assets/Signin.jsx";
import Profile from "./assets/Profile.jsx";
import SignUp from "./assets/SignUp.jsx";
import Table from "./assets/Table.jsx";
import Request from "./assets/Request.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/table",
        element: <Table />,
      },
      {
        path: "/request",
        element: <Request />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  //  <React.StrictMode>

  //   </React.StrictMode>,
);
