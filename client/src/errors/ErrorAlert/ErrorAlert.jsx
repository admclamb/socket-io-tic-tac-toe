import React from "react";

const ErrorAlert = ({ error, setError }) => {
  const closeError = () => setError(null);
  return (
    error && (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded fixed z-50 top-5 left-1/2 -translate-x-1/2 flex gap-3 items-center"
        role="alert"
      >
        <div className="flex items-center">
          <strong className="font-bold">Oh No!</strong>
          <p className="">{error.message}</p>
        </div>
        <button
          className="p-2 text-red-700 hover:bg-red-200 active:bg-red-300 rounded duration-200 ease-out"
          onClick={closeError}
        >
          Close
        </button>
      </div>
    )
  );
};

export default ErrorAlert;
