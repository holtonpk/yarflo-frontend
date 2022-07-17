import React from "react";
import Link from "next/link";
const CheckoutStatus = ({ page }) => {
  return (
    <div className="flex flex-row items-center justify-between w-5/6 mx-auto mt-6 h-fit">
      <Link href="/Checkout/Information">
        <a className="flex flex-col items-center px-3">
          <div className="border-2 rounded-full statusBubble fill-c1 border-c1 after:bg-c1"></div>
          <h2 className="text-lg font-f2 text-c1">Information</h2>
        </a>
      </Link>

      {(() => {
        if (page >= 2) {
          return (
            <>
              <div className="w-1/5 h-0 border-b-1 border-c1"></div>

              <Link href="/Checkout/Shipping">
                <a className="flex flex-col items-center px-3">
                  <div className="border-2 rounded-full statusBubble fill-c1 border-c1 after:bg-c1"></div>
                  <h2 className="text-lg font-f2 text-c1">Shipping</h2>
                </a>
              </Link>
            </>
          );
        } else {
          return (
            <>
              <div className="w-1/5 h-0 border-b-1 border-t1"></div>
              <div className="flex flex-col items-center px-3">
                <div className="border-2 rounded-full statusBubble fill-t1 border-t1 after:bg-t1"></div>
                <h2 className="text-lg font-f2 text-t1">Shipping</h2>
              </div>
            </>
          );
        }
      })()}

      {(() => {
        if (page >= 3) {
          return (
            <>
              <div className="w-1/5 h-0 border-b-1 border-c1"></div>

              <Link href="/Checkout/Payment">
                <a className="flex flex-col items-center px-3">
                  <div className="border-2 rounded-full statusBubble fill-c1 border-c1 after:bg-c1"></div>
                  <h2 className="text-lg font-f2 text-c1">Payment</h2>
                </a>
              </Link>
            </>
          );
        } else {
          return (
            <>
              <div className="w-1/5 h-0 border-b-1 border-t1"></div>
              <div className="flex flex-col items-center px-3">
                <div className="border-2 rounded-full statusBubble fill-t1 border-t1 after:bg-t1"></div>
                <h2 className="text-lg font-t2 text-t1">Payment</h2>
              </div>
            </>
          );
        }
      })()}

      <div className="w-1/5 h-0 border-b-1 border-t1"></div>

      <div className="flex flex-col items-center px-3">
        <div className="border-2 rounded-full statusBubble fill-t1 border-t1 after:bg-t1"></div>
        <h2 className="text-lg font-f2 text-t1">Complete</h2>
      </div>
    </div>
  );
};

export default CheckoutStatus;
