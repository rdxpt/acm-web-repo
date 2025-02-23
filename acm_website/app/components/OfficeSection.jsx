import { useState } from "react";
import Image from "next/image";
import { officeBearers, clubMentors } from "../data/officeData";

const OfficeSection = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <div className="h-[1024px] flex">
      {/* Column 2: Office Bearers */}
      <div className="w-[360px] flex flex-wrap items-center justify-center gap-6 p-4">
        <div className="w-[322.5px] h-[600px] flex flex-wrap items-center justify-center gap-6">
          {officeBearers.map((person) => (
            <div
              key={person.id}
              className="cursor-pointer text-center"
              onClick={() => setSelectedPerson(person)}
            >
              <Image
                src={person.photo || "/os/default.jpg"}
                alt={person.name}
                width={127.5}
                height={150}
                className={`rounded-full border border-[#F2F2E6] object-cover object-top w-[128px] h-[128px] 
                  ${selectedPerson?.id === person.id ? "border-animate" : ""}`}
              />
              <h3 className="text-lg font-semibold mt-2">{person.name}</h3>
              <h1 className="text-xl text-gray-600">{person.designation}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Column 3: Club Mentors */}
      <div className="w-[360px] flex flex-col items-center justify-center gap-6 p-4 relative">
        {clubMentors.map((mentor) => (
          <div
            key={mentor.id}
            className="cursor-pointer text-center"
            onClick={() => setSelectedPerson(mentor)}
          >
            <Image
              src={mentor.photo || "/os/default.jpg"}
              alt={mentor.name}
              width={200}
              height={255}
              className={`object-cover object-top w-[200px] h-[220px] border border-[#F2F2E6] rounded-full 
                ${selectedPerson?.id === mentor.id ? "border-animate" : ""}`}
            />
            <h3 className="text-lg font-semibold mt-2">{mentor.name}</h3>
            <h1 className="text-xl text-gray-600">{mentor.designation}</h1>
          </div>
        ))}

        {/* Moving Right Border */}
        <div className="absolute top-1/4 right-0 h-1/2 bg-[#F2F2E6] border-animate" style={{ width: "0.5px" }}></div>



      </div>

      {/* Column 4: Selected Person Details */}
      <div className="w-[360px] flex items-center justify-center p-6">
        {selectedPerson ? (
          <div className="flex flex-col items-center text-center">
            <Image
              src={selectedPerson.photo}
              alt={selectedPerson.name}
              width={200}
              height={248}
              className="object-cover"
            />
            <h2 className="text-2xl font-bold mt-4">{selectedPerson.name}</h2>
            <h3 className="text-xl text-gray-600">{selectedPerson.designation}</h3>
            <p className="mt-2 italic">"{selectedPerson.message}"</p>
            <div className="mt-4 flex gap-4 justify-center">
              {selectedPerson.socials?.linkedin && (
                <a href={selectedPerson.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#f2f2e6" rx="60"/><rect width="256" height="256" fill="#0a66c2" rx="60"/><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"/></g></svg>    
                </a>
              )}
              {selectedPerson.socials?.x && (
                <a href={selectedPerson.socials.x} target="_blank" rel="noopener noreferrer" className="text-[#f2f2e6]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 14 14">
                    <g fill="none">
                      <g clipPath="url(#primeTwitter0)">
                        <path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"/>
                      </g>
                      <defs>
                        <clipPath id="primeTwitter0">
                          <path fill="#F2F2E6" d="M0 0h14v14H0z"/>
                        </clipPath>
                      </defs>
                    </g>
                  </svg>
                </a>
              )}
              {selectedPerson.socials?.email && (
                <a href={selectedPerson.socials.email} target="_blank" rel="noopener noreferrer" className="text-[#1B1B23]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="2 2 20 20"> 
                    <path  d="M4 8l8 5l8-5l-8-5zm18 0v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-.73.39-1.36.97-1.71L12 .64l9.03 5.65c.58.35.97.98.97 1.71" fill="#F2F2E6"/>
                  </svg>
                </a>
              )}
              {selectedPerson.socials?.github && (
                <a href={selectedPerson.socials.github} target="_blank" rel="noopener noreferrer" className="text-[#F2F2E6]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 20 20">
                    <path d="M20 10.25q0 3.351-1.908 6.027t-4.928 3.703q-.352.068-.514-.093a.54.54 0 0 1-.163-.4V16.67q0-1.295-.677-1.895a9 9 0 0 0 1.335-.24q.591-.16 1.223-.52a3.7 3.7 0 0 0 1.055-.888q.423-.528.69-1.402t.267-2.008q0-1.616-1.028-2.75q.48-1.214-.105-2.723q-.364-.12-1.054.147a7 7 0 0 0-1.198.587l-.495.32a9 9 0 0 0-2.5-.346a9 9 0 0 0-2.5.347a12 12 0 0 0-.553-.36q-.345-.214-1.088-.514q-.741-.3-1.12-.18q-.572 1.507-.09 2.722q-1.03 1.134-1.03 2.75q0 1.134.268 2.002q.267.867.683 1.401a3.5 3.5 0 0 0 1.048.894q.632.36 1.224.52q.593.162 1.335.241q-.52.48-.638 1.375a2.5 2.5 0 0 1-.586.2a3.6 3.6 0 0 1-.742.067q-.43 0-.853-.287q-.423-.288-.723-.834a2.1 2.1 0 0 0-.631-.694q-.384-.267-.645-.32l-.26-.04q-.273 0-.378.06t-.065.153a.7.7 0 0 0 .117.187a1 1 0 0 0 .17.16l.09.066q.287.135.567.508q.28.374.41.68l.13.307q.17.507.574.821q.404.315.872.4q.468.087.905.094q.436.006.723-.047l.299-.053q0 .507.007 1.188l.006.72q0 .24-.17.4q-.168.162-.52.094q-3.021-1.028-4.928-3.703Q0 13.6 0 10.25q0-2.79 1.341-5.145a10.1 10.1 0 0 1 3.64-3.73A9.6 9.6 0 0 1 10 0a9.6 9.6 0 0 1 5.02 1.375a10.1 10.1 0 0 1 3.639 3.73Q20 7.461 20 10.25" fill="#F2F2E6"/>
                  </svg>
                </a>
              )}

              {selectedPerson.socials?.instagram && (
                <a href={selectedPerson.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60"/><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60"/><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"/><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stopColor="#fd5"/><stop offset=".1" stop-color="#fd5"/><stop offset=".5" stop-color="#ff543e"/><stop offset="1" stop-color="#c837ab"/></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771c8"/><stop offset=".128" stop-color="#3771c8"/><stop offset="1" stop-color="#60f" stop-opacity="0"/></radialGradient></defs></g></svg>  
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

export default OfficeSection;
