import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContext";
import { Link } from "react-router";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { MdDeleteOutline, MdOutlineArchive } from "react-icons/md";
import { IoCall, IoDocumentText } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";

const FriendDetails = () => {
  const { detailsCard, addTransactions } = useContext(FriendContext);

  const handleTransaction = (action, name) => {
    addTransactions(action, name);
  };

  //   console.log(detailsCard);

  const {
    name,
    picture,
    days_since_contact,
    status,
    tags,
    email,
    goal,
    next_due_date,
  } = detailsCard;

  if (detailsCard.length === 0) {
    return (
      <div className="min-h-screen max-w-300 mx-auto flex flex-col justify-center items-center gap-9">
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
      <div className="max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-3 px-4 my-12 gap-12">
        {/* first column  */}
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
          {/* actions buttons  */}
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
        {/* second column  */}
        <div className="lg:col-span-2">
          {/* stats status  */}
          <div className="grid grid-cols-3 gap-4 lg:gap-9">
            <div className="text-center py-6 border border-gray-200 rounded ">
              <h1 className="text-xl font-bold primary-text">
                {days_since_contact}
              </h1>
              <p>Days Since Contact</p>
            </div>
            <div className="text-center py-6 border border-gray-200 rounded ">
              <h1 className="text-xl font-bold primary-text">{goal}</h1>
              <p>Goal (Days)</p>
            </div>
            <div className="text-center py-6 border border-gray-200 rounded ">
              <h1 className="text-xl font-bold primary-text">
                {next_due_date}
              </h1>
              <p>Next Due</p>
            </div>
          </div>
          {/* relationship info   */}
          <div className="p-5 border border-gray-200 rounded mt-9">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-bold primary-text">
                Relationship Goal
              </h1>
              <button className="btn">Edit</button>
            </div>

            <p>
              Connect every <span className="font-bold">30 days</span>
            </p>
          </div>
          {/* check in section  */}
          <div className="p-4 border border-gray-200 rounded mt-9">
            <h1 className="text-lg font-bold primary-text">Quick Check-In</h1>
            <div className="grid grid-cols-3 gap-4 lg:gap-9 mt-5">
              {/* call button  */}
              <div
                onClick={() => handleTransaction("call", name)}
                className="cursor-pointer border border-gray-200 bg-gray-50 p-4 flex flex-col gap-2 justify-center items-center rounded-lg"
              >
                <IoCall className="text-xl" /> <p className="text-lg">Call</p>
              </div>
              {/* text button  */}
              <div
                onClick={() => handleTransaction("text", name)}
                className="cursor-pointer border border-gray-200 bg-gray-50 p-4 flex flex-col gap-2 justify-center items-center rounded-lg"
              >
                <IoDocumentText className="text-xl" />{" "}
                <p className="text-lg">Text</p>
              </div>
              {/* video button  */}
              <div
                onClick={() => handleTransaction("video", name)}
                className="cursor-pointer border border-gray-200 bg-gray-50 p-4 flex flex-col gap-2 justify-center items-center rounded-lg"
              >
                <FaVideo className="text-xl" /> <p className="text-lg">Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default FriendDetails;
