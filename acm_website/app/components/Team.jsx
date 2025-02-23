import Image from "next/image";
import TeamGrid from "./TeamGrid";
import OfficeSection from "./OfficeSection";
import { useState, useEffect } from "react";



const teamData = [
  { name: "Team Alpha", members: ["/member1.png", "/member2.png", "/member3.png"] },
  { name: "Team Beta", members: ["/member4.png", "/member5.png", "/member6.png"] },
  { name: "Team Gamma", members: ["/member7.png", "/member8.png", "/member9.png"] },
];

export const team = () => {
  const [selectedTeam, setSelectedTeam] = useState(teamData[0]);
  
  return (
    <div className="w-full max-w-[1440px] h-[2048px] border-none mx-auto flex flex-col">
      {/* Office Section - Divided into 4 Equal Rows */}
      <div className="h-1/2 flex">
        {/* Left Side - Office Bearers Title */}
        <div className="w-1/4 flex items-center justify-center">
          <h1
            className="text-transparent text-[98px] font-[900] tracking-widest text-center gentle-pulse -rotate-90 italic"
            style={{
              fontFamily: "Inter, sans-serif",
              WebkitTextStroke: "2px #F6F2E6",
            }}
          >
            OFFICE <br /> BEARERS
          </h1>
        </div>

        {/* Right Side - Office Section Component */}
        <div className="w-3/4">
          <OfficeSection />
        </div>
      </div>

      {/* Team Section - 3:1 Ratio */}
      <div className="flex-1 flex">
        {/* Large 3/4 Section - Teams Grid */}
        <div className="w-3/4 border border-none flex items-center justify-center">
          <TeamGrid />
        </div>
  
        {/* Small 1/4 Section - Placeholder */}
        <div className="w-1/4 border border-none flex items-center justify-center">
          <h1
              className="text-transparent text-[98px] font-[900] tracking-widest text-center gentle-pulse rotate-90 italic"
              style={{
                fontFamily: "Inter, sans-serif",
                WebkitTextStroke: "2px #F6F2E6",
              }}
            >
              TEAM <br /> MEMBERS
            </h1>
        </div>
      </div>
    </div>
  );
  
  
  
  
  
}

export default team;
