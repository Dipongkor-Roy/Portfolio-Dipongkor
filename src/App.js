import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Techstack from "./components/Techstack/Techstack";
import Common from "./components/common/Common";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Hero />
        <Techstack/>
        <div>
        <Common
      title="My Techstack 🧰"
      subtitle="
        These are all the projects that I have worked on. Some of them I have worked before I gained some experience. So go gentle on them."
    >
        <img src='https://shipfa.st/_next/static/media/demo.a9a3174c.png' alt="Contact Info" className="md:w-1/2 md:h-1/2 w-full h-full bg-slate-900 rounded-2xl p-2" />
        </Common>
        </div>
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
