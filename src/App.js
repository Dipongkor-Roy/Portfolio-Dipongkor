import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Hero />
        <Services/>
        <Portfolio/> 
        <Testimonials/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
