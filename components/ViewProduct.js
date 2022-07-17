import React from "react";
import Image from "next/image";
import img from "../public/assets/imgs/products/prodimg4.jpg";
import Listing from "./Listing";
import {
  MdOutlineAttachMoney,
  MdStarRate,
  MdOutlineStarHalf,
  MdShoppingCart,
} from "react-icons/md";
import {
  BsFillHandbagFill,
  BsArrowRightCircle,
  BsArrowLeftCircle,
} from "react-icons/bs";
import { IoReturnUpBackOutline } from "react-icons/io5";
import productd from '../public/Data/Products/1343322.json'
const ViewProduct = () => {
  const product = productd

  const back = () => {
    document.getElementById("viewProd").classList.add("hide");
    document.getElementById("blackBack").classList.add("hide");
  };

  return (
    <div
      id="viewProd"
      className="absolute top-0 z-30 w-11/12 p-10 mt-4 bg-c1 h-fit rounded-t-3xl left-1/2 slide-in-bottom hide"
    >
      <div className="relative flex flex-row h-2/3">
        <button onClick={() => back()} className="absolute -top-10 -left-10">
          <IoReturnUpBackOutline className="w-16 h-16 text-c4" />
        </button>
        <div className="flex flex-col w-2/5 px-10 pt-10 ">
          <div className="relative w-full h-5/6">
            <div className="items-center w-full h-full overflow-hidden rounded-xl">
              <Image src={img} layout="responsive" width="100%" height="100%" />
            </div>
            <BsArrowLeftCircle className="absolute w-8 h-8 -translate-y-1/2 fill-c4 -left-8 top-1/2" />
            <BsArrowRightCircle className="absolute w-8 h-8 -translate-y-1/2 fill-c4 left-full top-1/2" />
          </div>

          <div className="flex flex-row justify-between w-full pt-3">
            <div className="w-1/5 h-20 overflow-hidden rounded-xl">
              <Image src={img} layout="responsive" width="100%" height="100%" />
            </div>
            <div className="w-1/5 h-20 overflow-hidden rounded-xl">
              <Image src={img} layout="responsive" width="100%" height="100%" />
            </div>
            <div className="w-1/5 h-20 overflow-hidden rounded-xl">
              <Image src={img} layout="responsive" width="100%" height="100%" />
            </div>
            <div className="w-1/5 h-20 overflow-hidden rounded-xl">
              <Image src={img} layout="responsive" width="100%" height="100%" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between w-1/2 h-full ml-8">
          <h1 className="text-5xl font-f1 text-c4">{product["title"]}</h1>
          <div className="flex flex-row">
            <div className="relative flex flex-row items-center mr-2">
              <div className="absolute w-full border-b-2 border-b-t1 border-b-solid"></div>
              <MdOutlineAttachMoney className="w-8 h-8 fill-t1" />
              <h2 className="text-2xl text-t1">{product["compPrice"]}</h2>
            </div>
            <div className="flex flex-row items-center justify-start">
              <MdOutlineAttachMoney className="w-10 h-10 fill-c2" />
              <h2 className="text-3xl text-c2">{product["salePrice"]}</h2>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
              <MdStarRate className="w-8 h-8 fill-c2" />
              <MdStarRate className="w-8 h-8 fill-c2" />
              <MdStarRate className="w-8 h-8 fill-c2" />
              <MdStarRate className="w-8 h-8 fill-c2" />
              <MdOutlineStarHalf className="w-8 h-8 fill-c2" />
            </div>
            <h1 className="text-2xl font-f1 text-c4">(100 reviews)</h1>
          </div>
          <div className="flex flex-row">
            <button className="flex flex-row items-center p-3 mr-3 bg-c4 text-c1 rounded-xl w-fit">
              <h1 className="text-3xl">Add To Cart</h1>
              <MdShoppingCart className="w-10 h-10 fill-c1" />
            </button>
            <button className="flex flex-row items-center p-3 bg-c2 text-c1 rounded-xl w-fit">
              <h1 className="text-3xl">Buy Now</h1>
              <BsFillHandbagFill className="w-10 h-10 fill-c1" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-6">
        <h1 className="pb-3 text-2xl font-f1 text-c4">About</h1>
        <p className="text-c4 font-f2 text-md">
          Chic Design: Rocking design helps you sit more relaxed and
          comfortable, but you don't have to worry about falling down. The
          balance design of the chair is very good. You just need to relax and
          sit on it to chat with your friends. Sturdy and Durable: The chair is
          made of sAatrong metal and firm rattan. You don't have to worry about
          its firmness, and the anti rust and anti-corrosion process makes it
          able to face all weather and has longer service time. Rattan Glass
          Table: The table can be used to put the ornaments such as small
          flowerpot, it can also be used to put mobile phone, fruit plate or
          wine glass when you are reading or chatting with your friends. Easy To
          Move: Because the materials are light, you can move the chairs to the
          suitable place easily such as poolside, garden, yard, porch or balcony
          wherever you want to put it. It is just depend on your like. Easy
          Assembly: A detailed installation with a complete tool kit will help
          you assemble the chair without any difficult. You can assemble it
          quickly, the assemble process will not cause you much time.
        </p>
      </div>
      <div className="flex flex-col pt-6 bg-c1">
        <h1 className="pb-3 text-3xl font-f1 text-c4 ">You may also like </h1>
        <div className="relative flex flex-row justify-between w-full h-80 ">
          <div className="relative w-1/4 h-100">
            <Listing
              img={"/../public/assets/imgs/products/" + product["img"] + ".jpg"}
              title={product["title"]}
              salePrice={product["salePrice"]}
              compPrice={product["compPrice"]}
              id={product["id"] + "a"}
            />{" "}
          </div>
          <div className="relative w-1/4 h-100">
            <Listing
              img={"/../public/assets/imgs/products/" + product["img"] + ".jpg"}
              title={product["title"]}
              salePrice={product["salePrice"]}
              compPrice={product["compPrice"]}
              id={product["id"] + "b"}
            />{" "}
          </div>{" "}
          <div className="relative w-1/4 h-100">
            <Listing
              img={"/../public/assets/imgs/products/" + product["img"] + ".jpg"}
              title={product["title"]}
              salePrice={product["salePrice"]}
              compPrice={product["compPrice"]}
              id={product["id"] + "c"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
