// import React from "react";
// import passwordGenerator from "../assets/passwordGenerator.jpg";
// import workdayScheduler from "../assets/workdayScheduler.jpeg";
// import mealsandTotties from "../assets/mealsandTotties.jpeg";
// import readmeGenerator from "../assets/readme-generator-scaled.jpg";
// import mysqlemployeeTracker from "../assets/mysqlemployeeTracker.jpeg";
// import booksearchDatabase from "../assets/booksearchDatabase.jpg";

// const Portfolio = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: passwordGenerator ,
//     },
//     {
//       id: 2,
//       src: workdayScheduler, 
//     },
//     {
//       id: 3,
//       src: mealsandTotties,
//     },
//     {
//       id: 4,
//       src: readmeGenerator,
//     },
//     {
//       id: 5,
//       src: mysqlemployeeTracker,
//     },
//     {
//       id: 6,
//       src: booksearchDatabase,
//     },
//   ];

//   return (
//     <div
//       name="portfolio"
//       className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Portfolio
//           </p>
//           <p className="py-6">Check out some of my work right here</p>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
//           {portfolios.map(({ id, src }) => (
//             <div key={1} className="shadow-md shadow-gray-600 rounded-lg">
//               <img
//                 src={src}
//                 alt=""
//                 className="rounded-md duration-200 hover:scale-105"
//               />
//               <div className="flex items-center justify-center">
//                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                   Demo
//                 </button>
//                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                   Code
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

// import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Portfolio() {
  return (
    <section id="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Take a look at some of the application I have made which utilize a wide variety of 
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-2">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// export default Portfolio;