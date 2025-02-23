import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  // Social Media Links and Icons
  const socialMedia = [
    { name: "call", url: "tel:+123456789" },
    { name: "mail", url: "mailto:usaracm@ipu.ac.in" },
    { name: "linkedin", url: "https://www.linkedin.com/company/ggsipu-usar-acm-student-chapter/" },
    { name: "insta", url: "https://www.instagram.com/usaracm" },
    { name: "x", url: "https://twitter.com/acm_usar" },
  ];

  return (
    <>
      <footer className="w-full flex flex-row-reverse max-lg:flex-col-reverse max-lg:items-center max-lg:gap-6 justify-around p-12">
        {/* Left Section: Logo & Socials */}
        <section className="space-y-4 flex flex-col items-center">
          <Image src="/acm_large.svg" alt="ACM Logo" width={400} height={400} className="block" />
          <div className="flex gap-6 justify-center">
            {socialMedia.map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <Image src={`/social/${name}.svg`} alt={name} width={40} height={40} />
              </a>
            ))}
          </div>
        </section>

        {/* Right Section: Contact Form */}
        <div className="bg-white/10 backdrop-blur-md max-sm:p-4 p-6 rounded-lg shadow-lg w-full max-w-lg">
          {/* Heading */}
          <h2 className="text-center text-2xl font-bold text-white mb-6">Contact Us</h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input Fields */}
            {[
              { id: "name", type: "text", placeholder: "Full Name" },
              { id: "email", type: "email", placeholder: "Email Address" },
            ].map(({ id, type, placeholder }) => (
              <div key={id} className="relative">
                <input
                  type={type}
                  name={id}
                  id={id}
                  value={formData[id]}
                  onChange={handleChange}
                  placeholder={formData[id] ? "" : placeholder}
                  className="w-full p-3 bg-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 border border-gray-300 focus:border-blue-500"
                  required
                />
              </div>
            ))}

            {/* Message Field */}
            <div className="relative">
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder={formData.message ? "" : "Your Message..."}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 border border-gray-300 focus:border-blue-500"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg w-full transition-all transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </footer>

      {/* Footer Bottom Section - Now Visible */}
      <div className="w-full text-center py-4 text-gray-400 text-sm">
        © 2025 ACM USAR, All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
