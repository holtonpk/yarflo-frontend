import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import Quantity from "./Quantity";
import { getImage } from "./logic";
import { getProductData, moneyFormat } from "./logic";

import Link from "next/link";

import { useCart } from "react-use-cart";
const CartPreview = () => {
  const { isEmpty, cartTotal, items, removeItem } = useCart();
  const [emptyCart, setEmptyCart] = useState(true);

  useEffect(() => {
    setEmptyCart(isEmpty);
  }, [isEmpty]);
  const configCart = () => {
    if (emptyCart) {
      return (
        <div className="text-center">
          <h1 className="text-2xl text-c1 font-f1 ">
            YOUR BAG IS CURRENTLY EMPTY.
          </h1>
        </div>
      );
    } else {
      return (
        <div className="relative flex flex-col w-11/12 mx-auto">
          {items.map((product, i) => (
            <div key={i} className="relative">
              <div className="relative items-center justify-start w-full p-3 border-2 border-white border-solid">
                <div className="box-border relative flex flex-row w-full pb-3 mb-3 border-b-1 border-b-t1">
                  <div className="relative w-1/3 h-full mb-3 mr-3 ">
                    <Image
                      src={getImage(product.id)}
                      layout="responsive"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="flex flex-col items-start ">
                    <Link
                      href={
                        "/Product/" +
                        product.title.slice(0, 25).replaceAll(" ", "_")
                      }
                    >
                      <a>
                        <h2 className="text-lg text-c1 font-f1">
                          {product.title}
                        </h2>
                      </a>
                    </Link>
                    <Quantity
                      id={product.id}
                      color={"text-c1 fill-c1 border-t1"}
                    />
                    <button
                      onClick={() => removeItem(product.id)}
                      // onClick={() => setRememberMe(false)}
                      className="text-lg underline text-c1 font-f1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-row justify-between w-full pb-3 mb-3 border-b-1 border-b-t1">
            <h1 className="text-xl font-f2 text-c1">TOTAL</h1>
            <h1 className="text-xl font-f2 text-c1">
              {"$" + moneyFormat(cartTotal) + " USD"}
            </h1>
          </div>

          <Link href="/Checkout">
            <a className="w-full">
              <button className="w-full p-4 text-xl text-white rounded-full bg-c1 font-f1">
                Go To Checkout
              </button>
            </a>
          </Link>
          <Link href="/Checkout">
            <a className="w-full mt-3">
              <button className="w-full p-4 text-xl text-white rounded-full bg-c3 font-f1">
                Your Bag
              </button>
            </a>
          </Link>
        </div>
      );
    }
  };

  return (
    <div id="cartPreview" className="hide">
      <button
        onClick={() => {
          document.getElementById("cartPreview").classList.add("hide");
        }}
        className="fixed z-50 w-screen h-screen bg-black_80 fade-in-fast"
      ></button>
      <div className="fixed top-0 z-50 flex flex-col items-center h-screen -translate-x-full bg-white w-100 left-full slide-in-right">
        <div className="relative w-full h-full py-3">
          <div className="relative w-full h-1/12 border-b-1 border-b-t1">
            <h1 className="my-auto mb-2 text-xl font-light text-center text-c1 font-f1">
              Your Bag
            </h1>
            <button
              onClick={() =>
                document.getElementById("cartPreview").classList.add("hide")
              }
              className="absolute pr-6 -translate-x-full -translate-y-1/2 left-full top-1/2"
            >
              <AiOutlineClose className="w-6 h-6 fill-c1" />
            </button>
          </div>
          <div className="flex flex-col w-full mt-3 overflow-y-scroll h-87">
            {configCart()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPreview;
