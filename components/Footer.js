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

import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    setError("");
    setSuccess(false);
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    // Perform email validation
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }
    // Send the email to the server for subscription
    // Simulating a successful response
    setSuccess(true);
    setError("");
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white py-8 relative z-20 w-screen  pt-10 bg-c1 h-fit">
      <div className=" mx-auto">
        <div className="grid grid-cols-3 items-center px-10">
          <div className="flex flex-col">
            <div className="w-fit  text-center lg:text-left ">
              <h2 className="text-xl font-medium mb-4 text-c2">About Us</h2>
              <p className="text-gray-500 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
                euismod nisi, eget convallis lectus. Sed in euismod nisi.
              </p>
            </div>
            <div className="w-fit text-center lg:text-left ">
              <h2 className="text-xl font-medium mb-4 text-c2">Newsletter</h2>

              <form
                onSubmit={handleSubmit}
                className=" w-fit rounded-lg  flex flex-col "
              >
                <div className="flex flex-row">
                  <div className="relative rounded-md shadow-sm newsLetter">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input py-3 pl-2 bg-c1 h-10 border-[1px] border-[1px]-white rounded-md transition duration-150 rounded-r-none text-white border-[1px]-c1 ease-in-out sm:text-sm sm:leading-5"
                      placeholder="Your email address"
                    />
                  </div>

                  <button className=" bg-white h-fit flex flex-row gap-2 items-center text-c1 py-2 px-4 rounded-md rounded-l-none hover:bg-indigo-600">
                    Subscribe
                    <FaEnvelope className="w-5 h-5 text-gray-500 fill-c1" />
                  </button>
                </div>
                {error && <p className=" text-red">{error}</p>}
                {success && (
                  <p className="text-c2 ">
                    Thank you for subscribing to our newsletter!
                  </p>
                )}
              </form>
            </div>
          </div>

          <div className="w-full lg:w-1/4 text-center lg:text-left  mx-auto">
            <h2 className="text-xl font-medium mb-4 text-c2">Categories</h2>
            <ul className="list-reset mb-4">
              <li className="text-gray-500 mb-2">
                <a to="#" className="text-white">
                  Men
                </a>
              </li>
              <li className="text-gray-500 mb-2">
                <a to="#" className="text-white">
                  Women
                </a>
              </li>
              <li className="text-gray-500 mb-2">
                <a to="#" className="text-white">
                  Kids
                </a>
              </li>
              <li className="text-gray-500 mb-2">
                <a to="#" className="text-white">
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 text-center lg:text-left mx-auto">
            <h2 className="text-xl font-medium mb-4 text-c2 whitespace-nowrap">
              Customer Service
            </h2>
            <ul className="list-reset mb-4">
              <li className="text-gray-500 mb-2">
                <a to="#" className="text-white">
                  Contact Us
                </a>
              </li>
              <li className="text-gray-500 mb-2">
                <a to="#" className="text-white">
                  FAQ
                </a>
              </li>
              <li className="text-gray-500 mb-2">
                <a to="#" className="text-white">
                  Return Policy
                </a>
              </li>
              <li className="text-gray-500 mb-2">
                <a to="#" className="text-white">
                  Shipping
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 border-t-[1px] border-t-c2 mt-3">
        <div className="text-center text-gray-500 mt-6 text-c2">
          © 2015 - 2022 Company Inc.
        </div>
        <ul className="mt-4 flex items-center justify-center">
          <li className="mr-4">
            <FaFacebook className="w-6 h-6 fill-current text-c2" />
          </li>
          <li className="mr-4">
            <FaTwitter className="w-6 h-6 fill-current text-c2" />
          </li>
          <li className="mr-4">
            <FaInstagram className="w-6 h-6 fill-current text-c2" />
          </li>
          <li className="mr-4">
            <FaPinterest className="w-6 h-6 fill-current text-c2" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
