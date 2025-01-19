import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import TemplatePage from "../Pages/TemplatePage/TemplatePage";
import EditingLayout from "../Layout/EditingLayout";
import EditTemplate from "../Pages/EditTemplate/EditTemplate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/templates",
        element: <TemplatePage></TemplatePage>,
      },
    ],
  },
  {
    path: "/edit",
    element: <EditingLayout></EditingLayout>,
    children: [
      {
        path: "/edit/template",
        element: <EditTemplate></EditTemplate>,
      },
    ],
  },
]);
