import React from "react";
import FriendCard from "./FriendCard";

const Friends = ({ friendsData }) => {

   
  //   console.log(friendsData);
  return (
    <div className="max-w-300 mx-auto px-4 mb-12">
      <h1 className="font-bold text-xl mb-9">Your Friends</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {friendsData.map((friend, ind) => (
          <FriendCard key={ind} friend={friend} ></FriendCard>
        ))}
      </div>
    </div>
  );
};

export default Friends;
