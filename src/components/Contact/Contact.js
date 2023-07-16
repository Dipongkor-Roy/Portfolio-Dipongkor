import React from "react";
import Common from "../common/Common";
import contact from "../../assetsall/mobile.png";
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
          <img src={contact} alt="Contact Info" className="w-32 h-32" />
        </div>
        <div>
          <p className="max-w-xs lg:max-w-xl font-extralight">
            I am open to talk regarding freelancing or full-time opportunities.
            Fell free to ontact me using your preferred medium
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
        <div className="p-8 text-left w-full">
          <form action="https://getform.io/f/8311a7fc-5bae-4280-be50-a5a11d5b31b6" method="POST">
            <div className="gap-4 w-full">
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  Message
                </label>
                <textarea name="message" rows="10" className="border-2 rounded-xl p-3 focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"></textarea>
              </div>
            </div>
            {/* btn  */}
            <div className="flex items-center justify-center">
            <button className="mt-8 bg-gradient-to-r from-rose-600 to-teal-500 hover:from-rose-700 hover:to-teal-600 text-white px-6 py-3  uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </Common>
  );
};

export default Contact;
