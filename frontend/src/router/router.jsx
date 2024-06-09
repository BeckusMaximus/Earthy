import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProductPage from "../pages/ProductPage";
import CategoryPage from "../pages/CategoryPage";
import Confirmation from "../pages/Confirmation";
import Payment from "../pages/Checkout";
const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { element: <Home />, path: "/" },
      { element: <Confirmation />, path: "/confirmation" },
      { element: <Payment />, path: "/checkout" },
      { element: <CategoryPage />, path: "/categoryPage/:categoryName" },
      { element: <About />, path: "/about" },
      { element: <Contact />, path: "/contact" },
      { element: <ProductPage />, path: "/productPage/:productId" },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
