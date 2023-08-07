import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ProductDetailsPage from "../pages/productDetailsPage";
import CartPage from "../pages/CartPage";
import Checkout from "../pages/Checkout";
import Protected from "../features/auth/components/Protected";
import OrderSuccessPage from "../pages/OrderSuccessPage";
import PageNotFound from "../pages/404";
import UserProfilePage from "../pages/UserProfilePage";
import UserOrdersPage from "../pages/UserOrdersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        {" "}
        <Home></Home>{" "}
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/productdetails/:id",
    element: (
      <Protected>
        <ProductDetailsPage></ProductDetailsPage>
      </Protected>
    ),
  },
  {
    path: "/order-success/:id",
    element: <OrderSuccessPage></OrderSuccessPage>,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout></Checkout>
      </Protected>
    ),
  },
  {
    path: "/orders",
    element: (
      <Protected>
        {" "}
        <UserOrdersPage></UserOrdersPage>{" "}
      </Protected>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <UserProfilePage></UserProfilePage>
      </Protected>
    ),
  },

  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);
export default router;
