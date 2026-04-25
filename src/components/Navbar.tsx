"use client";

import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="glass px-8 py-3 rounded-full flex items-center gap-8">
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          AESTHETIX
        </span>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/70">
          <a href="#" className="hover:text-white transition-colors">Vision</a>
          <a href="#" className="hover:text-white transition-colors">Intelligence</a>
          <a href="#" className="hover:text-white transition-colors">Interface</a>
        </div>
        <button className="bg-white text-black px-5 py-1.5 rounded-full text-sm font-bold hover:bg-orange-500 hover:text-white transition-all duration-300">
          Launch
        </button>
      </div>
    </motion.nav>
  );
}
