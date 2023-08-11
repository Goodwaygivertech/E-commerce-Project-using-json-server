import "./App.css";
import router from "./router/MyRouter";

import {
 
  RouterProvider,

} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItemsByUserIdAsync } from "./features/cart/cartSlice";
import { useEffect } from "react";
import { selectLoggedInUser } from "./features/auth/authSlice";
import { fetchLoggedInUserAsync, fetchLoggedInUserOrderAsync } from "./features/user/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchCartItemsByUserIdAsync(user.id));
      dispatch(fetchLoggedInUserAsync(user.id))
      dispatch(fetchLoggedInUserOrderAsync(user.id));
      // eslint-disable-next-line


    }
  }, [dispatch, user]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
