import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteItemFromCartAsync,
  selectCartItems,
  updateCartAsync,
} from "./cartSlice";
// import { Dialog, Transition } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Navigate } from "react-router-dom";

// const products = [
//   {
//     id: 1,
//     name: "Throwback Hip Bag",
//     href: "#",
//     color: "Salmon",
//     price: "$90.00",
//     quantity: 1,
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
//     imageAlt:
//       "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
//   },
//   {
//     id: 2,
//     name: "Medium Stuff Satchel",
//     href: "#",
//     color: "Blue",
//     price: "$32.00",
//     quantity: 1,
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
//     imageAlt:
//       "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
//   },
//   // More products...
// ];

export default function Cart() {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartItems);
  const totalAmount = cartProducts.reduce(
    (amount, item) => item.price * item.quantity + amount,
    0
  );
  const totalItems = cartProducts.reduce(
    (total, item) => item.quantity + total,
    0
  );

  const handleQuntity = (e, item) => {
    const newItem = { ...item, quantity: +e.target.value };

    dispatch(updateCartAsync(newItem));
  };
  const handleItemDelete = (e, itemId) => {
    dispatch(deleteItemFromCartAsync(itemId));
  };

  return (
    <>
     
      { !cartProducts.length && <Navigate to='/' replace={true}></Navigate>}

      <div>
        <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
              Cart
            </h1>
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cartProducts &&
                  cartProducts.map((item) => (
                    <li key={item.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.thumbnail}
                          alt={item.thumbnail}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={item.thumbnail}>{item.title}</a>
                            </h3>
                            <p className="ml-4">{item.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.brand}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="text-gray-500">
                            <label
                              htmlFor="quantity"
                              className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                            >
                              Qty
                            </label>
                            <select
                              onChange={(e) => handleQuntity(e, item)}
                              value={item.quantity}
                            >
                              <option>1</option>
                              <option>2</option>
                            </select>
                          </div>

                          <div className="flex">
                            <button
                              type="button"
                              className="flex items-center space-x-0.5 font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={(e) => handleItemDelete(e, item.id)}
                            >
                              <XMarkIcon className="w-6 h-6" />{" "}
                              {/* Adjust the icon size as needed */}
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base my-2 font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${totalAmount}</p>
            </div>
            <div className="flex justify-between text-base my-2 font-medium text-gray-900">
              <p>Total Items In Cart</p>
              <p>{totalItems}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <Link
                to="/checkout"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or
                <Link to="/">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React from 'react'

// const Cart = () => {
//   return (
//     <div>
//       <p>hi bjkbjkn i h;bj; jbjkb jhk h;hi guli' hu;i'h io</p>
//     </div>
//   )
// }

// export default Cart
