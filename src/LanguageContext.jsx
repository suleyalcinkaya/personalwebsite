import React, { createContext, useState, useEffect } from "react";
import LanguagesData from "./data"; 
export const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState("ing"); 
  const currentContent = LanguagesData[userLanguage];

  const changeLanguage = (language) => {
    setUserLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ userLanguage, changeLanguage, currentContent }}>
      {children}
    </LanguageContext.Provider>
  );
};
