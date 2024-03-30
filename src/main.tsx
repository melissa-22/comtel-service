import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Layout.tsx";
import Error from "./pages/Error.tsx";
import Main from "./pages/Main.tsx";
import DeliveryTerm from "./pages/DeliveryTerm.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: '/delivery-term',
                element: <DeliveryTerm />
            }
        ]
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
