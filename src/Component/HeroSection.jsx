import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-red-200 flex flex-col justify-center 
                items-center
                md:flex-row md:px-10"
    >
      <div
        className="w-9/12 hero--left--content
                   md:w-5/12"
      >
        <h1 className="text-white font-extrabold text-5xl">
          Best Dating Site in Africa
        </h1>
        <p className="text-white mt-10">
          At SuGa's Playground, we believe that everyone deserves to find love
          and happiness. Our dating site is designed to help you do just that,
          with a fun and easy-to-use platform that connects you with like-minded
          individuals.
        </p>
        <button
          className="hero-left-button text-lightPink font-bold 
                     px-10 py-2 rounded-xl bg-white mt-10
                                          "
        >
         Join Now
        </button>
      </div>
    </section>
  );
}
