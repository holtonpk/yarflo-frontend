import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";

const Card = ({ heading, body, img, onClick }) => {
  return (
    <div className="w-30p">
      <div className="w-full h-1/3 rounded-t-2xl overflow-hidden relative">
        <Image src={img} layout="responsive" />
      </div>
      <div className=" bg-c3_70 rounded-b-3xl flex flex-col items-center px-6 pb-4 pt-3">
        <h1 className="font-f1 text-black text-3xl text-center mb-3">
          {heading}
        </h1>
        <h2 className="font-f1 text-c1 text-md text-center mb-3">{body}</h2>
        <button className="bg-c4 border-1 border-black px-3 flex flex-row items-center mt-3">
          <h1 className="font-f2 text-md"> View Collection </h1>
          <BsArrowRightShort className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default Card;
