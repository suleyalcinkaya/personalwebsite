import React from "react";
import { LanguageProvider } from "./LanguageContext"; 
import Info from "./components/Info"; 
import Header from "./components/Header";
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Info />
    </LanguageProvider>
  );
}

export default App;