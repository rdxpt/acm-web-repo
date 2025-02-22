import Image from "next/image";
import TeamGrid from "./TeamGrid";
import { useState } from "react";

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
      <div className="w-1/4 border border-none flex items-center justify-center">
        <h1
          className="text-transparent text-[128px] font-  [900] tracking-widest text-center -rotate-90 italic"
          style={{
          fontFamily: "Inter, sans-serif", // Apply Inter font directly
          WebkitTextStroke: "2px #F6F2E6", // Creates the outlined text effect
          }}
        >
          OFFICE <br /> BEARERS
        </h1>
      </div>
    <div className="flex-1 flex items-center justify-center bg-none border-none">
      <h1 className="text-xl">Office Column 2</h1>
    </div>
    <div className="flex-1 flex items-center justify-center bg-none border-none">
      <h1 className="text-xl">Office Column 3</h1>
    </div>
    <div className="flex-1 flex items-center justify-center bg-none border-none">
      <h1 className="text-xl">Office Column 4</h1>
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
            className="text-transparent text-[128px] font-[900] tracking-widest text-center rotate-90 italic"
            style={{
            fontFamily: "Inter, sans-serif", // Apply Inter font directly
            WebkitTextStroke: "2px #F6F2E6", // Creates the outlined text effect
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