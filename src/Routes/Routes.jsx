import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Events from "../Pages/Events/Events";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Blogs from "../Pages/Blogs/Blogs";

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
                path: '/blogs',
                element: <PrivateRoutes><Blogs></Blogs></PrivateRoutes>
            },
            {
                path: '/events',
                element: <PrivateRoutes><Events></Events></PrivateRoutes>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/service/:id',
                loader: () => fetch('/services.json'),
                element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>
            }
        ]
    }
]);

export default routes;