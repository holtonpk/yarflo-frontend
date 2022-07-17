import React from "react";
import { GiUsaFlag } from "react-icons/gi";
import {
  FaFacebook,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcApplePay,
  FaCcPaypal,
  FaCcAmazonPay,
  FaEthereum,
  FaBitcoin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="relative z-20 w-screen h-56 pt-10 bg-c1 h-fit">
      <div className="flex flex-row items-center justify-between w-3/6 m-auto mt-6 ">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col mr-10">
            <h1 className="mb-2 text-xl text-left font-f2 text-c2">About Us</h1>
            <h2 className="mb-2 text-sm text-left font-f2 text-c4">Contact</h2>
            <h2 className="mb-2 text-sm text-left font-f2 text-c4">Account</h2>
            <h2 className="mb-2 text-sm text-left font-f2 text-c4">Careers</h2>
            <h2 className="mb-2 text-sm text-left font-f2 text-c4">Collab</h2>
            <h2 className="text-sm text-left font-f2 text-c4">Discounts</h2>
          </div>
          <div className="flex flex-col">
            <h1 className="mb-2 text-xl text-left font-f2 text-c2">Help</h1>
            <h2 className="mb-2 text-sm text-left font-f2 text-c4">Returns</h2>
            <h2 className="mb-2 text-sm text-left font-f2 text-c4">
              FAQs and help center
            </h2>
            <h2 className="mb-2 text-sm text-left font-f2 text-c4">Terms</h2>
            <h2 className="mb-2 text-sm text-left font-f2 text-c4">Privacy</h2>
            <h2 className="mb-2 text-sm text-left font-f2 text-c4">
              Contact Us
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full items-left ">
          <div className="flex flex-row justify-between w-3/4 mb-8">
            <FaFacebook className="w-10 h-10 fill-c4" />
            <FaTwitter className="w-10 h-10 fill-c4" />
            <FaInstagram className="w-10 h-10 fill-c4" />
            <FaPinterest className="w-10 h-10 fill-c4" />
          </div>

          <div className="flex flex-row justify-between w-full mb-6 ">
            <FaCcVisa className="w-10 h-10 mr-3 fill-c4" />
            <FaCcMastercard className="w-10 h-10 mr-3 fill-c4" />
            <FaCcApplePay className="w-10 h-10 mr-3 fill-c4" />
            <FaCcPaypal className="w-10 h-10 mr-3 fill-c4" />
            <FaEthereum className="w-10 h-10 mr-3 fill-c4" />
            <FaBitcoin className="w-10 h-10 mr-3 fill-c4" />
          </div>
          <h1 className="text-lg font-f2 text-c2">
            © 2015 - 2022 Company Inc.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
