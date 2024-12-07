import React, { createContext, useState, useEffect } from "react";
import LanguagesData from "./data"; 
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const defaultLanguage = navigator.language.includes("tr") ? "tr" : "ing";
  const [userLanguage, setUserLanguage] = useState(defaultLanguage);
  const [currentContent, setCurrentContent] = useState(LanguagesData[defaultLanguage]);

  useEffect(() => {
    setCurrentContent(LanguagesData[userLanguage]);
  }, [userLanguage]);

  const changeLanguage = (lang) => {
    setUserLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ currentContent, userLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};