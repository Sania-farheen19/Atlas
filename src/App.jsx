import React from "react";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
 
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import CountryDetails from "./components/UI/CountryDetails";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home />} ,
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "country", element: <Country /> },
      { path: "country/:id", element: <CountryDetails /> },
    ],
  },
]);

const App = () => {
  
  return <RouterProvider router={routes} />;




};

export default App;
