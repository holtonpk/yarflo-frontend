import React, { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  useEffect(() => {
    document
      .getElementById("searchInput")
      .addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
          document.location.href =
            "/Search/" + document.getElementById("searchInput").value;
        }
      });
  });

  const showSearch = () => {
    if (
      document.getElementById("searchInput").value &&
      document.getElementById("searchInput").value.length >= 3
    ) {
      document.location.href =
        "/Search/" + document.getElementById("searchInput").value;
      console.log("value", document.getElementById("searchInput").value);
    }
  };
  return (
    <div id="Search" className="absolute z-40 w-screen h-screen hide">
      <button
        className="fixed top-0 left-0 z-40 w-screen h-screen bg-black_80 "
        onClick={() => document.getElementById("Search").classList.add("hide")}
      ></button>
      <div className="fixed z-50 flex flex-row items-center justify-between h-20 -translate-x-1/2 -translate-y-full w-fit top-1/2 left-1/2">
        <button
          onClick={() => showSearch()}
          className="h-20 p-2 border-2 border-r-0 border-white rounded-l-full w-fit"
        >
          <BiSearchAlt className="w-10 h-10 fill-white" />
        </button>

        <input
          onKeyDown={() => search(this)}
          id="searchInput"
          type="text"
          placeholder="Search for it here"
          className="h-full text-2xl text-white border-2 border-l-0 border-white rounded-r-full left-12 bg-none font-f2 scale-in-hor-left"
        />
      </div>
    </div>
  );
};

export default Search;
