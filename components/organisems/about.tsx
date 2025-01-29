"use client";
import React from "react";

export default function About() {
  return (
    <div className="flex items-center justify-center md:-mt-0 -mt-44 min-h-screen bg-gray-800 relative overflow-hidden px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center mb-4 text-green-700">
          About Me
        </h1>

        <div className="w-full">
          <p className="text-base sm:text-lg text-white mb-6">
            Saya merupakan lulusan MA NurulHuda Cibojong jurusan IPA. Meskipun
            saya tidak memiliki latar belakang di bidang IT atau pemrograman,
            saya tengah dengan semangat belajar mendalam mengenai coding dan
            pengujian perangkat lunak. Dalam proses pembelajaran ini, saya
            berkomitmen untuk mengembangkan keterampilan yang akan membantu saya
            menjadi ahli dalam menghasilkan solusi perangkat lunak yang dapat
            diandalkan dan berkualitas.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4">
            Personal Information
          </h2>

          <ul className="space-y-4 text-base sm:text-lg">
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://abdiagisya.com"
                className="text-green-400 hover:underline"
              >
                abdiagisya.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> 08987654321
            </li>
            <li>
              <strong>City:</strong> Garut, Indonesia
            </li>
            <li>
              <strong>Degree:</strong> MA NURULHUDA
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:Abdiagisya@gmail.com"
                className="text-green-400 hover:underline"
              >
                Abdiagisya@gmail.com
              </a>
            </li>
            <li>
              <strong>Freelance:</strong> Available
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
