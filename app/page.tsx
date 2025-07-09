"use client";
import React from "react";
import { motion, MotionProps } from "framer-motion";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
type Project = {
  title: string;
  desc: React.ReactNode;
  tech: string[];
  image: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "SecureVault: Full stack Password Manager",
    desc: (
      <>
        <p>
          • Built a secure dashboard and browser extension with AES encryption
          and auto-fill support.
        </p>
        <p>
          • Includes support for Wi-Fi, credit cards, and random password
          generation.
        </p>
      </>
    ),
    tech: ["Next.js", "Tailwind CSS", "React", "Typescript", "MongoDB"],
    image: "securevault.png",
    github: "https://github.com/gargpb31/SecureVault",
  },
  {
    title: "Campus Trade: A buy and sell platform",
    desc: (
      <>
        <p>
          • A student-focused platform to buy, sell, and exchange items within
          your campus.
        </p>
        <p>• Simple, secure, and convenient trading for college communities.</p>
      </>
    ),
    tech: ["Node.js", "EJS", "HTML/CSS", "MYSQL"],
    image: "campustrade.png",
    github: "https://github.com/gargpb31/Campus-Trade",
  },
  {
    title: "Edutech : An e-learning platform",
    desc: (
      <>
        <p>
          • Designed an e-learning platform with a live coding editor and
          curated DSA/ML content.
        </p>
        <p>
          • Real-time output rendering and syntax highlighting using
          custom-built code sandbox.
        </p>
      </>
    ),
    tech: ["Javascript", "Bootstrap", "React"],
    image: "Eduteck.png",
    github: "https://github.com/gargpb31/Edutech",
  },
  {
    title: "Polygon Area Calculator",
    desc: (
      <>
        <p>
          • Developed a Java desktop application to compute polygon areas given
          coordinate inputs.
        </p>
        <p>
          • Utilized geometric formulas for fast, accurate computation and clean
          UI design.
        </p>
      </>
    ),
    tech: ["Java", "Java Swing", "Java AWT", "OOM"],
    image: "poly.png",
    github: "https://github.com/gargpb31/Polygon-Area-Calculator",
  },
  {
    title: "Sunny Garg - Portfolio",
    desc: (
      <>
        <p>
          • A showcase of my work in web development, DSA, and real-world tech
          projects.
        </p>
        <p>
          • Explore my projects, skills, and passion for building scalable,
          user-focused solutions.
        </p>
      </>
    ),
    tech: ["React", "Typescript", "Tailwind CSS"],
    image: "portfolio.png",
    github: "https://github.com/gargpb31/Portfolio",
  },
];

// A type-safe wrapper for motion.div
const MotionDiv: React.FC<MotionProps & { children: React.ReactNode; className?: string }> = motion.div;


export default function Portfolio() {
  return (
    <div className="bg-gradient-to-b from-black via-[#0f0c29] to-purple-900 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold text-purple-400">gargpb31</h1>
        <div className="space-x-4">
          <a
            href="https://linkedin.com/in/gargpb31"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} color="#0077b5" className="inline h-6" />
          </a>
          <a
            href="https://github.com/gargpb31"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} color="white" className="inline h-6" />
          </a>
        </div>
      </header>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-20 py-20 gap-10 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-light leading-tight">
            Sunny Garg
          </h1>
          <p className="text-2xl font-medium mt-4">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
              Competitive Programmer & Developer
            </span>
          </p>
          <p className="mt-6 text-base text-gray-300 leading-relaxed">
            I am a passionate Competitive Programmer and Data Structures &
            Algorithms (DSA) enthusiast with over 1200+ problems solved across
            platforms like Codeforces, CodeChef, and LeetCode. I’m also an
            intermediate-level web developer skilled in building dynamic
            applications using React, Next.js, and JavaScript. With hands-on
            experience in MySQL and MongoDB, I enjoy crafting impactful and
            efficient solutions to real-world problems.
          </p>
        </div>

        <div className="flex-shrink-0">
          <img
            src="/pic.jpeg"
            alt="Sunny Garg"
            className="w-72 h-auto rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* About Me Section */}
      <section className="px-10 md:px-20 py-20 bg-gradient-to-b from-black to-gray-900 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-8">
          About <span className="text-white">Me</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 text-base leading-relaxed">
            I am Sunny Garg, a passionate and driven 3rd-year B.Tech student at
            IIIT Allahabad, currently pursuing Information Technology. With a
            strong foundation in Data Structures and Algorithms (DSA) and a deep
            interest in Competitive Programming, I’ve successfully solved 1200+
            DSA problems across platforms like LeetCode, Codeforces, and
            CodeChef. My achievements include securing a Global Rank of 1490 in
            Meta Hacker Cup, showcasing my problem-solving skills on an
            international stage. Beyond academics, I actively engage in
            technical development and leadership roles. I serve as an Executive
            Member of the Apparoksha (Technical Fest) (APK) and EFFERVESCENCE
            (Cultural Fest) (EFFe), where I contribute to organizing coding
            contests, tech events, and fostering a vibrant programming culture
            on campus. I enjoy working in collaborative team environments, and
            my passion lies in solving real-world problems through scalable,
            impactful tech solutions. I am constantly seeking opportunities to
            learn, grow, and contribute meaningfully to the tech community.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="px-10 py-10 text-center">
        <h2 className="text-3xl font-semibold">Programming Languages</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {["C", "C++", "Python", "Java", "PHP", "SQL"].map((lang) => (
            <span
              key={lang}
              className="bg-gray-800 px-4 py-2 rounded-lg shadow text-lg"
            >
              {lang}
            </span>
          ))}
        </div>
        <h2 className="text-3xl font-semibold mt-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {["React", "Next.js", "MongoDB", "MySQL", "TensorFlow", "GitHub"].map(
            (skill) => (
              <span
                key={skill}
                className="bg-gray-800 px-4 py-2 rounded-lg shadow text-lg"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      {/* Projects */}
      {/* Projects */}
      <section className="px-10 py-16 text-center">
        <h2 className="text-3xl font-semibold text-pink-400 mb-12">Projects</h2>
        <div className="space-y-10 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            // ✅ Use the new type-safe wrapper component
            <MotionDiv
              key={index}
              className="flex flex-col md:flex-row items-center bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-pink-500/30 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/4 lg:w-1/5 rounded-xl mb-4 md:mb-0 md:mr-8"
              />
              <div className="text-left text-gray-300 space-y-3 w-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-400 transition"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                </div>
                <div className="text-sm space-y-1">{project.desc}</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>
      {/* Education */}
      <section className="px-6 sm:px-10 py-10 flex flex-col items-center">
        <div className="bg-gradient-to-br from-purple-900 to-purple-700 rounded-3xl p-6 sm:p-10 shadow-xl w-full sm:w-2/3 md:w-1/2 text-center border border-purple-500">
          <img
            src="IIITlogo.png" // replace with correct path
            alt="IIIT Allahabad Logo"
            className="w-24 h-24 mx-auto rounded-2xl border-4 border-white shadow-md mb-4 object-contain bg-white"
          />
          <h2 className="text-3xl font-bold text-purple-200">Education</h2>
          <p className="mt-4 text-lg text-white font-medium">
            B.Tech in Information Technology,
            <br /> IIIT Allahabad (2023–2027)
          </p>
          <p className="text-sm text-purple-200 mt-2">Current GPA: 8.39</p>
        </div>
      </section>
      <section className="px-10 py-10 text-center">
        <h2 className="text-3xl font-bold text-pink-200 mb-8">
          Coding Profiles
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* LeetCode Card */}
          <div className="bg-pink-800 border border-yellow-400 rounded-2xl p-6 w-full sm:w-1/3 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-yellow-300 hover:ring-offset-2">
            <img
              src="leetcode.png"
              alt="LeetCode Logo"
              className="w-16 h-16 mx-auto mb-4 rounded-lg bg-white p-1"
            />
            <h3 className="text-xl font-semibold text-yellow-300">LeetCode</h3>
            <p className="text-sm text-white mt-2">
              Username: <span className="font-medium">gargpb31</span>
            </p>
            <p className="text-sm text-white mt-1">
              Max Rating: <span className="font-semibold">1981</span> (Knight)
            </p>
            <a
              href="https://leetcode.com/gargpb31"
              target="_blank"
              className="mt-4 inline-block text-yellow-200 hover:underline text-sm"
            >
              Visit Profile →
            </a>
          </div>

          {/* Codeforces Card */}
          <div className="bg-pink-800 border border-blue-400 rounded-2xl p-6 w-full sm:w-1/3 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-blue-300 hover:ring-offset-2">
            <img
              src="codeforces.png"
              alt="Codeforces Logo"
              className="w-16 h-16 mx-auto mb-4 rounded-lg bg-white p-1"
            />
            <h3 className="text-xl font-semibold text-blue-300">Codeforces</h3>
            <p className="text-sm text-white mt-2">
              Username: <span className="font-medium">gargpb31</span>
            </p>
            <p className="text-sm text-white mt-1">
              Max Rating: <span className="font-semibold">1648</span> (Expert)
            </p>
            <a
              href="https://codeforces.com/profile/gargpb31"
              target="_blank"
              className="mt-4 inline-block text-blue-200 hover:underline text-sm"
            >
              Visit Profile →
            </a>
          </div>

          {/* CodeChef Card */}
          <div className="bg-pink-800 border border-green-400 rounded-2xl p-6 w-full sm:w-1/3 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:ring-2 hover:ring-green-300 hover:ring-offset-2">
            <img
              src="codechef.png"
              alt="CodeChef Logo"
              className="w-16 h-16 mx-auto mb-4 rounded-lg bg-white p-1"
            />
            <h3 className="text-xl font-semibold text-green-300">Codechef</h3>
            <p className="text-sm text-white mt-2">
              Username: <span className="font-medium">gargpb31</span>
            </p>
            <p className="text-sm text-white mt-1">
              Max Rating: <span className="font-semibold">2008</span>(5 star)
            </p>
            <a
              href="https://www.codechef.com/users/gargpb31"
              target="_blank"
              className="mt-4 inline-block text-green-200 hover:underline text-sm"
            >
              Visit Profile →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Me */}
      <section className="px-10 py-16 text-center">
        <h2 className="text-3xl font-semibold text-pink-400">Contact Me</h2>
        <p className="mt-4">
          Primary Email:{" "}
          <a
            href="mailto:sunnygarg887@gmail.com"
            className="text-blue-300 underline"
          >
            sunnygarg887@gmail.com
          </a>
        </p>
        <p className="mt-2">
          Secondary Email:{" "}
          <a
            href="mailto:dev.sunny995@gmail.com"
            className="text-blue-300 underline"
          >
            dev.sunny995@gmail.com
          </a>
        </p>
        <p className="mt-2">
          Institute Email:{" "}
          <a
            href="mailto:iit2023108@iiita.ac.in"
            className="text-blue-300 underline"
          >
            iit2023108@iiita.ac.in
          </a>
        </p>
        <p className="mt-2">
          Phone: <span className="text-blue-300">6280751806</span>
        </p>
        <p className="mt-2">
          Instagram:{" "}
          <a
            href="https://instagram.com/sunny_garg_45"
            className="text-blue-300 underline"
          >
            @sunny_garg_45
          </a>
        </p>
        <p className="mt-2 flex justify-center items-center gap-2">
         
          <a
            href="https://linkedin.com/in/gargpb31"
            className="flex items-center gap-1 text-blue-300 underline"
          >
            <FaLinkedin size={24} color="#0077b5" className="h-5" /> LinkedIn:
          </a>
        </p>
      </section>
    </div>
  );
}
