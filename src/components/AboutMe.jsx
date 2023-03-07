import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello! Thank you for taking the opportunity to learn more about me. I am a Full Stack Developer currently located in Asheville NC. 
          I have received a BSBA in Business Management from Appalachian State University and have also completed the Full Stack '(MERN)' Bootcamp 
          through the University of North Carolina at Chapel Hill. 

        </p>
       
        <br />

        <p className="text-xl">
        Continuous growth and expanding my knowledge are constant desires that drive me on a daily basis. Creating new applications, websites, learning new coding languages, 
        and building cool electronics projects are a few of the roles I actively and regularly engage in to fullfil that need for growth. I love working with others and finding
        similar people who love exploring and creating new and exciting projects. If these characteristics are ones you can relate to then I would love to have the opportunity
        to talk with you and see if we can make some awesome applications and projects together! Feel free to reach out to me through any of my linked social pages or by filling 
        out the "contact me" form bellow.

        Look forward to meeting with you!
          
        </p>
      </div>
    </div>
  );
};

