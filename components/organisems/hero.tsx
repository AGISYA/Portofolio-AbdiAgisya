"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Web Developer";
  const newText = "Web Designer";
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState(fullText);

  useEffect(() => {
    let timeout;

    if (isDeleting) {
      // Erase text
      if (index > 0) {
        timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, prev.length - 1));
          setIndex(index - 1);
        }, 100);
      } else {
        // After erasing, switch to the next text
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentText(currentText === fullText ? newText : fullText);
          setIndex(0);
        }, 500);
      }
    } else {
      // Type text
      if (index < currentText.length) {
        timeout = setTimeout(() => {
          setText((prev) => prev + currentText[index]);
          setIndex(index + 1);
        }, 150);
      } else {
        // After typing, start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
      }
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, currentText]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 relative overflow-hidden px-6 sm:px-12 lg:px-44">
      <div className="container mx-auto flex flex-col-reverse items-center justify-between space-y-12 space-y-reverse lg:flex-row lg:space-y-0">
        {/* Text Section */}
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-green-700 md:text-7xl">
            ABDI AGISYA
          </h1>
          <p className="mt-4 text-base text-white sm:text-lg md:text-2xl">
            I'm a {text}
            <span className="animate-blink text-green-700">|</span>
          </p>
          <button className="mt-6 px-6 py-3 sm:px-8 sm:py-4 bg-green-600 text-white text-base sm:text-lg font-medium rounded-lg shadow-lg transition-transform transform hover:scale-105">
            View My Work
          </button>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
          <div className="relative">
            <img
              src="/images/White and Black Simple Coming Soon Instagram Post (1).png"
              alt="Abdi Agisya"
              className="relative rounded-full shadow-2xl w-full h-full object-cover"
            />
            {/* SVG Circle with Dashed Border */}
            <div
              className="absolute w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-rotate"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="green"
                  strokeWidth="2"
                  strokeDasharray="26, 10"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .animate-blink {
          display: inline-block;
          animation: blink 1s step-start infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        .animate-rotate {
          animation: rotate 10s cubic-bezier(0.25, 0.1, 0.25, 1) infinite
            alternate;
        }

        @keyframes rotate {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
