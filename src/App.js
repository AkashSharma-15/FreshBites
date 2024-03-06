import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from './components/ErrorPage'
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";


const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import('./components/About'))
// general App layout

const AppLayout = () => {
    return (
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
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading.....</h1>}>
                    <Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resid",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <ErrorPage />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)
