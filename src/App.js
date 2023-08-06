import { Counter } from "./features/counter/Counter";
import "./App.css";
import router from "./router/MyRouter";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItemsByUserIdAsync } from "./features/cart/cartSlice";
import { useEffect } from "react";
import { selectLoggedInUser } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchCartItemsByUserIdAsync(user.id));
    }
  }, [dispatch, user]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
