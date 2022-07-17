import React from "react";
import { MdOutlineAttachMoney, MdOutlineAddToPhotos } from "react-icons/md";

const Price = ({
  compPrice,
  salePrice,
  compTextSize,
  saleTextSize,
  compIconSize,
  saleIconSize,
}) => {
  return (
    <div className="flex flex-row justify-start mt-3 w-fit">
      <div className="relative flex flex-row items-center ">
        <div className="absolute w-full border-b-2 border-b-c3 border-b-solid"></div>
        <MdOutlineAttachMoney className={"fill-c3 " + compIconSize} />
        {/* <h2 className={"text-c3 font-f2 " + compTextSize}>
          {compPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </h2> */}
      </div>
      <div className="flex flex-row items-center justify-start">
        <MdOutlineAttachMoney className={"p-0 fill-c1 " + saleIconSize} />
        <h2 className={"-ml-2 font-bold text-c1 font-f2 " + saleTextSize}>
          {salePrice}
        </h2>
      </div>
    </div>
  );
};

export default Price;
