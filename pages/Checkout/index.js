import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Quantity from "../../components/Quantity";
import productData from "../../public/Data/Outdoor_furniture.json";
import { useState } from "react";
import Image from "next/image";
import Price from "../../components/Price";
import Link from "next/link";
import Carousel from "../../components/Carousel";
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../_app";
import { useCart } from "react-use-cart";

import {
  calculateTotal,
  calculateTotalSingle,
  getProductData,
  moneyFormat,
  deleteItem,
  getImage,
} from "../../components/logic";
import {
  SiAmericanexpress,
  SiVenmo,
  SiGooglepay,
  SiVisa,
  SiMastercard,
  SiApplepay,
  SiPaypal,
  SiEthereum,
  SiBitcoin,
  SiDiscover,
} from "react-icons/si";

const checkout = () => {
  const { isEmpty, cartTotal, items, removeItem } = useCart();

  const configShoppingBag = () => {
    if (isEmpty) {
      return (
        <h1 className="pr-3 mr-3 text-xl text-c1 font-f1 w-fit ">
          Your bag is currently empty. Continue browsing here.
        </h1>
      );
    } else {
      return (
        <>
          <div className="flex flex-row justify-start w-11/12 pl-3 mx-auto bg-c3">
            <h2 className="w-2/3 text-xl text-c1 font-f2 ">ITEM</h2>
            <h2 className="w-1/6 text-xl text-center text-c1 font-f2">
              QUANTITY
            </h2>
            <h2 className="w-1/6 text-xl text-center text-c1 font-f2">
              SUBTOTAL
            </h2>
          </div>
          <div className="w-11/12 border-1 border-c3">
            {items.map((item, i) => (
              <div
                key={i}
                className="relative flex flex-row items-center justify-start w-full mx-auto bg-white h-1/5 border-b-1 border-c3"
              >
                <div className="flex flex-row justify-start w-2/3 ">
                  <div className="relative w-1/6 h-full mx-3">
                    <Image
                      src={getImage(item.id)}
                      layout="responsive"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="flex flex-col items-start w-1/2 ">
                    <Link
                      href={
                        "/Product/" +
                        item.title.slice(0, 25).replaceAll(" ", "_")
                      }
                    >
                      <a>
                        <h2 className="w-full text-xl text-c1 font-f1">
                          {item.title}
                        </h2>
                      </a>
                    </Link>

                    <h1 className="text-xl text-center font-f2 text-c3">
                      {"$" + moneyFormat(item.price) + " USD"}
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col items-center w-1/6 h-40 py-10 border-l-1 border-c3 border-r-1">
                  <Quantity
                    id={item.id}
                    color={"text-c1 fill-c1 border-t1"}
                    item={item}
                    iconSize={"w-8 h-8"}
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-3 mr-1 text-lg text-center text-c1 font-f2"
                  >
                    Remove
                  </button>
                </div>
                <div className="w-1/6">
                  <h1 className="text-2xl text-center font-f2 text-c1">
                    {"$" + moneyFormat(item.price * item.quantity) + " USD"}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-start w-11/12 py-3 pl-3 mx-auto bg-white border-b-1 border-l-1 border-r-1 border-c3">
            <h2 className="w-2/3 text-lg underline text-c1 font-f2">
              Continue Shopping
            </h2>
            <h2 className="w-1/6 text-2xl text-center text-c1 font-f2 ">
              Total
            </h2>
            <div className="w-1/6 text-2xl text-center text-c1 font-f2">
              <h1 className="text-2xl text-center font-f2 text-c1">
                {"$" + moneyFormat(cartTotal) + " USD"}
              </h1>
            </div>
          </div>

          <div className="flex flex-row justify-between w-11/12 mx-auto mt-4">
            <div className="flex flex-row">
              <SiGooglepay className="w-10 h-10 mr-3 fill-c1" />
              <SiVenmo className="w-10 h-10 mr-3 fill-c1" />
              <SiAmericanexpress className="w-10 h-10 mr-3 fill-c1" />
              <SiVisa className="w-10 h-10 mr-3 fill-c1" />
              <SiMastercard className="w-10 h-10 mr-3 fill-c1" />
              <SiApplepay className="w-10 h-10 mr-3 fill-c1" />
              <SiPaypal className="w-10 h-10 mr-3 fill-c1" />
              <SiDiscover className="w-10 h-10 mr-3 fill-c1" />
              <SiEthereum className="w-10 h-10 mr-3 fill-c1" />
              <SiBitcoin className="w-10 h-10 mr-3 fill-c1" />
            </div>
            <Link href={"/Checkout/Information"}>
              <a className="px-10 py-3 text-2xl text-white rounded-full bg-c1 font-f2">
                Checkout
              </a>
            </Link>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col items-center w-screen ">
        <div className="flex flex-row items-center my-3">
          <h1 className="pr-3 mr-3 text-4xl text-c1 font-f1 w-fit ">
            Shopping Bag
          </h1>
        </div>
        {configShoppingBag()}
      </div>
      <div className="mt-10">
        {/* <Carousel
          title="Just For You"
          data={[
            "8543945843",
            "67438323423",
            "1343322",
            "2343242432",
            "2342342342",
            "235434543324",
            "87898789890",
            "6789734798342",
          ]}
        /> */}
      </div>
      <Footer />
    </>
  );
};

export default checkout;
