import Image from "next/image";
import { useState } from "react";
import { officeBearers, clubMentors } from "../data/officeData";

export const Office = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);

    return (
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 h-auto md:h-[1024px]">
            {/* Col 1: Office Bearers Title */}
            <div className="flex items-center justify-center col-span-2 md:col-span-1">
                <h1
                    className="text-transparent text-[48px] sm:text-[64px] md:text-[80px] lg:text-[98px] font-[900] tracking-widest hover:glitch-text text-[#1b1b23] text-center gentle-pulse rotate-0 md:-rotate-90 italic"
                    style={{
                        fontFamily: "Inter, sans-serif",
                        WebkitTextStroke: "2px #F6F2E6",
                    }}
                >
                    OFFICE <br /> BEARERS
                </h1>
            </div>

            {/* Col 2: Office Bearers */}
            <div className="p-4 flex flex-col justify-center items-center h-full col-span-2 md:col-span-1">
                <div className="grid grid-cols-3 md:grid-cols-2 gap-y-6 gap-x-6 justify-items-center">
                    {officeBearers.map((person) => (
                        <div
                            key={person.id}
                            className="cursor-pointer text-center"
                            onClick={() => setSelectedPerson(person)}
                        >
                            <Image
                                src={person.photo || "/os/default.jpg"}
                                alt={person.name}
                                width={0}
                                height={0}
                                sizes="(max-width: 640px) 20vw, (max-width: 1024px) 15vw, 10vw"
                                className={`rounded-full mx-auto border border-[#F2F2E6] object-cover object-top w-24 h-24 md:w-[11vw] md:h-[11vw] max-w-[128px] max-h-[128px]
                  ${selectedPerson?.id === person.id ? "border-animate" : ""}`}
                            />
                            <h3 className="text-[clamp(1rem, 2vw, 1.25rem)] font-semibold mt-2">
                                {person.name}
                            </h3>
                            <h1 className="text-[clamp(1.1rem, 2.5vw, 1.5rem)] text-gray-600">
                                {person.designation}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>

            {/* Col 3: Club Mentors */}
            <div className="p-4 flex flex-col justify-center relative items-center h-full col-span-1 md:col-span-1">
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 justify-items-center">
                    {clubMentors.map((mentor) => (
                        <div
                            key={mentor.id}
                            className="cursor-pointer text-center"
                            onClick={() => setSelectedPerson(mentor)}
                        >
                            <Image
                                src={mentor.photo || "/os/default.jpg"}
                                alt={mentor.name}
                                width={0}
                                height={0}
                                sizes="(max-width: 640px) 25vw, (max-width: 1024px) 18vw, 12vw"
                                className={`object-cover object-top rounded-full border border-[#F2F2E6] w-32 h-32 md:w-[18vw] md:h-[20vw] max-w-[200px] max-h-[220px]
                  ${selectedPerson?.id === mentor.id ? "border-animate" : ""}`}
                            />
                            <h3 className="text-[clamp(1rem, 2vw, 1.25rem)] font-semibold mt-2">
                                {mentor.name}
                            </h3>
                            <h1 className="text-[clamp(1.1rem, 2.5vw, 1.5rem)] text-gray-600">
                                {mentor.designation}
                            </h1>
                        </div>
                    ))}
                </div>

                {/* Moving Right Border (visible only on md and up) */}
                <div className="absolute top-1/4 right-0 h-1/2 w-[1px] bg-[#F2F2E6] border-animate"></div>
            </div>

            {/* Col 4: Selected Person Details */}
            <div className="flex items-center justify-center p-6 col-span-1 md:col-span-1">
                {selectedPerson ? (
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src={selectedPerson.photo}
                            alt={selectedPerson.name}
                            width={200}
                            height={248}
                            className="w-[min(90%,200px)] sm:w-[min(80%,200px)] md:w-[min(95%,200px)] h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                        />

                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-4 transition-transform duration-300 ease-in-out hover:scale-105">
                            {selectedPerson.name}
                        </h2>
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 transition-transform duration-300 ease-in-out hover:scale-105">
                            {selectedPerson.designation}
                        </h3>

                        <p className="mt-2 italic">&quot;{selectedPerson.message}&quot;</p>
                        <div className="mt-4 flex gap-4 justify-center">
                            {selectedPerson.socials?.linkedin && (
                                <a
                                    href={selectedPerson.socials.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:scale-110"
                                >
                                    <img src="/social/linkedin.svg" height={24} width={24} />
                                </a>
                            )}
                            {selectedPerson.socials?.x && (
                                <a
                                    href={selectedPerson.socials.x}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#f2f2e6] hover:scale-110"
                                >
                                    <img src="/social/x.svg" width={24} height={24} />
                                </a>
                            )}
                            {selectedPerson.socials?.email && (
                                <a
                                    href={selectedPerson.socials.email}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#1B1B23] hover:scale-110"
                                >
                                    <img src="/social/mail.svg" width={24} height={24} />
                                </a>
                            )}
                            {selectedPerson.socials?.github && (
                                <a
                                    href={selectedPerson.socials.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#F2F2E6] hover:scale-110"
                                >
                                    <img src="/social/github.svg" height={24} width={24} />
                                </a>
                            )}

                            {selectedPerson.socials?.instagram && (
                                <a
                                    href={selectedPerson.socials.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:scale-110"
                                >
                                    <img src="/social/insta.svg" width={24} height={24} />
                                </a>
                            )}

                            {selectedPerson.socials?.gscholar && (
                                <a
                                href={selectedPerson.socials.gscholar}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#f2f2e6] hover:scale-125"
                                style={{ transform: "scale(1.2)" }}
                              >
                                <img src="/social/gscholar.svg" width={24} height={24} />
                              </a>
                              
                              
                            )}
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-500">Click a person to see details</p>
                )}
            </div>
        </div>
    );
};

export default Office;
