import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContext";
import { Link } from "react-router";

const FriendDetails = () => {
  const { detailsCard } = useContext(FriendContext);
  console.log(detailsCard);

  if (!detailsCard) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-9">
        <p className="text-xl secondary-text text-center px-4">
          No Friend is Selected. Go to the Home and Select a Friend
        </p>
        <Link className="primary-button" to="/">
          Home
        </Link>
      </div>
    );
  } else {
    return <p>{detailsCard.name}</p>;
  }
};

export default FriendDetails;
