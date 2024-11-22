import React from "react";
import Loader from "../components/Loader";

const PagesLayout = ({
  children,
  text,
  buttonText,
  onClick,
  className,
  loading,
}) => {
  return (
    <div
      className={`flex flex-col  px-16 w-full items-center gap-y-6 ${className}`}
    >
      <div className={`flex w-full ${!buttonText && "justify-center"}`}>
        <h2 className="text-3xl font-bold">{text}</h2>
        {buttonText && (
          <button
            onClick={onClick}
            className="bg-white text-black px-8 font-bold py-2 hover:text-green-600 rounded-md ml-auto"
          >
            {buttonText}
          </button>
        )}
      </div>
      {loading ? <Loader /> : children}
    </div>
  );
};

export default PagesLayout;
