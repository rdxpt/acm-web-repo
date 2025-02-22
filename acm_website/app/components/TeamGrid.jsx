import { useState } from "react";
import Image from "next/image";

const teamData = [
  { name: "Team Alpha", members: ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg", "/img7.jpg", "/img1.jpg", "/img2.jpg", "/img3.jpg"] },
  { name: "Team Beta", members: ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg", "/img7.jpg"] },
  { name: "Team Gamma", members: ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg", "/img7.jpg"] },
  { name: "Team Delta", members: ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg", "/img7.jpg"] }
];

export default function TeamGrid() {
  const [selectedTeam, setSelectedTeam] = useState(teamData[0]);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-[899.5px] h-[638.93px] bg-[#f6f2e6]/20 rounded-[28px] flex p-[29.984px] gap-[29.984px]">
        
        {/* Profile Grid (Left) */}
        <div className="flex-1 grid grid-cols-3 gap-[29.984px]">
          {selectedTeam.members.map((imgSrc, index) => (
            <ProfileImage key={index} src={imgSrc} />
          ))}
        </div>

        {/* Team Name Grid (Right) */}
        <div className="w-[381.93px] grid grid-rows-4 gap-[29.984px]">
          {teamData.map((team, index) => (
            <div
              key={index}
              className={`h-[124.93px] bg-[#1B1B23] rounded-[28px] flex items-center justify-center text-xl font-semibold cursor-pointer transition-all ${
                selectedTeam.name === team.name ? "bg-gray-300 scale-105" : "bg-[#1B1B23]"
              }`}
              onClick={() => setSelectedTeam(team)}
            >
              {team.name}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

/* 📌 Profile Image Component */
function ProfileImage({ src }) {
  return (
    <div className="w-full h-full rounded-[28px] border-none flex items-center justify-center overflow-hidden">
      <Image src={src} alt="Team Member" width={150} height={150} className="w-full h-full object-cover" />
    </div>
  );
}
