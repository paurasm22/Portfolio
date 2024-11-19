import React from "react";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="inside flex flex-col md:flex-row-reverse  md:items-center md:justify-between  md:pt-11"
      >
        <div className="image flex justify-center items-center align-middle ">
          <img
            src="https://cdn.pixabay.com/photo/2024/09/04/19/11/website-9022660_1280.png"
            alt=""
            className="h-72 md:h-96"
          />
        </div>
        <div className="content flex items-center flex-col text-white font-semibold text-2xl justify-start md:items-start   ">
          <h1 className="text-6xl font-mono ">Heyy,</h1>

          <h4 className="text-4xl font-mono md:mt-4">This is Pauras More </h4>

          <h4 className="font-mono md:font-mono md:text-4xl md:mt-3">
            A Full Stack Web Developer
          </h4>
          <a
            href="/PaurasResume.pdf"
            download
            className="bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-black px-5 py-1 rounded-md mt-5"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
