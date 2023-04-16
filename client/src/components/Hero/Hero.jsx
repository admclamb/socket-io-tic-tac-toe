import React from "react";

const Hero = ({ title, description }) => {
  return (
    <section className="bg-zinc-900 text-white">
      <div className="px-4 max-w-4xl mx-auto px-2 h-[30vh] md:h-[20vh] flex flex-col justify-center">
        <h2 className="text-center md:text-left text-4xl font-semibold">
          {title}
        </h2>
        <p className="text-center md:text-left ">{description}</p>
      </div>
    </section>
  );
};

export default Hero;
