import "./App.css";
import router from "./router/MyRouter";

import { RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItemsByUserIdAsync } from "./features/cart/cartSlice";
import { useEffect } from "react";
import { selectLoggedInUser } from "./features/auth/authSlice";
import {
  fetchLoggedInUserAsync,
  fetchLoggedInUserOrderAsync,
} from "./features/user/userSlice";
// import 'react-alert-template-basic/styles.css';
import { positions, transitions , Provider } from "react-alert";
import { XMarkIcon , ExclamationTriangleIcon, InformationCircleIcon } from "@heroicons/react/20/solid";
// import AlertTemplate from "react-alert-template-basic";

function App() {
  const CustomAlertTemplate = ({ style, options, message, close }) => (
    <div className=" flex  justify-between "
      style={{
        ...style,
        width: options.width || "300px", // Use the width from options, default to '400px'
        backgroundColor: options.backgroundColor || "#ff9900", // Use background color from options, default to '#ff9900'
        color: options.textColor || "white", // Use text color from options, default to 'white'
        padding: options.padding || "16px", // Use padding from options, default to '16px'
        borderRadius: options.borderRadius || "8px", // Use border radius from options, default to '8px'
        boxShadow: options.boxShadow || "0 4px 8px rgba(0, 0, 0, 0.1)", // Use shadow from options, default shadow
      }}
    >
      <div className="flex ">
      {options.type === "info" && <InformationCircleIcon className="h-6 w-6"></InformationCircleIcon>}
      {options.type === "success" && " ✅ "}
      {options.type === "error" && <ExclamationTriangleIcon className="h-6 w-6"></ExclamationTriangleIcon> }
      {message}
      </div>
   <div className="text-xl  bg-gray-700 rounded-lg hover:bg-gray-800">
      <button
        className="px-1"
        onClick={close}
       >
        X
      </button>
      </div>
    </div>
  );

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  const options = {
    timeout: 5000,
    offset: '10px',
    transition: transitions.SCALE,
    position: positions.BOTTOM_TOP,
  };

  useEffect(() => {
    if (user) {
      dispatch(fetchCartItemsByUserIdAsync(user.id));
      dispatch(fetchLoggedInUserAsync(user.id));
      dispatch(fetchLoggedInUserOrderAsync(user.id));
      // eslint-disable-next-line
    }
  }, [dispatch, user]);

  return (
    <div className="App">
      <Provider template={CustomAlertTemplate} {...options}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
