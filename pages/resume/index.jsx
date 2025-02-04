import React, { useState, useEffect } from 'react';
import { AcademicCapIcon, BriefcaseIcon, StarIcon, DocumentCheckIcon, FolderIcon, PaperClipIcon } from '@heroicons/react/24/solid';
import DottedProgressBar from '../../components/DottedProgressBar'; 
import ProjectSlider from '../../components/ProjectSlider'; 

const Resume = () => {
  const [activeSection, setActiveSection] = useState('Education');
  const [animateSkills, setAnimateSkills] = useState(false); 

  const sections = {
    Education: {
      icon: <AcademicCapIcon className="w-6 h-6" />,
      content: [
        {
          title: "Don Bosco Institute of Technology - VTU",
          description: "BACHELOR OF ENGINEERING",
          date: "2025",
        },
        {
          title: "RNS Composite PU College",
          description: "DEGREE OF PRE-UNIVERSITY - PCMC",
          date: "2021",
        },
        {
          title: "St. Anthony&apos;s Church School",
          description: "SSC",
          date: "2019",
        },
      ],
    },
    Internships: {
      icon: <BriefcaseIcon className="w-6 h-6" />,
      content: [
        {
          title: "TNSIF - Capgemini",
          description: "TRAINING PROGRAM",
          date: "2024",
        },
        {
          title: "Full - Stack Web Development",
          description: "INTERN",
          date: "2023",
        },
        {
          title: "C++ Development",
          description: "INTERN",
          date: "2023",
        },
      ],
    },
    Skills: {
      icon: <StarIcon className="w-6 h-6" />,
      content: [
        { skill: "C", percentage: 90 },
        { skill: "C++", percentage: 95 },
        { skill: "Java", percentage: 80 },
        { skill: "Python", percentage: 75 },
        { skill: "ReactJS", percentage: 75 },
        { skill: "Machine Learning", percentage: 90 },
      ],
    },
    Certifications: {
      icon: <DocumentCheckIcon className="w-6 h-6" />,
      content: [
        "IoT project-based course - Samsung Innovation Campus.",
        "Introduction to Cybersecurity - Cisco.",
        "Introduction to Artificial Intelligence - Infosys Springboard.",
        "Data Visualization using Python - Infosys Springboard.",
        "PHP, MySQL course and Introduction to Python - Coursera.",
        "Won the title “Best Theme Interpretation” in “Gameathon 5.0” conducted during an inter-college event in 2022.",
      ],
    },
    Projects: {
      icon: <FolderIcon className="w-6 h-6" />,
      content: [
        {
          title: "Project A",
          description: "Description of Project A.",
        },
        {
          title: "Project B",
          description: "Description of Project B.",
        },
      ],
    },
  };

  useEffect(() => {
    if (activeSection === 'Skills') {
      setAnimateSkills(true); // Trigger the skill animation when Skills section is active
    } else {
      setAnimateSkills(false);
    }
  }, [activeSection]);

  return (
    <div className="resume-container page bg-secondary relative">
      <h1 className="h1 text-white">Resume</h1>
      <p className="resume-subtitle text-white">My formal Bio Details</p>

      <div className="resume-content flex gap-10">
        {/* Sidebar */}
        <div className="resume-sidebar text-white p-4 rounded-lg relative -ml-10">
          <div className="absolute left-0 top-0 h-full w-1 bg-accent" />
          <ul className="flex flex-col relative z-10">
            {Object.keys(sections).map((section) => (
              <li
                key={section}
                className={`flex items-center cursor-pointer mb-4 relative p-2 rounded-md transition-all duration-300 ${activeSection === section ? "font-semibold text-accent bg-white/20" : "text-white/60"}`}
                onClick={() => setActiveSection(section)}
              >
                <span className={`absolute left-[-30px] flex items-center justify-center bg-secondary p-1 rounded-full transition-all duration-300 ${activeSection === section ? "text-accent" : "text-white/60"}`}>
                  {sections[section].icon}
                </span>
                <span className="ml-10">{section}</span>
              </li>
            ))}

            {/* CV Button */}
            <li
              className="flex items-center cursor-pointer mb-4 relative p-2 rounded-md text-white/60 hover:font-semibold hover:text-accent hover:bg-white/20 transition-all duration-300"
            >
              <span className="absolute left-[-30px] flex items-center justify-center bg-secondary p-1 rounded-full text-white/60">
                <PaperClipIcon className="w-6 h-6" />
              </span>
              <a
                href="/FAZA ULFATH.pdf" 
                download
                className="ml-10"
              >
                CV
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="resume-details w-3/4 min-h-[380px]">
          <div className="resume-item-container">
            {activeSection === 'Skills' ? (
              <div className="grid grid-cols-2 gap-4">
                {sections[activeSection].content.map((item, index) => (
                  <div key={index} className="resume-item p-4 rounded-lg flex items-center">
                    <DottedProgressBar totalDots={10} percentage={item.percentage} animated={animateSkills} />
                    <span className="ml-4 text-white">{item.skill}</span>
                  </div>
                ))}
              </div>
            ) : activeSection === 'Certifications' ? (
              <div className="mt-4">
                {sections[activeSection].content.map((item, index) => (
                  <div key={index} className="flex items-center mb-6">
                    <span className="animate-pulse mr-2 text-accent">•</span>
                    <p className="text-white/80 m-0 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            ) : activeSection === 'Projects' ? (
              <ProjectSlider /> 
            ) : (
              sections[activeSection].content.map((item, index) => (
                <div key={index} className="resume-item mb-4 p-4 rounded-lg">
                  {typeof item === 'string' ? (
                    <p className="text-white/80 mt-2">{item}</p>
                  ) : (
                    <>
                      <div className="flex justify-between items-center">
                        <h3 className="title text-accent">{item.title || item.type}</h3>
                        <span className="date bg-accent text-white py-1 px-2 rounded-lg">{item.date || ''}</span>
                      </div>
                      {item.description && <p className="text-white/80 mt-2">{item.description}</p>}
                    </>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
