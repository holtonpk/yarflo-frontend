import { useRouter } from "next/router";
import { MdOutlineAttachMoney, MdOutlineAddToPhotos } from "react-icons/md";
import { useEffect } from "react";
import { getImage, moneyFormat } from "./logic";

import { useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import Image from "next/image";
import Price from "../components/Price";
import Link from "next/link";
import Reviews from "./Reviews";
export default function Catalog({ id, title, price, rating }) {
  const onHover = (event) => {
    if (event == "in") {
      document.getElementById("hoverElements" + id).classList.remove("hide");
    } else {
      document.getElementById("hoverElements" + id).classList.add("hide");
    }
  };

  useEffect(() => {
    const item = document.getElementById("listing" + id);
    item.addEventListener("mouseover", () => onHover("in", item));
    item.addEventListener("mouseout", () => onHover("out", item));
  });

  return (
    <Link
      href={
        "/Product/" +
        title.slice(0, 25).replaceAll(" ", "_").replaceAll("/", "")
      }
    >
      <a>
        <div
          key={id}
          id={"listing" + id}
          className="flex flex-col cursor-pointer listing "
        >
          <div className="relative w-full overflow-hidden">
            <div
              id={"hoverElements" + id}
              className="absolute top-0 left-0 z-40 w-full h-full hide"
            >
              {/* <button className="absolute ">
            <HiOutlineHeart className="w-10 h-10 text-c1" />
          </button> */}

              {/* <div className="absolute z-30 flex flex-col items-center w-1/2 p-2 -translate-x-1/2 -translate-y-full rounded-lg bg-c1_80 left-1/2 top-full">
            <div className="flex flex-row items-center mb-3">
              <MdOutlineAddToPhotos className="w-4 h-4 mr-1 fill-c4" />
              <h3 className="text-xl font-f1 text-c4">Quick Add</h3>
            </div>
            <button className="p-2 text-xl bg-white font-f1 text-c1 rounded-xl">
              Add To Bag
            </button>
          </div> */}
            </div>
            <Image
              src={getImage(id)}
              layout="responsive"
              width="100%"
              height="100%"
            />
          </div>
          <div className="flex flex-col items-center p-3">
            <h1 className="w-full text-xl text-left font-f1 text-c1">
              {title}
            </h1>
            <div className="flex flex-row items-center justify-between w-full">
              <h2 className="text-xl font-f2 text-c1">
                {"$" + moneyFormat(price) + " USD"}
              </h2>
              <div className="mt-2">
                <Reviews
                  rating={rating}
                  size="w-4 h-4 "
                  color="fill-c2"
                  textSize="text-xs"
                />
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
// ""
