import React from "react";
import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { useEffect } from "react";
import { MdOutlineAttachMoney, MdOutlineAddToPhotos } from "react-icons/md";
const Listing = ({ title, img, salePrice, compPrice, id }) => {
  const onHover = (event) => {
    if (event == "in") {
      document.getElementById("addBag" + id).classList.remove("hide");
    } else {
      document.getElementById("addBag" + id).classList.add("hide");
    }
  };

  useEffect(() => {
    const item = document.getElementById("listing" + id);
    item.addEventListener("mouseover", () => onHover("in", item));
    item.addEventListener("mouseout", () => onHover("out", item));
  });

  return (
    <div
      id={"listing" + id}
      className="relative flex flex-col justify-start h-full mx-3 cursor-pointer  listing rounded-3xl bg-c1"
    >
      <button className="absolute z-20 p-2 ml-6 rounded-full bg-c1 top-2 left-3/4">
        <BiHeart className="w-5 h-5 fill-c4" />
      </button>

      <div className="relative w-full mb-4 overflow-hidden rounded-xl h-1/2">
        <div
          id={"addBag" + id}
          className="absolute z-20 flex flex-col items-center w-11/12 p-2 -translate-x-1/2 rounded-lg bg-c1_80 left-1/2 top-3/4 -translate-y-3/4 hide"
        >
          <div className="flex flex-row items-center mb-3">
            <MdOutlineAddToPhotos className="w-4 h-4 mr-1 fill-c4" />
            <h3 className="text-xl font-f1 text-c4">Quick Add</h3>
          </div>
          <button className="p-2 text-xl font-f1 text-c1 bg-c1 rounded-xl">
            Add To Bag
          </button>
        </div>
        <div className="items-center w-full h-full">
          <Image src={img} layout="responsive" width="100%" height="100%" />
        </div>
      </div>
      <h1 className="w-5/6 mb-3 text-2xl text-left underOnHover text-c4 font-f1">
        {title.slice(0, 50)}
      </h1>
      <div className="flex flex-row">
        <div className="relative flex flex-row items-center mr-2">
          <div className="absolute w-full border-b-2 border-b-t1 border-b-solid"></div>
          <MdOutlineAttachMoney className="w-5 h-5 fill-t1" />
          <h2 className="text-lg text-t1">{compPrice}</h2>
        </div>
        <div className="flex flex-row items-center justify-start">
          <MdOutlineAttachMoney className="w-6 h-6 fill-c2" />
          <h2 className="text-xl text-c2">{salePrice}</h2>
        </div>
      </div>
    </div>
  );
};

export default Listing;
