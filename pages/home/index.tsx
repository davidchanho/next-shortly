import React from "react";
import AdvancedStatistics from "../../components/advanced-statistics";
import BoostLinks from "../../components/boost-links";
import Hero from "../../components/hero";
import Links from "../../components/links";
import ShortenForm from "../../components/shorten-form";
import Template from "../_template";

function HomePage() {
  return (
    <Template>
      <Hero />
      <ShortenForm />
      <AdvancedStatistics />
      <BoostLinks />
    </Template>
  );
}

export default HomePage;
