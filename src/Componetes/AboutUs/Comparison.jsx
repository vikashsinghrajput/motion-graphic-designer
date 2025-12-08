import React, { useState, useEffect } from "react";
import {
  Code,
  Smartphone,
  Database,
  Palette,
  Globe,
  Server,
  Brain,
  GitBranch,
  Shield,
  Zap,
  Star,
  TrendingUp,
} from "lucide-react";
import Illustrator from "../../assets/Tech_Ions/adobe-illustrator-icon.svg";
import Photoshop from "../../assets/Tech_Ions/adobe-photoshop-icon.svg";
import InDesign from "../../assets/Tech_Ions/indesign-icon.svg";
import Canva from "../../assets/Tech_Ions/canva-icon.svg";
import Capcut from "../../assets/Tech_Ions/capcut-icon.svg";
import PremierePro from "../../assets/Tech_Ions/adobe-premiere-pro-icon.svg";
import AfterEffects from "../../assets/Tech_Ions/adobe-after.svg";


export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skillCategories = {
 
    Graphic: {
      title: "Graphic Design",
      icon: Server,
      color: "from-[#353935] to-[#353935]",
      skills: [
         { name: "Adobe Illustrator", level: 90,  icon: <img src={Illustrator} className="w-5" />, },
        { name: "Adobe Photoshop", level: 98, icon: <img src={Photoshop} className="w-5" />, },
        { name: "Adobe InDesign", level: 92, icon: <img src={InDesign} className="w-5" />, },
        { name: "Canva", level: 92, icon: <img src={Canva} className="w-5" />, },
      
      ],
    },
       frontend: {
      title: "Motion Design",
      icon: Globe,
      color: "from-[#0674e4] to-[#0674e4]",
       skills: [
         { name: "Adobe Premiere Pro", level: 90,  icon: <img src={PremierePro} className="w-5" />, },
           { name: "After", level: 98, icon: <img src={AfterEffects} className="w-5" />, },
        { name: "Capcut", level: 98, icon: <img src={Capcut} className="w-5" />, },
           
      
      
      ],
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedSkills = {};
      skillCategories[activeCategory].skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills((prev) => ({
            ...prev,
            [skill.name]: skill.level,
          }));
        }, index * 100);
      });
    }, 200);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const SkillBar = ({ skill, index }) => {
    const animatedLevel = animatedSkills[skill.name] || 0;

    return (
      <div
        className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-y-auto  "
        style={{ animationDelay: `${index * 50}ms` }}
      >

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{skill.icon}</span>
            <h4 className="font-semibold text-gray-600">{skill.name}</h4>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm font-bold text-gray-600">
              {skill.level}%
            </span>
            {/* <Star className="w-4 h-4 text-yellow-400 fill-current" /> */}
          </div>
        </div>
        

        <div className="relative">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
              style={{ width: `${animatedLevel}%` }}
            >
              <div className="absolute inset-0 bg-white bg-opacity-20 animate-pulse"></div>
            </div>
          </div>
          <div className="absolute top-0 right-0 -mt-1">
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className=" pb-40 bg-gradient-to-br   bg-gray-50 py-1 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
         
             <div className="inline-flex items-center gap-2 bg-gray-200 border border-gray-700/50 rounded-full px-4 py-2 mb-1">
          <div className="w-2 h-2 bg-green-500  rounded-full"></div>
          <span className="text-green-500 text-sm font-medium tracking-wide">
            WHAT I WORK WITH
          </span>
          
        </div>  
         <p className="text-gray-400 text-lg md:text-xl font-light">
          Tools & technologies I use
        </p>   
        </div>

             

         

        {/* Category Tabs */}
        <div className="flex  md:flex-wrap justify-center  gap-4 mb-12  z-10 bg-gray-50 ">
          {Object.entries(skillCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <button
              
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center md:px-6 md:py-3 px-2 py-1 space-x-2 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white scale-105`
                    : "border-2 border-gray-900 bg-gray-50  hover:bg-gray-100 transition rounded-2xl"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Stats Section */}

        {/* Call to Action */}
      </div>
    </div>
  );
}
