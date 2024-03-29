import React from "react";
import Link from "next/link";

const Hero = ({ heading, message }) => {
  return (
    <div
      className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img"
      style={{ height: "100vh" }}
    >
      <div className="p-5 text-white z-[2] flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-center">{heading}</h2>
        <p className="py-5 text-xl text-center">{message}</p>
        <Link href="/contact/#contact">
          <a className="px-10 py-2 border font-bold transition duration-300 transform hover:scale-105 hover:bg-white hover:text-[#4e4636]">
            Réservez
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
