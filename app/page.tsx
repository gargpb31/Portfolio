"use client";
import React from "react";
import { motion, Variants, MotionProps } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FiArrowUpRight,
  FiMail,
  FiFileText,
  FiPhone,
  FiDownload,
} from "react-icons/fi";
import Image from "next/image";
import ThemeToggle from "./components/ThemeToggle";

const MotionSection: React.FC<
  MotionProps & { children: React.ReactNode; className?: string }
> = motion.section;
const MotionSpan: React.FC<
  MotionProps & { children: React.ReactNode; className?: string }
> = motion.span;
const MotionDiv: React.FC<
  MotionProps & { children: React.ReactNode; className?: string }
> = motion.div;
const MotionH2: React.FC<
  MotionProps & { children: React.ReactNode; className?: string }
> = motion.h2;
const MotionHeader: React.FC<
  MotionProps & { children: React.ReactNode; className?: string }
> = motion.header;
const MotionP: React.FC<
  MotionProps & { children: React.ReactNode; className?: string }
> = motion.p;
const MotionH1: React.FC<
  MotionProps & { children: React.ReactNode; className?: string }
> = motion.h1;

type Project = {
  title: string;
  desc: React.ReactNode;
  tech: string[];
  image: string;
  github: string;
  live?: string;
};

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
    image: "/securevault.png",
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
    image: "/campustrade.png",
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
    image: "/Eduteck.png",
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
    image: "/poly.png",
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
    image: "/portfolio.png",
    github: "https://github.com/gargpb31/Portfolio",
    live: "https://portfolio-sunny-gargs-projects.vercel.app/",
  },
];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-200 font-sans antialiased">
      {/* Header */}
      <MotionHeader
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 glass border-b border-slate-200/20 dark:border-slate-700/20"
      >
        <motion.h1
          className="text-xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          Sunny Garg
        </motion.h1>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <motion.a
            href="https://linkedin.com/in/gargpb31"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-700/50 hover:bg-slate-300/50 dark:hover:bg-slate-600/50 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin
              size={20}
              className="text-slate-600 dark:text-slate-300"
            />
          </motion.a>
          <motion.a
            href="https://github.com/gargpb31"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-700/50 hover:bg-slate-300/50 dark:hover:bg-slate-600/50 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub
              size={20}
              className="text-slate-600 dark:text-slate-300"
            />
          </motion.a>
        </div>
      </MotionHeader>

      <main className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-6 md:px-12 py-20">
          <MotionDiv
            className="max-w-2xl text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <MotionH1
              className="text-5xl md:text-7xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="gradient-text">Sunny Garg</span>
            </MotionH1>
            <MotionP
              className="text-xl md:text-2xl font-medium mt-4 text-slate-600 dark:text-slate-300"
              variants={itemVariants}
            >
              Competitive Programmer & Full-Stack Developer
            </MotionP>
            <MotionP
              className="mt-6 text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed"
              variants={itemVariants}
            >
              Passionate problem-solver with 1200+ DSA problems conquered.
              Skilled in building dynamic, efficient web applications with
              React, Next.js, and Node.js. I thrive on turning complex
              challenges into elegant, real-world solutions.
            </MotionP>
            <MotionDiv
              className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="Sunny_Garg_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload /> Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail /> Get In Touch
              </motion.a>
            </MotionDiv>
          </MotionDiv>
          <MotionDiv
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <Image
                src="/pic.jpeg"
                alt="Sunny Garg"
                width={320}
                height={320}
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-200 dark:border-slate-700 shadow-2xl"
              />
            </div>
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
          <MotionH2 className="text-4xl font-bold mb-4" variants={itemVariants}>
            About <span className="gradient-text">Me</span>
          </MotionH2>
          <MotionDiv
            className="max-w-4xl mx-auto text-slate-600 dark:text-slate-300 text-lg leading-relaxed"
            variants={itemVariants}
          >
            I am Sunny Garg, a passionate and driven 3rd-year B.Tech student at
            IIIT Allahabad, currently pursuing Information Technology. With a
            strong foundation in Data Structures and Algorithms (DSA) and a deep
            interest in Competitive Programming, I&apos;ve successfully solved
            1200+ DSA problems across platforms like LeetCode, Codeforces, and
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
            className="text-4xl font-bold mb-12"
            variants={itemVariants}
          >
            My Tech Stack
          </MotionH2>
          <MotionDiv variants={itemVariants}>
            <h3 className="text-2xl font-semibold gradient-text mb-6">
              Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["C++", "C", "Python", "Java", "JavaScript", "TypeScript"].map(
                (lang) => (
                  <MotionSpan
                    key={lang}
                    className="px-6 py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                      boxShadow:
                        "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                    }}
                  >
                    {lang}
                  </MotionSpan>
                )
              )}
            </div>
          </MotionDiv>
          <MotionDiv className="mt-12" variants={itemVariants}>
            <h3 className="text-2xl font-semibold gradient-text mb-6">
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
                  className="px-6 py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                    boxShadow:
                      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                  }}
                >
                  {skill}
                </MotionSpan>
              ))}
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
            className="text-4xl font-bold mb-12"
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
                logo: "/leetcode.png",
                link: "https://leetcode.com/gargpb31",
                color: "text-yellow-500",
                hoverColor: "hover:text-yellow-400",
              },
              {
                name: "Codeforces",
                user: "gargpb31",
                rating: "1648 (Expert)",
                logo: "/codeforces.png",
                link: "https://codeforces.com/profile/gargpb31",
                color: "text-cyan-500",
                hoverColor: "hover:text-cyan-400",
              },
              {
                name: "CodeChef",
                user: "gargpb31",
                rating: "2008 (5 Star)",
                logo: "/codechef.png",
                link: "https://www.codechef.com/users/gargpb31",
                color: "text-green-500",
                hoverColor: "hover:text-green-400",
              },
            ].map((profile) => (
              <MotionDiv
                key={profile.name}
                className="bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Image
                  src={profile.logo}
                  alt={`${profile.name} Logo`}
                  width={64}
                  height={64}
                  className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white p-2 shadow-lg"
                />
                <h3 className={`text-xl font-semibold ${profile.color}`}>
                  {profile.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  @{profile.user}
                </p>
                <p className="text-sm font-semibold mt-1">{profile.rating}</p>
                <motion.a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 inline-flex items-center gap-1 text-sm ${profile.color} ${profile.hoverColor} transition-colors`}
                  whileHover={{ x: 4 }}
                >
                  Visit Profile <FiArrowUpRight />
                </motion.a>
              </MotionDiv>
            ))}
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
            className="text-4xl font-bold text-center mb-16"
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
                  className={`bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isLastAndOdd ? "lg:col-span-2" : ""
                  }`}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div
                    className={
                      isLastAndOdd
                        ? "mx-auto w-full lg:w-1/2 flex flex-col h-full"
                        : "flex flex-col h-full"
                    }
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={224}
                      className="w-full h-56 object-cover border-b border-slate-200/50 dark:border-slate-700/50"
                    />
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 flex-grow">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tag) => (
                          <span
                            key={tag}
                            className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-medium border border-indigo-200/50 dark:border-indigo-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto flex items-center gap-4">
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center btn-primary flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Live Demo <FiArrowUpRight />
                          </motion.a>
                        )}
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center btn-secondary flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub /> Source
                        </motion.a>
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
            <h2 className="text-4xl font-bold mb-8">Education</h2>
            <div className="bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 w-full max-w-md text-center shadow-lg">
              <Image
                src="/IIITlogo.png"
                alt="IIIT Allahabad Logo"
                width={80}
                height={80}
                className="w-20 h-20 mx-auto rounded-full border-2 border-slate-300 dark:border-slate-600 mb-4 object-contain bg-white p-2 shadow-lg"
              />
              <h3 className="text-2xl font-semibold">IIIT Allahabad</h3>
              <p className="mt-2 text-lg gradient-text font-medium">
                B.Tech in Information Technology
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                (2023–2027)
              </p>
              <p className="text-md mt-4">
                Current GPA:{" "}
                <span className="font-bold gradient-text">8.39</span>
              </p>
            </div>
          </MotionDiv>

          {/* Contact */}
          <MotionDiv
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <div id="contact">
              <h2 className="text-4xl font-bold mb-8 text-center">
                Get In Touch
              </h2>
              <div className="bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 w-full max-w-md space-y-5 shadow-lg">
                <motion.a
                  href="mailto:sunnygarg887@gmail.com"
                  className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                  whileHover={{ x: 4 }}
                >
                  <FiMail className="w-5 h-5 text-slate-500 group-hover:text-indigo-500 transition-colors" />
                  <span>sunnygarg887@gmail.com</span>
                </motion.a>
                <motion.a
                  href="mailto:dev.sunny995@gmail.com"
                  className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                  whileHover={{ x: 4 }}
                >
                  <FiMail className="w-5 h-5 text-slate-500 group-hover:text-indigo-500 transition-colors" />
                  <span>dev.sunny995@gmail.com</span>
                </motion.a>
                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                  <FiPhone className="w-5 h-5 text-slate-500" />
                  <span>+91 6280751806</span>
                </div>
                <div className="pt-4">
                  <motion.a
                    href="Sunny_Garg_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center btn-primary flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiFileText /> Download Resume
                  </motion.a>
                </div>
              </div>
            </div>
          </MotionDiv>
        </MotionSection>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 px-6 md:px-12 border-t border-slate-200/50 dark:border-slate-700/50 text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Sunny Garg. All Rights Reserved.</p>
        <p className="text-sm mt-1">
          Built with Next.js, Tailwind CSS, and Framer Motion.
        </p>
      </footer>
    </div>
  );
}
