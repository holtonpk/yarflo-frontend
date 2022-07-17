import Image from "next/image";
import Nav from "../components/Nav";
import { getProductData } from "../components/logic";
import ImgCard from "../components/ImgCard";
import { BsArrowRightShort } from "react-icons/bs";
import ActionCards from "../components/ActionCards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion } from "framer-motion";

// import { ScrollMagicPluginIndicator } from "scrollmagic-plugins";

import { AiOutlineMenu } from "react-icons/ai";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [navbarView, setNavbarView] = useState(false);
  const catClick = (Id) => {
    let elements = document.querySelectorAll(".category-headers li button");
    for (let element of elements) {
      element.classList.remove("active");
    }
    document.getElementById("button-" + Id).classList.add("active");
    let bodies = document.getElementsByClassName("catBody");
    for (let body of bodies) {
      body.classList.add("hide");
    }
    document.getElementById("show-" + Id).classList.remove("hide");
  };

  const addNavbar = () => {
    if (window.scrollY > 20 && document.getElementById("header-scroll")) {
      // setNavbarView(true);
    }
    if (window.scrollY > 80 && document.getElementById("header-scroll")) {
      document.getElementById("menuButton").classList.remove("hide");

      document.getElementById("scrollIcon").classList.add("hide");
      setNavbarView(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      addNavbar();
    });
    const load = async () => {
      if (typeof window !== undefined) {
        const ScrollMagic = (await import("scrollmagic")).default;

        const controller = new ScrollMagic.Controller();
        // ScrollMagicPluginIndicator(ScrollMagic);

        // _______Card1

        new ScrollMagic.Scene({
          triggerElement: "#scene1",
          triggerHook: 0.4,
          reverse: false,
        })

          .setClassToggle(".scene1-card1-img", "slide-in-bottom-1")
          .addTo(controller);

        // _______Card2

        new ScrollMagic.Scene({
          triggerElement: "#scene1",
          triggerHook: 0.4,
          reverse: false,
        })

          .setClassToggle(".scene1-card2-img", "slide-in-bottom-2")
          .addTo(controller);

        // _______Card3

        new ScrollMagic.Scene({
          triggerElement: "#scene1",
          triggerHook: 0.4,
          reverse: false,
        })

          .setClassToggle(".scene1-card3-img", "slide-in-bottom-3")
          .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: "#scene2",
          triggerHook: 0,
          // duration: 200,
        })
          .setPin("#scene2-text", { pushFollowers: false })
          .addTo(controller);
        new ScrollMagic.Scene({
          triggerElement: "#scene3",
          triggerHook: 0,
          // duration: 150,
        })
          .setPin("#scene3-text", { pushFollowers: false })
          .addTo(controller);
        // new ScrollMagic.Scene({
        //   triggerElement: "#scene1",
        //   triggerHook: 0,
        //   // duration: 250,
        // })
        //   .setPin("#scene1", { pushFollowers: false })
        //   .addTo(controller);
      }
    };
    load();
  });

  const variants = {
    hidden: {
      transform: "scaleY(0)",
      opacity: 0,
    },
    visible: (custom) => ({
      transform: "scaleY(1)",
      opacity: 1,
      transformOrigin: "bottom left",
      duration: 0.5,
      transition: { delay: custom },
    }),
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      {/* <ul className="transition scale-1">
        <motion.li
          custom={0}
          exit={"visible"}
          initial="hidden"
          variants={variants}
        ></motion.li>
        <motion.li
          custom={0.2}
          exit={"visible"}
          initial="hidden"
          variants={variants}
        ></motion.li>
        <motion.li
          custom={0.4}
          exit={"visible"}
          initial="hidden"
          variants={variants}
        ></motion.li>
        <motion.li
          custom={0.6}
          exit={"visible"}
          initial="hidden"
          variants={variants}
        ></motion.li>
        <motion.li
          custom={0.8}
          exit={"visible"}
          initial="hidden"
          variants={variants}
        ></motion.li>
      </ul> */}
      <div className="flex flex-col justify-start w-screen bg-white h-fit ">
        <div className="absolute z-50 w-screen h-screen bg-c1 slide-out-top">
          <h1 className="absolute text-6xl text-center -translate-x-1/2 -translate-y-1/2 font-f1 text-c2 top-1/2 left-1/2">
            Yardflo
            <div className="load-9 top-20">
              <div className="spinner">
                <div className="bubble-1"></div>
                <div className="bubble-2"></div>
              </div>
            </div>
          </h1>
        </div>
        <div
          id="blackBack"
          className="absolute z-30 w-full h-full bg-black_80 hide"
        ></div>
        {/* <ViewProduct /> */}

        <Nav />
        <div className="relative w-screen h-screen">
          <div className="absolute flex flex-row items-center justify-between w-full pl-20 mt-20 overflow-hidden -translate-y-1/2 top-1/3 h-fit">
            <div className="flex flex-col">
              <h1 className="text-left text-c1 text-8xl font-f1 ">
                Reimagine Your Spring Style
              </h1>
              <h2 className="flex flex-row items-center px-3 py-1 mt-3 text-4xl font-f2 text-c1 w-fit ">
                Shop
                <BsArrowRightShort className="w-16 h-16 fill-c1" />
              </h2>
            </div>

            {/* <div
          id="scrollIcon"
          className="absolute z-30 pb-10 -translate-x-1/2 -translate-y-full left-1/2 top-full "
        >
          <div id="section10" className="relative pt-12 demo fade-in-2">
            <a href="#thanks" className="mt-10 text-white font-f2">
              <span></span>Get Inspired
            </a>
          </div>
        </div> */}
            {/* <div className="relative flex float-left w-full py-8 overflow-hidden h-fit "> */}
            <div className="video_container ">
              <iframe
                src="https://player.vimeo.com/video/691048410?loop=1&amp;autoplay=true&amp;background=1"
                width="100%"
                height="100%"
                frameBorder="0"
                className=" b-b video"
              ></iframe>
            </div>
          </div>
        </div>

        <div id="scene1" className="">
          <div
            id="card1 "
            className="z-0 flex flex-row justify-between w-full px-10 mx-auto mb-10 h-fit "
          >
            <Link href={"/Catalog/Lighting"}>
              <a className="invisible w-1/4 h-fit scene1-card1-img">
                <div className="overflow-hidden h-3/5">
                  <div className="relative z-10 h-full w-100">
                    <Image
                      src={"/assets/Product_imgs/Ha731295/0_Ha731295.jpg"}
                      layout="responsive"
                      width="550"
                      height="550"
                    />
                  </div>
                </div>
                <h2 className="text-3xl font-f1 text-c1">
                  Brighten up indoor spaces
                </h2>
                <h2 className="flex flex-row items-center px-3 py-1 mt-3 text-lg font-f2 text-c1 border-1 border-c1 w-fit ">
                  Shop Lighting
                  <BsArrowRightShort className="w-8 h-8 fill-c1" />
                </h2>
              </a>
            </Link>

            <Link
              href={"/Catalog/Outdoor_&_Garden/All_Outdoor_Accessories_&_Decor"}
            >
              <a className="invisible w-1/4 h-fit scene1-card2-img">
                <div className="overflow-hidden h-3/5 ">
                  <div className="relative z-10 h-full w-100">
                    <Image
                      src={"/assets/Product_imgs/Ra113481/10_Ra113481.jpg"}
                      layout="responsive"
                      width="550"
                      height="550"
                    />
                  </div>
                </div>
                <h2 className="mt-3 text-3xl font-f1 text-c1">
                  Level up your porch and patio
                </h2>
                <h2 className="flex flex-row items-center px-3 py-1 mt-3 text-lg font-f2 text-c1 border-1 border-c1 w-fit ">
                  Shop planters
                  <BsArrowRightShort className="w-8 h-8 fill-c1" />
                </h2>
              </a>
            </Link>
            <Link href={"/Catalog/Storage"}>
              <a className="invisible w-1/4 h-fit scene1-card3-img">
                <div className="overflow-hidden h-3/4 ">
                  <div className="relative z-10 h-full w-100">
                    <Image
                      src={"/assets/Product_imgs/Re502000/0_Re502000.jpg"}
                      layout="responsive"
                      width="550"
                      height="550"
                    />
                  </div>
                </div>
                <h2 className="mt-3 text-3xl font-f1 text-c1">
                  Organize your kitchen like a pro
                </h2>
                <h2 className="flex flex-row items-center px-3 py-1 mt-3 text-lg font-f2 text-c1 border-1 border-c1 w-fit ">
                  Shop Storage
                  <BsArrowRightShort className="w-8 h-8 fill-c1" />
                </h2>
              </a>
            </Link>
          </div>
        </div>

        <div id="scene2" className="z-20">
          <div id="scene2-text" className="w-screen bg-white h-fit">
            <div className="relative w-1/2 h-fit">
              <h1
                id="scene2-h1"
                className="absolute z-20 float-left w-3/4 pt-10 mt-20 text-4xl leading-loose text-center -translate-x-1/2 text-c1 font-f1 left-1/2"
              >
                Consider this your summer prep checklist. First up? Moving your
                living room outside with indoor comforts, made weather-ready
              </h1>
            </div>
          </div>
          <div className="float-right w-full bg-white ">
            <div className="flex flex-col justify-between float-right w-1/2 py-6 bg-white">
              <ImgCard
                image="/assets/Product_imgs/Wo311768/4_Wo311768.jpg"
                product="Wo311768"
                collection="/Catalog/Pillows_&_Decor/Outdoor_Pillows"
              />
              <ImgCard
                image="/assets/Product_imgs/Po845011/0_Po845011.jpg"
                product="Po845011"
                collection="/Catalog/Outdoor_&_Garden/All_Outdoor_Lounge_Furniture"
              />
              <ImgCard
                image="/assets/Product_imgs/Po388366/0_Po388366.jpg"
                product="Po388366"
                collection="/Catalog/Outdoor_&_Garden/Coffee_Tables"
              />
              <ImgCard
                image="/assets/Product_imgs/Po599708/0_Po599708.jpg"
                product="Po599708"
                collection="/Catalog/Pillows_&_Decor/Outdoor_Pillows"
              />
            </div>
          </div>
        </div>

        <div id="scene3" className="z-20 w-fit h-fit">
          <div id="scene3-text" className="w-screen bg-c1 h-fit ">
            <div className="relative float-right w-1/2 h-fit">
              <h1
                id="scene3-h1"
                className="absolute z-20 float-left w-3/4 pt-10 mt-20 text-4xl leading-loose text-left -translate-x-1/2 text-c1 font-f1 left-1/2"
              >
                Make entertaining east. Get set for summer dining with
                all-weather furniture, virtually unbreakable melamine & plenty
                of candlelight
              </h1>
            </div>
          </div>
          <div className="float-left w-full bg-white ">
            <div className="float-left w-1/2 py-6 bg-white ">
              <div className="flex flex-col items-center justify-between mx-auto w-fit">
                <ImgCard
                  image="/assets/Product_imgs/Re672706/0_Re672706.jpg"
                  product="Re672706"
                  collection="/Catalog/Kitchen_&_Dining/All_Dinnerware"
                />
                <ImgCard
                  image="/assets/Product_imgs/Po634927/0_Po634927.jpg"
                  product="Po634927"
                  collection="/Catalog/Outdoor_&_Garden/Dining_Tables"
                />
                <ImgCard
                  image="/assets/Product_imgs/Tu112963/0_Tu112963.jpg"
                  product="Tu112963"
                  collection="/Catalog/Outdoor_&_Garden/Dining_Chairs_&_Benches"
                />
                <ImgCard
                  image="/assets/Product_imgs/Sl456615/0_Sl456615.jpg"
                  product="Sl456615"
                  collection="/Catalog/Outdoor_&_Garden/Kitchen_&_Bar"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 w-full h-full pt-10 bg-white">
          <ActionCards />
        </div>
        <Footer />
      </div>
    </motion.div>
  );
}
