import React, { useState } from "react";
import { parseCookies } from "../lib/parseCookies";

const CheckoutDetails = ({ page, customerInfo, shippingMethod }) => {
  console.log(shippingMethod);
  return (
    <div className="flex flex-col items-center w-full px-6 py-3 border-2 rounded-lg border-c1">
      <div className="justify-between w-full checkoutGrid">
        <h1 className="text-lg font-f2 text-c3">Contact</h1>
        <h1 className="text-lg font-f2 text-c1">{customerInfo.email}</h1>
        <h1 className="text-lg font-f2 text-c1">Change</h1>
      </div>
      <div className="w-full h-0 my-3 border-b-1 border-t1"></div>

      <div className="justify-between w-full checkoutGrid">
        <h1 className="text-lg font-f2 text-c3">Ship to</h1>
        <h1 className="text-lg font-f2 text-c1">
          {customerInfo.adr1 +
            ", " +
            customerInfo.city +
            ", " +
            customerInfo.state +
            ", " +
            customerInfo.zip}
        </h1>
        <h1 className="text-lg font-f2 text-c1">Change</h1>
      </div>

      {(() => {
        if (page >= 3) {
          return (
            <>
              <div className="w-full h-0 my-3 border-b-1 border-t1"></div>
              <div className="justify-between w-full checkoutGrid">
                <h1 className="text-lg font-f2 text-c3">Method</h1>
                <h1 className="text-lg font-f2 text-c1">
                  {shippingMethod.title +
                    " (" +
                    shippingMethod.time +
                    " ) *Once your order has shipped · " +
                    "$" +
                    shippingMethod.rate}
                </h1>
                <h1 className="text-lg font-f2 text-c1">Change</h1>
              </div>
            </>
          );
        }
      })()}
    </div>
  );
};

export default CheckoutDetails;
