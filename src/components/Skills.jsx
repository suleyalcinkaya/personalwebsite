import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const Skills = () => {

    const {currentContent} = useContext(LanguageContext);
    const {skills} = currentContent;

    return (
        
            <div className="flex justify-items space-x-40 pt-20 pb-20 pl-[16rem] ">  

                <div className="flex flex-col space-y-6">
                    <h1 className="text-4xl font-bold text-indigo-600  "> {skills}</h1>
                </div>
                
                
                <div className="flex flex-col space-y-6">
                    <div className="flex justify-items items-center space-x-4">
                    <img src="./image/js.png" alt="image" className='w-20 h-20 rounded-lg shadow-lg mt-8 md:mt-0'/>
                    <span className="text-lg font-semibold">JAVASCRIPT</span>
                    </div>

                    <div className="flex justify-items items-center space-x-4">
                    <div className="flex items-center bg-black text-white rounded-lg shadow-lg">
                    <img src="./image/react.png" alt="image" className='w-20 h-20 rounded-lg shadow-lg mt-8 md:mt-0'/>
                    </div>
                    <span className="text-lg font-semibold">REACT</span>
                    </div>

                    <div className="flex justify-items items-center space-x-4">
                    <div className="flex items-center bg-purple-600 text-white rounded-lg shadow-lg">
                    <img src="./image/redux.png" alt="image" className='w-20 h-20 rounded-lg shadow-lg mt-8 md:mt-0'/>
                    </div>
                    <span className="text-lg font-semibold">REDUX</span>
                    </div>
                </div>

                <div className="flex flex-col space-y-6"> 
                    <div className="flex justify-items items-center space-x-4">
                    <div className="flex items-center bg-black text-white rounded-lg shadow-lg">
                    <img src="./image/node.png" alt="image" className='w-20 h-20 rounded-lg shadow-lg mt-8 md:mt-0'/>
                    </div>
                    <span className="text-lg font-semibold">NODE</span>
                    </div>

                    <div className="flex justify-items items-center space-x-4">
                    <div className="flex items-center bg-sky-600 text-white rounded-lg shadow-lg">
                    <img src="./image/vs.png" alt="image" className='w-20 h-20 rounded-lg shadow-lg mt-8 md:mt-0'/>
                    </div>
                    <span className="text-lg font-semibold">VS CODE</span>
                    </div>

                    <div className="flex justify-items items-center space-x-4">
                    <div className="flex items-center bg-black text-white rounded-lg shadow-lg">
                    <img src="./image/figma.png" alt="image" className='w-20 h-20 rounded-lg shadow-lg mt-8 md:mt-0'/>
                    </div>
                    <span className="text-lg font-semibold">FIGMA</span>
                    </div>
                </div>
            
            </div>
        
    );
};

export default Skills;