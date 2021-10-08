import React from "react";
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
export default function About() {
  return (
    <section id="about">
      <div className=" container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <Fade left>
            Hi, I'm Varun.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
            </Fade>
          </h1>
          <Fade left>
          <p className="mb-8 leading-relaxed">
          4th-year computer science student currently studying at the University of British Columbia
          with extensive experience building mobile and web applications.       
          </p>
          </Fade>
          <div className="flex justify-center">
          <Fade left>
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
            </Fade>
          </div>
        </div>
        <Jump>
        <div className="w-48 h-40 mb-10">
          <img
            className="object-scale-down rounded-full border border-gray-100 shadow-sm"
            alt="Resume Pcture"
            src="./resumepicture.jpg"
          />
        </div>
        </Jump>
      </div>
    </section>
  );
}