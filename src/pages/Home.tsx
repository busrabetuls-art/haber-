import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-[var(--color-theme-bg)] text-[var(--color-theme-text)]">
      <div className="max-w-3xl w-full border-4 border-[var(--color-theme-border)] bg-[var(--color-theme-card-bg)] p-8 md:p-16 relative overflow-hidden shadow-[12px_12px_0px_#050505]">
        <div className="absolute top-0 right-0 p-4 font-mono font-bold text-[var(--color-theme-accent)] bg-[var(--color-theme-border)] text-white px-3 py-1 m-4 shadow-[4px_4px_0px_var(--color-theme-accent)]">M-1</div>
        <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
          Millennial<br/><span className="text-[var(--color-theme-accent)]">Archive</span>
        </h1>
        <p className="font-mono mb-12 text-lg md:text-xl max-w-xl">
          A scrollytelling analysis of the generation that bridged the analog and digital divide. Based on BBC Bitesize, Buzzfeed, and Quora.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/story" className="inline-block border-[3px] border-[var(--color-theme-border)] bg-[var(--color-theme-accent)] text-white font-mono uppercase tracking-widest px-8 py-4 font-bold hover:bg-black hover:text-white transition-colors duration-200 shadow-[6px_6px_0px_#050505] active:shadow-[2px_2px_0px_#050505] active:translate-x-1 active:translate-y-1 text-center">
            Play / Read &rarr;
          </Link>
        </div>
      </div>
      
      <div className="mt-12 flex gap-8 font-mono text-sm opacity-60">
        <div>VOL. 01</div>
        <div>SYS: ONLINE</div>
        <div>EST. 1981</div>
      </div>
    </div>
  );
}
