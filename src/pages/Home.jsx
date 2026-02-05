import React from "react";
import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import Automation from "../components/home/Automation";
import Inbox from "../components/home/Inbox";
import Support from "../components/home/Support";
import Messanger from "../components/home/Messanger";
import Platform from "../components/home/Platform";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <Hero />
      </section>

      <section>
        <Automation />
      </section>

      <section>
        <Inbox />
      </section>

      <section>
        <Support />
      </section>

      <section>
        <Messanger />
      </section>

      <section className="bg-[#031526] text-white">
        <Platform />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;
