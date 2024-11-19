import React from "react";

const Navbar = ({
  onScrollToAbout,
  onScrollToSkills,
  onScrollToProjects,
  onScrollToContact,
}) => {
  return (
    <div className="bg-matteBlack h-12 flex items-center justify-center sticky top-0 z-50">
      <img
        src="https://i.imgur.com/nDDuhIE.jpeg"
        alt=""
        className="h-10 rounded-full cursor-pointer hover:bg-white mr-2"
      />
      <div className="options flex items-center justify-center">
        <h3
          onClick={onScrollToAbout}
          className="text-white cursor-pointer hover:bg-gray-500 pr-4 pl-4 py-3"
        >
          About
        </h3>
        <h3
          onClick={onScrollToSkills}
          className="text-white cursor-pointer hover:bg-gray-500 pr-4 pl-4 py-3"
        >
          Skills
        </h3>
        <h3
          onClick={onScrollToProjects}
          className="text-white cursor-pointer hover:bg-gray-500 pr-4 pl-4 py-3"
        >
          Projects
        </h3>
        <h3
          onClick={onScrollToContact}
          className="text-white cursor-pointer hover:bg-gray-500 pr-4 pl-4 py-3"
        >
          Contact Me
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
