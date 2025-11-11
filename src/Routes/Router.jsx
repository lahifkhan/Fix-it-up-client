import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import AddIssues from "../Pages/AddIssues";
import AllIssue from "../Pages/AllIssue";
import MyIssue from "../Pages/MyIssue";
import IssueDetails from "../Pages/IssueDetails";

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

      {
        path: "/allIssue",
        Component: AllIssue,
      },

      {
        path: "/myIssue",
        element: (
          <PrivateRoutes>
            {" "}
            <MyIssue></MyIssue>{" "}
          </PrivateRoutes>
        ),
      },

      {
        path: "issues/:id",
        element: (
          <PrivateRoutes>
            <IssueDetails></IssueDetails>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
