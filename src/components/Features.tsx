"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Cpu, Globe } from "lucide-react";

const features = [
  {
    title: "Instant Response",
    desc: "Sub-millisecond latency for real-time interactions.",
    icon: Zap,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Neural Security",
    desc: "Advanced encryption layer powered by AI.",
    icon: Shield,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Core Core",
    desc: "Multimodal processing architecture.",
    icon: Cpu,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Global Mesh",
    desc: "Deploy intelligence across 100+ edge locations.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
  },
];

export function Features() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
