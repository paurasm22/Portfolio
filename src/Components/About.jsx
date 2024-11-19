import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mt-20  ">
      <div className="header text-center text-4xl font-mono text-white font-extrabold ">
        About
      </div>
      <div className="about  flex flex-col-reverse items-center justify-center md:flex-row  md:items-center md:justify-between align-middle mt-5">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="intro"
        >
          <div className=" bg-slate-200 p-6 rounded-lg shadow-md text-center max-w-2xl mx-auto mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Who am I ?{" "}
            </h2>
            <p className="text-gray-600 text-lg">
              Hello! I am a third-year student at{" "}
              <span className="font-semibold">
                SIES Graduate School of Technology
              </span>
              . I have a strong passion for{" "}
              <span className="font-semibold text-blue-600">
                web development
              </span>{" "}
              and enjoy building projects using the{" "}
              <span className="font-semibold text-green-600">MERN stack</span>.
              Additionally, I am an enthusiastic beginner exploring the exciting
              world of{" "}
              <span className="font-semibold text-purple-600">
                Machine Learning
              </span>
              .
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="profilephoto "
        >
          <img
            src="https://i.imgur.com/KlZGeyE.jpeg"
            alt=""
            className="h-72 md:h-96 mt-6 rounded-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
