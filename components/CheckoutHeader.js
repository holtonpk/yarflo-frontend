import React from "react";
import Image from "next/image";
import Link from "next/link";
const CheckoutHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full px-20 mx-auto mt-10">
      <div className=" w-fit">
        <Link href={"/#"}>
          <a>
            <div
              id="logo"
              className="flex flex-row items-center col-auto mx-auto text-center cursor-pointer slow "
            >
              <Image src="/assets/imgs/logo.png" height="50" width="50" />
              <h1 className="ml-3 text-6xl font-f1 text-c1">YardFlo</h1>
            </div>
          </a>
        </Link>
      </div>
      <h1 className="ml-3 text-2xl font-f1 text-c1">DISCOVER YOUR STYLE.</h1>
    </div>
  );
};

export default CheckoutHeader;
