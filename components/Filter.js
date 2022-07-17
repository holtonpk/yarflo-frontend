import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const Filter = ({ title }) => {
  return (
    <button className="flex flex-row items-center">
      <h1 className="font-f2 text-c4 text-lg">{title}</h1>
      <MdKeyboardArrowDown className="h-6 w-6 fill-c4" />
    </button>
  );
};

export default Filter;
