import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
// css Object start here

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
{    
    path: "/",
    element: <AppLayout />,
    errorElement:<Error />,
},
{    
    path: "/about",
    element: <About />,
    errorElement:<Error />,
},
{    
    path: "/contact-",
    element: <Contact />,
    errorElement:<Error />,
},
])

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
