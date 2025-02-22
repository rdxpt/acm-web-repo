import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Content container */}
      <div className="relative h-full flex items-center justify-between px-16 max-w-7xl mx-auto">
        {/* Left side text */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-gray-200 text-6xl font-bold">Association for</h1>
          <div className="bg-[#8097FF] bg-opacity-45 backdrop-blur-sm px-6 py-3 rounded-lg">
            <h2 className="text-white text-5xl font-bold">
              Computing Machinery
            </h2>
          </div>
        </div>

        {/* Right side logo */}
        <div className="relative w-[30rem] h-[30rem]">
          <Image
            src="/acm_icon.svg"
            alt="ACM Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
