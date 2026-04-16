import React from "react";
import Banner from "../../components/banner/Banner";
import Friends from "../../components/friends/Friends";
import { useLoaderData } from "react-router";

const Home = () => {
  const friendsData = useLoaderData();
  // console.log(friendsData);

  return (
    <div>
      <Banner></Banner>
      <Friends friendsData={friendsData}></Friends>
    </div>
  );
};

export default Home;
