"use client";

import { FaSearch } from "react-icons/fa";
import Image from "next/image"; // Import Image from next/image

const certificates = [
  {
    title: "Belajar Dasar Digital Marketing",
    description: "Sertifikat dari RevoU",
    imageUrl: "/images/certifikat.png",
  },
];

const Certificates = () => {
  return (
    <div className="bg-gray-800 min-h-screen w-full px-4 md:-mt-96 -mt-56 flex justify-center items-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          SERTIFIKAT
        </h2>
        <p className="text-center text-white mb-12">
          Berikut adalah sertifikat yang telah saya peroleh.
        </p>
        <div className="flex justify-center">
          {certificates.map((certificate, index) => (
            <div key={index} className="relative group w-80">
              <Image
                src={certificate.imageUrl}
                alt={certificate.title}
                className="w-full h-48 sm:h-64 object-cover rounded-lg"
                width={320} // Adjust the width as per your need
                height={256} // Adjust the height as per your need
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-white text-center p-4 rounded-lg">
                <h3 className="text-xl font-bold text-green-400">
                  {certificate.title}
                </h3>
                <p className="mb-4 text-sm sm:text-base">
                  {certificate.description}
                </p>
                <FaSearch className="text-2xl cursor-pointer hover:text-green-400 transition duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
