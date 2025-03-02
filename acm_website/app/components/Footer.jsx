"use client"; // Ensure it's a client component

import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setMessage("Failed to send message.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  // Social Media Links and Icons
  const socialMedia = [
    { name: "whatsapp", url: "https://chat.whatsapp.com/JUekZH0Kz1YHildMZLrncW" },
    { name: "mail", url: "mailto:usaracm@ipu.ac.in" },
    { name: "linkedin", url: "https://www.linkedin.com/company/ggsipu-usar-acm-student-chapter/" },
    { name: "insta", url: "https://www.instagram.com/usaracm/" },
    { name: "x", url: "https://twitter.com/acm_usar" },
  ];

  return (
    <div className="mt-[15rem]">
      <footer className="w-full flex flex-row-reverse max-lg:flex-col-reverse max-lg:items-center max-lg:gap-6 justify-around p-12">
        {/* Left Section: Logo & Socials */}
        <section className="space-y-4 flex flex-col justify-center items-center">
          <Image src="/acm_large2.svg" alt="ACM Logo" width={400} height={400} className="block scale-125" />
          <div className="flex gap-6 justify-center items-center">
            {socialMedia.map(({ name, url }) => (
              <a key={name} href={url} tarx="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                <Image src={`/social/${name}.svg`} alt={name} width={40} height={40} />
              </a>
            ))}
          </div>
        </section>

        {/* Right Section: Contact Form */}
        <div className="bg-[#f6f2e6]/20 backdrop-blur-md max-sm:p-4 p-6 rounded-lg shadow-lg w-full max-w-lg">
          {/* Heading */}
          <h2 className="text-center text-3xl font-black text-white mb-6">Contact Us</h2>

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
                  className="text-white w-full p-3 bg-[#1b1b23] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-400 focus:border-blue-500 placeholder-gray-400"
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
                className="text-white w-full p-3 bg-[#1b1b23] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 focus:border-blue-500 placeholder-gray-400"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#8097FF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg w-full transition-all transform hover:scale-105"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Message Feedback */}
            {message && <p className="text-center text-white mt-2">{message}</p>}
          </form>
        </div>
      </footer>

      {/* Footer Bottom Section */}
      <div className="w-full text-center py-4 text-gray-200 text-sm">
        © 2025 ACM USAR, All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
