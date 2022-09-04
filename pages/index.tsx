import type { NextPage } from "next";
import Feature from "../src/section/Feature";
import Hero from "../src/section/Hero/Hero";
import Work from "../src/section/works";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Feature />
      <Work />
    </>
  );
};

export default Home;
