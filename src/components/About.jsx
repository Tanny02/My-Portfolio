import { useState } from "react";
import { about, techStack } from "../data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === about.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true);
    }, 300);
  };

  const handlePrevious = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? about.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 300);
  };
  return (
    <div
      id="About"
      className="flex items-center justify-center text-blue-800 w-[100vw] h-[100vh]"
    >
      <div className="grid grid-cols-1 gap-1 md:gap-2 lg:gap-4 lg:grid-cols-2 w-[70%] sm:w-[60%] md:w-[80%] lg:w-[90%] lg:h-[80%] mt-16">
        <div className="bggradient rounded-xl flex items-center justify-center">
          <div className="w-full max-w-md mx-auto text-center flex items-center justify-center flex-col">
            <div
              className={`p-2 transition-opacity duration-300 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-black">
                {about[currentIndex]}
              </p>
            </div>

            <div className="flex justify-center space-x-6 p-2">
              <button
                onClick={handlePrevious}
                className="bg-blue-950 p-1 text-gray-200 rounded-full hover:bg-blue-300"
              >
                <FaArrowLeft size={12} />
              </button>
              <button
                onClick={handleNext}
                className="bg-blue-950 p-1 text-gray-200 rounded-full hover:bg-blue-300"
              >
                <FaArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1 rounded-xl p-1 sm:p-2 glassss">
          <h1 className="text-center text-base md:text-2xl lg:text-3xl sm:mb-2 font-semibold text-blue-200">
            Tech Stack
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-1 md:gap-4 md:p-3">
            {techStack.map((section) => (
              <div
                key={section.category}
                className=" text-yellow-300 rounded-lg border px-1 sm:p-1"
              >
                <h3 className="text-xs sm:text-sm md:text-xl font-normal py-1 text-center">
                  {section.category}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li
                      key={item.label}
                      className="text-blue-200 text-center text-xs md:text-sm"
                    >
                      {item.skills.join(", ")}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
