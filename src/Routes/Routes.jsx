import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/services',
                element: <Services></Services>
            }
        ]
    }
]);

export default routes;