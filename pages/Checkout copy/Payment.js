import React, { useState } from "react";
import CheckoutStatus from "../../components/CheckoutStatus";
import CheckoutDetails from "../../components/CheckoutDetails";
import OrderSummary from "../../components/OrderSummary";
import Image from "next/image";
import CheckoutHeader from "../../components/CheckoutHeader";
import {
  MdOutlineArrowBackIos,
  MdPayment,
  MdPersonOutline,
} from "react-icons/md";
import { parseCookies } from "../../lib/parseCookies";
import StripeContainer from "../../components/StripeContainer";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../../components/PaymentForm";

import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";

const Public_Key =
  "pk_test_51KsFpgEewcpAM4MfHcckSLrjYlKuTbCn5VXIzJ0wkmmIUJYgJglzwLbzQf81ZNo5cx3GjTmECc9QBBdcSMHiqZbN00zISL6a1r";

const Payment = ({
  shippingMethodProp,
  customerInfoProp,
  customerChargesProp,
}) => {
  const stripeTestPromise = loadStripe(Public_Key);

  const [customerInfo, setCustomerInfo] = useState(() =>
    JSON.parse(customerInfoProp)
  );

  const [shippingMethod, setShippingMethod] = useState(() =>
    JSON.parse(shippingMethodProp)
  );

  const [success, setSuccess] = useState(false);

  return (
    <div className="flex flex-col justify-between w-screen bg-white h-fit">
      <CheckoutHeader />
      <div className="flex flex-row justify-between w-screen min-h-screen">
        <div className="w-1/2 h-screen mx-auto ">
          <CheckoutStatus page="3" />
          <div className="flex flex-row items-center w-5/6 mx-auto mt-6">
            <CheckoutDetails
              page="3"
              customerInfo={customerInfo}
              shippingMethod={shippingMethod}
            />
          </div>
          <div className="flex flex-col items-center justify-between w-5/6 mx-auto ">
            <div className="flex flex-col w-full mt-3">
              <h1 className="mb-3 text-2xl font-f2 text-c1">Payment</h1>
              <h2 className="mb-3 text-md font-f2 text-c1">
                All transactions are secure and encrypted.
              </h2>
            </div>

            <Elements stripe={stripeTestPromise}>
              <PaymentForm orderTotal={JSON.parse(customerChargesProp).total} />
            </Elements>

            <h2 className="w-5/6 mt-6 text-center text-c1 text-md font-f2">
              By placing your order you agree to Yardflo’s Terms and Conditions,
              Privacy Notice and Cookie Policy.
            </h2>
          </div>
        </div>

        <OrderSummary page="3" dynamicShipping={shippingMethod} />
      </div>
    </div>
  );
};

Payment.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);

  return {
    customerInfoProp: cookies.customerInfo,
    shippingMethodProp: cookies.shippingMethod,
    customerChargesProp: cookies.customerCharges,
  };
};

export default Payment;
