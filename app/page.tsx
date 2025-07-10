"use client";
import React from "react";
import { motion, Variants, MotionProps } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight, FiMail, FiFileText, FiPhone } from "react-icons/fi";


const MotionSection : React.FC<
MotionProps & { children: React.ReactNode; className?: string }
> = motion.section;
const MotionSpan : React.FC<
MotionProps & { children: React.ReactNode; className?: string }
> = motion.span;
const MotionDiv: React.FC<
  MotionProps & { children: React.ReactNode; className?: string }
> = motion.div;
const MotionH2 :React.FC<
  MotionProps & { children: React.ReactNode; className?: string }
> = motion.h2;
const MotionHeader : React.FC<
  MotionProps & { children: React.ReactNode; className?: string }
> = motion.header;
const MotionMain : React.FC<
MotionProps & { children: React.ReactNode; className?: string }
> = motion.main;
const MotionImg  : React.FC<
MotionProps & { children: React.ReactNode; className?: string }
> = motion.img;
const MotionP  : React.FC<
MotionProps & { children: React.ReactNode; className?: string }
> =motion.p;
const MotionH1 : React.FC<
MotionProps & { children: React.ReactNode; className?: string }
> =motion.h1;
const MotionFooter  : React.FC<
MotionProps & { children: React.ReactNode; className?: string }
> = motion.footer;

type Project = {
  title: string;
  desc: React.ReactNode;
  tech: string[];
  image: string;
  github: string;
  live?: string; // Optional live demo link
};

// Updated projects data with live links
const projects: Project[] = [
  {
    title: "SecureVault: Full-Stack Password Manager",
    desc: (
      <>
        A comprehensive security solution featuring a user dashboard and browser
        extension. Implements robust AES encryption for stored credentials and
        supports auto-fill functionality. Includes dedicated sections for Wi-Fi
        passwords and credit cards, plus a secure random password generator.
      </>
    ),
    tech: ["Next.js", "Tailwind CSS", "React", "TypeScript", "MongoDB"],
    image: "securevault.png",
    github: "https://github.com/gargpb31/SecureVault",
    live: "https://secure-vault-one.vercel.app/",
  },
  {
    title: "Campus Trade: A Buy & Sell Platform",
    desc: (
      <>
        A hyper-local marketplace designed for students to securely buy, sell,
        and exchange items within their campus community. The platform
        prioritizes ease of use and safety, creating a convenient hub for
        student commerce.
      </>
    ),
    tech: ["Node.js", "EJS", "HTML/CSS", "MySQL"],
    image: "campustrade.png",
    github: "https://github.com/gargpb31/Campus-Trade",
  },
  {
    title: "Edutech: An E-Learning Platform",
    desc: (
      <>
        An interactive e-learning platform with curated content for DSA and ML.
        Features a custom-built code sandbox with a live coding editor,
        real-time output rendering, and syntax highlighting for an immersive
        learning experience.
      </>
    ),
    tech: ["JavaScript", "Bootstrap", "React"],
    image: "Eduteck.png",
    github: "https://github.com/gargpb31/Edutech",
  },
  {
    title: "Polygon Area Calculator",
    desc: (
      <>
        A high-performance Java desktop application that accurately computes the
        area of any polygon given its coordinate points. Built with Java Swing
        and AWT, it leverages geometric formulas for fast calculations within a
        clean, intuitive user interface.
      </>
    ),
    tech: ["Java", "Java Swing", "Java AWT", "OOM"],
    image: "poly.png",
    github: "https://github.com/gargpb31/Polygon-Area-Calculator",
  },
  {
    title: "Personal Portfolio Website",
    desc: (
      <>
        The very site you are on now! A personal showcase of my skills,
        projects, and journey as a developer. Built with a focus on modern
        design, smooth animations, and a clean user experience using Next.js and
        Framer Motion.
      </>
    ),
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    image: "portfolio.png",
    github: "https://github.com/gargpb31/Portfolio",
    live: "https://portfolio-sunny-gargs-projects.vercel.app/", // Replace with your portfolio's live URL
  },
];

// Animation Variants for consistency
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Portfolio() {
  return (
    <div className="bg-slate-900 text-gray-300 font-sans antialiased">
      {/* Header */}
      <MotionHeader
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 bg-slate-900/50 backdrop-blur-lg border-b border-slate-800"
      >
        <h1 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text">
          Sunny Garg
        </h1>
        <div className="flex items-center space-x-5">
          <a
            href="https://linkedin.com/in/gargpb31"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/gargpb31"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </MotionHeader>

      <main className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-6 md:px-12 py-20">
          <MotionDiv
            className="max-w-2xl text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <MotionH1
              className="text-5xl md:text-7xl font-bold text-gray-100 leading-tight"
              variants={itemVariants}
            >
              Sunny Garg
            </MotionH1>
            <MotionP
              className="text-xl md:text-2xl font-medium mt-4 bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text"
              variants={itemVariants}
            >
              Competitive Programmer & Full-Stack Developer
            </MotionP>
            <MotionP
              className="mt-6 text-base md:text-lg text-gray-400 leading-relaxed"
              variants={itemVariants}
            >
              Passionate problem-solver with 1200+ DSA problems conquered.
              Skilled in building dynamic, efficient web applications with
              React, Next.js, and Node.js. I thrive on turning complex
              challenges into elegant, real-world solutions.
            </MotionP>
          </MotionDiv>
          <MotionDiv
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <img
              src="/pic.jpeg"
              alt="Sunny Garg"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-700 shadow-2xl shadow-violet-500/20"
            />
          </MotionDiv>
        </section>

        {/* About Me Section */}

        <MotionSection
          className="px-6 md:px-12 py-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <MotionH2
            className="text-4xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            About <span className="text-violet-400">Me</span>
          </MotionH2>
          <MotionDiv
            className="max-w-4xl mx-auto text-gray-400 text-lg leading-relaxed"
            variants={itemVariants}
          >
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
          </MotionDiv>
        </MotionSection>

        {/* Tech Stack */}
        <MotionSection
          className="px-6 md:px-12 py-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <MotionH2
            className="text-4xl font-bold text-white mb-12"
            variants={itemVariants}
          >
            My Tech Stack
          </MotionH2>
          <MotionDiv variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-violet-400 mb-6">
              Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["C++", "C", "Python", "Java", "JavaScript", "TypeScript"].map(
                (lang) => (
                  <MotionSpan
                    key={lang}
                    className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 px-5 py-2 rounded-lg text-base text-gray-300 transition-all cursor-pointer"
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                      color: "#fff",
                      borderColor: "#8b5cf6",
                    }}
                  >
                    {lang}
                  </MotionSpan>
                )
              )}
            </div>
          </MotionDiv>
          <MotionDiv className="mt-12" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-violet-400 mb-6">
              Frameworks & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "MySQL",
                "Tailwind CSS",
                "Git & GitHub",
                "TensorFlow",
              ].map((skill) => (
                <MotionSpan
                  key={skill}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 px-5 py-2 rounded-lg text-base text-gray-300 transition-all cursor-pointer"
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                    color: "#fff",
                    borderColor: "#8b5cf6",
                  }}
                >
                  {skill}
                </MotionSpan>
              ))}
            </div>
          </MotionDiv>
        </MotionSection>

        {/* Projects */}
        <MotionSection
          className="px-6 md:px-12 py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <MotionH2
            className="text-4xl font-bold text-white text-center mb-16"
            variants={itemVariants}
          >
            Featured Projects
          </MotionH2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => {
              const isLastAndOdd =
                projects.length % 2 !== 0 && index === projects.length - 1;
              return (
                <MotionDiv
                  key={index}
                  className={`bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-violet-500 hover:bg-slate-800 hover:shadow-2xl hover:shadow-violet-500/10 ${
                    isLastAndOdd ? "lg:col-span-2" : ""
                  }`}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <div
                    className={
                      isLastAndOdd
                        ? "mx-auto w-full lg:w-1/2 flex flex-col h-full"
                        : "flex flex-col h-full"
                    }
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover border-b border-slate-700"
                    />
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-6 flex-grow">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tag) => (
                          <span
                            key={tag}
                            className="bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto flex items-center gap-4">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center bg-violet-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-violet-500 transition-colors duration-300 flex items-center justify-center gap-2"
                          >
                            Live Demo <FiArrowUpRight />
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center bg-slate-700 text-gray-300 font-semibold py-2 px-4 rounded-lg hover:bg-slate-600 transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                          <FaGithub /> Source
                        </a>
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        </MotionSection>

        {/* Combined Sections */}
        <MotionSection
          className="px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          {/* Education */}
          <MotionDiv
            className="flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Education</h2>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 w-full max-w-md text-center shadow-lg">
              <img
                src="IIITlogo.png"
                alt="IIIT Allahabad Logo"
                className="w-20 h-20 mx-auto rounded-full border-2 border-slate-600 mb-4 object-contain bg-white p-1"
              />
              <h3 className="text-2xl font-semibold text-white">
                IIIT Allahabad
              </h3>
              <p className="mt-2 text-lg text-violet-400 font-medium">
                B.Tech in Information Technology
              </p>
              <p className="text-sm text-gray-400 mt-1">(2023–2027)</p>
              <p className="text-md text-gray-300 mt-4">
                Current GPA: <span className="font-bold text-white">8.39</span>
              </p>
            </div>
          </MotionDiv>

          {/* Contact */}
          <MotionDiv
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              Get In Touch
            </h2>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 w-full max-w-md space-y-5 shadow-lg">
              <a
                href="mailto:sunnygarg887@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-violet-400 transition-colors group"
              >
                <FiMail className="w-5 h-5 text-gray-500 group-hover:text-violet-400 transition-colors" />{" "}
                <span>sunnygarg887@gmail.com</span>
              </a>
              <a
                href="mailto:dev.sunny995@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-violet-400 transition-colors group"
              >
                <FiMail className="w-5 h-5 text-gray-500 group-hover:text-violet-400 transition-colors" />{" "}
                <span>dev.sunny995@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-gray-300">
                <FiPhone className="w-5 h-5 text-gray-500" />{" "}
                <span>+91 6280751806</span>
              </div>
              <div className="pt-4">
                <a
                  href="Sunny_Garg_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-violet-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-violet-500 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <FiFileText /> Download Resume
                </a>
              </div>
            </div>
          </MotionDiv>
        </MotionSection>

        {/* Coding Profiles */}
        <MotionSection
          className="px-6 md:px-12 py-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <MotionH2
            className="text-4xl font-bold text-white mb-12"
            variants={itemVariants}
          >
            Coding Profiles
          </MotionH2>
          <MotionDiv
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={itemVariants}
          >
            {[
              {
                name: "LeetCode",
                user: "gargpb31",
                rating: "1981 (Knight)",
                logo: "leetcode.png",
                link: "https://leetcode.com/gargpb31",
                color: "text-yellow-400",
                hoverColor: "hover:text-yellow-300",
              },
              {
                name: "Codeforces",
                user: "gargpb31",
                rating: "1648 (Expert)",
                logo: "codeforces.png",
                link: "https://codeforces.com/profile/gargpb31",
                color: "text-cyan-400",
                hoverColor: "hover:text-cyan-300",
              },
              {
                name: "CodeChef",
                user: "gargpb31",
                rating: "2008 (5 Star)",
                logo: "codechef.png",
                link: "https://www.codechef.com/users/gargpb31",
                color: "text-green-400",
                hoverColor: "hover:text-green-300",
              },
            ].map((profile) => (
              <MotionDiv
                key={profile.name}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center transition-all duration-300 hover:border-violet-500 hover:bg-slate-800 hover:shadow-2xl hover:shadow-violet-500/10"
                whileHover={{ y: -5 }}
              >
                <img
                  src={profile.logo}
                  alt={`${profile.name} Logo`}
                  className="w-16 h-16 mx-auto mb-4 rounded-lg bg-white p-1"
                />
                <h3 className={`text-xl font-semibold ${profile.color}`}>
                  {profile.name}
                </h3>
                <p className="text-sm text-gray-400 mt-2">@{profile.user}</p>
                <p className="text-sm text-gray-300 mt-1 font-semibold">
                  {profile.rating}
                </p>
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 inline-flex items-center gap-1 text-sm ${profile.color}/80 ${profile.hoverColor} transition-colors`}
                >
                  Visit Profile <FiArrowUpRight />
                </a>
              </MotionDiv>
            ))}
          </MotionDiv>
        </MotionSection>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 px-6 md:px-12 border-t border-slate-800 text-gray-500">
        <p>© {new Date().getFullYear()} Sunny Garg. All Rights Reserved.</p>
        <p className="text-sm mt-1">
          Built with Next.js, Tailwind CSS, and Framer Motion.
        </p>
      </footer>
    </div>
  );
}
