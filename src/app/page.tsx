import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import HowItWorksDetail from '@/components/HowItWorksDetail';
import { ChatPreview } from "@/components/ChatPreview";
import { DashboardMockup } from "@/components/DashboardMockup";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-mesh">
      <Navbar />
      <Hero />
      <Features />
        <HowItWorksDetail />
      <ChatPreview />
      <DashboardMockup />

      {/* Filozofia Noastră Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="glass p-12 rounded-[40px] relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter">
              FILOZOFIA <span className="text-gradient">NOASTRĂ</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Tehnologie cu scop, nu doar de dragul consumului.</h3>
                <p className="text-white/60 leading-relaxed">
                  Trăim într-o eră a distragerii continue. Growth AI a apărut din nevoia de a disciplina relația dintre elev și inteligența artificială.
                </p>
              </div>
              <div>
                <p className="text-white/60 leading-relaxed italic border-l-4 border-purple-500 pl-6 py-2">
                  &quot;Viziunea noastră e simplă: Vrem să creăm o generație de tineri care folosesc tehnologia ca pe o pârghie pentru inteligență, nu ca pe o cârjă pentru lene. Nu filtrăm doar informația, ci construim caractere disciplinate.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-widest">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Engine", desc: "Modele de limbaj mari (LLM) optimizate prin Prompt Engineering pentru clasificare comportamentală." },
              { title: "Memorie", desc: "Baze de date vectoriale pentru stocarea și corelarea contextului tău de învățare." },
              { title: "Interfață", desc: "Design minimalist, gândit pentru „Deep Work”, fără elemente care să îți fure atenția." },
              { title: "Siguranță", desc: "Datele tale sunt private și folosite exclusiv pentru generarea statisticilor tale de progres." },
            ].map((tech, i) => (
              <div key={i} className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                <h4 className="text-purple-400 font-bold mb-2">{tech.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Echipa Section */}
      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            ECHIPA <br />
            <span className="text-gradient uppercase">Codăm pentru viitor.</span>
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Suntem o echipă de elevi care au înțeles că cel mai mare risc al AI-ului nu este că ne va depăși, ci că ne va face să nu ne mai folosim mintea. <strong>Growth AI</strong> este soluția noastră pentru a rămâne relevanți, eficienți și mereu în creștere.
          </p>
          <button className="px-12 py-5 rounded-full bg-white text-black font-black text-xl hover:bg-orange-500 hover:text-white transition-all duration-500 hover:scale-110 active:scale-95 shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)]">
            ÎNCEPE ACUM
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
