"use client";
import React from "react";

const Resume = () => {
  return (
    <div className="bg-gray-800 md:-mt-10 -mt-12 min-h-screen flex justify-center px-4 py-6">
      <div className="max-w-4xl w-full p-6 md:p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-700">
          MELANJUTKAN
        </h2>
        <p className="text-center text-base sm:text-lg text-white mb-6">
          Berikut riwayat pendidikan, pengalaman kerja, dan pengalaman
          berorganisasi saya.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pendidikan */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-600">
              Pendidikan
            </h3>
            <div className="border-l-4 border-green-600 pl-4 mb-6">
              <h4 className="text-green-600 font-semibold">MA NurulHuda</h4>
              <p className="text-white text-base">2021 - 2024</p>
              <p className="text-gray-100 italic">Garut, Cisurupan</p>
              <p className="text-white text-base">
                Madrasah Aliyah (MA) Nurul Huda Cisurupan didirikan pada tahun
                1995 sebagai bagian dari upaya masyarakat Kp. Cibojong untuk
                menyediakan pendidikan menengah yang berbasis nilai-nilai Islam.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="text-green-600 font-semibold">MTs NurulHuda</h4>
              <p className="text-white text-base">2018 - 2021</p>
              <p className="text-gray-100 italic">Garut, Cisurupan</p>
              <p className="text-white text-base">
                Visi dari MTs Nurul Huda adalah menghasilkan lulusan yang
                Ilmiah, Amaliah, dan memiliki nilai-nilai Nahdlatul Ulama.
              </p>
            </div>
          </div>

          {/* Pengalaman Bekerja */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-600">
              Pengalaman Bekerja
            </h3>

            <div className="border-l-4 border-green-600 pl-4 mb-6">
              <h4 className="text-green-600 font-semibold">
                Penjual Akun Game Online
              </h4>
              <p className="text-white text-base">2022 - 2023</p>
              <p className="text-gray-100 italic">
                Penjualan akun game secara online.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-4 mb-6">
              <h4 className="text-green-600 font-semibold">
                Desainer & Editor Logo & Banner
              </h4>
              <p className="text-white text-base">2023 - 2024</p>
              <p className="text-gray-100 italic">
                Penjualan desain dan edit logo, banner, serta kebutuhan grafis.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="text-green-600 font-semibold">Web Developer</h4>
              <p className="text-white text-base">2024 - Sekarang</p>
              <p className="text-gray-100 italic">
                Pengembangan template layout dan fitur web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
