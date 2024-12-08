import React, { useState, useContext } from "react";
import { LanguageContext } from "../LanguageContext";


const Header = () => {
  const { userLanguage, changeLanguage } = useContext(LanguageContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark");

    const { currentContent } = useContext(LanguageContext); 

      const { language, mode } = currentContent.header;

  };

  return (
    <header>
   <div className="w-3/5 w-400 flex justify-between pl-8 pr-8">
    
      <div className=" text-lime-300 text-xl font-bold">Şule</div>

      
      <div className=" header-right flex items-center gap-4">
        
        <button
          className="text-sm text-lime-300 px-3 py-1 rounded"
          onClick={() => changeLanguage(userLanguage === "tr" ? "ing" : "tr")}
        >
          {userLanguage === "tr" ? "SWITCH TO ENGLISH" : "TÜRKÇE'YE GEÇ"}
        </button>

        
        <div className="flex items-center gap-2">
          <span className="text-sm text-indigo-500">DARK MODE</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              className="sr-only peer"
            />
             <div className="w-9 h-5 bg-purple-400 rounded-full peer dark:bg-lime-300 peer-focus:ring-4 peer-focus:ring-purple-500  dark:peer-focus:ring-indigo-800"></div>
            <div className="absolute left-1 top-0.5 w-4 h-4 bg-lime-300 rounded-full transition peer-checked:translate-x-4 peer-checked:bg-lime-300"></div>
          </label>
        </div>

      </div>
      </div>
    </header>
  );
};

export default Header;