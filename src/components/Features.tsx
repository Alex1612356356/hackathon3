"use client";

import { motion } from "framer-motion";
import { Search, GraduationCap, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Auditor de Activitate",
    desc: "Analizăm prompțurile tale în timp real.",
    icon: Search,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Smart Learning",
    desc: "Transformăm orice explicație în flashcard-uri instant.",
    icon: GraduationCap,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Habit Tracker",
    desc: "Statistici reci și clare despre progresul tău real.",
    icon: BarChart3,
    color: "from-orange-500 to-amber-500",
  },
];

export function Features() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group glass p-8 rounded-3xl hover:bg-white/10 transition-all duration-500"
          >
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <f.icon className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
