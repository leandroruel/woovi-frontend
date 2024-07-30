import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Login from "../Login";

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
        path: '*',
        element: <div>404</div>
    }
]);

export default router;