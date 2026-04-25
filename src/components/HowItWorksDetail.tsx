import { ShieldCheck, Zap } from 'lucide-react';

export default function HowItWorksDetail() {
  return (
    <section className="py-24 bg-zinc-950/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dincolo de un simplu Chat.</h2>
          <p className="text-zinc-400 text-lg">
            Growth AI nu este doar o interfață de dialog. Este un antrenor digital care îți monitorizează obiceiurile cognitive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
              <ShieldCheck className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold">Filtrul de Productivitate</h3>
            <p className="text-zinc-400 leading-relaxed">
              În spatele fiecărui mesaj trimis stă un algoritm de evaluare. Dacă ceri AI-ului să-ți facă tema doar ca să scapi de ea, Growth AI te va avertiza că îți blochezi procesul de învățare. Dacă îl folosești pentru a înțelege structura unei probleme, ești punctat.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-zinc-300"><strong className="text-green-400">Verde:</strong> Activitate constructivă (Creativitate, Analiză, Studiu).</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-zinc-300"><strong className="text-red-400">Roșu:</strong> Activitate dăunătoare (Copy-paste, Procrastinare mascată, Brain rot).</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <Zap className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold">Sistemul de Flashcards</h3>
            <p className="text-zinc-400 leading-relaxed">
              Ai găsit o informație critică într-o discuție? Nu o lăsa să se piardă în istoric. Cu o singură comandă, Growth AI extrage esențialul și generează un pachet de flashcard-uri.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Folosim repetiția distanțată pentru a ne asigura că ce ai învățat azi rămâne în mintea ta și peste un an.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
