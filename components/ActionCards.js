import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
const ActionCards = () => {
  return (
    <div className="flex flex-row justify-between w-4/5 pb-10 mx-auto">
      <div className="flex flex-col items-center p-6 bg-white border-2 border-solid w-30p border-c1 ">
        <AiOutlineMail className="w-10 h-10 mb-4 fill-c1" />
        <h1 className="mb-2 text-3xl text-center text-c1 font-f1">
          Stay in Touch
        </h1>
        <h2 className="mb-4 text-center text-md text-c1 font-f2">
          Get sneak previews of special offers & upcoming events delivered to
          your inbox.
        </h2>
        <div className="flex flex-row items-center ">
          <input
            type="email"
            placeholder="email@example.com"
            className="h-8 px-3 bg-white text-c1 rounded-l-xl"
          />
          <button className="h-8 px-2 text-lg text-white bg-c1 rounded-r-xl font-f2">
            Sign Up
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center p-6 bg-white border-2 border-solid w-30p border-c1 ">
        <IoPersonOutline className="w-10 h-10 mb-4 text-c1" />
        <h1 className="mb-2 text-3xl text-center text-c1 font-f1">
          Manage Your Account
        </h1>
        <h2 className="mb-4 text-center text-md text-c1 font-f2">
          Find recent orders, do a return or exchange, create a Wish List & much
          more.
        </h2>
        <div className="flex flex-row items-center ">
          <button className="box-border h-8 px-2 mr-3 text-lg bg-white border-2 border-solid text-c1 rounded-xl font-f2 border-c1">
            Order Status
          </button>
          <button className="h-8 px-2 text-lg text-white bg-c1 rounded-xl font-f2">
            Account
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center p-6 bg-white border-2 border-solid w-30p border-c1 ">
        <MdPayment className="w-10 h-10 mb-4 text-c1" />
        <h1 className="mb-2 text-3xl text-center text-c1 font-f1">
          Get More with FCard
        </h1>
        <h2 className="mb-4 text-center text-md text-c1 font-f2">
          Enjoy Your FCard Easy Pay Perk!<br></br>
          <br></br>&nbsp;
        </h2>
        <div className="flex flex-row items-center ">
          <button className="box-border h-8 px-2 mr-3 text-lg bg-white border-2 border-solid text-c1 rounded-xl font-f2 border-c1">
            Pay FloCard Bill
          </button>
          <button className="h-8 px-2 text-lg text-white bg-c1 rounded-xl font-f2">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionCards;
