import React from "react";
import Image from "next/image";
import Search from "./Search";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import CartPreview from "./CartPreview";
import Navbar from "./Navbar";
import dataLayout from "../public/Data/dataLayout.json";
import Link from "next/link";
import { sortProductsByTag, getImage } from "./logic";
import { useEffect } from "react";
const menuClick = () => {
  document.getElementById("dropDownMenu").classList.toggle("hide");
  document.getElementById("hamenu").classList.toggle("active");
};

const linkHover = (event, elem) => {};

const onHoverButton = (event, elem) => {
  elem.classList.toggle("text-c3");
  elem.classList.toggle("text-c1");
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
};

const Nav = () => {
  useEffect(() => {
    document.querySelectorAll(".navLink").forEach((item) => {
      item.addEventListener("mouseover", () => {
        item.classList.add("jello-horizontal");
      });
      item.addEventListener("mouseout", () => {
        item.classList.remove("jello-horizontal");
      });
    });

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
  });
  return (
    <>
      <CartPreview />
      <div className="sticky top-0 z-40 flex flex-col w-full">
        <div className="relative">
          <div className="flex flex-row items-center justify-between w-full px-6 bg-white border-b-1 border-c3">
            <Link href="/#">
              <a className="flex flex-row items-center w-1/3">
                <div className="relative w-16 h-16 ">
                  <Image layout="fill" src={"/assets/imgs/logo.png"} />
                </div>
                <h1 className="text-5xl font-f1 text-c1">Yardflo</h1>
              </a>
            </Link>
            <div className="flex flex-row items-center justify-between w-1/3 -ml-20">
              <a className="text-2xl cursor-pointer font-f2 text-c1 navLink">
                Shop
              </a>
              <a className="text-2xl cursor-pointer font-f2 text-c1 navLink">
                Sale
              </a>
              <button className="px-2 py-4 border-l-1 border-r-1 border-c3">
                <svg
                  id="hamenu"
                  className="ham ham6"
                  viewBox="0 0 100 100"
                  width="80"
                  onClick={() => menuClick()}
                >
                  <path
                    className="line top"
                    d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
                  />
                  <path
                    className="line middle"
                    d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
                  />
                  <path
                    className="line bottom"
                    d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
                  />
                </svg>
              </button>

              <a className="text-2xl cursor-pointer font-f2 text-c1 navLink">
                Brand
              </a>
              <button
                onClick={() =>
                  document.getElementById("Search").classList.remove("hide")
                }
                className="text-2xl cursor-pointer font-f2 text-c1 navLink"
              >
                Search
              </button>
            </div>

            <div className="flex flex-row items-center justify-between w-1/4">
              <Navbar />
            </div>
          </div>
          <div
            id="dropDownMenu"
            className="absolute z-30 w-screen bg-white h-fit hide swing-in-top-fwd"
          >
            {/* <div className="w-full pb-2 text-2xl text-center text-c1 font-f1 border-b-1 border-c3">
            Home
          </div> */}
            {/* <div className="grid w-full grid-cols-3 h-fit">
            {Object.keys(dataLayout).map((bigCategory, i) => (
              <h1
                key={i}
                className="py-10 text-5xl text-center cursor-pointer font-f1 text-c1 border-1 border-c3"
              >
                {bigCategory}
              </h1>

            ))}
          </div> */}
            <div id="menu" className="flex flex-row justify-between w-full ">
              {Object.keys(dataLayout).map((Category, i) => (
                <div key={i} className="w-full cursor-pointer menuItem">
                  <div className="w-full mx-auto">
                    <Link href={"/Catalog/" + Category.replaceAll(" ", "_")}>
                      <a>
                        <h1
                          id={"title" + Category.replaceAll(" ", "_")}
                          className="px-4 py-4 text-2xl text-center text-c1 font-f1 menuHeader whitespace-nowrap"
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
                        {Object.keys(dataLayout[Category]).map(
                          (subCategory) => (
                            <div
                              key={subCategory}
                              className="flex flex-col justify-between px-6 mb-3 h-70 border-r-1 border-r-c3"
                            >
                              <div className="flex-flex-col">
                                <h1 className="mb-3 text-2xl font-f1 text-c1 ">
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
                                  sortProductsByTag(
                                    [subCategory],
                                    true,
                                    false
                                  )[0]
                                    .title.slice(0, 25)
                                    .replaceAll(" ", "_")
                                    .replaceAll("/", "")
                                }
                              >
                                <a className="relative w-full h-60">
                                  <Image
                                    src={getImage(
                                      sortProductsByTag(
                                        [subCategory],
                                        true,
                                        true
                                      )[0]
                                    )}
                                    layout="fill"
                                  />
                                </a>
                              </Link>
                            </div>
                          )
                        )}
                      </div>
                    </h1>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        id="blurScreen"
        className="fixed z-30 w-screen h-screen bg-black_80 hide"
      ></div>

      <Search />

      <div
        id="signIn"
        className="fixed top-0 w-screen h-screen z-60 bg-black_80 hide"
      >
        <button
          onClick={() =>
            document.getElementById("signIn").classList.add("hide")
          }
          className="w-full h-full"
        ></button>
        <div className="absolute flex flex-col items-start justify-between w-1/2 px-10 py-5 pr-4 -translate-x-1/2 -translate-y-1/2 bg-white border-c1 top-1/2 left-1/2 rounded-xl lightplace">
          <h1 className="mb-3 text-3xl font-f1 text-c1">
            Sign in or Create Account
          </h1>
          <h1 className="w-full mb-3 text-xl font-f2 text-c1">
            Use the same sign-in credentials for any brand in our family of
            brands.
          </h1>

          <input
            type="text"
            placeholder="Email"
            className="w-full h-16 pl-3 mb-3 text-2xl border-2 border-c1 font-f1 text-c1 rounded-xl"
          />
          <input
            type="text"
            placeholder="Password"
            className="w-full h-16 pl-3 mb-3 text-2xl border-2 border-c1 font-f1 text-c1 rounded-xl"
          />
          <div className="flex flex-row items-center">
            <button className="p-3 text-xl text-white border-2 bg-c1 text-f2 rounded-xl hover:bg-c1_70 ">
              Sign In
            </button>
            <button className="p-3 text-xl bg-white border-2 text-c1 border-c1 text-f2 rounded-xl hover:bg-c1_70 ">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
