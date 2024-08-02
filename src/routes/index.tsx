import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Login";
import Register from "../Register";
import ErrorBoundary from "@/ErrorBoundary";
import PageNotFound from "@/PageNotFound";
import RegisterSuccess from "@/RegisterSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
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
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
