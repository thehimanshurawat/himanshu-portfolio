import React from "react";
import Offerletter1 from "../assets/Offerletter1.png"
import appointment1 from "../assets/appointment1.png"
import LOR1 from "../assets/LOR1.png"
const Experience = () => {


    const Experience = [
        {
            id: 1,
            src: Offerletter1
        },
        {
          id: 2,
          src: LOR1
        },
        {
          id: 3,
          src: appointment1
        },
        
    ]
  return ( 
    <div 
      name="experience" 
      className="bg-gradient-to-b to-black from-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-9 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className=" py-6">9 September 2021- 9 November 2021
I worked as an operation intern in SkillBee during my term as an intern I completed my projects timely, strengthened the sales  and volunteered for additional tasks.
10 November 2021-10 January 2022 
I was promoted as a team leader and HR in SkillBee. I mentored interns and coordinated well in the company.I also worked on acquiring marketing learning.
18 June 2022-18 December 2022
I worked as an HR recruiter in Silaris where I conducted interviews of many applicants.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-20 sm:px-0">
          {Experience.map(({ id, src }) => (
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

export default Experience;