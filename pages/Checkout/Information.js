import React, { useState, useEffect } from "react";
import CheckoutStatus from "../../components/CheckoutStatus";
import OrderSummary from "../../components/OrderSummary";
import Image from "next/image";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { FaCcPaypal, FaCcApplePay, FaGooglePay } from "react-icons/fa";
import Cookie from "js-cookie";
import Link from "next/link";
import CheckoutHeader from "../../components/CheckoutHeader";

const Information = () => {
  const [customerInfo, setCustomerInfo] = useState({});

  useEffect(() => {
    Cookie.set("customerInfo", JSON.stringify(customerInfo));
  }, [customerInfo]);

  const validateEmail = () => {
    return String(document.getElementById("emailInput").value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhone = () => {
    return String(document.getElementById("phoneInput").value)
      .toLowerCase()
      .match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
  };

  const validateAddress = () => {};

  const nextPage = () => {
    let allGood = true;

    document.querySelectorAll(".shippingInput").forEach((input) => {
      if (!input.getElementsByTagName("input")[0].value) {
        if (!(input.id == "adr2")) {
          console.log(input.id);
          input.classList.add("b-r");
          document
            .getElementById(input.id + "ErrorText")
            .classList.remove("hide");
          allGood = false;
        }
      } else {
        input.classList.remove("b-r");
        document.getElementById(input.id + "ErrorText").classList.add("hide");

        customerInfo[input.id] = input.getElementsByTagName("input")[0].value;

        setCustomerInfo({ ...customerInfo });
      }
    });

    if (validateEmail()) {
      document.getElementById("email").classList.remove("b-r");
      document.getElementById("emailErrorText").classList.add("hide");
    } else {
      document.getElementById("email").classList.add("b-r");
      document.getElementById("emailErrorText").classList.remove("hide");
      allGood = false;
    }

    if (validatePhone()) {
      document.getElementById("phone").classList.remove("b-r");
      document.getElementById("phoneErrorText").classList.add("hide");
    } else {
      document.getElementById("phone").classList.add("b-r");
      document.getElementById("phoneErrorText").classList.remove("hide");
      allGood = false;
    }

    if (validateAddress) {
    } else {
      allGood = false;
    }

    if (allGood) {
      console.log(customerInfo);
      document.location.href = "/Checkout/Shipping";
    }
  };

  return (
    <div className="flex flex-col justify-between w-screen bg-white h-fit">
      <CheckoutHeader />
      <div className="flex flex-row justify-between w-screen min-h-screen mt-10">
        <div className="w-1/2 h-screen mx-auto border-c3">
          <CheckoutStatus page="1" />

          <div className="flex flex-col items-center w-1/2 mx-auto mt-6 ">
            <h1 className="text-2xl font-f2 text-c1">Express Checkout</h1>
            <div className="flex flex-row items-center justify-between w-full px-6 border-2 rounded-lg h-fit border-c1">
              <FaCcPaypal className="w-24 h-24 fill-payPal" />
              <FaCcApplePay className="w-24 h-24 fill-black" />
              <FaGooglePay className="w-24 h-24 fill-black" />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-1/2 mx-auto mt-3">
            <div className="w-1/3 h-0 border-b-1 border-t1"></div>
            <h1 className="text-xl font-f2 text-c1">OR</h1>

            <div className="w-1/3 h-0 border-b-1 border-t1"></div>
          </div>
          <div className="flex flex-col items-center justify-between w-5/6 mx-auto">
            <div className="flex flex-row items-center justify-between w-full mx-auto">
              <h1 className="text-2xl font-f2 text-c1">Contact Information</h1>
              <h2 className="text-lg font-f2 text-c1">
                Already have an account? Log in
              </h2>
            </div>
            <div
              id="email"
              className="w-full px-3 py-1 mt-3 border-2 border-c3 shippingInput"
            >
              <h3 className="text-sm text-c1 font-f2">Email</h3>
              <input
                id="emailInput"
                type="text"
                className="w-full text-lg text-c1 bg-none font-f2 "
              />
            </div>
            <h2
              id="emailErrorText"
              className="w-full text-lg font-f2 text-red hide"
            >
              Enter a valid email
            </h2>
            <div className="flex flex-row items-center justify-between w-full mx-auto mt-3">
              <h1 className="text-2xl font-f2 text-c1">Shipping address</h1>
            </div>

            <div className="flex flex-row justify-between w-full item-center">
              <div className="flex flex-col w-45">
                <div
                  id="firstName"
                  className="w-full px-3 py-1 mt-3 border-2 border-c3 shippingInput"
                >
                  <h3 className="text-sm text-c1 font-f2">First Name</h3>
                  <input
                    type="text"
                    className="w-full text-lg text-c1 bg-none font-f2 "
                  />
                </div>
                <h2
                  id="firstNameErrorText"
                  className="w-full text-lg font-f2 text-red hide"
                >
                  Enter your First Name
                </h2>
              </div>
              <div className="flex flex-col w-45">
                <div
                  id="lastName"
                  className="w-full px-3 py-1 mt-3 border-2 border-c3 shippingInput"
                >
                  <h3 className="text-sm text-c1 font-f2">Last Name</h3>
                  <input
                    type="text"
                    className="w-full text-lg text-c1 bg-none font-f2"
                  />
                </div>
                <h2
                  id="lastNameErrorText"
                  className="w-full text-lg font-f2 text-red hide"
                >
                  Enter your Last Name
                </h2>
              </div>
            </div>
            <div
              id="adr1"
              className="w-full px-3 py-1 mt-3 border-2 border-c3 shippingInput"
            >
              <h3 className="text-sm text-c1 font-f2">Address Line 1</h3>
              <input
                type="text"
                className="w-full text-lg text-c1 bg-none font-f2"
              />
            </div>
            <h2
              id="adr1ErrorText"
              className="w-full text-lg font-f2 text-red hide"
            >
              Enter an address
            </h2>
            <div
              id="adr2"
              className="w-full px-3 py-1 mt-3 border-2 border-c3 shippingInput"
            >
              <h3 className="text-sm text-c1 font-f2">Address Line 2</h3>
              <input
                type="text"
                className="w-full text-lg text-c1 bg-none font-f2 "
              />
            </div>
            <div
              id="city"
              className="w-full px-3 py-1 mt-3 border-2 border-c3 shippingInput"
            >
              <h3 className="text-sm text-c1 font-f2">City</h3>
              <input
                type="text"
                className="w-full text-lg text-c1 bg-none font-f2 "
              />
            </div>
            <h2
              id="cityErrorText"
              className="w-full text-lg font-f2 text-red hide"
            >
              Enter a city
            </h2>

            <div className="flex flex-row justify-between w-full item-center">
              <div className="flex flex-col w-45">
                <div
                  id="state"
                  className="w-full px-3 py-1 mt-3 border-2 border-c3 shippingInput"
                >
                  <h3 className="text-sm text-c1 font-f2">State</h3>
                  <input
                    type="text"
                    className="w-full text-lg text-c1 bg-none font-f2 "
                  />
                </div>
                <h2
                  id="stateErrorText"
                  className="w-full text-lg font-f2 text-red hide"
                >
                  Select a state
                </h2>
              </div>
              <div className="flex flex-col w-45">
                <div
                  id="zip"
                  className="w-full px-3 py-1 mt-3 border-2 border-c3 shippingInput"
                >
                  <h3 className="text-sm text-c1 font-f2">Zip</h3>
                  <input
                    type="text"
                    className="w-full text-lg text-c1 bg-none font-f2"
                  />
                </div>
                <h2
                  id="zipErrorText"
                  className="w-full text-lg font-f2 text-red hide"
                >
                  Enter a Zip Code
                </h2>
              </div>
            </div>

            <div
              id="phone"
              className="w-full px-3 py-1 mt-3 border-2 border-c3 shippingInput"
            >
              <h3 className="text-sm text-c1 font-f2">Phone</h3>
              <input
                id="phoneInput"
                type="text"
                className="w-full text-lg text-c1 bg-none font-f2"
              />
            </div>
            <h2
              id="phoneErrorText"
              className="w-full text-lg font-f2 text-red hide "
            >
              Enter a valid phone number
            </h2>

            <div className="flex flex-row items-center justify-between w-full mt-3">
              <Link href="/Checkout">
                <a className="flex flex-row items-center w-fit">
                  <MdOutlineArrowBackIos className="w-6 h-6 fill-c1" />
                  <h2 className="text-lg font-f2 text-c1">Return to cart</h2>
                </a>
              </Link>

              <button
                onClick={() => nextPage()}
                className="flex flex-row items-center p-3 rounded-lg w-fit bg-c1"
              >
                <h2 className="text-lg text-white font-f2">
                  Continue To Shipping
                </h2>
                <MdOutlineArrowBackIos className="w-6 h-6 rotate-180 fill-white" />
              </button>
            </div>
            <h2 className="w-3/4 mt-6 text-center text-c1 text-md font-f2">
              By placing your order you agree to Yardflo’s Terms and Conditions,
              Privacy Notice and Cookie Policy.
            </h2>
          </div>
        </div>
        <OrderSummary page="1" />
      </div>
    </div>
  );
};

export default Information;
