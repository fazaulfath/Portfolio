import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import TypingEffect from 'react-typing-effect';
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto pl-10"> {/* added pl-10 for padding */}
          {/* title */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl xl:text-5xl font-bold max-w-sm xl:max-w-xl mx-0 mb-10 xl:mb-16"
          >
            FAZA ULFATH
          </motion.p>

          {/* subtitle */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-6xl xl:text-8xl font-semibold h1"
          >
            Student <br /> +{" "}
            <span className="text-accent">
              <TypingEffect
                text={[
                  "Developer",
                  "Coder",
                  "Designer",
                  "Problem Solver",
                ]}
                speed={100}
                eraseSpeed={50}
                cursorRenderer={cursor => <>{cursor}</>}
                displayTextRenderer={text => (
                  <span>{text}</span>
                )}
              />
            </span>
          </motion.h1>

          
        </div>
      </div>

      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        {/* <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        /> */}

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        {/* <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[843px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[4%]"
        >
          <Avatar />
        </motion.div> */}
      </div>
    </div>
  );
};

export default Home;