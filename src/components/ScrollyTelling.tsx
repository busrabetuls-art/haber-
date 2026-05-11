import React, { useEffect, useState } from 'react';
import scrollama from 'scrollama';
import { motion, AnimatePresence } from 'motion/react';

const ARTICLE_STEPS = [
  {
    id: 0,
    title: "Who are the Millennials?",
    body: "You’ve probably heard of them and the stereotypes that surround them. But what is a millennial? And what do we really know about this generation beyond the surface-level tropes?",
    image: "https://images.unsplash.com/photo-1498146831523-fbe41ac02bea?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 1,
    title: "The Birth Years",
    body: "Generally defined as those born between 1981 and 1996, millennials came of age around the dawn of the 21st century. They bridge the gap between the analog childhoods of Generation X and the fully digital immersions of Generation Z.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "The Largest Adult Cohort",
    body: "Across the world, millennials represent the largest share of the adult population. Their massive demographic weight has fundamentally reshaped markets, politics, urban planning, and culture globally.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "Digital Natives",
    body: "They are the first generation to grow up with the internet, cell phones, and social media integrated into their formative years. Technology isn't just a tool for them; it's a native environment.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    title: "Avocado on Toast",
    body: "Often unfairly characterized by media for their spending habits, the 'avocado toast' trope became a defining meme of millennial financial discourse, overshadowing deeper economic realities.",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 5,
    title: "Highly Educated",
    body: "Millennials are more formally educated than any previous generation. However, this academic achievement has often come with the burden of crushing student debt, delaying traditional milestones.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 6,
    title: "Shaped by Economic Circumstance",
    body: "Coming of age during the 2008 financial crisis, their economic trajectory has been marked by recessions, wage stagnation, and a notoriously tough housing market, forcing them to adapt.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a223690?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 7,
    title: "The Selfie Generation",
    body: "Pioneers of the front-facing camera, they ushered in an era of hyper-curated online identities and personal branding, changing how we document and share our lives.",
    image: "https://images.unsplash.com/photo-1520699697851-24da6eb2df3b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 8,
    title: "Purpose-Driven",
    body: "Unlike previous generations, millennials overwhelmingly seek purpose-driven work. They want their careers to align with their values, expecting corporate responsibility and meaningful societal change.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 9,
    title: "The Fountain of Youth?",
    body: "An ongoing online debate questions why millennials often look prototypically younger than previous generations did at the exact same age. Theories point to better skincare routines, daily sunscreen habits, decreased smoking rates, and even the delayed physical toll of extended adolescence and later parenthood.",
    image: "https://images.unsplash.com/photo-1512413914553-62c75a96db5e?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 10,
    title: "Why 'Millennials'?",
    body: "Originally labeled 'Generation Y' as the immediate successors to Gen X, the catchier moniker 'Millennials' ultimately won out. The term perfectly encapsulates the defining demographic feature of this cohort: they came of age and entered early adulthood precisely as the new millennium dawned.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200",
  }
];

export default function ScrollyTelling() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Instantiate the scrollama
    const scroller = scrollama();

    // Setup the instance, pass callback functions
    scroller
      .setup({
        step: '.step',
        offset: 0.5,
        debug: false,
      })
      .onStepEnter((response) => {
        // { element, index, direction }
        setCurrentStep(response.index);
        
        // Update the active class for styling
        const elements = document.querySelectorAll('.step');
        elements.forEach((el, index) => {
          if (index === response.index) {
            el.classList.add('is-active');
          } else {
            el.classList.remove('is-active');
          }
        });
      });

    // Setup resize event
    window.addEventListener('resize', scroller.resize);

    // Cleanup
    return () => {
      scroller.destroy();
      window.removeEventListener('resize', scroller.resize);
    };
  }, []);

  return (
    <div className="w-full relative bg-[var(--color-theme-bg)]">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 py-24 mb-20 border-b-4 border-[var(--color-theme-border)] relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        
        <div className="absolute top-8 left-8 text-left hidden md:block">
           <a href="/" className="font-mono text-xs uppercase tracking-widest bg-black text-white px-4 py-2 hover:bg-[var(--color-theme-accent)] transition-colors inline-flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back
           </a>
        </div>

        <p className="border-2 border-black bg-[var(--color-theme-accent)] text-white font-mono uppercase tracking-[2px] px-3 py-1 text-xs font-bold mb-8 shadow-[4px_4px_0px_#050505]">
          Editorial Report
        </p>
        <h1 className="text-5xl md:text-[8vw] font-bold max-w-6xl leading-[0.9] text-[var(--color-theme-text)] mb-8 uppercase">
          The Millennial Generation
        </h1>
        <p className="text-[18px] md:text-xl font-mono max-w-2xl text-[var(--color-theme-text)] mb-12 bg-white border-2 border-black p-4 shadow-[6px_6px_0px_#050505]">
          An exploration of the largest adult cohort across the world—who they are, what shaped them, and what they value.
        </p>
        <div className="animate-bounce mt-12 text-[var(--color-theme-text)] border-2 border-black bg-white rounded-full p-4 shadow-[4px_4px_0px_#050505]">
           <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
            <path strokeLinecap="square" strokeLinejoin="miter" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Scrollytelling Section */}
      <section id="scrolly" className="relative flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 md:px-8 pb-32">
        
        {/* Sticky Graphic (Right Side on Desktop, Background on Mobile) */}
        <figure className="sticky top-24 md:top-24 h-[60vh] md:h-[80vh] w-full md:w-1/2 ml-auto shrink-0 md:pl-12 hidden md:block overflow-hidden relative">
          <div className="absolute inset-0 md:left-12 border-4 border-black bg-white shadow-[10px_10px_0px_#050505] overflow-hidden z-10">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentStep}
                src={ARTICLE_STEPS[currentStep]?.image}
                alt={ARTICLE_STEPS[currentStep]?.title}
                initial={{ filter: "grayscale(100%)", opacity: 0, scale: 1.05 }}
                animate={{ filter: "grayscale(0%)", opacity: 1, scale: 1 }}
                exit={{ filter: "grayscale(100%)", opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
             {/* Tech overlay decorations */}
            <div className="absolute top-4 left-4 font-mono text-xs font-bold text-white bg-black px-2 py-1 z-20">FIG. {currentStep + 1}</div>
            <div className="absolute bottom-4 right-4 bg-[var(--color-theme-accent)] w-4 h-4 border-2 border-black z-20"></div>
          </div>
        </figure>

        {/* Mobile Sticky Graphic Background */}
        <div className="md:hidden fixed inset-0 z-0 h-screen w-full pointer-events-none">
           <AnimatePresence mode="popLayout">
            <motion.img
              key={currentStep}
              src={ARTICLE_STEPS[currentStep]?.image}
              alt={ARTICLE_STEPS[currentStep]?.title}
              initial={{ filter: "grayscale(100%)", opacity: 0, scale: 1.05 }}
              animate={{ filter: "grayscale(0%)", opacity: 0.15, scale: 1 }}
              exit={{ filter: "grayscale(100%)", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Scrolling Text Elements (Left Side) */}
        <article className="relative w-full md:w-1/2 mt-[-60vh] md:mt-0 z-10 md:pr-12 pointer-events-none">
          {ARTICLE_STEPS.map((step, index) => (
            <div 
              key={step.id}
              className="step flex flex-col justify-center min-h-[80vh] md:min-h-screen mb-[20vh] md:mb-0"
              data-step={index}
            >
              <div className="bg-[var(--color-theme-bg)] md:bg-[var(--color-theme-card-bg)] p-8 md:p-[32px] border-4 border-[var(--color-theme-border)] shadow-[8px_8px_0px_#050505] py-12 pointer-events-auto relative">
                <div className="absolute -top-4 -left-4 bg-[var(--color-theme-accent)] border-2 border-black text-white font-mono font-bold text-xl w-10 h-10 flex items-center justify-center">
                  {index + 1}
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[var(--color-theme-text)] font-mono uppercase tracking-[2px] text-[11px] font-bold opacity-60">Sequence {index + 1}</span>
                </div>
                <h2 className="text-3xl md:text-[42px] font-bold text-[var(--color-theme-text)] mb-6 leading-[1.1] uppercase">
                  {step.title}
                </h2>
                <p className="font-mono text-base md:text-lg text-[var(--color-theme-text)] leading-[1.6]">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </article>

      </section>

      {/* Footer / Outro */}
      <footer className="w-full bg-[var(--color-theme-border)] text-white py-24 px-4 md:px-8 text-center relative z-20 mt-32 border-t-8 border-[var(--color-theme-accent)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[42px] md:text-6xl font-bold mb-8 uppercase tracking-tighter">The Future is<br/>Theirs</h2>
          <p className="font-mono text-white/80 text-[18px] mb-12 leading-[1.6]">
            As millennials advance into their peak earning and leadership years, their influence will only continue to define the 21st century. 
            Understanding them is the key to understanding what comes next.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
             <a  href="https://www.bbc.co.uk/bitesize/articles/zp6t9ty" target="_blank" rel="noopener noreferrer" className="border-2 border-white px-4 py-2 font-mono text-xs hover:bg-white hover:text-black transition-colors">BBC Bitesize</a>
             <a  href="https://www.quora.com/Why-do-people-born-between-1981-and-1996-prefer-the-moniker-Millennials-rather-than-Generation-Y-or-Gen-Y" target="_blank" rel="noopener noreferrer" className="border-2 border-white px-4 py-2 font-mono text-xs hover:bg-white hover:text-black transition-colors">Quora</a>
             <a  href="https://www.buzzfeed.com/victoriavouloumanos/people-debate-whether-millennials-actually-look-younger" target="_blank" rel="noopener noreferrer" className="border-2 border-white px-4 py-2 font-mono text-xs hover:bg-white hover:text-black transition-colors">Buzzfeed</a>
          </div>
          <p className="font-mono text-[11px] text-white/50 tracking-[2px] uppercase font-bold mb-4">
            END OF TRANSMISSION
          </p>
        </div>
      </footer>
    </div>
  );
}
