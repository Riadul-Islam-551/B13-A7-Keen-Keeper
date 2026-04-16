import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { FriendContext } from "../../context/FriendContext";

const FriendCard = ({ friend }) => {
  const { name, picture, days_since_contact, status, tags } = friend;
  const navigate = useNavigate();
  const { detailsCard, setDetailsCard } = useContext(FriendContext);
  console.log(detailsCard);

  const handleCardDetails = (friend) => {
    navigate("/friendDetails");
    setDetailsCard(friend);
  };
  console.log("card is clicked", detailsCard);

  return (
    <div
      onClick={() => handleCardDetails(friend)}
      className="card bg-base-100 shadow-sm border border-gray-200  "
    >
      <figure className="px-10 pt-10">
        <img width={100} src={picture} alt={name} className="rounded-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{days_since_contact}d ago</p>
        <div className="flex justify-center items-center gap-2">
          {tags.map((tag, ind) => (
            <p
              className="px-2 py-1 border rounded-2xl capitalize text-xs bg-[#2bb385] text-white "
              key={ind}
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="card-actions">
          {status === "overdue" && (
            <button className="btn btn-sm text-white bg-[#EF4444] border-none rounded-2xl">
              {status}
            </button>
          )}{" "}
          {status === "on-track" && (
            <button className="btn btn-sm text-white bg-[#244D3F] border-none rounded-2xl">
              {status}
            </button>
          )}
          {status === "almost due" && (
            <button className="btn btn-sm text-white bg-[#EFAD44] border-none rounded-2xl">
              {status}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
