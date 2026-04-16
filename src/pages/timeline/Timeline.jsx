import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContext";

import TransactionCard from "../../components/transactionCard/TransactionCard";
import { Link } from "react-router";

const Timeline = () => {
  const { transactions } = useContext(FriendContext);
  console.log(transactions);
  return (
    <div className="max-w-265 mx-auto px-2 py-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 primary-text font-bold">
        Timeline
      </h1>
      <div>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      {transactions.length === 0 && (
        <div className="text-center">
          <p className="my-12 text-lg secondary-text">
            No Transactions Yet. Go to the Home and Select a Friend to Add
            Transactions
          </p>
          <Link to="/" className="primary-button">
            Home
          </Link>
        </div>
      )}
      <div className="min-h-80">
        {transactions.map((transaction) => (
          <TransactionCard transaction={transaction}></TransactionCard>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
