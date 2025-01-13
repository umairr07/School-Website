import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LuBotMessageSquare } from "react-icons/lu";

const FloatingButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="relative">
      {/* Floating Button */}
      <button
        onClick={toggleForm}
        className="fixed bottom-8 right-6 bg-blue-600 text-white px-4 py-4 rounded-full shadow-lg hover:bg-white hover:text-blue-600 transition-all ease-in"
      >
        {isFormOpen ? (
          <IoMdClose className="text-3xl " />
        ) : (
          <LuBotMessageSquare className="text-3xl " />
        )}
      </button>

      {/* Form */}
      {isFormOpen && (
        <div className="fixed bottom-28 lg:right-10 sm:right-7 bg-white shadow-lg rounded-lg p-4 lg:w-96 sm:w-80 ">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
            Quick Contact{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h2>
          <p className="text-sm text-gray-500 mb-4">Get in Touch with Us</p>
          <form>
            {/* Full Name */}
            <div className="mb-4 flex items-center border-[1px] border-forinput rounded-md p-2">
              <span className="text-gray-500 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a5 5 0 100 10A5 5 0 0010 2zM2 18a8 8 0 1116 0H2z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="w-full outline-none text-sm"
              />
            </div>

            {/* Mobile Number */}
            <div className="mb-4 flex items-center border-[1px] border-forinput rounded-md p-2">
              <span className="text-gray-500 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 0H4v10h12V5z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Enter your Mobile Number"
                className="w-full outline-none text-sm"
              />
            </div>

            {/* Email Address */}
            <div className="mb-4 flex items-center border-[1px] border-forinput rounded-md p-2">
              <span className="text-gray-500 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.94 6.78A2 2 0 014 6h12a2 2 0 011.06.78l-7.06 4.12L2.94 6.78zM18 8.8v4.4a2 2 0 01-2 2H4a2 2 0 01-2-2V8.8l7.46 4.35a2 2 0 002.08 0L18 8.8z" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="w-full outline-none text-sm"
              />
            </div>

            {/* Message */}
            <div className="mb-4 flex items-start border-[1px] border-forinput rounded-md p-2">
              <span className="text-gray-500 mr-2 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M18 10c0 3.866-3.582 7-8 7s-8-3.134-8-7c0-3.313 2.613-6 6-6 2.575 0 4.747 1.64 5.72 4H18z" />
                </svg>
              </span>
              <textarea
                placeholder="Enter your Message"
                className="w-full outline-none text-sm resize-none h-20"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all">
              Send Message
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
