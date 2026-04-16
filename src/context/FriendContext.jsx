import React, { createContext, useState } from "react";

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [detailsCard, setDetailsCard] = useState();
  
  const data = {
    detailsCard,
    setDetailsCard,
  };
  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;
