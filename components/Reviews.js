import React from "react";
import { RiStarHalfFill, RiStarFill, RiStarLine } from "react-icons/ri";
import { useEffect } from "react";
import { useState } from "react";
export default function Reviews({ rating, size, color, textSize }) {
  const [starList, setStarList] = useState([]);

  useEffect(() => {
    if (starList.length == 0) {
      const tempStarList = [];
      for (let i = 1; i <= rating; i++) {
        tempStarList.push("full");
      }
      if (!(tempStarList.length % rating == 0)) {
        tempStarList.push("half");
      }

      while (tempStarList.length < 5) {
        tempStarList.push("empty");
      }
      setStarList(tempStarList);
    }
  });

  const displayStars = (star) => {
    if (star == "full") {
      return (
        <>
          <RiStarFill className={size + color} />
        </>
      );
    } else if (star == "half") {
      return (
        <>
          <RiStarHalfFill className={size + color} />
        </>
      );
    } else {
      return (
        <>
          <RiStarLine className={size + color} />
        </>
      );
    }
  };

  return (
    <div className="flex flex-row items-center justify-start w-full">
      {starList.map((star) => (
        <div key={Math.floor(Math.random() * 1000000)}>
          {displayStars(star)}
        </div>
      ))}
      <h2 className={"mt-1 font-f2 text-c1 " + textSize}>
        {"(" + rating + ")"}
      </h2>
    </div>
  );
}
