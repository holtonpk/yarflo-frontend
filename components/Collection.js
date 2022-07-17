import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Collection = ({ collection }) => {
  const onHoverc = (event, elem) => {
    if (event == "in") {
      // elem.classList.add("border-none");
      elem.getElementsByTagName("h1").item(0).classList.add("hide");
      elem.getElementsByTagName("button").item(0).classList.remove("hide");
      elem.getElementsByTagName("div").item(0).classList.add("dark_back");
    } else {
      // elem.classList.remove("border-none");
      elem.getElementsByTagName("h1").item(0).classList.remove("hide");
      elem.getElementsByTagName("button").item(0).classList.add("hide");
      elem.getElementsByTagName("div").item(0).classList.remove("dark_back");
    }
  };
  useEffect(() => {
    document.querySelectorAll(".expButton").forEach((item) => {
      item.addEventListener("mouseover", () => onHoverc("in", item));
      item.addEventListener("mouseout", () => onHoverc("out", item));
    });
  });

  const setBackground = (id) => {
    if (!(id == "Sale")) {
      return (
        <>
          <Image
            src={"/assets/imgs/cards/" + id + ".jpg"}
            layout="fill"
            className={"image"}
          />
          <div className="absolute z-10 w-full h-full bg-black_5"></div>
          <h1 className="absolute z-20 p-3 text-2xl text-center text-white -translate-x-1/2 -translate-y-1/2 border-white font-f1 border-1 top-1/2 left-1/2 fadeIn bg-c1_50">
            {id.replaceAll("_", " ")}
          </h1>
        </>
      );
    } else {
      return (
        <div className="flex flex-col items-center w-full h-full py-10 mx-auto bg-c4 ">
          <h1 className="text-8xl text-t2 font-f1">Sale</h1>
          <h2 className="text-2xl text-t2 font-f1">Save up to 70%</h2>
          <h3 className="text-xl text-c1 font-f2">On the whole house</h3>
        </div>
      );
    }
  };

  return (
    <div id="show-Explore" className="p-4 wrapper catBody">
      {Object.keys(collection).map((category, i) => (
        <div key={i} className={"expButton " + collection[category].gridClass}>
          <Link href={collection[category].href}>
            <a>
              {setBackground(collection[category].id)}
              <button className="absolute z-20 flex flex-row items-center p-3 text-xl text-center -translate-x-1/2 -translate-y-1/2 shopButton font-f1 text-c4 top-1/2 left-1/2 bg-c1_80 hide fadeIn ">
                <h1>Shop Now</h1>
                <BsArrowRightShort className="w-10 h-10 mt-1 fill-c4" />
              </button>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Collection;
