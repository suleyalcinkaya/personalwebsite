
import React, { createContext, useState } from "react";

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ModeContext.Provider value={{ isDarkMode, toggleMode }}>
      <div className={isDarkMode ? "dark" : "light"}>{children}</div>
    </ModeContext.Provider>
  );
};
