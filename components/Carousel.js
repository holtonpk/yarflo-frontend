import React from "react";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import { useState, useEffect } from "react";
import { moneyFormat, getProductData, getImage } from "./logic";
import productData from "../public/Data/Outdoor_furniture.json";
import Link from "next/link";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
const Carousel = ({ title, data }) => {
  const [products, setProducts] = useState(data);
  const [showingProducts, setShowingProducts] = useState(products.slice(0, 5));

  const scroll2 = (dir) => {
    if (dir > 0) {
      showingProducts.shift();
      let lastItem = showingProducts.pop();
      let lastItemIndex = products.indexOf(lastItem);
      let newLastItemIndex = products.indexOf(lastItem) + 1;
      if (newLastItemIndex > products.length - 1) {
        newLastItemIndex = 0;
      }
      showingProducts.push(products[lastItemIndex]);
      showingProducts.push(products[newLastItemIndex]);
    } else {
      showingProducts.pop();
      let firstItem = showingProducts.shift();
      let firstItemIndex = products.indexOf(firstItem);
      let newFirstItemIndex = products.indexOf(firstItem) - 1;
      if (newFirstItemIndex < 0) {
        newFirstItemIndex = products.length - 1;
      }
      showingProducts.unshift(products[firstItemIndex]);
      showingProducts.unshift(products[newFirstItemIndex]);
    }
    setShowingProducts([...showingProducts]);
  };

  const onhover = (event, elem) => {
    if (event == "in") {
      elem.getElementsByTagName("div").item(0).classList.remove("hide");
      elem.getElementsByTagName("button").item(0).classList.remove("hide");
    } else {
      elem.getElementsByTagName("div").item(0).classList.add("hide");
      elem.getElementsByTagName("button").item(0).classList.add("hide");
    }
  };

  useEffect(() => {
    document.querySelectorAll(".cardButton ").forEach((item) => {
      item.addEventListener("mouseover", () => onhover("in", item));
      item.addEventListener("mouseout", () => onhover("out", item));
    });
  });

  return (
    <>
      <div className="relative w-full">
        <div className="px-4 mx-auto text-6xl bg-white text-c1 font-f1 header-with-text">
          {title}
        </div>
      </div>

      <div className="relative flex flex-row items-center justify-between w-5/6 mx-auto mt-10">
        <button onClick={() => scroll2(-1)}>
          <MdOutlineKeyboardArrowLeft className="absolute z-20 w-16 h-16 -translate-x-1/2 -translate-y-1/2 fill-c1 top-1/2" />
        </button>

        <div
          id="carBox"
          className="grid justify-between w-full h-full grid-cols-5 gap-4"
        >
          {showingProducts.map((item, i) => (
            <div key={i} className="relative overflow-hidden cardButton">
              <Link
                key={i}
                href={
                  "/Product/" +
                  getProductData(item).title.slice(0, 25).replaceAll(" ", "_")
                }
              >
                <a>
                  <button className="absolute z-20 flex flex-row items-center p-3 -translate-x-1/2 -translate-y-1/2 border-white rounded-xl top-1/2 left-1/2 border-1 fadeIn hide">
                    <h1 className="text-xl text-white font-f1 ">View</h1>
                    <BsArrowRightShort className="w-6 h-6 mt-1 fill-white" />
                  </button>
                  <div className="absolute z-10 w-full h-full bg-c1_70 hide"></div>
                  <Image
                    src={getImage(item)}
                    layout="responsive"
                    width="100%"
                    height="100%"
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
        <button onClick={() => scroll2(1)}>
          <MdOutlineKeyboardArrowRight className="absolute z-20 w-16 h-16 -translate-x-1/2 -translate-y-1/2 fill-c1 top-1/2 left-full" />
        </button>
      </div>
    </>
  );
};

export default Carousel;
