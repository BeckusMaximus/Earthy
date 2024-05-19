import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Kitchen from "../pages/Kitchen";
import Bathroom from "../pages/Bathroom";
import Selfcare from "../pages/Selfcare";
import Layout from "../components/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";


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
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
