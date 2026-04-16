import React from "react";
import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="max-w-300 mx-auto text-center space-y-5 my-12 border-b border-gray-200 pb-12">
      <h1 className="primary-text font-bold text-2xl md:text-3xl lg:text-4xl">
        Friends to keep close in your life
      </h1>
      <p className="secondary-text text-sm max-w-112.5 mx-auto px-2">
        Your personal shelf of meaningful connections. Browse, tend and nurture
        the relationships that matter most.
      </p>
      <button className="primary-button flex items-center gap-2 mx-auto ">
        <FaPlus /> Add a Friend
      </button>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 mt-9 ">
        {/* card - 1  */}
        <div className="bg-white border border-gray-200 rounded-xl py-6">
          <h1 className="primary-text text-xl font-bold">10</h1>
          <p className="secondary-text">Total Friends</p>
        </div>
        {/* card - 2  */}
        <div className="bg-white border border-gray-200 rounded-xl py-6">
          <h1 className="primary-text text-xl font-bold">3</h1>
          <p className="secondary-text">On Track</p>
        </div>
        {/* card - 3  */}
        <div className="bg-white border border-gray-200 rounded-xl py-6">
          <h1 className="primary-text text-xl font-bold">0</h1>
          <p className="secondary-text">Need Attention</p>
        </div>
        {/* card - 4  */}
        <div className="bg-white border border-gray-200 rounded-xl py-6">
          <h1 className="primary-text text-xl font-bold">12</h1>
          <p className="secondary-text">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
