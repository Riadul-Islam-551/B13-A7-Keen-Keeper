import React from "react";
import { FaVideo } from "react-icons/fa";
import { IoCall, IoDocumentText } from "react-icons/io5";

const TransactionCard = ({ transaction }) => {
  const { name, action, date } = transaction;

  let icon = null;
  if (action.toLowerCase() === "call") {
    icon = <IoCall className="text-xl lg:text-3xl primary-text" />;
  } else if (action.toLowerCase() === "text") {
    icon = <IoDocumentText className="text-xl lg:text-3xl primary-text" />;
  } else if (action.toLowerCase() === "video") {
    icon = <FaVideo className="text-xl lg:text-3xl primary-text" />;
  }

  {
    return (
      <div className="p-3 rounded-xl flex items-center gap-4 border border-gray-300 mt-4">
        <div>{icon}</div>
        <div>
          <p className="capitalize">
            <span className="font-bold">{action}</span> with {name}
          </p>
          <p>{date}</p>
        </div>
      </div>
    );
  }
};

export default TransactionCard;
