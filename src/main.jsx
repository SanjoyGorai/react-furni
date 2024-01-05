import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './componants/ErrorPage/ErrorPage.jsx';
import Home from './componants/Home/Home.jsx';
import ShopPage from './componants/Shop page/ShopPage.jsx'
import Cart from './componants/Cart/Cart.jsx';
import SingleProduct from './componants/Single Product/SingleProduct.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'shop',
        element: <ShopPage/>
      },
      {
        path: 'singleproduct',
        element: <SingleProduct/>
      },
      {
        path: 'cart',
        element: <Cart/>
      },
      {
        path: '',
        element: ''
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
