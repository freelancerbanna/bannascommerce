import React from "react";
import {
  Announcement,
  Slider,
  Categories,
  Product,
  NewsLetter,
} from "../components";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Slider />
      <Categories />
      <Product />
      <NewsLetter />
    </div>
  );
};

export default Home;
