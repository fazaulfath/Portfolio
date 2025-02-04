import Link from "next/link";

import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine, 
  RiMailLine, 
} from "react-icons/ri";

// Updated socialData array
export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/faza-ulfath-045033230/", 
    Icon: RiLinkedinLine, 
  },
  {
    name: "Email",
    link: "mailto:fazaulfath17@gmail.com", 
    Icon: RiMailLine, 
  },
  {
    name: "Instagram",
    link: "https://instagram.com/faza_ulfath",
    Icon: RiInstagramLine,
  },
  {
    name: "GitHub",
    link: "https://github.com/fazaulfath",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "GitHub"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
