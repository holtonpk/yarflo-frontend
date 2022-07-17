import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Menu from "./Menu";
import Image from "next/image";
import Link from "next/link";
import { BiHome, BiHeart, BiSearchAlt } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import CartPreview from "./CartPreview";
const expensiveInitialState = () => {
  return 2;
};

const Header = ({ collapse, Page }) => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [menuCollapse, set_menuCollapse] = useState(false);
  const [searchInput, setSearchInput] = useState(false);
  useEffect(() => {
    document
      .getElementById("searchInput")
      .addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
          document.location.href =
            "/Search/" + document.getElementById("searchInput").value;
        }
      });
    if (collapse) {
      function onScroll() {
        if (scrolling == true) {
          ("at the top of the page");
        }

        let currentPosition = document.documentElement.scrollTop;
        if (currentPosition > scrollTop) {
          if (scrollTop > 20 && !menuCollapse) {
            shrinkMenu();
            set_menuCollapse(true);
          }
          setScrolling(false);
        } else {
          if (scrollTop <= 50 && menuCollapse) {
            expMenu();
            set_menuCollapse(false);
          }

          setScrolling(true);
        }
        setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
      }

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [scrollTop]);

  const expMenu = () => {
    expHeader();
    expNavbar();
    slideMenuButtonDown();
    addLongMenu();
    removeMenuButton();
  };

  const shrinkMenu = () => {
    shrinkHeader();
    shrinkNavbar();
    addMenuButton();
    removeLongMenu();
    slideMenuButtonUp();
  };

  const removeLongMenu = () => {
    document.getElementById("menu").classList.add("slide-out-left");
    document.getElementById("menu").classList.remove("slide-in-left");
  };

  const addLongMenu = () => {
    document.getElementById("menu").classList.remove("slide-out-left");
    document.getElementById("menu").classList.add("slide-in-left");
  };

  const removeMenuButton = () => {
    document.getElementById("menuIcon").classList.remove("fadeIn");
    document.getElementById("menuIcon").classList.add("opacity-0");
    document.getElementById("menuIcon").classList.add("ease-out");
  };

  const addMenuButton = () => {
    document.getElementById("menuIcon").classList.remove("ease-out");
    document.getElementById("menuIcon").classList.remove("opacity-0");
    document.getElementById("menuIcon").classList.add("ease-in-delay");
  };

  const slideMenuButtonUp = () => {
    document.getElementById("menuButton").classList.remove("slideMenuDown");
    document.getElementById("menuButton").classList.add("slideMenuUp");
  };

  const slideMenuButtonDown = () => {
    document.getElementById("menuButton").classList.remove("slideMenuUp");
    document.getElementById("menuButton").classList.add("slideMenuDown");
  };

  const shrinkNavbar = () => {
    document.getElementById("logoNav").classList.remove("w-full");
    document.getElementById("logoNav").classList.add("w-3/4");
  };
  const expNavbar = () => {
    document.getElementById("logoNav").classList.add("w-full");
    document.getElementById("logoNav").classList.remove("w-3/4");
  };

  const shrinkHeader = () => {
    document.getElementById("headerContainer").classList.remove("growHeader");
    document.getElementById("headerContainer").classList.add("shrinkHeader");
  };
  const expHeader = () => {
    document.getElementById("headerContainer").classList.remove("shrinkHeader");
    document.getElementById("headerContainer").classList.add("growHeader");
  };
  const [menuOpen, setMenuOpen] = useState(true);

  const menuClick = (dir) => {
    if (menuOpen) {
      expMenu();

      document.getElementById("menuIcon").classList.add("hide");
      document.getElementById("closeIcon").classList.add("fadeIn");
      document.getElementById("closeIcon").classList.remove("hide");
      setMenuOpen(false);
    } else {
      shrinkMenu();

      document.getElementById("closeIcon").classList.add("hide");
      document.getElementById("menuIcon").classList.add("fadeIn");

      document.getElementById("menuIcon").classList.remove("hide");
      setMenuOpen(true);
    }
  };

  const showSearch = () => {
    if (!searchInput) {
      document.getElementById("searchInput").classList.remove("hide");
      setSearchInput(true);
    } else if (
      document.getElementById("searchInput").value &&
      document.getElementById("searchInput").value.length >= 3
    ) {
      document.location.href =
        "/Search/" + document.getElementById("searchInput").value;
      console.log("value", document.getElementById("searchInput").value);
    }
  };

  return (
    <div className="sticky top-0 z-30">
      <div
        id="blurScreen"
        className="absolute z-0 w-screen h-screen fade-in-fast bg-black_80 top-40 hide"
      ></div>
      <CartPreview />

      <div className="z-30 flex flex-col w-full bg-white border-solid border-t1">
        <div className="flex flex-row items-center justify-between w-full mx-auto ">
          <div className="flex flex-row items-center justify-between w-1/3 ml-6">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row items-center w-fit">
                <IoLocationOutline className="w-8 h-8 fill-c2" />
                <h1 className="text-lg font-f1 text-c1">United States</h1>
              </div>
              <div className="relative flex flex-row items-center justify-between w-1/2">
                <button
                  onClick={() => showSearch()}
                  className="p-2 border-2 border-r-0 rounded-l-full border-c1 w-fit"
                >
                  <BiSearchAlt className="w-6 h-6 fill-c1" />
                </button>

                <input
                  onkeydown={() => search(this)}
                  id="searchInput"
                  type="text"
                  placeholder="Search for it here"
                  className="w-full h-full border-2 border-l-0 rounded-r-full left-12 border-c1 text-c1 font-f2"
                />
              </div>
            </div>
          </div>
          <div className="w-1/3 mx-auto ">
            <div className="mx-auto w-fit">
              <Link href={"/#"}>
                <a>
                  <div
                    id="logo"
                    className="flex flex-row items-center col-auto mx-auto text-center cursor-pointer slow "
                  >
                    {/* <Image src="/assets/imgs/logo.png" height="50" width="50" /> */}
                    <h1 className="ml-3 text-6xl font-f1 text-c1">YardFlo</h1>
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <div className="relative w-1/3 col-auto">
            <Navbar />
          </div>
        </div>

        <Menu onClick={menuClick} Page={Page} />
      </div>
    </div>
  );
};
export default Header;
