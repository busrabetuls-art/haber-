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
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 py-24 mb-20 border-b border-[var(--color-theme-border)]">
        <p className="text-[var(--color-theme-meta)] font-sans uppercase tracking-[2px] text-[11px] font-semibold mb-6">Editorial Report</p>
        <h1 className="text-5xl md:text-[56px] lg:text-[72px] font-serif max-w-5xl leading-[1.1] text-[var(--color-theme-accent)] mb-8">
          The Millennial Generation
        </h1>
        <p className="text-[18px] md:text-xl font-sans max-w-2xl text-[var(--color-theme-text)]/70 mb-12">
          An exploration of the largest adult cohort across the world—who they are, what shaped them, and what they value.
        </p>
        <div className="animate-bounce mt-12 text-[var(--color-theme-meta)]">
          <p className="text-[11px] uppercase tracking-[2px] font-semibold mb-2 font-sans">Scroll to read</p>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Scrollytelling Section */}
      <section id="scrolly" className="relative flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 md:px-8 pb-32">
        
        {/* Sticky Graphic (Right Side on Desktop, Background on Mobile) */}
        <figure className="sticky top-24 md:top-24 h-[60vh] md:h-[80vh] w-full md:w-1/2 ml-auto shrink-0 md:pl-12 hidden md:block overflow-hidden rounded-sm">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentStep}
              src={ARTICLE_STEPS[currentStep]?.image}
              alt={ARTICLE_STEPS[currentStep]?.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none"></div>
        </figure>

        {/* Mobile Sticky Graphic Background */}
        <div className="md:hidden fixed inset-0 z-0 h-screen w-full pointer-events-none">
           <AnimatePresence mode="popLayout">
            <motion.img
              key={currentStep}
              src={ARTICLE_STEPS[currentStep]?.image}
              alt={ARTICLE_STEPS[currentStep]?.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.2, scale: 1 }}
              exit={{ opacity: 0 }}
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
              <div className="bg-[var(--color-theme-bg)] md:bg-[var(--color-theme-card-bg)] p-8 md:p-[32px] border border-[var(--color-theme-border)] md:border-[var(--color-theme-card-border)] shadow-xl md:shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-md md:rounded-[4px] py-12 md:py-[32px] pointer-events-auto">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[var(--color-theme-meta)] font-sans uppercase tracking-[2px] text-[11px] font-semibold">Step 0{index + 1}</span>
                </div>
                <h2 className="text-3xl md:text-[42px] font-serif text-[var(--color-theme-accent)] mb-6 leading-[1.1]">
                  {step.title}
                </h2>
                <p className="font-sans text-[18px] text-[var(--color-theme-card-text)] leading-[1.6]">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </article>

      </section>

      {/* Footer / Outro */}
      <footer className="w-full bg-[var(--color-theme-bg)] border-t border-[var(--color-theme-border)] text-[var(--color-theme-text)] py-24 px-4 md:px-8 text-center relative z-20 mt-32">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[42px] font-serif mb-8 text-[var(--color-theme-accent)] leading-[1.1]">The Future is Theirs</h2>
          <p className="font-sans text-[var(--color-theme-card-text)] text-[18px] mb-12 leading-[1.6]">
            As millennials advance into their peak earning and leadership years, their influence will only continue to define the 21st century. 
            Understanding them is the key to understanding what comes next.
          </p>
          <div className="h-px w-24 bg-[var(--color-theme-border)] mx-auto mb-12"></div>
          <p className="font-sans text-[11px] text-[var(--color-theme-meta)] tracking-[2px] uppercase font-semibold mb-4">
            Based on research from BBC Bitesize
          </p>
          <a 
            href="https://www.bbc.co.uk/bitesize/articles/zp6t9ty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[var(--color-theme-accent)] hover:text-[var(--color-theme-text)] transition-colors duration-300 font-sans text-[12px] font-semibold tracking-wide uppercase"
          >
            Read Original Source &rarr;
          </a>
        </div>
      </footer>
    </div>
  );
}
