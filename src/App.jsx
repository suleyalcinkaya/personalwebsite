import React from "react";
import { LanguageProvider } from "./LanguageContext"; 
import './index.css';
import Info from "./components/Info"; 
import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Info />
      <Skills />
    </LanguageProvider>
  );
}

export default App;