import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Techstack from "./components/Techstack/Techstack";
import Common from "./components/common/Common";
import LoaderSimple from "./components/LoaderPage/LoaderPage";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {" "}
      {loading && <LoaderSimple setLoading={setLoading} />}
      <div className="">
        {!loading && (
          <main className="  h-full w-full items-center px-5 custom-gradient text-white">
            <Header />
            <Hero />
            <Techstack />
            <div>
              <Common
                title="My Techstack 🧰"
                subtitle="
        These are all the projects that I have worked on. Some of them I have worked before I gained some experience. So go gentle on them."
              >
                <img
                  src="https://shipfa.st/_next/static/media/demo.753bdb0f.pnghttps://shipfa.st/_next/static/media/demo.753bdb0f.png"
                  alt="Contact Info"
                  className="md:w-1/2 md:h-1/2 w-full h-full  rounded-2xl p-2"
                />
              </Common>
            </div>
            <Portfolio />
            <Contact />
            <Footer />
          </main>
        )}
      </div>
    </>
  );
}

export default App;
