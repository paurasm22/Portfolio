import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Skills = () => {
  const skills = [
    {
      title: "HTML",
      description: "Building the structure of web pages.",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    },
    {
      title: "CSS",
      description: "Styling modern and responsive designs.",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      title: "JavaScript",
      description: "Core of interactive web experiences.",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    {
      title: "Node.js",
      description: "Proficient in backend development with Node.js.",
      logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    },
    {
      title: "Express.js",
      description: "Framework for building robust APIs.",
      logo: "https://kinsta.com/wp-content/uploads/2022/04/express-1.png",
    },
    {
      title: "PostgreSQL",
      description: "Efficient in managing relational databases.",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
    },
    {
      title: "MongoDB",
      description: "Expert in NoSQL database management.",
      logo: "https://imgs.search.brave.com/7f5PaFW1YPkFanFfGNDbeyqnmFz1Y9QiWAR4CDUwp98/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvTW9u/Z29kYi1QTkctQmFj/a2dyb3VuZC5wbmc",
    },
    {
      title: "React",
      description: "Experienced in building React applications.",
      logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    },
    {
      title: "C++",
      description: "Skilled in solving problems with C++.",
      logo: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    },
    {
      title: "Python",
      description: "Proficient in Python for diverse applications.",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    },
    {
      title: "Docker",
      description: "Containerization expertise for development.",
      logo: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
    },
    {
      title: "Tailwind CSS",
      description: "Skilled in responsive UI designs for web.",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      title: "Bootstrap",
      description: "Efficient in designing with Bootstrap framework.",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        My Skills
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full"
      >
        {skills.map((skill, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center bg-gray-800 text-white rounded-lg shadow-md p-6 h-60"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={skill.logo}
                alt={`${skill.title} logo`}
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Skills;
