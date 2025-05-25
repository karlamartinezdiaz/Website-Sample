//import React from "react";
//Slideshow";
import KarlaPhoto from "../../components/landing/KarlaBio";
import Slideshow from "../../components/landing/Slideshow";
import Navbar from "../../components/navbar/navMenu";
import Widgets from "../../components/landing/Widgets";

const LandingPage = () => {
  return (
    <div className="bg-purple-100 min-h-screen w-full">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content */}
      <main className="p-8 flex flex-col items-center gap-12">
        <KarlaPhoto />
        <Slideshow />
        <Widgets />
      </main>
    </div>
  );
};
export default LandingPage;
