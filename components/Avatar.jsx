import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/avatar (2).png"
        alt="avatar"
        width={1499}
        height={1206}
        quality={100}
        className="translate-z-0 w-full h-full"
        loading="eager"
      />
    </div>
  );
};

export default Avatar;
