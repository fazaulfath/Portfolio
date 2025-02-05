import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectsBtn from "../../components/ProjectsBtn";
import { fadeIn } from "../../variants";
import { PlusIcon } from '@heroicons/react/24/solid';

// Updated project objects with viewProjectUrl and sourceCodeUrl.
// For projects that should not display a "Visit Website" button,
// simply set viewProjectUrl to an empty string or omit it.
const initialProjects = [
  {
    id: 1,
    name: "Convoy",
    description: "I built",
    extraDescription: "A web platform for booking luxury cruises, featuring destination exploration, package selection, and user inquiries.",
    images: ["convoy.png"],
    isClicked: false,
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    viewProjectUrl: "https://convoyy.netlify.app/",
    sourceCodeUrl: "https://github.com/fazaulfath/Convoy",
  },
  {
    id: 2,
    name: "SymptoSphere",
    description: "I designed and developed",
    extraDescription: "A Flask web app for disease prediction using ML and DL models, achieving up to 99% accuracy.",
    images: ["disease1.png"],
    isClicked: false,
    technologies: ["Vue.js", "Python", "Flask", "Docker"],
    // For this project, let's assume you only want the source code button.
    viewProjectUrl: "", // Or you can simply remove this property.
    sourceCodeUrl: "https://github.com/fazaulfath/SymptoSphere",
  },
  {
    id: 3,
    name: "Smart Parking System",
    description: "I implemented",
    extraDescription: "The Smart Parking System offers real-time parking availability using IoT sensors.",
    images: ["park.png"],
    isClicked: false,
    technologies: ["React Native", "Firebase", "Arduino", "Raspberry Pi"],
    viewProjectUrl: "",
    sourceCodeUrl: "https://github.com/fazaulfath/Smart-Parking-System",
  },
  {
    id: 4,
    name: "NewsNab",
    description: "I had a hand in",
    extraDescription: "A web app that aggregates news using Scrapy for scraping, Pandas for data processing, and Streamlit for the interface.",
    images: ["News1.png"],
    isClicked: false,
    technologies: ["Angular", "Django", "PostgreSQL", "TensorFlow"],
    viewProjectUrl: "https://newsnab.streamlit.app/",
    sourceCodeUrl: "https://github.com/fazaulfath/NewsNab",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [currentProject, setCurrentProject] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const scrollTimeoutRef = useRef(null);
  const circleRef = useRef(null); // Reference for the white circle
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isInCircle, setIsInCircle] = useState(false);
  const [ballPos, setBallPos] = useState({ x: 0, y: 0 });

  const handleScroll = (event) => {
    if (!scrolled) {
      setScrolled(true);
      return;
    }

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setCurrentProject((prev) => {
        if (event.deltaY > 0) {
          return prev < projects.length - 1 ? prev + 1 : prev;
        } else {
          return prev > 0 ? prev - 1 : prev;
        }
      });
    }, 300);
  };

  const handleMouseMove = (event) => {
    if (isInCircle) {
      const circleRect = circleRef.current.getBoundingClientRect();
      const offsetX = event.clientX - circleRect.left - circleRect.width / 2;
      const offsetY = event.clientY - circleRect.top - circleRect.height / 2;

      // Calculate the maximum offset the ball can move
      const maxOffsetX = circleRect.width / 2 - 20;
      const maxOffsetY = circleRect.height / 2 - 20;

      const constrainedX = Math.max(Math.min(offsetX, maxOffsetX), -maxOffsetX);
      const constrainedY = Math.max(Math.min(offsetY, maxOffsetY), -maxOffsetY);

      setBallPos({ x: constrainedX, y: constrainedY });
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "default";
    }
  };

  const handleMouseLeaveCircle = () => {
    setIsInCircle(false);
    setBallPos({ x: 0, y: 0 });
    document.body.style.cursor = "default";
  };

  const handleMouseEnterCircle = () => {
    setIsInCircle(true);
  };

  const handleBallClick = () => {
    console.log("Ball clicked");
    setProjects((prevProjects) =>
      prevProjects.map((project, index) =>
        index === currentProject
          ? { ...project, isClicked: !project.isClicked }
          : project
      )
    );
  };

  const [cursorTrail, setCursorTrail] = useState([]);
  const trailLength = 20; // Number of trail segments

  useEffect(() => {
    if (scrolled) return;

    const updateCursorPosition = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      // Update trail positions
      setCursorTrail(prev => {
        const newTrail = [{ x: e.clientX, y: e.clientY }, ...prev];
        if (newTrail.length > trailLength) newTrail.pop();
        return newTrail;
      });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, [scrolled]);

  // Cursor trail render
  const renderCursorTrail = () => {
    return cursorTrail.map((pos, index) => (
      <motion.div
        key={index}
        className="absolute w-4 h-4 rounded-full pointer-events-none"
        style={{
          left: pos.x,
          top: pos.y,
          background: `radial-gradient(circle, rgba(241,48,36,${1 - (index/trailLength)}) 0%, rgba(241,48,36,0) 70%)`,
          transform: `translate(-50%, -50%) scale(${1 - (index/trailLength)})`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 - (index/trailLength) }}
        transition={{ duration: 0.1 }}
      />
    ));
  };

  return (
    <div className="h-screen bg-primary/30 flex items-center" onWheel={handleScroll}>
      {!scrolled ? (
        <div className="container mx-auto flex flex-col justify-center items-center text-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-1"
          >
            My <span className="text-accent">projects.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="text-lg mt-4 mb-12"
          >
            Here are the things I have worked on
          </motion.p>
          <div className="flex xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div variants={fadeIn("down", 0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex">
            <ProjectsBtn />
          </motion.div>
        </div>
      ) : (
        <div className="container mx-auto flex flex-col sm:flex-row gap-x-8 h-full">
          <div className="w-full sm:w-2/3 flex justify-center items-center relative">
            {projects[currentProject].images.map((image, index) => (
              <motion.img
                key={image}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                src={image}
                alt={`${projects[currentProject].name} ${index + 1}`}
                className="mx-2"
                style={
                  image === "disease1.png"
                    ? {
                        maxWidth: "800px",
                        height: "auto",
                        marginTop: "20px",
                        marginLeft: "-650px"
                      }
                    : image === "News1.png"
                    ? {
                        maxWidth: "715px",
                        height: "auto",
                        marginTop: "0px",
                        marginLeft: "-600px"
                      }
                    : image === "park.png"
                    ? {
                        maxWidth: "700px",
                        height: "auto",
                        marginTop: "150px",
                        marginLeft: "-330px"
                      }
                    : {
                        maxWidth: "480px",
                        height: "auto",
                        marginTop: "180px",
                        marginLeft: "-450px"
                      }
                }
              />
            ))}

            <div
              className="absolute right-10 bottom-1/3 transform translate-y-1/2 flex justify-center items-center w-80 h-80 aspect-square border-4 border-transparent border-solid rounded-full"
              ref={circleRef}
              onMouseEnter={handleMouseEnterCircle}
              onMouseLeave={handleMouseLeaveCircle}
              onMouseMove={handleMouseMove}
              style={{
                cursor: "none",
                zIndex: 50,
                marginTop: "-120px",
                marginRight: "200px"
              }}
            >
              <motion.div
                className="flex justify-center items-center rounded-full w-40 h-40 bg-[#f13024] shadow-xl"
                style={{
                  transform: `translate(${ballPos.x}px, ${ballPos.y}px)`,
                  transition: isInCircle ? "transform 0.1s ease" : "transform 0.5s ease",
                  cursor: "none",
                  pointerEvents: "auto",
                  zIndex: 1000,
                  position: "absolute",
                }}
                onClick={handleBallClick}
              >
                <PlusIcon className="text-white w-12 h-12" style={{ pointerEvents: "none" }} />
              </motion.div>
            </div>
          </div>

          <div
            className="w-full sm:w-1/3 flex flex-col justify-center items-left text-center lg:text-left"
            style={{ marginLeft: "-100px" }}
          >
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative"
            >
              {/* Animate only the current project's details */}
              <motion.div
                animate={{ y: projects[currentProject].isClicked ? -10 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex-1 border-t" style={{ borderColor: '#f13024', maxWidth: '150px' }}></div>
                  <div className="ml-4 text-3xl font-bold" style={{ color: '#f13024' }}>
                    {projects[currentProject].id}
                  </div>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="max-w-[400px] mx-auto lg:mx-0"
                  style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '1.5rem' }}
                >
                  {projects[currentProject].description}
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Wrap the name in a motion.div and apply the same animation */}
            <motion.div
              animate={{ y: projects[currentProject].isClicked ? -10 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-3xl font-bold"
              >
                {projects[currentProject].name}
              </motion.h2>
            </motion.div>

            {/* Extra description and animated buttons that drop in once the project is clicked */}
            {projects[currentProject].isClicked && (
              <>
                {/* Extra description */}
                <motion.p
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-[#f13024] mb-4 text-sm"
                  style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '1.1rem', marginTop: "10px" }}
                >
                  {projects[currentProject].extraDescription}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-row gap-3 justify-left"
                >
                  {projects[currentProject].viewProjectUrl && projects[currentProject].viewProjectUrl.trim() !== "" && (
                    <a
                      href={projects[currentProject].viewProjectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit px-6 py-3 border border-[#f13024] bg-transparent text-white rounded-full transition-colors"
                    >
                      Visit Website
                    </a>
                  )}
                  {projects[currentProject].sourceCodeUrl && projects[currentProject].sourceCodeUrl.trim() !== "" && (
                    <a
                      href={projects[currentProject].sourceCodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit px-6 py-3 border border-[#f13024] bg-transparent text-white rounded-full transition-colors"
                    >
                      Source Code
                    </a>
                  )}
                </motion.div>

                {/* Grey line */}
                <div className="w-full border-t border-gray-500 my-10" style={{ marginTop: "30px", marginBottom: "30px"}}></div>

                {/* Technologies heading */}
                <motion.h3
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-lg font-bold mb-2"
                >
                  Technologies:
                </motion.h3>

                {/* Technologies list */}
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-row gap-3 flex-wrap"
                >
                  {projects[currentProject].technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="w-fit px-6 py-3 border border-gray-500 bg-transparent text-white rounded-full"
                    >
                      {tech}
                    </div>
                  ))}
                </motion.div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
