import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// components
import Header from "./components/Header";
import Body from "./components/Body";
import ErrorPage from './components/ErrorPage'
import RestaurantMenu from "./components/RestaurantMenu";

// context
import UserContext from "./utils/UserContext";

// redux 
import { Provider } from "react-redux";
import appStore from "./utils/Redux/appStore";
import Cart from "./components/Cart";
import PlaceOrder from "./components/PlaceOrder";
import Footer from "./components/Footer";

// about is a lazy loading comonent
const About = lazy(() => import('./components/About'))


// general App layout
const AppLayout = () => {

    const [userName, setUserName] = useState()
    useEffect(() => {
        const data = {
            name: "Akash"
        }
        setUserName(data.name)
    }, [])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading....</h1>}>
                    <About /></Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurants/:resid",
                element: <RestaurantMenu />
            },
            {
                path: "order",
                element: <PlaceOrder />
            }
        ],
        errorElement: <ErrorPage />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)
