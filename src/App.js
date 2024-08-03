import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
import InputBox from "./components/InputBox";
import UserContext from "./utils/useContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

//  Bundling syntax below
const Grocery = lazy(() => import("./components/GroceryForBundling"))

const AppLayout = () => {
    const [userName, setUserName] = useState('');
    
    useEffect(() => {
      const data = {
        name: 'defaultUser'
      };
      setUserName(data.name);
    }, []);

    return(
        <Provider store = {appStore}>
            <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
            </UserContext.Provider>
        </Provider>
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
        //  Bundling syntax below
        {
            path: "/grocery",
            element: (
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery />
                </Suspense>
            ),
            errorElement: <Error />,
        },       
        {    
            path: "/user",
            element: <InputBox />,
            errorElement:<Error />,
        },
        {    
            path: "/cart",
            element: <Cart />,
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
