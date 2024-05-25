import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Kitchen from "../pages/Kitchen";
import Bathroom from "../pages/Bathroom";
import Selfcare from "../pages/Selfcare";
import Layout from "../components/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProductPage from "../pages/ProductPage";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { element: <Home />, path: "/" },
      { element: <Kitchen />, path: "/kitchen" },
      { element: <Bathroom />, path: "/bathroom" },
      { element: <Selfcare />, path: "/selfcare" },
      { element: <About />, path: "/about" },
      { element: <Contact />, path: "/contact" },
      { element: <ProductPage />, path: "/productPage/:productId" },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
