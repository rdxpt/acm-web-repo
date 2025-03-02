import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { teamMembers } from "../data/teamData.js";

export const Team = () => {
  const [selectedTeam, setSelectedTeam] = useState(teamMembers[0]);

  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 p-4">
      {/* Title Section */}
      <div className="w-full md:w-1/4 order-1 md:order-2 flex items-center justify-center">
        <h1
          className="text-transparent font-[900] tracking-widest text-center gentle-pulse italic 
                     text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] rotate-0 md:rotate-90"
          style={{
            fontFamily: "Inter, sans-serif",
            WebkitTextStroke: "2px #F6F2E6",
          }}
        >
          TEAM <br /> MEMBERS
        </h1>
      </div>

      {/* Main Card */}
      <div className="w-full md:w-3/4 order-2 md:order-1 flex items-center justify-center">
        <div
          className="w-full md:w-[900px] h-auto md:h-[640px] bg-[#f6f2e6]/20 rounded-[28px] 
                        p-4 md:p-8 gap-4 md:gap-8 flex flex-col md:flex-row-reverse"
        >
          {/* Team Names Grid */}
          <div className="w-full md:w-1/4 grid gap-4 grid-cols-4 md:grid-cols-1 md:grid-rows-4 sm:grid-cols-4">
            {teamMembers.map((team, index) => (
              <div
                key={index}
                className={`w-full text-center text-[#F2F2E6] rounded-[1rem] flex items-center justify-center cursor-pointer transition-all 
                            ${
                              selectedTeam.name === team.name
                                ? "border-animate"
                                : "bg-[#1B1B23]"
                            } 
                            text-sm sm:text-base md:text-xl h-16 md:h-[125px]`}
                onClick={() => setSelectedTeam(team)}
              >
                {team.name}
              </div>
            ))}
          </div>

          {/* Profile Grid */}
          <div className="flex-1 grid gap-3 grid-cols-3 grid-rows-3 md:grid-cols-3 md:grid-rows-4">
            <AnimatePresence mode="wait">
              {selectedTeam.members.map((member, index) => (
                <motion.div
                  key={member.img || `member-${index}`}
                  initial={{ opacity: 0, y: 50, scale: 0.5, rotate: -15 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, y: -50, scale: 0.5, rotate: 15 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.68, -0.55, 0.27, 1.55],
                    delay: index * 0.1, // Stagger effect
                  }}
                >
                  <ProfileImage
                    id={index + 1}
                    img={member.img}
                    socials={member.socials}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

// Profile Image Component with Default Image Handling
function ProfileImage({ id, img, socials }) {
  const defaultImage = "/default-profile.jpg"; // Change this to your actual default image path
  const [imageSrc, setImageSrc] = useState(img || defaultImage);

  return (
    <div className="relative group w-full h-32 overflow-hidden rounded-[28px]">
      {/* Team Member Image */}
      <Image
        src={imageSrc}
        alt={`Team Member ${id}`}
        fill
        className="object-cover object-center transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:blur-sm"
        onError={(e) => {
          setImageSrc(defaultImage);
        }}
      />
      {/* Social Icons Overlay */}
      <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {socials.github && (
          <a
            href={socials.github}
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="/social/github.svg"
              className="invert w-6 h-6"
              alt="GitHub"
            />
          </a>
        )}
        {socials.linkedin && (
          <a
            href={socials.linkedin}
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="/social/linkedin.svg"
              className="invert w-6 h-6"
              alt="LinkedIn"
            />
          </a>
        )}
        {socials.instagram && (
          <a
            href={socials.instagram}
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="/social/insta.svg"
              className="invert w-6 h-6"
              alt="Instagram"
            />
          </a>
        )}
      </div>
    </div>
  );
}

export default Team;
