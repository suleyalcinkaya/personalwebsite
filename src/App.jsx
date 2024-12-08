import React from "react";
import { LanguageProvider } from "./LanguageContext"; 
import { ModeProvider } from "./ModeContext";
import './index.css';
import Info from "./components/Info"; 
import Header from "./components/Header";
import Skills from "./components/Skills";


function App() {
  return (
    <LanguageProvider>
      <ModeProvider>
        <Header />
        <Info />
        <Skills />   
      </ModeProvider>
    </LanguageProvider>
    
  );
}

export default App;