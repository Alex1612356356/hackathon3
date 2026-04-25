"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-400 mb-6">
          <Sparkles size={14} />
          <span>The Next Evolution of AI</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
          PURE <br />
          <span className="text-gradient">INTELLIGENCE</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 leading-relaxed mb-10">
          A hyper-fast, ultra-responsive AI engine designed for the next generation.
          Flashy by design, minimalist by nature.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_-5px_rgba(147,51,234,0.5)]">
            Get Started
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-2xl glass font-bold text-lg hover:bg-white/10 transition-colors">
            View Docs
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-1 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
