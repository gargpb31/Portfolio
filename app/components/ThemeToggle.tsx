"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-gradient-to-r from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 rounded-full p-1 transition-all duration-300 hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-4 h-4 bg-white rounded-full shadow-lg flex items-center justify-center"
        animate={{
          x: theme === "dark" ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          animate={{
            rotate: theme === "dark" ? 180 : 0,
            scale: theme === "dark" ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <FiSun className="w-3 h-3 text-yellow-500" />
        </motion.div>
        <motion.div
          className="absolute"
          animate={{
            rotate: theme === "dark" ? 0 : -180,
            scale: theme === "dark" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <FiMoon className="w-3 h-3 text-slate-700" />
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
