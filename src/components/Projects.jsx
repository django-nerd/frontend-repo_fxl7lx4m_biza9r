const projects = [
  {
    title: 'Product Trailer — Tech Gadget',
    description: '60s launch trailer with kinetic typography, speed ramps, and sound design.',
    tags: ['Premiere Pro', 'After Effects', 'Sound Design'],
    link: '#',
  },
  {
    title: 'Creator Edit — Short-Form Series',
    description: 'TikTok/Reels pack: punchy pacing, meme cuts, subtitles, and color grade.',
    tags: ['Short-form', 'Subtitles', 'Color Grade'],
    link: '#',
  },
  {
    title: 'Event Aftermovie — Festival',
    description: 'High-energy recap with crowd moments, transitions, and beat-matched cuts.',
    tags: ['Event', 'Transitions', 'Beat Match'],
    link: '#',
  },
  {
    title: 'Brand Story — Startup',
    description: 'Narrative edit with voice-over, b-roll, and subtle motion graphics.',
    tags: ['Narrative', 'VO', 'Motion GFX'],
    link: '#',
  },
  {
    title: 'YouTube Video — Tech Review',
    description: 'Clean timeline, chapter pacing, lower-thirds, and thumbnail package.',
    tags: ['YouTube', 'Lower Thirds', 'Thumbnail'],
    link: '#',
  },
  {
    title: 'Ad Spot — Apparel',
    description: '15s social ad with product highlights, masking transitions, and SFX hits.',
    tags: ['Ad', 'Masking', 'SFX'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">Featured Edits</h2>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300 max-w-2xl">A selection of commercial, creator, and event edits. Full portfolio available on request.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <div className="h-36 rounded-lg bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 mb-4" />
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:underline underline-offset-4">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2 py-1">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
