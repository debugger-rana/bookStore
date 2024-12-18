import React from "react";
import Banner from "./Banner";
import TopSellers from "./TopSellers";
import Recommanded from "./Recommanded";
import News from "./News";


export const Home = () => {
  return (
    <>
      <Banner />
      <TopSellers />
      <Recommanded />
      <News />
      
    </>
  );
};
