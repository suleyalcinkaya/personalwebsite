import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { LanguageContext } from "../LanguageContext"; 

const Info = () => {
  const { currentContent } = useContext(LanguageContext); 

  const { intro, more } = currentContent.hero;

  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row ">
            <div className="w-3/5 w-full bg-indigo-600 flex justify-center items-center ">
                <div className= "max-w-lg text-white">
                    <h1 className="text-4xl font-bold text-lime-200 max-w-80"> {intro}</h1>
                    <p className="mt-4 text-lg max-w-96">{more}</p>
                

                
                
                <div className="mt-6 flex gap-4">
                    <a href="https://github.com/suleyalcinkaya" target="_blank"
                    className="bg-white text-blue-900 py-2 px-4 rounded shadow flex items-center gap-2">

                        <FontAwesomeIcon icon={faGithub} size="lg" />
                        Github

                    </a>
                    <a href="www.linkedin.com/in/şule-esma-yalçınkaya-6a9b62184" target="_blank" 
                    className="bg-white text-blue-900 py-2 px-4 rounded shadow flex items-center gap-2">

                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                        LinkedIn

                    </a>
                </div>
                </div>
            </div>

            <div className="w-2/5 bg-lime-300"></div>

            <div className="absolute left-[72%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">

            <img src="./image/img.jpeg" alt="image" className='w-80 h-80 rounded-lg shadow-lg mt-8 md:mt-0 ' />
            
            </div>
        </div>
  );
};

export default Info;