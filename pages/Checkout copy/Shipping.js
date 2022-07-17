import { moneyFormat } from "../../components/logic";
import React, { useState, useEffect } from "react";
import CheckoutStatus from "../../components/CheckoutStatus";
import CheckoutDetails from "../../components/CheckoutDetails";
import OrderSummary from "../../components/OrderSummary";
import Image from "next/image";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { SiFedex, SiUsps, SiUps } from "react-icons/si";
import cookie from "cookie";
import Link from "next/link";
import Cookie from "js-cookie";
import { useCart } from "react-use-cart";

import CheckoutHeader from "../../components/CheckoutHeader";
import { parseCookies } from "../../lib/parseCookies";
const Information = ({ customerInfoProp }) => {
  const [shippingMethod, setShippingMethod] = useState({
    title: false,
    rate: "Selected an option",
  });
  const { cartTotal } = useCart();

  const [customerInfo, setCustomerInfo] = useState(() =>
    JSON.parse(customerInfoProp)
  );

  const shippingOptions = [
    {
      id: "option1",
      title: "Fedex Delivery",
      rate: 0,
      display: "Free",
      time: "4-6 business days",
      icon: <SiFedex className="w-10 h-10 fill-c1" />,
    },
    {
      id: "option2",
      title: "UPS Standard Delivery",
      rate: 6.99,
      display: "$6.99",
      time: "2-5 business days",
      icon: <SiUps className="w-10 h-10 fill-c1" />,
    },
    {
      id: "option3",
      title: "USPS Express Delivery",
      rate: 12.99,
      display: "$12.99",

      time: "1-3 business days",
      icon: <SiUsps className="w-10 h-10 fill-c1" />,
    },
  ];

  const selectShippingOption = (shippingOption) => {
    document.querySelectorAll(".shippingOption").forEach((option) => {
      option.classList.remove("bg-c1_50");
    });
    document.getElementById(shippingOption.id).classList.add("bg-c1_50");
    setShippingMethod({ ...shippingOption });
  };

  const nextPage = () => {
    if (shippingMethod.title) {
      document.getElementById("errorText").classList.add("hide");

      Cookie.set(
        "shippingMethod",
        JSON.stringify({
          title: shippingMethod.title,
          rate: shippingMethod.rate,
          time: shippingMethod.time,
          display: shippingMethod.display,
        })
      );

      Cookie.set(
        "customerCharges",
        JSON.stringify({
          subtotal: cartTotal,
          tax: cartTotal * 0.0509,
          delivery: shippingMethod.rate,
          total: cartTotal + cartTotal * 0.0509 + shippingMethod.rate,
        })
      );

      document.location.href = "/Checkout/Payment";
    } else {
      document.getElementById("errorText").classList.remove("hide");
    }
  };

  return (
    <div className="flex flex-col justify-between w-screen bg-white h-fit">
      <CheckoutHeader />

      <div className="flex flex-row justify-between w-screen min-h-screen">
        <div className="w-1/2 h-screen mx-auto ">
          <CheckoutStatus page="2" />

          <div className="flex flex-row items-center w-5/6 mx-auto mt-6">
            <CheckoutDetails page="2" customerInfo={customerInfo} />
          </div>

          <div className="flex flex-col items-center justify-between w-5/6 mx-auto">
            <div className="w-5/6 mx-auto">
              <h1 className="flex flex-row items-center mt-3 text-2xl text-c1 font-f2">
                Shipping Methods
              </h1>
              <h1
                id="errorText"
                className="flex flex-row items-center mt-3 text-md text-red font-f2 hide"
              >
                Select a shipping method below
              </h1>
              {shippingOptions.map((option, i) => {
                // let background = "";
                // if (option.id == selectedShippingOption.id) {
                //   background = "bg-c1_50";
                // }

                return (
                  <button
                    key={i}
                    id={option.id}
                    onClick={() => selectShippingOption(option)}
                    className={
                      "items-center justify-center pl-6 mt-3 border-c1 rounded-md shippingGrid border-1 hover:bg-c1_50 shippingOption py-2 w-full "
                    }
                  >
                    {option.icon}
                    <div className="flex flex-col items-start">
                      <h1 className="text-lg text-c1 font-f2">
                        {option.title}
                      </h1>
                      <h2 className="text-sm text-c1 font-f2">
                        {"Delivery: " + option.time}
                      </h2>
                    </div>
                    <div className="w-3/5 ">
                      <h1 className="mx-auto text-lg text-c1 font-f2">
                        {option.display}
                      </h1>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-row items-center justify-between w-5/6 mt-3">
              <Link href="/Checkout/Information">
                <a className="flex flex-row items-center w-fit">
                  <MdOutlineArrowBackIos className="w-6 h-6 fill-c1" />
                  <h2 className="text-lg font-f2 text-c1">
                    Return to information
                  </h2>
                </a>
              </Link>

              <button
                onClick={() => nextPage()}
                className="flex flex-row items-center p-3 rounded-lg w-fit bg-c1"
              >
                <h2 className="text-lg text-white font-f2">
                  Continue To Payment
                </h2>
                <MdOutlineArrowBackIos className="w-6 h-6 rotate-180 fill-white" />
              </button>
            </div>
            <h2 className="w-5/6 mt-6 text-center text-c1 text-md font-f2">
              By placing your order you agree to Yardflo’s Terms and Conditions,
              Privacy Notice and Cookie Policy.
            </h2>
          </div>
        </div>

        <OrderSummary page="2" dynamicShipping={shippingMethod} />
      </div>
    </div>
  );
};

Information.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);

  return {
    customerInfoProp: cookies.customerInfo,
  };
};

export default Information;
