import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {
  MdOutlineArrowBackIos,
  MdPayment,
  MdPersonOutline,
} from "react-icons/md";
import PaymentForm from "./PaymentForm";
const Public_Key =
  "pk_test_51KsFpgEewcpAM4MfHcckSLrjYlKuTbCn5VXIzJ0wkmmIUJYgJglzwLbzQf81ZNo5cx3GjTmECc9QBBdcSMHiqZbN00zISL6a1r";

const StripeContainer = () => {
  const stripeTestPromise = loadStripe(Public_Key);

  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
};
export default StripeContainer;
