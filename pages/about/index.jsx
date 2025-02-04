import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
  FaJava,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
  SiPython, 
  SiC, 
  SiCplusplus, 
  SiAngular, 
  SiFlask, 
  SiDjango,
  SiAngularjs
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programming",
        icons: [
          SiC,        
          SiCplusplus, 
          FaJava,     
          SiPython,
        ],
      },
      {
        title: "Frameworks",
        icons: [
          SiFlask,   
          SiDjango,
        ],
      },
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiAngularjs,
          SiNextdotjs,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  {
    title: "certifications",
    info: [
      {
        title: "TNSIF - Capgemini",
        stage: "Java – Full Stack Development – Ongoing Project-Based Training Program",
      },
      {
        title: "Samsung Innovation Campus",
        stage: "IoT (Internet of Things) – Project-Based Course",
      },
      {
        title: "Cisco",
        stage: "Introduction to Cybersecurity – Self-paced Course",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "C++ Intern: CodeCasa",
        stage: "2023",
        description: `Worked on several C++ projects including a student management system, 
                hotel management system, and a login system. Gained hands-on experience 
                in OOP concepts, file handling, and dynamic memory allocation.`
      },
      {
        title: "Web Developer Intern - Varconns Technologies Pvt. Ltd.",
        stage: "2023",
        description: `Assisted in developing full-stack web applications, focusing on front-end 
                design using HTML, CSS, JavaScript and back-end integration with Django. Collaborated with 
                the team to enhance user experience and optimize application performance.`
      },
    ],
  },
  // {
  //   title: "credentials",
  //   info: [
  //     {
  //       title: "Don Bosco Institute of Technology",
  //       stage: "2025(expected)",
  //     },
  //     {
  //       title: "RNS PU College",
  //       stage: "2021",
  //     },
  //     {
  //       title: "St. Anthony's Church School",
  //       stage: "2019",
  //     },
  //   ],
  // },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[375px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Hi there! 
            <br />
            I&apos;m <span className="text-accent">Faza,</span> currently a student in Bengaluru
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            A few years ago, I began my journey as a coder. Since then, I’ve worked 
            on a range of projects, from building full-stack web applications to developing 
            machine learning models.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* education */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of tech education.
                </div>
              </div>

              {/* internships */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Hands-on industry experience.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Tech projects developed.
                </div>
              </div>

              {/* certification */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Certifications earned.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        {/* info */}
<motion.div
  variants={fadeIn("left", 0.4)}
  initial="hidden"
  animate="show"
  exit="hidden"
  className="flex flex-col w-full xl:max-w-[48%] h-[480px] pl-20" 
>
  <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
    {aboutData.map((item, itemI) => (
      <div
        key={itemI}
        className={`${
          index === itemI &&
          "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
        } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
        onClick={() => setIndex(itemI)}
      >
        {item.title}
      </div>
    ))}
  </div>

  <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
    {aboutData[index].info.map((item, itemI) => (
      <div
        key={itemI}
        className="flex-1 flex flex-col max-w-max items-start text-left text-white/60 mb-4"
      >
        {aboutData[index].title === "experience" ? (
          <>
            <div className="flex flex-col items-start gap-y-0.5">
              <div className="font-light">{item.title}</div>
              <div>{item.stage}</div>
            </div>

            {item.description && (
              <div className="text-sm md:text-base text-white/50 mt-0 mb-2">
                {item.description}
              </div>
            )}
          </>
        ) : aboutData[index].title === "certifications" ? (
          <div className="flex flex-col gap-y-1">
            <div className="font-light">{item.title}</div>
            <div>{item.stage}</div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center justify-start gap-x-4 mb-4">
            <div className="font-light">{item.title}</div>
            {item.stage && <div className="hidden md:flex">-</div>}
            <div>{item.stage}</div>

            <div className="flex gap-x-4 mt-2">
              {item.icons?.map((Icon, iconI) => (
                <div key={iconI} className="text-2xl text-white">
                  <Icon />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
</motion.div>

      </div>
    </div>
  );
};

export default About;
