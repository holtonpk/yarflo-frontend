import React from "react";
import buttonPress from "./logic";
import { CgMenuLeft } from "react-icons/cg";
import { BiHome, BiHeart, BiSearchAlt } from "react-icons/bi";
import Link from "next/link";
import {
  IoPersonOutline,
  IoBagHandleOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { GoPackage } from "react-icons/go";

import { useEffect } from "react";

import { useCart } from "react-use-cart";

const Navbar = ({ t }) => {
  const { isEmpty, totalItems } = useCart();

  const onhover = (event, elem) => {
    if (event == "in") {
      elem.classList.add("bounce-top");
      elem.getElementsByTagName("h1").item(0).classList.remove("hide");
    } else {
      elem.classList.remove("bounce-top");
      elem.getElementsByTagName("h1").item(0).classList.add("hide");
    }
  };
  useEffect(() => {
    document.querySelectorAll(".navButton").forEach((item) => {
      item.addEventListener("mouseover", () => onhover("in", item));
      item.addEventListener("mouseout", () => onhover("out", item));
    });
  });

  const openCart = () => {
    document.getElementById("cartPreview").classList.remove("hide");
  };

  const cartTotal = () => {
    if (isEmpty) {
      return;
    } else {
      return (
        <div className="absolute z-40 w-5 h-5 text-sm text-center text-white rounded-full bg-c1 -top-2 font-f2 left-4">
          {totalItems}
        </div>
      );
    }
  };

  return (
    <div className="z-20 flex flex-row items-center justify-between order-last w-3/4 p-3 mx-auto slow">
      <Link href="/Order">
        <a
          className="relative flex flex-col items-center p-2 mr-3 border-2 rounded-full navButton border-c1 w-fit"
          id="tracking"
        >
          <GoPackage
            id="trackingIcon"
            className="w-6 h-6 text-c1 navButtonIcon"
          />
          <h1 className="absolute mt-4 font-f1 text-c1 text-md top-6 hide whitespace-nowrap">
            Track Package
          </h1>
        </a>
      </Link>
      <button
        className="relative flex flex-col items-center p-2 mr-3 border-2 rounded-full navButton border-c1 w-fit"
        id="profile"
        onClick={() =>
          document.getElementById("signIn").classList.remove("hide")
        }
      >
        <IoPersonOutline
          id="profileIcon"
          className="w-6 h-6 text-c1 navButtonIcon"
        />
        <h1 className="absolute mt-4 font-f1 text-c1 text-md top-6 hide">
          Profile
        </h1>
      </button>
      {/* <button
        className="relative flex flex-col items-center p-2 mr-3 border-2 rounded-full text-c1 navButton border-c1 w-fit"
        id="likedList"
      >
        <IoHeartOutline
          id="likedListIcon"
          className="w-6 h-6 text-c1 navButtonIcon"
        />
        <h1 className="absolute mt-4 font-f1 text-c1 text-md top-6 hide whitespace-nowrap">
          Watch List
        </h1>
      </button> */}
      <button
        onClick={() => openCart()}
        className="relative flex flex-col items-center p-2 border-2 rounded-full text-c1 navButton border-c1 w-fit"
        id="cart"
      >
        <IoBagHandleOutline
          id="cartIcon"
          className="w-6 h-6 text-c1 navButtonIcon"
        />
        {cartTotal()}
        <h1 className="absolute mt-4 font-f1 text-c1 text-md top-6 hide">
          Bag
        </h1>
      </button>
    </div>
  );
};

export default Navbar;
