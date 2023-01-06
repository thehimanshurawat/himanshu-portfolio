import React from "react";
import silaris from "../assets/silaris.png"
import skillbee2 from "../assets/skillbee2.png"
// import Offerletter from "../assets/portfolio/Offerletter.png"
// import Certificate from "../assets/portfolio/Certificate.png"

const Portfolio = () => {


    const portfolio = [
        {
            id: 1,
            src: silaris
        },
        {
          id: 2,
          src: skillbee2
      },
    ]
  return ( 
    <div 
      name="portfolio" 
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-6xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="text-4xl py-6">Companies where I have worked</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 px-20 sm:px-0">
          {portfolio.map(({ id, src }) => (
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <img 
                src={src} 
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;