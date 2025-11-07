export default function Services() {
  const services = [
    {
      title: 'Short-Form Editing',
      desc: 'TikTok, Reels, and Shorts with subtitles, meme timing, and fast pacing.',
      bullets: ['Captions & Kinetic Type', 'Sound Effects & Hits', 'Aspect Ratios: 9:16, 1:1, 16:9'],
    },
    {
      title: 'YouTube & Long-Form',
      desc: 'Clean narrative flow with b-roll, lower thirds, and color consistency.',
      bullets: ['Story & Chaptering', 'Lower Thirds Pack', 'Thumbnail + Hooks'],
    },
    {
      title: 'Commercial & Trailers',
      desc: 'Product trailers and ads with motion graphics and punchy transitions.',
      bullets: ['Kinetic Typography', 'Masking & Speed Ramps', 'Logo Stings'],
    },
  ];

  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">Services</h2>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300 max-w-2xl">From quick social edits to full trailers — pick what fits your project.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-6">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300 list-disc pl-5">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
