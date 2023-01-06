import React from "react";

const Contact = () => {
  return (
    <div 
      name="contact" 
      className="w-full h-screen bg-gradient-to-b  to-gray-800 from-black p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-6xl font-bold inline border-b-4 border-gray-500">
            Feedback
          </p>
          <p className="text-2xl py-6"> Your Feeedback matters! </p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/f4fe5bc8-72d0-4d80-9675-94fac5f440c6" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name "
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea 
              name="message"
              placeholder="Your feedback here"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-centre rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact