import React from "react";
import Common from "../common/Common";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

import p1 from "../../assetsall/p1.jpg";
import p2 from "../../assetsall/p2.jpg";
import p3 from "../../assetsall/p3.jpg";
import p4 from "../../assetsall/p4.jpg";
import p5 from "../../assetsall/p5.jpg";
import p6 from "../../assetsall/p6.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: p1,
      title: "Best App",
      github: "google.com",
      demo: "demo.link",
    },
    {
      id: 2,
      image: p2,
      title: "Best App",
      github: "google.com",
      demo: "demo.link",
    },
    {
      id: 3,
      image: p3,
      title: "Best App",
      github: "google.com",
      demo: "demo.link",
    },
    {
      id: 4,
      image: p4,
      title: "Best App",
      github: "google.com",
      demo: "demo.link",
    },
    {
      id: 5,
      image: p5,
      title: "Best App",
      github: "google.com",
      demo: "demo.link",
    },
    {
      id: 6,
      image: p6,
      title: "Best App",
      github: "google.com",
      demo: "demo.link",
    },
  ];
  return (
    <Common
      title="Portfolio 🗒️"
      subtitle="
        These are all the projects that I have worked on. Some of them I have worked before I gained some experience. So go gentle on them."
    >
        <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
          {
            projects.map(({id,image,title,github,demo})=>(
                <div key={id} className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden">
                    <img src={image} alt={title} className="w-2/3"/>
                    <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
                        <h2>{title}</h2>
                        <a className="text-2xl cursor-pointer duration-150 hover:scale-110" href={github}><FaGithub/></a>
                        <a className="text-2xl cursor-pointer duration-150 hover:scale-110" href={demo}><FaExternalLinkSquareAlt/></a>
                    </div>
                </div>
            ))
          }
        </div>
    </Common>
  );
};
 
export default Portfolio;
