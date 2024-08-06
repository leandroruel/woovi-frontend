import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ErrorBoundary from "@/pages/ErrorBoundary";
import PageNotFound from "@/pages/PageNotFound";
import RegisterSuccess from "@/pages/RegisterSuccess";
import Dashboard from "@/pages/Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";
import { useAuth } from "@/hooks/useAuth";
import Home from "@/pages/Dashboard/Home";

const Routes = () => {
  const { token } = useAuth() || {};

  const routesForPublic = [
    {
      path: "/about",
      element: <div>about page</div>,
    },

    {
      path: "*",
      element: <PageNotFound />,
    },
  ];

  const routesForNotProtected = [
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/register/success/:userId",
      element: <RegisterSuccess />,
      errorElement: <ErrorBoundary />,
    },
  ];

  const routesForProtected = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
          errorElement: <ErrorBoundary />,
          children: [
            {
              path: "/",
              element: <Home />,
              errorElement: <ErrorBoundary />,
            },
            {
              path: "/transfers",
              element: <div>transfer page</div>,
              errorElement: <ErrorBoundary />,
            },
            {
              path: "/transactions",
              element: <div>transactions page</div>,
              errorElement: <ErrorBoundary />,
            },
            {
              path: "/profile",
              element: <div>profile page</div>,
              errorElement: <ErrorBoundary />,
            },
          ]
        },       
      ],
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotProtected : []),
    ...routesForProtected,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
