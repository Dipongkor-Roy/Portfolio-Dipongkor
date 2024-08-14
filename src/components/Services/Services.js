import React from "react";
import Section from "../common/Common";
import commerce from "../../assetsall/commerce.png";
import research from "../../assetsall/research.png";
import web from "../../assetsall/web.png";
import mobile from "../../assetsall/mobile.png";

const Services = () => {
  const services = [
    { id: 1, image: commerce, title: "EComerce Website" },
    { id: 2, image: web, title: "Web Development" },
    { id: 3, image: mobile, title: "Mobile Development" },
    { id: 4, image: research, title: "Reasearch And Development" },
  ];
  return (
    <Section
      title="Services ⚒️"
      subtitle="Here are all the services that I provide to my clients. I hope I offer 
      the service that you are looking for. If you don't find something that
       your are looking for than please send me and email."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        {
          services.map(({id,image,title})=>(
            <div key={id} className="flex flex-col items-center 
            justify-center p-3 shadow-lg
             dark:shadow-gray-100 rounded-xl duration-300 
             ease-in-out hover:scale-110" >
              <img src={image} alt={title} className="w-36 h-36 md:w-44 md:h-44 object-contain" />
              <h3 className="mt-5 text-base">{title}</h3>
            </div>
          ))
        }
      </div>
    </Section>
  );
};

export default Services;
 