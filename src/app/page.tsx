import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ChatPreview } from "@/components/ChatPreview";
import { DashboardMockup } from "@/components/DashboardMockup";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-mesh">
      <Navbar />
      <Hero />
      <Features />
      <ChatPreview />
      <DashboardMockup />

      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">
          READY FOR THE <br />
          <span className="text-gradient uppercase">Ascension?</span>
        </h2>
        <button className="relative z-10 px-12 py-5 rounded-full bg-white text-black font-black text-xl hover:bg-orange-500 hover:text-white transition-all duration-500 hover:scale-110 active:scale-95 shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)]">
          JOIN THE ALPHA
        </button>
      </section>

      <Footer />
    </main>
  );
}
