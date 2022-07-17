import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getProductData } from "./logic";
import { useEffect } from "react";
const ImgCard = ({ image, product, collection }) => {
  const onHover = (over, item) => {
    if (over) {
      item
        .getElementsByClassName("hoverButtons")
        .item(0)
        .classList.remove("hide");
    } else {
      item.getElementsByClassName("hoverButtons").item(0).classList.add("hide");
    }
  };

  useEffect(() => {
    document.querySelectorAll(".ImgCard").forEach((item) => {
      item.addEventListener("mouseover", () => onHover(true, item));
      item.addEventListener("mouseout", () => onHover(false, item));
    });
  });

  return (
    <div className="relative z-50 bg-white h-100 w-100 ImgCard">
      <div className="absolute z-30 w-full h-full bg-c1_70 hoverButtons hide">
        <Link
          href={
            "/Product/" +
            getProductData(product)
              .title.slice(0, 25)
              .replaceAll(" ", "_")
              .replaceAll("/", "")
          }
        >
          <a className="flex flex-col w-1/3 mb-10 card2-1">
            <h1 className="absolute p-3 text-xl text-white -translate-x-1/2 border-white rounded-lg font-f1 left-1/2 border-1 top-1/3 hover:bg-white hover:text-c1">
              View Product
            </h1>
          </a>
        </Link>
        <Link href={collection}>
          <a className="flex flex-col w-1/3 mb-10 card2-1">
            <h1 className="absolute p-3 text-xl text-white -translate-x-1/2 border-white rounded-lg font-f1 left-1/2 border-1 top-1/2 hover:bg-white hover:text-c1">
              View Collection
            </h1>
          </a>
        </Link>
      </div>

      <Image src={image} layout="fill" />
    </div>
  );
};

export default ImgCard;
