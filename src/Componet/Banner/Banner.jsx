import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="text-center py-16 bg-white">
        <h1 className="text-5xl font-bold text-black">Learn in-demand skills.</h1>
        {/* <h2 className="text-5xl font-bold text-pink-600 mt-2">Get promoted.</h2> */}
        <div className="roller text-5xl font-bold text-pink-600 mt-2 relative h-16 overflow-hidden flex justify-center items-center">
          <div id="rolltext" className="absolute flex flex-col animate-scroll">
            <span>HTML</span>
            <span>CSS</span>
            <span>Curiosity</span>
            <span className="text-xl italic text-blue-400">Too much spare time?</span>
          </div>
        </div>
        <p className="text-gray-600 text-lg mt-4">Upgrade your earning power with courses taught by industry experts. Always up-to-date.</p>

        <div className="mt-8 flex justify-center gap-6">
          <button className="bg-pink-600 text-white font-bold text-lg px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 transition duration-300">SEE ALL COURSES</button>
          <button className="text-pink-600 font-bold text-lg hover:underline">OR TAKE OUR CAREER QUIZ</button>
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Excellent <span className="font-bold">4.9</span> out of 5 ⭐ <span className="text-green-600 font-bold">Trustpilot</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
