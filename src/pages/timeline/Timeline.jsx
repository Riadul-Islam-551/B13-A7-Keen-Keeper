import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContext";

import TransactionCard from "../../components/transactionCard/TransactionCard";
import { Link } from "react-router";

const Timeline = () => {
  const { transactions, setSortType, sortType } = useContext(FriendContext);
  // console.log(transactions);
  // console.log(setSortType);
  return (
    <div className="max-w-265 mx-auto px-2 py-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 primary-text font-bold">
        Timeline
      </h1>
      <div>
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button onClick={() => setSortType("call")}>Call</button>
            </li>
            <li>
              <button onClick={() => setSortType("text")}>Text</button>
            </li>
            <li>
              <button onClick={() => setSortType("video")}>Video</button>
            </li>
          </ul>
        </div>
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
        {sortType === "default" &&
          transactions.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        {sortType === "call" &&
          transactions
            .filter((t) => t.action.toLowerCase() === "call")
            .map((transaction) => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
        {sortType === "text" &&
          transactions
            .filter((t) => t.action.toLowerCase() === "text")
            .map((transaction) => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
        {sortType === "video" &&
          transactions
            .filter((t) => t.action.toLowerCase() === "video")
            .map((transaction) => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
      </div>
    </div>
  );
};

export default Timeline;
