import React from "react";
import Header from "./Header";
import MovingComponent from "react-moving-text";

const Request = () => {
  return (
    <>
      <Header />
      <MovingComponent
        type="fadeInFromLeft"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
        className="tracking-wider text-bold text-white mx-10 bg-gray-800 rounded inline-block px-3 py-1"
      >
        Request Items
      </MovingComponent>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[850px] bg-white">
          <form>
            <div className="-mx-3 flex flex-row">
              <div className="w-full px-3 sm:w-1/3">
                <div className="mb-5">
                  <label
                    htmlFor="fName"
                    className="mb-3 block text-sm font-medium text-gray-700"
                  >
                    Item Name
                  </label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-small text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/3">
                <div className="mb-5">
                  <label
                    htmlFor="lName"
                    className="mb-3 block text-sm font-medium text-gray-700"
                  >
                    Item Stock Quantity
                  </label>
                  <input
                    type="number"
                    name="lName"
                    id="lName"
                    placeholder="Quantity"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/3">
                <div className="mb-5">
                  <label
                    htmlFor="lName"
                    className="mb-3 block text-sm font-medium text-gray-700"
                  >
                    Item Request Quantity
                  </label>
                  <input
                    type="number"
                    name="lName"
                    id="lName"
                    placeholder="Quantity"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-gray-800 py-3 px-8 text-center text-sm font-semibold text-white outline-none">
                Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Request;
