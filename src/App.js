import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
// css Object start here

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
{    
    path: "/",
    element: <AppLayout />,
    errorElement:<Error />,
    children : [
        {    
            path: "/",
            element: <Body />,
            errorElement:<Error />,
        },
        {    
            path: "/about",
            element: <About />,
            errorElement:<Error />,
        },
        {    
            path: "/contact",
            element: <Contact />,
            errorElement:<Error />,
        },
        // Dynamic Routes Starts below
        {    
            path: "/restaurants/:resId",
            element: <RestaurantMenu />,
            errorElement:<Error />,
        },
    ]
},

])

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
