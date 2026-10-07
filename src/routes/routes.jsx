import Cart from "../components/cart/Cart";
import Layout from "../components/layout/Layout";
import Shop from "../components/shop/Shop";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Error from "../components/error/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
        {
            index: true,
            element: <Home />
        },
         {
            path: "shop",
            element: <Shop />
        },
        {
            path: "cart",
            element: <Cart />
        },
        {
            path: "about",
            element: <About />
        }
    ]
  }

]

export default routes;