import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";

import { useCart } from "react-use-cart";

const Quantity = ({ color, id, buttonBg, iconSize }) => {
  const { updateItemQuantity, removeItem, getItem } = useCart();

  const setTotalPrice = (quantityDirection) => {
    if (getItem(id).quantity + quantityDirection < 0) {
      removeItem(id);
    } else {
      updateItemQuantity(id, getItem(id).quantity + quantityDirection);
    }
  };

  return (
    <div
      className={
        "flex flex-row items-center justify-between  w-fit  h-fit " + color
      }
    >
      <button onClick={() => setTotalPrice(-1)}>
        <AiOutlineMinus
          className={
            "text-c1 border-1 " + color + " " + iconSize + " " + buttonBg
          }
        />
      </button>
      <h1
        className={
          "w-10 p-2 text-xl text-center  font-f2text-bold border-l-solid  border-r-solid  " +
          color
        }
      >
        {getItem(id).quantity}
      </h1>
      <button onClick={() => setTotalPrice(1)}>
        <MdOutlineAdd
          className={
            "fill-c1  border-1 " + color + " " + iconSize + " " + buttonBg
          }
        />
      </button>
    </div>
  );
};

export default Quantity;
