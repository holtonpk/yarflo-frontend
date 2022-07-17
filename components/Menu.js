import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dataLayout from "../public/Data/dataLayout.json";
import { useRouter } from "next/router";
import { getImage, sortProductsByTag } from "./logic";
const Menu = ({ Page }) => {
  const onHoverButton = (event, elem) => {
    if (event == "in") {
      elem.classList.remove("text-c3");
      elem.classList.add("text-c1");
    } else {
      elem.classList.add("text-c3");
      elem.classList.remove("text-c1");
    }
  };
  const onHover = (event, elem) => {
    if (event == "in") {
      try {
        document.querySelectorAll(".menuHeader").forEach((header) => {
          header.classList.remove("text-c1");
          header.classList.add("text-c3");
        });
        elem.getElementsByTagName("h1").item(0).classList.remove("text-c3");
        elem.getElementsByTagName("h1").item(0).classList.add("text-c1");
        // if (Page) {
        //   document.getElementById("title" + Page).classList.remove("text-c3");
        //   document.getElementById("title" + Page).classList.add("text-c1");
        // }
      } catch {
        // a
      }
      elem.getElementsByTagName("span").item(0).classList.remove("hide");
      document.getElementById("blurScreen").classList.remove("hide");

      elem.getElementsByClassName("underline").item(0).classList.remove("hide");
      elem
        .getElementsByClassName("underline")
        .item(0)
        .classList.add("scale-in-hor-center");

      elem
        .getElementsByClassName("underline")
        .item(0)
        .classList.remove("scale-out-horizontal");
    } else {
      try {
        document.querySelectorAll(".menuHeader").forEach((header) => {
          header.classList.add("text-c1");
          header.classList.remove("text-c3");
        });
      } catch {
        // a
      }
      elem.getElementsByTagName("span").item(0).classList.add("hide");
      document.getElementById("blurScreen").classList.add("hide");

      elem
        .getElementsByClassName("underline")
        .item(0)
        .classList.add("scale-out-horizontal");

      elem
        .getElementsByClassName("underline")
        .item(0)
        .classList.remove("scale-in-hor-center");
    }
    // if (Page) {
    //   console.log("adding:", Page);
    //   document.getElementById("underline" + Page).classList.remove("hide");
    //   document
    //     .getElementById("underline" + Page)
    //     .classList.remove("scale-out-horizontal");
    // }
  };
  useEffect(() => {
    document.querySelectorAll(".menuItem").forEach((item) => {
      item.addEventListener("mouseover", () => onHover("in", item));
      item.addEventListener("mouseout", () => onHover("out", item));
    });
    document.querySelectorAll(".catButton").forEach((item) => {
      item.addEventListener("mouseover", () => onHoverButton("in", item));
      item.addEventListener("mouseout", () => onHoverButton("out", item));
    });

    document.querySelectorAll(".under_line").forEach((underline) => {
      underline.classList.add("hide");
    });

    // if (Page) {
    //   document.getElementById("underline" + Page).classList.remove("hide");
    //   document.getElementById("title" + Page).classList.add("text-c1");
    // }
  }, [Page]);

  const getMenuItems = () => {};
  getMenuItems();
  const [menuItems, setMenuItems] = useState(Object.keys(dataLayout));

  return (
    <div className="relative z-30 flex flex-row items-center justify-start w-full h-8 pb-3 mx-auto mt-6 border-b-2 slow border-c1">
      {/* <button
        onClick={() => onClick("c")}
        id="menuButton"
        className="absolute left-0 z-40 pl-10 top-36 bg-c1 rounded-l-2xl"
      >
        <div id="closeIcon" className="opacity-0 hide fadeIn">
          <AiOutlineClose className="w-10 h-10 fill-white " />
        </div>
        <div id="menuIcon" className="opacity-0">
          <AiOutlineMenu className="w-10 h-10 fill-white " />
        </div>
      </button> */}
      <div id="menu" className="flex flex-row justify-between w-full ">
        {menuItems.map((Category, i) => (
          <div key={i} className="w-full cursor-pointer menuItem">
            <div className="w-full mx-auto">
              <Link href={"/Catalog/" + Category.replaceAll(" ", "_")}>
                <a>
                  <h1
                    id={"title" + Category.replaceAll(" ", "_")}
                    className="px-4 text-lg text-center text-c1 font-f1 menuHeader whitespace-nowrap"
                  >
                    {Category}
                  </h1>
                </a>
              </Link>
              <div
                id={"underline" + Category.replaceAll(" ", "_")}
                className="w-full h-1 underline bg-c1 hide under_line"
              ></div>
            </div>
            <span className="absolute left-0 w-full bg-white h-fit hide">
              <h1 className="text-3xl">
                <div className="relative grid w-full grid-cols-5 gap-4 mt-4 h-70">
                  {Object.keys(dataLayout[Category]).map((subCategory) => (
                    <div
                      key={subCategory}
                      className="flex flex-col justify-between px-6 mb-3 h-70 border-r-1 border-r-c3"
                    >
                      <div className="flex-flex-col">
                        <h1 className="mb-3 text-lg font-f1 text-c1 ">
                          {subCategory}
                        </h1>
                        <div className="flex flex-col">
                          {dataLayout[Category][subCategory].map(
                            (miniCategory) => (
                              <div key={miniCategory} className="mb-3">
                                <Link
                                  href={
                                    "/Catalog/" +
                                    Category.replaceAll(" ", "_") +
                                    "/" +
                                    miniCategory.replaceAll(" ", "_")
                                  }
                                >
                                  <a>
                                    <h1 className="text-sm font-f2 text-c3 catButton">
                                      {miniCategory}
                                    </h1>
                                  </a>
                                </Link>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                      <Link
                        href={
                          "/Product/" +
                          sortProductsByTag([subCategory], true, false)[0]
                            .title.slice(0, 25)
                            .replaceAll(" ", "_")
                            .replaceAll("/", "")
                        }
                      >
                        <a className="relative w-full h-60">
                          <Image
                            src={getImage(
                              sortProductsByTag([subCategory], true, true)[0]
                            )}
                            layout="fill"
                          />
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </h1>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
