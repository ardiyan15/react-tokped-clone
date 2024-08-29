import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import Home from "./pages/home.jsx";
import Product from "./pages/product.jsx";
import Category from "./pages/category.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
