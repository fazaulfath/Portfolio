import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const projectSlides = [
  [
    {
      title: "SymtoSphere",
      path: "/cover4.jpg",
      link: "https://github.com/fazaulfath/SymptoSphere",
    },
    {
      title: "School Management System",
      path: "/cover3.jpg",
      link: "https://github.com/fazaulfath/School-Management-System",
    },
  ],
  [
    {
      title: "Credit Card Fraud Detection",
      path: "/cover2.jpg",
      link: "https://github.com/fazaulfath/Credit-Card-Fraud-Detection",
    },
    {
      title: "Code Casa",
      path: "/Cover.jpg",
      link: "https://github.com/fazaulfath/CodeCasa",
    },
  ],
];

const ProjectSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mt-14 h-[280px] sm:h-[250px]"
    >
      {projectSlides.map((pair, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 gap-4">
            {pair.map((project, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                <Image
                  src={project.path}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                  aria-hidden
                />
                <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 transition-all duration-300">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                  >
                    <div className="delay-100">LIVE</div>
                    <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                      PROJECT
                    </div>
                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                      <BsArrowRight aria-hidden />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSlider;
