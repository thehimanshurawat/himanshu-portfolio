import React from "react";

const About = () => {
  return ( 
    <div 
      name="about" 
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-6">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>
            
            <p className="text-xl mt-20">
            I am highly enthused when it comes to my work.I am an effective and articulate communicator among all levels of employees. As a HR I have been told that I am an inspirational mentor .
            </p>
            <br/>

            <p className="text-xl">
            I am committed to learning and self development so that I can attain better results. I understand the importance of being interactive and enjoy communicating with others for the benefit of the company.
            </p>
        </div>
    </div>
    );
};

export default About