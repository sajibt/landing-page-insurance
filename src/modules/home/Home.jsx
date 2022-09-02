import React from "react";
import Banner from "../../components/Banner/Banner";
import Hero from "../../components/Hero/Hero";
import Info from "../../components/Info/Info";

const Home = () => {
  return (
    <div>
      <Hero />
      <section>
        <Info />
      </section>
      <section>
        <Banner />
      </section>
    </div>
  );
};

export default Home;
