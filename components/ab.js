<div className="flex flex-row justify-between w-screen h-fit">
        <div
          id="payment"
          className="flex flex-col justify-between w-1/2 mb-10 ml-20 h-fit section"
        >
          <div className="relative flex flex-col justify-between w-full px-4 pb-3 rounded-lg h-5/6 bg-white paymentInput">
            <h1 className="flex flex-row items-center mt-3 text-2xl text-c1 font-f2">
              Payment Method
              <AiOutlineInfoCircle className="w-4 h-4 ml-2 fill-c2" />
            </h1>

            <div className="flex flex-col w-full h-fit">
              <h1 className="text-xl text-c1 font-f2">Card Holder</h1>
              <div className="flex flex-row items-center w-full py-2 pl-4 rounded-md border-1 border-c3">
                <MdPersonOutline className="w-8 h-8 mr-3 fill-c3" />
                <input
                  type="text"
                  placeholder="Name On Card"
                  className="w-3/4 text-xl text-c1 bg-white font-f2"
                />
              </div>
            </div>

            <div className="flex flex-col w-full h-fit">
              <h1 className="text-xl text-c1 font-f2">Card Details</h1>
              <div className="flex flex-row items-center w-full py-2 pl-4 rounded-md border-1 border-c3">
                <MdPayment className="w-8 h-8 mr-3 fill-c3" />
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-3/4 text-xl text-c1 bg-white font-f2"
                />
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="w-1/6 mr-3 text-xl text-c1 bg-white font-f2 border-r-1 border-c3"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-1/6 text-xl text-c1 bg-white font-f2"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="shipping"
          className="flex flex-col justify-between w-2/3 mb-10 h-fit section "
        >
          <div className="relative flex flex-col justify-between w-full px-4 pb-3 rounded-l-lg h-5/6 bg-white">
            <h1 className="flex flex-row items-center mt-3 text-2xl text-c1 font-f2">
              Available Shipping Methods
              <AiOutlineInfoCircle className="w-4 h-4 ml-2 fill-c2" />
            </h1>
            {shippingOptions.map((option, i) => {
              let background = "";
              if (option.id == selectedShippingOption.id) {
                background = "bg-c1_50";
              }

              return (
                <button
                  key={i}
                  id={option.id}
                  onClick={() => selectShippingOption(option)}
                  className={
                    "items-center justify-center px-6 mt-3 border-c1 rounded-md shippingGrid border-1 hover:bg-c1_50 shippingOption py-2 w-full " +
                    background
                  }
                >
                  {option.icon}
                  <div className="flex flex-col items-start">
                    <h1 className="text-lg text-c1 font-f2">
                      {option.title}
                    </h1>
                    <h2 className="text-lg text-c4 font-f2">
                      {"Delivery: " + option.time}
                    </h2>
                  </div>
                  <div className="w-3/5 ">
                    <h1 className="mx-auto text-lg text-c1 font-f2">
                      {(() => {
                        if (option.rate == "Free") {
                          return option.rate;
                        } else {
                          return "$" + moneyFormat(option.rate);
                        }
                      })()}
                    </h1>
                  </div>
                </button>
              );
            })}
            <h1 className="flex flex-row items-center mt-3 text-2xl text-c1 font-f2">
              Shipping Address
              <AiOutlineInfoCircle className="w-4 h-4 ml-2 fill-c2" />
            </h1>
            <div className="w-full px-3 py-2 mt-3 rounded-md border-c3 border-1 shippingInput">
              <h3 className="text-sm font-f2 text-c3">Full Name</h3>
              <input
                type="text"
                className="w-full text-lg text-c1 bg-none font-f2"
              />
            </div>
            <div className="w-full px-3 py-2 mt-3 rounded-md border-c3 border-1 shippingInput">
              <h3 className="text-sm font-f2 text-c3">Street Address</h3>
              <input
                type="text"
                className="w-full text-lg text-c1 bg-none font-f2"
              />
            </div>
            <div className="w-full px-3 py-2 mt-3 rounded-md border-c3 border-1 shippingInput">
              <h3 className="text-sm font-f2 text-c3">
                Floor, Apt, Suite, Unit, etc (optional)
              </h3>
              <input
                type="text"
                className="text-lg text-c1 bg-none font-f2"
              />
            </div>

            <div className="flex flex-row items-center justify-between w-full mt-3 ">
              <div className="w-1/3 px-3 py-2 mt-3 rounded-md border-c3 border-1 shippingInput">
                <h3 className="text-sm font-f2 text-c3">City</h3>
                <input
                  type="text"
                  className="text-lg text-c1 bg-none font-f2"
                />
              </div>
              <div className="w-1/4 px-3 py-2 mt-3 rounded-md border-c3 border-1 shippingInput">
                <h3 className="text-sm font-f2 text-c3">State</h3>
                <input
                  type="text"
                  className="text-lg text-c1 bg-none font-f2"
                />
              </div>
              <div className="w-1/4 px-3 py-2 mt-3 rounded-md border-c3 border-1 shippingInput">
                <h3 className="text-sm font-f2 text-c3">Zip</h3>
                <input
                  type="text"
                  className="text-lg text-c1 bg-none font-f2"
                />
              </div>
            </div>
            <div className="w-full px-3 py-2 mt-3 rounded-md border-c3 border-1 shippingInput">
              <h3 className="text-sm font-f2 text-c3">Phone Number</h3>
              <input
                type="text"
                className="w-full text-lg text-c1 bg-none font-f2"
              />
            </div>
          </div>
        </div>