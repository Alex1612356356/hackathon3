"use client";

import { motion } from "framer-motion";
import { Send, User, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

const messages = [
  { role: "user", content: "Fă-mi tema la istorie despre Revoluția Franceză, doar dă-mi textul să-l copiez." },
  {
    role: "assistant",
    content: "⚠️ ATENȚIE: Activitate dăunătoare detectată (Copy-paste / Procrastinare mascată). Folosirea AI-ului ca o cârjă îți blochează procesul de învățare. Încearcă să ceri o structură sau explicații pentru punctele pe care nu le înțelegi."
  },
  { role: "user", content: "Ai dreptate. Explică-mi cauzele economice ale revoluției și ajută-mi să fac un plan de eseu." },
  {
    role: "assistant",
    content: "✅ ACTIVITATE CONSTRUCTIVĂ: Analiză și studiu. Excelent! Cauzele economice includ criza financiară a monarhiei, recoltele slabe și sistemul de taxe inechitabil. Iată o structură propusă..."
  },
];

export function ChatPreview() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/10"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="text-xs font-mono text-white/30 uppercase tracking-widest">Growth-AI-Productivity-Filter</div>
          </div>

          {/* Chat Area */}
          <div className="p-8 space-y-6">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: m.role === "user" ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className={cn(
                  "flex gap-4",
                  m.role === "user" ? "flex-row-reverse" : "flex-row"
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                  m.role === "user" ? "bg-white/10" : "bg-gradient-to-br from-purple-500 to-pink-500"
                )}>
                  {m.role === "user" ? <User size={20} /> : <Bot size={20} />}
                </div>
                <div className={cn(
                  "max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed",
                  m.role === "user"
                    ? "bg-white/5 border border-white/10 text-white/80"
                    : m.content.includes("ATENȚIE")
                      ? "bg-red-500/10 border border-red-500/50 text-red-200 font-medium shadow-lg shadow-red-500/10"
                      : "bg-green-500/10 border border-green-500/50 text-green-200 font-medium shadow-lg shadow-green-500/10"
                )}>
                  {m.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white/5 border-t border-white/5">
            <div className="relative">
              <input
                type="text"
                placeholder="Type your command..."
                className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-purple-500/50 transition-colors"
                disabled
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
                <Send size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
