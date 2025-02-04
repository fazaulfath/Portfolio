// ProjectList.jsx
import React from 'react';
import Image from 'next/image';

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer"
        >
          <Image
            src={project.image}
            alt={`Project Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div
            className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
            aria-hidden
          />
          <div className="relative p-4 text-center text-white">
            <span className="text-xl font-semibold">Live Project</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
