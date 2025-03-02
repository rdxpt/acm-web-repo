"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const socialMedia = [
  { name: "whatsapp", url: "https://chat.whatsapp.com/JUekZH0Kz1YHildMZLrncW" },
  { name: "mail", url: "mailto:usaracm@ipu.ac.in" },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/company/ggsipu-usar-acm-student-chapter/",
  },
  { name: "insta", url: "https://www.instagram.com/usaracm/" },
  { name: "x", url: "https://twitter.com/acm_usar" },
];

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1
        );
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration]);

  return <span ref={nodeRef}>{count}</span>;
};




const About = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={contentVariants}
          className="mb-16 text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3"
          >
            Shaping the Future
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            ABOUT <span className="text-blue-400">US</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="h-1 w-16 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={contentVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Main Content */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="h-full rounded-2xl p-8 backdrop-blur-sm bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                The Association for Computing Machinery
              </h3>

              <div className="space-y-4 text-justify text-gray-300 md:text-md">
                <p> ACM unites computing educators, researchers, and professionals to foster dialogue, share resources, and tackle industry challenges. As the world&apos;s largest computing society, we advocate for excellence, leadership, and technical innovation. </p>
                <p> The USAR ACM Student Chapter empowers students with technical skills and networking opportunities. We connect members with top recruiters, engineers, and industry leaders through events and expert talks, helping them stay ahead in tech and career growth. Join us to learn, connect, and thrive in a dynamic community of computing enthusiasts. </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-8 mb-8">
                {[
                  "AI",
                  "Machine Learning",
                  "Data Science",
                  "Algorithms",
                  "Cloud Computing",
                  "Web Development",
                  "Internet of Things"
                ].map((tag, i) => (
                  <motion.span
                    key={i}
                    variants={itemVariants}
                    className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full text-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-colors flex items-center"
              >
                Learn More
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 space-y-8"
          >
            <div className="rounded-2xl p-8 backdrop-blur-sm bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">The Global Impact</h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-3">
                    <svg
                      className="h-8 w-8 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-blue-400">
                    {isClient ? <CountUp end={50000} /> : "50000"}+
                  </p>
                  <p className="text-gray-400 text-sm">Members</p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-3">
                    <svg
                      className="h-8 w-8 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-blue-400">
                    {isClient ? <CountUp end={1000} /> : "1000"}+
                  </p>
                  <p className="text-gray-400 text-sm">Annual Events</p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-3">
                    <svg
                      className="h-8 w-8 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-blue-400">
                    {isClient ? <CountUp end={500} /> : "500"}+
                  </p>
                  <p className="text-gray-400 text-sm">Universities</p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-3">
                    <svg
                      className="h-8 w-8 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold text-blue-400">
                    {isClient ? <CountUp end={78} /> : "78"}+
                  </p>
                  <p className="text-gray-400 text-sm">Years</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-8 backdrop-blur-sm bg-white/5 border border-white/10">
              <div className="flex items-center mb-4">
                <svg
                  className="h-6 w-6 text-blue-400 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <h3 className="text-xl text-justify font-bold text-white">Join Us</h3>
              </div>

              <p className="text-gray-300 mb-5">
                Ready to explore the frontiers of computing? Connect with
                passionate experts and access cutting-edge resources and environment.
              </p>

              <div className="flex justify-center items-center gap-4">
                {socialMedia.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-blue-500/20 hover:bg-blue-500/30 transition-colors rounded-lg text-blue-300 flex items-center justify-center"
                  >
                    <img src={`/social/${social.name}.svg`} alt={social.name}
                      width={40}
                      height={40}
                    />

                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
