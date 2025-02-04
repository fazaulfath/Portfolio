import Image from "next/image";
import { HiArrowDown } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <div className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
        <Image
          src="/rounded-text3.png"
          alt="rounded text"
          width={155}
          height={155}
          className="animate-spin-slow w-full h-full max-w-[155px] max-h-[155px] pointer-events-none select-none"
        />
        <HiArrowDown
          className="absolute text-4xl group-hover:translate-y-2 transition-all duration-300"
          aria-hidden
        />
      </div>
    </div>
  );
};

export default ProjectsBtn;
