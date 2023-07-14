import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  const [darkMode,setDarkMode]=useState(false);

  return (
    <div className={darkMode && "dark"}> 
      <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
         <Hero/>
      </main>
    </div>
    
  );
}

export default App;
