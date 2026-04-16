import React from "react";
import { TbAlertTriangle } from "react-icons/tb";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <TbAlertTriangle className="w-12 h-12 primary-text" />
        </div>

        <h1 className="text-6xl font-bold primary-text mb-2">404</h1>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>

        <p className="secondary-text mb-6">
          The page you’re looking for doesn’t exist or may have been moved.
          Double-check the URL or head back home.
        </p>

        <button
          className="primary-button"
          onClick={() => (window.location.href = "/")}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Error;
