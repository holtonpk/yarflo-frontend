import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import { RiCouponLine } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { getImage, moneyFormat } from "./logic";
import Quantity from "./Quantity";
import Image from "next/image";
import { parseCookies } from "../lib/parseCookies";
import Cookie from "js-cookie";

const OrderSummary = ({ page, dynamicShipping }) => {
  console.log("dyn", dynamicShipping);
  const { cartTotal, items, removeItem } = useCart();

  return (
    <div className="relative flex flex-col justify-start w-2/5 h-full px-4 mb-10 bg-white2 border-l-1 border-c3">
      <h1 className="pt-4 mb-4 text-3xl text-c1 font-f1">Order Summary</h1>
      <div className="flex flex-col justify-between w-3/4 overflow-y-scroll border-b-1 border-c3 h-80 ">
        {items.map((item, i) => (
          <div
            key={i}
            className="items-center justify-start w-full mb-3 order-grid "
          >
            <div className="w-full h-full overflow-hidden">
              <Image
                src={getImage(item.id)}
                layout="responsive"
                width="100%"
                height="100%"
              />
            </div>

            <div className="relative flex flex-col justify-between ml-3 h-fit">
              <h2 className=" text-c1 text-md font-f2">{item.title}</h2>
              <div className="relative flex flex-row items-center">
                <Quantity
                  id={item.id}
                  color={"text-c1 fill-c1 border-t1"}
                  item={item}
                  iconSize={"w-6 h-6"}
                  buttonBg={"bg-t1"}
                />
                <div>
                  <MdOutlineClose className="w-4 h-4 ml-2 text-c3" />
                </div>
                <h2 className="text-c4 text-md font-f2">
                  {"$" + moneyFormat(item.price * item.quantity)}
                </h2>
              </div>
            </div>
            <div className="flex flex-col justify-between h-full">
              <button onClick={() => removeItem(item.id)}>
                <MdOutlineClose className="w-8 h-8 text-c3" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-between w-3/4 py-3 mb-3 border-b-1 border-c3">
        <div className="flex flex-row items-center w-3/4 h-full px-2 py-2 border-2 rounded-md border-c3 couponInput">
          <RiCouponLine className="w-8 h-8 mr-3 fill-c3" />
          <input
            type="text"
            className="text-white bg-white text-md font-f2"
            placeHolder="Coupon code"
          />
        </div>
        <button className="h-full p-2 text-lg border-2 rounded-md text-c1 font-f2 border-c3">
          Apply
        </button>
      </div>

      <div className="flex flex-col w-3/4 ">
        <div className="flex flex-row items-center justify-between w-full pt-3">
          <h2 className="text-lg text-c4 font-f2">Subtotal</h2>
          <h2 className="text-lg text-c4 font-f2">
            {"$" + moneyFormat(cartTotal)}
          </h2>
        </div>
        <div className="flex flex-row items-center justify-between w-full pt-3">
          <h2 className="text-lg text-c4 font-f2">Tax</h2>
          <h2 className="text-lg text-c4 font-f2">
            {"$" + moneyFormat(cartTotal * 0.0509)}
          </h2>
        </div>

        <div className="flex flex-row items-center justify-between w-full pt-3">
          <h2 className="text-lg text-c4 font-f2">Delivery</h2>
          <h2 className="text-lg text-c4 font-f2">{dynamicShipping.display}</h2>
        </div>

        <div className="flex flex-row items-center justify-between w-full py-3 ">
          <h2 className="text-xl text-c1 font-f2">Total</h2>
          <h2 className="text-xl text-c1 font-f2">
            {"$" +
              moneyFormat(
                cartTotal + cartTotal * 0.0509 + dynamicShipping.rate
              )}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
