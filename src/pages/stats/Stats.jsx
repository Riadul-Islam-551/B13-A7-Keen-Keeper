import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContext";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Link } from "react-router";

const Stats = () => {
  const { transactions } = useContext(FriendContext);

  const totalCalls = transactions.filter(
    (item) => item.action.toLowerCase() === "call",
  ).length;
  const totalTexts = transactions.filter(
    (item) => item.action.toLowerCase() === "text",
  ).length;
  const totalVideos = transactions.filter(
    (item) => item.action.toLowerCase() === "video",
  ).length;

  const data = [
    { name: "Calls", value: totalCalls },
    { name: "Texts", value: totalTexts },
    { name: "Videos", value: totalVideos },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

  console.log(data);
  return (
    <div className="max-w-300 mx-auto px-4 md:px-9 my-12 ">
      <h1 className="primary-text font-bold text-2xl md:text-3xl lg:text-4xl">
        Friendship Analytics
      </h1>
      {transactions.length === 0 && (
        <div className="min-h-150 flex flex-col gap-5 justify-center items-center">
          <p className="text-center text-gray-500 mt-4">
            No transactions yet. Start connecting with your friends!
          </p>
          <Link to="/" className="primary-button">
            Home
          </Link>
        </div>
      )}
      {transactions.length > 0 && (
        <div className="flex justify-center items-center">
          <ResponsiveContainer width="100%" height={600}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius="50%"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              {/* <RechartsDevtools /> */}
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
      <div className="flex justify-center items-center">
        <p className="btn bg-[#8884d8] text-white font-bold">Calls</p>
        <p className="btn bg-[#82ca9d] text-white font-bold">Texts</p>
        <p className="btn bg-[#ffc658] text-white font-bold">Video</p>
      </div>
    </div>
  );
};

export default Stats;
