import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContext";
import { Link } from "react-router";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { MdDeleteOutline, MdOutlineArchive } from "react-icons/md";

const FriendDetails = () => {
  const { detailsCard } = useContext(FriendContext);
  console.log(detailsCard);
  const {
    name,
    picture,
    days_since_contact,
    status,
    tags,
    email,
    bio,
    goal,
    next_due_date,
  } = detailsCard;

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
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 px-4 my-12">
        <div>
          <div className="card bg-base-100 shadow-sm border border-gray-200  ">
            <figure className="px-10 pt-10">
              <img
                width={100}
                src={picture}
                alt={name}
                className="rounded-full"
              />
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
              {/* status info  */}
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
              {/* contact info  */}
              <p>Preffered: {email}</p>
            </div>
          </div>
          <div className="space-y-4 mt-4">
            <button className="flex justify-center items-center gap-2 w-full py-3 border border-gray-200 rounded">
              <RiNotificationSnoozeLine /> Snooze 2 weeks
            </button>
            <button className="flex justify-center items-center gap-2 w-full py-3 border border-gray-200 rounded">
              <MdOutlineArchive /> Archive
            </button>
            <button className="flex justify-center items-center gap-2 w-full py-3 border border-gray-200 rounded text-red-500">
              <MdDeleteOutline /> Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default FriendDetails;
