import React from "react";

const Projects = () => {
  // Array of project objects
  const projectData = [
    {
      logo: "https://imgs.search.brave.com/sTMGxSIjcVpkwdFzPo78OgHzwDDQCi5V-SBQNC6I_10/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aS1oYXZlLWJlZW4t/bGVldGNvZGluZy1m/b3ItYS13aGlsZS1i/dXQtd2hhdC1kb2Vz/LXRoZS12MC11Y3k5/cTd3NDB3dGMxLmpw/Zz93aWR0aD03MjAm/Zm9ybWF0PXBqcGcm/YXV0bz13ZWJwJnM9/NDFlMTFhNTVmYWY4/NmUwYjdiYmJkZGY5/MzRiOTA2MjEyY2Fh/MGZhOQ",
      title: "Leetcode",
      description: "Solved more than 180 questions on leetcode in C++ .",
      projectLink: "https://leetcode.com/u/Pauras_2204/",
    },
    {
      logo: "https://i.imgur.com/Z0VHCuB.png",
      title: "Nutribot",
      description:
        "An AI powered recipe generator and meal solutions buillt on MERN stack . Integrates Recipe generation with E-Commerce . Includes Payment Gateway (Razorpay) , Token based Authentication (JWT) and Oauth integrations ",
      projectLink:
        "https://www.linkedin.com/posts/pauras-more-2206pm_project-completed-nutribot-thrilled-activity-7254895717251481601-PNd3?utm_source=share&utm_medium=member_desktop",
    },
    {
      logo: "https://i.postimg.cc/Y9GVg9rT/undraw-Home-settings-re-pkya.png",
      title: "Home Rental Web application",
      description:
        "A simple web based home rental application based on MERN Stack with image uploads",
      projectLink: "https://github.com/paurasm22/House-Rentals.git",
    },
    {
      logo: "https://i.postimg.cc/cC7FMtVk/chat.png",
      title: "ChatApp using web sockets ",
      description:
        "Simple Chatting web applciation built using MERN Stack and Socket.IO",
      projectLink: "https://github.com/paurasm22/Chatapp-WebSockets.git",
    },
    {
      logo: "https://i.postimg.cc/6Q7zbmkv/ecom.png",
      title: "Ecommerce Site  ",
      description:
        "My first project on MERN stack. A simple Ecommerce application includes features such as Token Authentication , Payment Gateway , Cart Options etc",
      projectLink: "https://github.com/paurasm22/Mern_Ecommerce_Frontend.git",
    },
  ];

  return (
    <div className="mt-20">
      <div className="header text-center text-4xl font-mono text-white font-extrabold mb-10">
        Projects - Code and Creations
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="max-w-xs bg-gray-800 text-white rounded-lg shadow-lg p-6"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                className="w-20 h-20 mb-4"
              />

              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold mb-2 text-blue-400 hover:text-blue-600"
              >
                {project.title}
              </a>

              <p className="text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
