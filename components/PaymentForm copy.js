import React, { useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdPayment,
  MdPersonOutline,
} from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#445a5c",
      color: "#445a5c",
      background: "white",
      fontSize: "20px",
      fontFamily: "Poppins, sans-serif",

      ":-webkit-autofill": { color: "#445a5c" },
      "::placeholder": { color: "#A3BEBE" },
    },
    invalid: {
      iconColor: "#445a5c",
      color: "#445a5c",
    },
  },
};

const PaymentForm = ({ orderTotal }) => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: Math.round(orderTotal * 100),
          id,
        });
        if (response.data.success) {
          console.log("successful payment $$$$$");
          setSuccess(true);
        }
      } catch (error) {
        console.log("ERROR", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between w-full border-2 rounded-lg border-c1">
        <div className="flex flex-row items-center p-3 mt-3 border-b-2 border-c1">
          <input type="checkbox" checked="true" className="mx-3" />
          <h2 className="text-lg text-c1 font-f2">Credit/Debit Card</h2>
        </div>
        {/* <div className="flex flex-col items-center p-3 bg-t1 paymentInput"> */}
        <div className="flex flex-col items-center p-3 bg-t1 paymentInput">
          <div className="flex flex-col w-full h-fit">
            <div className="flex flex-row items-center w-full py-2 pl-4 mb-2 bg-white rounded-md border-1 border-c1">
              <MdPersonOutline className="w-8 h-8 mr-2 fill-c1" />
              <input
                type="text"
                placeholder="Name On Card"
                className="w-3/4 text-xl bg-white text-c1 font-f2"
              />
            </div>
          </div>
          <div
            className="w-full py-2 pl-4 mb-2 bg-white rounded-md border-1 border-c1 font-f2"
            onSubmit={handleSubmit}
          >
            <div className="FormGroup">
              <div className="FormRow">
                <CardElement
                  className="text-xl bg-white text-c1 font-f2"
                  options={CARD_OPTIONS}
                />
              </div>
            </div>
            {/* <button className="text-white bg-black">Pay</button> */}
          </div>
        </div>
        <button className="flex flex-row items-center p-3 mt-3 border-b-2 border-c1">
          <input type="checkbox" className="mx-3" />
          <div className="relative w-1/5 h-8 mb-2 overflow-hidden">
            <Image
              src={
                "/assets/imgs/icons/paypal@2x-768388b0667bef1aa9a7cf02fa1cc2184c2915a90d4cdd62dde223f74f2acbfc.png"
              }
              layout="fill"
            />
          </div>
        </button>
        <div className="flex flex-row items-center p-3 mt-3 border-b-2 border-c1">
          <input type="checkbox" className="mx-3" />
          <div className="relative w-1/2 h-8 mb-2 overflow-hidden">
            <Image
              src={"/assets/imgs/icons/742f8a2b2a7ed8d817c97880723f240c.webp"}
              layout="fill"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full mt-3">
        <h1 className="mb-3 text-2xl font-f2 text-c1">Billing Address</h1>
        <h2 className="mb-3 text-md font-f2 text-c1">
          Select the address that matches your card or payment method.
        </h2>
      </div>
      <div className="flex flex-col justify-between w-full border-2 rounded-lg border-c1">
        <div className="flex flex-row items-center p-3 mt-3 border-b-2 border-c1">
          <input type="checkbox" checked="true" className="mx-3" />
          <h2 className="text-lg text-c1 font-f2">Same as shipping address</h2>
        </div>
        <div className="flex flex-row items-center p-3 mt-3 border-b-2 border-c1">
          <input type="checkbox" className="mx-3" />
          <h2 className="text-lg text-c1 font-f2">
            Use a different billing address
          </h2>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-full mt-3">
        <Link href={"/Checkout/Shipping"}>
          <a className="flex flex-row items-center w-fit">
            <MdOutlineArrowBackIos className="w-6 h-6 fill-c1" />
            <h2 className="text-lg font-f2 text-c1">Return to shipping</h2>
          </a>
        </Link>

        <button
          onClick={handleSubmit}
          className="flex flex-row items-center p-3 rounded-lg w-fit bg-c1"
        >
          <h2 className="text-lg text-white font-f2">Pay Now</h2>
          <MdOutlineArrowBackIos className="w-6 h-6 rotate-180 fill-white" />
        </button>
      </div>
    </>
  );
};

export default PaymentForm;
