import React from "react";
import style from "../styles/globals.css";
import { useState } from "react";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { CartProvider } from "react-use-cart";
export const CartContext = React.createContext();

const MyApp = ({ Component, pageProps, router }) => {
  // const [cartItems, setCart] = useState({
  //   Ha333485: { quantity: 2 },
  //   Ha807127: { quantity: 3 },
  // });

  // const setCartItems = (e) => {
  //   setCart(e);
  // };

  return (
    // <CartContext.Provider value={{ cartItems, setCartItems }}>
    <CartProvider>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
    </CartProvider>
    // </CartContext.Provider>
  );
};

export default MyApp;
