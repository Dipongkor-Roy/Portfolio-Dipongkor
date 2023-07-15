import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaArrowDown } from "react-icons/fa";
import avatar from "../../assetsall/avatar.png";
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
  
// function for scroll down arrow hide

window.addEventListener("scroll",function(){
  const downArrow=document.querySelector(".down-arrow");
  if(this.scrollY>=90) downArrow.classList.add("hide-down-arrow");
  else downArrow.classList.remove("hide-down-arrow")
})
  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl text-rose-600 uppercase font-bold  ">
        Dipongkor Roy
      </h2>
      <h3 className="py-3 text-2xl">Full Stack Developer</h3>
      <p className="max-w-xl font-light text-gray-500">
        Hello <span className="animate-pulse text-4xl">👋</span>
        Welcome to my site. I am a freelance full stack developer. I love to
        work on Web app, Frontend and Backend technology
      </p>

      {/* social icons  */}
      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
        {social.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-rose-600"
          >
            {icon}
          </a>
        ))}
      </div>
      {/* avatar and resume */}
      <div>
        <div className="flex justify-center items-center ">
          <img
            src={avatar}
            alt="avatar"
            className="w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-rose-600 hover:from-teal-500 rounded-xl pt-5"
          />
        </div>
        <a
          href="/dipongkor-resume.pdf"
          download={true}
          className="flex justify-center items-center mt-10 py-2 bg-gradient-to-r from-rose-600 to-teal-500 text-white  rounded-lg"
        >
          Resume
        </a>
      </div>
      {/* arrow down animation */}
      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
