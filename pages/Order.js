import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
const Order = () => {

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className=" bg-c1"
    >

      <Nav />
      <h1 className="py-10 mx-auto text-4xl text-white w-fit font-f1">
        Track Your Order
      </h1>
      <div className="flex flex-row justify-between w-5/6 mx-auto mb-20 trackPage h-5/6">
        <div className="flex flex-col items-start justify-between w-1/2 pr-4 border-r-2 border-white">
          <h1 className="text-3xl text-white font-f1">
            Sign in to view order history
          </h1>
          <h1 className="w-full text-xl text-white font-f2">
            Use the same sign-in credentials for any brand in our family of
            brands.
          </h1>

          <input
            type="text"
            placeholder="Email"
            className="w-full h-16 pl-3 text-2xl text-white border-2 border-c1 font-f1 rounded-xl"
          />
          <input
            type="text"
            placeholder="Password"
            className="w-full h-16 pl-3 text-2xl text-white border-2 border-c1 font-f1 rounded-xl"
          />
          <button className="p-3 text-xl text-white border-2 bg-c1 text-f2 rounded-xl hover:bg-white hover:text-c1">
            Sign In
          </button>
        </div>
        <div className="flex flex-col items-start justify-between w-1/2 pl-4 h-5/6">
          <h1 className="text-3xl text-white font-f1">Order Search</h1>
          <h1 className="w-full text-xl text-white font-f2">
            New orders may take up to 24 hours to appear while we complete
            processing.
          </h1>

          <input
            type="text"
            placeholder="Order Number"
            className="w-full h-16 pl-3 text-2xl text-white border-2 border-c1 font-f2 rounded-xl"
          />
          <button className="p-3 text-xl text-white border-2 border-white text-f2 bg-c1 rounded-xl hover:bg-white hover:text-c1">
            Track Order
          </button>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Order;
