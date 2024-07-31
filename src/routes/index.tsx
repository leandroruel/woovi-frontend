import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Login from "../Login";
import Register from "../Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '*',
        element: <div>404</div>
    }
]);

export default router;