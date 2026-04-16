import React, { createContext, useState } from "react";

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [detailsCard, setDetailsCard] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const addTransactions = (action, friendName) => {
    const newTransaction = {
      id: Date.now(),
      action,
      friendName,
      time: new Date().toLocaleTimeString(),
    };

    setTransactions((prev) => [...prev, newTransaction]);
  };

  const data = {
    detailsCard,
    setDetailsCard,
    transactions,
    setTransactions,
    addTransactions,
  };
  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;
