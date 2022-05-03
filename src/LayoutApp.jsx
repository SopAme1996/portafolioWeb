import React from "react";
import { Header } from "./Components/Header";
import { LandingPage } from "./page/LandingPage";
import { Footer } from "./Components/Footer";

export const LayoutApp = () => {
  return (
    <>
      <Header />
      <LandingPage />
      <Footer />
    </>
  );
};
