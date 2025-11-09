import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import AddIssues from "../Pages/AddIssues";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },

      {
        path: "/register",
        Component: Register,
      },

      {
        path: "/addIssues",
        element: (
          <PrivateRoutes>
            {" "}
            <AddIssues></AddIssues>{" "}
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
