import React from "react";
import Common from "../common/Common";

import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const SOCIAL = [
    {
      id: 1,
      image: <FaInstagram />,
      link: "https://www.instagram.com/hellow_dipu/",
    },
    { id: 2, image: <FaTwitter />, link: "https://twitter.com/Juniordipu" },
    {
      id: 3,
      image: <FaLinkedin />,
      link: "https://www.linkedin.com/in/dipongkor-roy/",
    },
  ];
  return (
    <Common
      title="Contact 📱"
      subtitle="These are the ways you can get in touch with me. Hope to hear deom tou soon 😀"
    >
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div>
          <p className="max-w-xs lg:max-w-xl font-extralight">
            I am open to talk regarding freelancing or full-time opportunities.
            Fell free to contact me using your preferred medium
          </p>
        </div>
        <div className="flex w-full items-center justify-evenly text-3xl ">
          {SOCIAL.map(({ id, image, link }) => (
            <a
              className="duration-200 ease-in-out hover:text-rose-600"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {image}
            </a>
          ))}
        </div>
        {/* form-bottom part  */}
     
      </div>
    </Common>
  );
};

export default Contact;
