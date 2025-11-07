import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 dark:from-neutral-950/80 dark:via-neutral-950/30 dark:to-neutral-950/95" />

        <div className="relative pt-24 pb-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Building playful, modern, interactive web experiences
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-300">
            I’m a frontend developer crafting immersive interfaces with React, WebGL, and delightful micro-interactions. Explore my latest projects and get in touch.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
