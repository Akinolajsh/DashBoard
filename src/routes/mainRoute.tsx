import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/Block/Admin/AdminLayout";
import Dashboard from "../Pages/Dashboard";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);
