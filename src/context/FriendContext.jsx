import React, { createContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [detailsCard, setDetailsCard] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const addTransactions = (action, name) => {
    const newTransaction = {
      id: Date.now(),
      action,
      name,
      date: new Date().toLocaleString(),
    };

    setTransactions((prev) => [...prev, newTransaction]);
    toast(`Successfully made a ${action}`);
  };

  const data = {
    detailsCard,
    setDetailsCard,
    transactions,
    setTransactions,
    addTransactions,
  };
  return (
    <FriendContext.Provider value={data}>
      {children}
      <ToastContainer />
    </FriendContext.Provider>
  );
};

export default FriendProvider;
