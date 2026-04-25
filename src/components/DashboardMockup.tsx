"use client";

import { motion } from "framer-motion";
import { Activity, Zap, Brain, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Growth Score", value: "88/100", icon: Brain, color: "text-purple-500" },
  { label: "Energie Skill-uri", value: "72%", icon: Zap, color: "text-pink-500" },
  { label: "Productivity Streak", value: "12 Zile", icon: Target, color: "text-orange-500" },
  { label: "Status", value: "Optimizat", icon: Activity, color: "text-green-500" },
];

export function DashboardMockup() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">ANALYTICS & HABITS</h2>
          <p className="text-white/40">Cifrele nu mint. Dashboard-ul tău de performanță.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Area */}
          <div className="lg:col-span-2 glass rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <div className="flex gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
                ))}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-8 flex items-center gap-2 uppercase tracking-tight">
              <Activity className="text-purple-500" size={20} />
              Evoluție pe Termen Lung
            </h3>

            <div className="h-64 flex items-end gap-3 px-4">
              {[40, 70, 45, 90, 65, 80, 50, 85, 100, 75, 60, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05, duration: 1 }}
                  className={cn(
                    "flex-1 rounded-t-lg transition-colors duration-500",
                    i % 3 === 0 ? "bg-purple-500/40 group-hover:bg-purple-500" :
                    i % 3 === 1 ? "bg-pink-500/40 group-hover:bg-pink-500" :
                    "bg-orange-500/40 group-hover:bg-orange-500"
                  )}
                />
              ))}
            </div>

            <div className="mt-8 flex justify-between text-[10px] font-mono text-white/20 uppercase tracking-tighter">
              <span>Ian 2026</span>
              <span>Se sincronizează progresul...</span>
              <span>Dec 2026</span>
            </div>
          </div>

          {/* Side Stats */}
          <div className="grid grid-cols-1 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 flex items-center justify-between group hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={cn("p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform", s.color)}>
                    <s.icon size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-white/30 font-medium uppercase tracking-wider">{s.label}</div>
                    <div className="text-xl font-bold">{s.value}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
