import React from "react";

const FriendCard = ({ friend }) => {
  const { id, name, picture, days_since_contact, status, tags } = friend;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={picture} alt={name} className="rounded-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{days_since_contact}d ago</p>
        <div>
          {tags.map((tag, ind) => (
            <p key={ind}>{tag}</p>
          ))}
        </div>
        <div className="card-actions">
          <button className="btn rounded-2xl">{status}</button>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
