/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BookOpen, 
  ChevronRight, 
  CheckCircle2, 
  Quote, 
  User, 
  Clock, 
  ShieldCheck, 
  Eye, 
  Zap, 
  Award,
  ArrowRight
} from "lucide-react";

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  const chapters = [
    { id: 0, title: "Perché leggerla ogni venerdì?", desc: "Una protezione reale e costante per la vita quotidiana." },
    { id: 1, title: "L'era del Dajjal", desc: "Riconoscere i segni dell'inganno nel mondo moderno." },
    { id: 2, title: "Il prologo", desc: "Un libro senza distorsioni in un mondo di apparenze." },
    { id: 3, title: "La prima prova: la gioventù", desc: "L'energia dei giovani e la scelta che dura." },
    { id: 4, title: "La seconda prova: la ricchezza", desc: "Dalla possessione alla consapevolezza del dono." },
    { id: 5, title: "La terza prova: la conoscenza", desc: "Il viaggio di Musa e Al-Khidr verso l'umiltà." },
    { id: 6, title: "La quarta prova: il potere", desc: "Dhul-Qarnayn e l'uso del potere al servizio del bene." },
    { id: 7, title: "La trama nascosta", desc: "Non adorare le cause, ma Colui che le muove." },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 overflow-x-hidden selection:bg-accent-500/30 selection:text-accent-200">
      {/* Background Decoration */}
      <div className="fixed top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-accent-900/10 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-[-5%] left-[-5%] w-[40vw] h-[40vw] bg-blue-900/5 rounded-full blur-[100px] -z-10" />

      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-8 z-50">
        <div className="flex items-center gap-4">
          <img 
            src="https://lh3.googleusercontent.com/d/19yL3SEHVFVArrPpzqrhaeLmEXxkjvjIQ" 
            alt="MioShaykh Logo" 
            className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full border border-accent-500/30 shadow-accent"
          />
          <span className="font-semibold tracking-tighter text-xl text-accent-100">MioShaykh</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium">
          <a href="#guida" className="hover:text-accent-400 transition-colors">La Guida</a>
          <a href="#capitoli" className="hover:text-accent-400 transition-colors">Capitoli</a>
          <a href="#autore" className="hover:text-accent-400 transition-colors">L'Autore</a>
        </div>
        <div className="w-20 md:hidden"></div> {/* Spacer for mobile layout balance if needed */}
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex py-1 px-4 bg-accent-950/40 border border-accent-800/50 text-accent-400 text-[10px] font-bold uppercase tracking-[0.3em] rounded-full w-fit">
            Nuova Pubblicazione
          </div>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight">
            Surat <span className="text-accent-500 italic">Al-Kahf</span>,<br />
            <span className="text-neutral-400">Una guida per capire le sfide del nostro tempo</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-xl font-light">
            Otto capitoli per leggere il presente con gli occhi della fede. Una bussola spirituale per navigare le complessità dell'epoca moderna.
          </p>
          
          <div className="flex flex-wrap gap-5 mt-4">
            <a 
              href="https://skool.com/mioshaykh/about"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-5 bg-neutral-100 text-neutral-950 font-bold text-sm uppercase tracking-widest hover:bg-accent-400 transition-all duration-300 flex items-center gap-3"
            >
              Inizia Ora Gratis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-12 mt-8 py-8 border-t border-neutral-800/50">
            <div>
              <div className="text-3xl font-serif font-bold text-neutral-200">8</div>
              <div className="text-[10px] uppercase tracking-widest text-neutral-500">Capitoli Profondi</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-neutral-200">100+</div>
              <div className="text-[10px] uppercase tracking-widest text-neutral-500">Lezioni Audio</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-neutral-200">∞</div>
              <div className="text-[10px] uppercase tracking-widest text-neutral-500">Guida Spirituale</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center h-full"
        >
          {/* Main Cover Placeholder */}
          <div className="relative w-full max-w-[400px] aspect-[3/4] bg-neutral-900 border border-neutral-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] rounded-sm p-1.5 overflow-hidden shadow-accent">
            <img 
              src="https://lh3.googleusercontent.com/d/11iVttJWWg_GudlmWXAphI6LF31Q_0hWX" 
              alt="Surat Al-Kahf Cover"
              className="w-full h-full object-cover rounded-[1px]"
            />
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-6 bg-accent-500 text-neutral-950 p-6 rounded-full w-28 h-28 flex flex-col items-center justify-center text-center shadow-2xl z-20"
          >
            <span className="text-[10px] font-black leading-none uppercase tracking-tighter">Prova</span>
            <span className="text-2xl font-black">7 GG</span>
            <span className="text-[10px] font-bold leading-none uppercase tracking-tighter">Gratis</span>
          </motion.div>

          {/* Glass Card */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-6 glass p-6 rounded-2xl shadow-2xl z-10 max-w-[200px]"
          >
            <div className="flex flex-col gap-3">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <ShieldCheck key={i} className="w-3 h-3 text-accent-400 fill-accent-400/20" />)}
              </div>
              <p className="text-[11px] font-medium leading-relaxed italic text-neutral-300">
                "La migliore guida per chi vuole approfondire Surat Al-Kahf e viverla nel presente."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Quote Section */}
      <section className="py-24 bg-neutral-900/50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <Quote className="w-12 h-12 text-accent-500/20 mx-auto mb-8" />
            <h2 className="text-2xl md:text-4xl font-serif italic text-neutral-200 leading-snug mb-8">
              "Chi memorizza dieci versetti dall'inizio di Surat Al-Kahf sarà protetto dal Dajjal."
            </h2>
            <div className="flex items-center justify-center gap-4 text-xs tracking-[0.3em] text-accent-500 uppercase font-bold">
              <div className="w-12 h-[1px] bg-accent-500/30"></div>
              Muslim, 809
              <div className="w-12 h-[1px] bg-accent-500/30"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="guida" className="py-32 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <motion.div {...fadeInUp} className="order-2 md:order-1 relative">
           <div className="aspect-[3/4] glass rounded-3xl overflow-hidden shadow-2xl rotate-3 relative border border-white/10">
              <img 
                src="https://lh3.googleusercontent.com/d/1BdFTmzQPXtQADg0XLM3aFJL-SrAyx2rE" 
                alt="Inside the guide" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-neutral-950/20 pointer-events-none"></div>
           </div>
           <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl"></div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex flex-col gap-8 order-1 md:order-2"
        >
          <div className="text-xs font-bold uppercase tracking-[0.4em] text-accent-500">In questa guida scoprirai</div>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">Una bussola per <span className="italic">l'anima</span> moderna</h2>
          
          <div className="space-y-6">
            {[
              { icon: <Clock />, text: "Perché leggere Surat Al-Kahf ogni venerdì è una protezione reale." },
              { icon: <Eye />, text: "Come riconoscere i segni dell'era del Dajjal nel mondo di oggi." },
              { icon: <Zap />, text: "Le quattro prove che affrontiamo: gioventù, ricchezza, conoscenza e potere." },
              { icon: <ShieldCheck />, text: "La trama nascosta che muove gli eventi e come non adorare le cause." },
              { icon: <Award />, text: "Come leggere il presente con gli occhi della fede e prendere decisioni giuste." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="flex items-start gap-4 p-4 hover:bg-white/5 rounded-2xl transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-400 group-hover:bg-accent-500 group-hover:text-neutral-950 transition-all">
                  {item.icon}
                </div>
                <p className="text-lg text-neutral-400 leading-relaxed font-light mt-1">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Chapters Grid */}
      <section id="capitoli" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif">I Capitoli della <span className="text-accent-500">Guida</span></h2>
            <p className="text-neutral-400 max-w-2xl mx-auto font-light">Un percorso in otto tappe dalla teoria alla pratica quotidiana.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chapters.map((chapter) => (
              <motion.div
                key={chapter.id}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-2xl flex flex-col gap-6 hover:border-accent-500/30 transition-all h-full"
              >
                <div className="text-4xl font-serif text-accent-500 opacity-30">0{chapter.id}</div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold leading-tight">{chapter.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{chapter.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section id="autore" className="py-32 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeInUp}>
            <div className="text-xs font-bold uppercase tracking-[0.4em] text-accent-500 mb-6">Chi è l'autore</div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">Shaykh <span className="italic">Hisham Al-Sun</span></h2>
            <div className="space-y-6 text-lg text-neutral-400 leading-relaxed font-light">
              <p>
                Nato in Siria nel 1982, laureato presso l'Università di Al-Azhar, uno dei centri di sapere islamico più autorevoli al mondo.
              </p>
              <p>
                Dal 2018 ricopre il ruolo di presidente del comitato della fatwa nella città di Kilis. Non è una figura costruita per i social, ma uno studioso con una formazione solida e una comprensione reale delle sfide dei musulmani in Europa.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3 text-sm font-medium text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Studi presso Al-Azhar
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Esperienza Internazionale
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  Focus sulle sfide contemporanee
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="relative flex justify-center">
            <div className="w-full max-w-sm aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl border border-white/5 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10"></div>
              <img 
                src="https://lh3.googleusercontent.com/d/1TpDSa61nZ8vwUR6nNWxb-oFhvKohNGWy" 
                alt="Shaykh Hisham Al-Sun" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="text-2xl font-serif font-bold mb-1">Hisham Al-Sun</div>
                <div className="text-xs uppercase tracking-widest text-accent-500 font-bold">Autore & Studioso</div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent-500/5 rounded-full blur-[100px] -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-accent"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-[80px] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/5 rounded-full blur-[80px] -z-10"></div>
          
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">Pronto a scoprire la <span className="italic text-accent-400">luce</span>?</h2>
          <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-12">
            Inizia oggi il tuo percorso. I primi sette giorni sono gratuiti. Nessun impegno, solo l'accesso completo alla conoscenza.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="https://skool.com/mioshaykh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-neutral-100 text-neutral-950 font-bold text-sm uppercase tracking-widest hover:bg-accent-400 transition-all duration-300 w-full md:w-auto"
            >
              Inizia la prova gratuita
            </a>
            <div className="flex items-center gap-4 py-2 px-6 glass rounded-full">
              <span className="text-2xl font-serif font-bold">$13</span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500">al mese dopo la prova</span>
            </div>
          </div>
          
          <p className="mt-12 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            Una parte dell'abbonamento sostiene la diffusione della conoscenza islamica in Italia.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-neutral-600 font-medium">
        <div className="flex items-center gap-3 grayscale opacity-50">
          <BookOpen className="w-4 h-4" />
          <span>© 2026 MioShaykh Edizioni Elite</span>
        </div>
        <div className="flex gap-10">
          <a href="#" className="hover:text-accent-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-accent-400 transition-colors">Termini</a>
          <a href="#" className="hover:text-accent-400 transition-colors">Contatti</a>
        </div>
        <div className="text-neutral-500 italic lowercase tracking-normal text-xs">
          conoscenza. fede. azione.
        </div>
      </footer>
    </div>
  );
}
