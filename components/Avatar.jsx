import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={700}
        height={560}
        quality={100}
        className="translate-z-0 w-full h-full"
        loading="eager"
      />
    </div>
  );
};

export default Avatar;
