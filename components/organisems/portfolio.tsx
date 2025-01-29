"use client";

import { FaLink, FaSearch } from "react-icons/fa";

const projects = [
  {
    title: "FoxoWedding",
    description: "LandingPage FoxoWedding",
    imageUrl: "/images/project.png",
  },
  {
    title: "Ayu Ayu",
    description: "LandingPage Ayu Ayu",
    imageUrl: "/images/project ayu ayu.png",
  },
  {
    title: "Crostroad",
    description: "Tamplate Landing page Crostroad ",
    imageUrl: "/images/Desain tanpa judul (3).png",
  },
];

const Portfolio = () => {
  return (
    <div className="bg-gray-800 min-h-screen w-full px-4">
      <div className="max-w-6xl mx-auto mt-20 md:-mt-0">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          PORTOFOLIO
        </h2>
        <p className="text-center text-white mb-12">
          Di bawah ini adalah proyek-proyek yang pernah saya kerjakan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative group">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 sm:h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-white text-center p-4 rounded-lg">
                <h3 className="text-xl font-bold text-green-400">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm sm:text-base">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <FaSearch className="text-2xl cursor-pointer hover:text-green-400 transition duration-300" />
                  <FaLink className="text-2xl cursor-pointer hover:text-green-400 transition duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
