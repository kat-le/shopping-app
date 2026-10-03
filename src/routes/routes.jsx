import Cart from '../components/Cart'
import Layout from '../components/Layout';
import Shop from '../components/Shop/Shop'
import Home from '../components/Home'
import About from '../components/About';
import Error from '../components/ErrorPage';

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