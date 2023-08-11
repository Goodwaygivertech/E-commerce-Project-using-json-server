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
import AdminProductDetailPage from "../pages/AdminProductDetailPage";
import AdminProductFormPage from "../pages/AdminProductFormPage";
import AdminOrdersPage from "../pages/AdminOrdersPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import Logout from "../features/auth/components/Logout";
import ProtectedAdmin from "../features/auth/components/ProtectedAdmin";
import AdminHome from "../pages/AdminHome";
import NavBar from "../features/navbar/Navbar";
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
    path: "/orders",
    element: (
      <Protected>
        <UserOrdersPage></UserOrdersPage>
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
    path: "/logout",
    element: <Logout></Logout>,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage></ForgotPasswordPage>,
  },

  {
    path: "/productdetails/:id",
    element: (
      <Protected>
        <NavBar>
          <ProductDetailsPage></ProductDetailsPage>
        </NavBar>
      </Protected>
    ),
  },
  {
    path: "/order-success/:id",
    element: (
      <Protected>
        <OrderSuccessPage></OrderSuccessPage>
      </Protected>
    ),
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

  //admin

  {
    path: "/admin",
    element: (
      <ProtectedAdmin>
        <AdminHome></AdminHome>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/productdetails/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductDetailPage></AdminProductDetailPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product-form",
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/orders",
    element: (
      <ProtectedAdmin>
        <AdminOrdersPage></AdminOrdersPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product-form/edit/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },

  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);
export default router;
