import React from "react";

const Contact = () => {
  // Contact details (email, GitHub, LinkedIn)
  const contactDetails = {
    email: "paurasmore22@gmail.com",
    github: "https://github.com/paurasm22",
    linkedin: "https://www.linkedin.com/in/pauras-more-2206pm/",
  };

  return (
    <div className="mt-20 bg-gray-600 text-white py-16">
      <div className="header text-center text-4xl font-mono font-extrabold mb-10">
        Contact Me
      </div>
      <div className="flex flex-col items-center space-y-6">
        <div className="text-xl text-center mb-4">
          Feel free to reach out to me through any of the platforms below:
        </div>

        {/* Email */}
        <div className="flex items-center space-x-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
            alt="Email Icon"
            className="w-8 h-8"
          />
          <a
            href={`mailto:${contactDetails.email}`}
            className="text-lg text-blue-400 hover:text-blue-600"
          >
            {contactDetails.email}
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center space-x-4">
          <img
            src="https://i.postimg.cc/tCkj9sYz/github-mark-white.png"
            alt="GitHub Icon"
            className="w-8 h-8"
          />
          <a
            href={contactDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-400 hover:text-blue-600"
          >
            GitHub Profile
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn Icon"
            className="w-8 h-8"
          />
          <a
            href={contactDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-400 hover:text-blue-600"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
