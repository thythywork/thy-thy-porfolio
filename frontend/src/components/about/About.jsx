import React from "react";
import Title from "../title/Title";
import html from '../../assets/html.png';
import js from '../../assets/js.png'
import react from '../../assets/react.png';
import node from '../../assets/node.png'

const About = () => {
  return (
    <div id="about" className="w-screen h-screen py-4 flex flex-col justify-center">
      <Title title="about" />
      <div className="flex flex-col items-center md:gap-20 gap-12 h-full justify-center">
        <p className="text-white text-center align-middle w-2/3 md:text-base text-xs move-bottom-to-top">
          Hello, I'm Thy Thy, a creative web developer. I enjoy discipline in
          coding and aim to create a smooth experience and beautiful interface
          for users. Continuous innovation is my primary motivation.
        </p>
        <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-[#D0D4FE] md:text-[2em] text-2xl font-bold move-bottom-to-top">My Skill</h2>
        <div className="icons flex flex-wrap md:flex-row justify-center gap-12 move-bottom-to-top">
          <img src={html} alt="" className="w-auto"/>
          <img src={js} alt="" />
          <img src={react} alt="" />
          <img src={node} alt="" />
        </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 overflow-x-auto">
        <h2 className="text-[#D0D4FE] md:text-[2em] text-2xl font-bold move-bottom-to-top">My Certificate</h2>
        <table className="w-full border-collapse">
        <tbody>
          <tr className="move-bottom-to-top">
            <td className="text-[#D0D4FE] md:text-base text-xs font-semibold px-4 py-2">The Web Developer Bootcamp 2023</td>
            <td className="text-white md:text-base text-xs font-normal px-4 py-2">Colt Steele</td>
            <td className="text-white md:text-base text-xs font-normal px-4 py-2">Sep 2023</td>
          </tr>
          <tr className="move-bottom-to-top">
            <td className="text-[#D0D4FE] md:text-base text-xs font-semibold px-4 py-2">React - The Complete Guide 2024</td>
            <td className="text-white md:text-base text-xs font-normal px-4 py-2">Maximilian Schwarzmuller</td>
            <td className="text-white md:text-base text-xs font-normal px-4 py-2">Jul 2024</td>
          </tr>
        </tbody>
      </table>
        </div>
      </div>
    </div>
  );
};

export default About;
