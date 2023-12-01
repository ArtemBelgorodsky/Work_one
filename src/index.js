import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {loader as productLoader}  from "./routes/Product"
import {loader as cardLoader} from "./routes/Cart"
import { store } from './store/index'
import { Provider } from 'react-redux'
 
import './fonts/Alegreya.ttf';

import Main from './pages/Main';
import Shop from "./pages/Shop";
import {Product as Product} from "./routes/Product"
import Cart from './routes/Cart';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
    },
    {
        path: "/shop",
        element: <Shop/>,
    },
    {
        path: "shop/product/:productId",
        element: <Product/>,
        loader: productLoader,
    },
    {
        path: "/cart",
        element: <Cart/>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
        <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);