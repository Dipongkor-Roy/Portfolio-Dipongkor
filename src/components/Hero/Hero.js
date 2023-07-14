import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaArrowDown } from "react-icons/fa";
import avatar from '../../assetsall/avatar.png'
const Hero = () => {
  const social = [
    {
      id: 1,
      link: "https://twitter.com/Juniordipu",
      icon: <FaTwitter />,
    },
    {
      id: 2,
      link: "https://www.facebook.com/dipongkor.roydipu.1/",
      icon: <FaFacebook />,
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/dipongkor-roy/",
      icon: <FaLinkedin />,
    },
  ];
  return (
    <section className="min-h-screen flex flex-col justify-start items-cneter p-5 text-center">
      <h2 className="text-5xl text-rose-600 uppercase font-bold  ">Dipongkor Roy</h2>
      <h3 className="py-3 text-2xl">Full Stack Developer</h3>
      <p className="max-w-xl font-light text-gray-500">
        Hello <span className="animate-pulse text-4xl">👋</span>
        Welcome to my site. I am a freelance full stack developer. I love to work
        on Web app, Frontend and Backend technology
      </p>

      {/* social icons  */}
      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
        {
            social.map(({id,link,icon})=>(
                <a href={link} key={id}
                target="_blank" rel="noopener noreferrer"
                className="cursor-pointer duration-300 hover:text-rose-600">{icon}</a>
            ))
        }
      </div>
      {/* avatar and resume */}
      <div>
        <img src={avatar} alt="avatar" className="w-60 h-60 md:w-72 md:h-72 object-cover object-top" />
      </div>
    </section>
  );
};

export default Hero;
