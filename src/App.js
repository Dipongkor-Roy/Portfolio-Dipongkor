import { useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [darkMode,setDarkMode]=useState(false);

  return (
    <div className={darkMode && "dark"}> 
      <Header darMode={darkMode} setDarkMode={setDarkMode}></Header>
    </div>
    
  );
}

export default App;
