import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@components/layout/MainLayout";
import HomePage from "@/pages/home";
import ChizelWebPage from "@/pages/chizel-web";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, 
        element: <HomePage />,
      },
      {
        path: "chizel-web", 
        element: <ChizelWebPage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;