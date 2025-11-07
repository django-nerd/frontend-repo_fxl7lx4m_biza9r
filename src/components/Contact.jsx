import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I’ll get back to you soon.');
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">Let’s work together</h2>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300 max-w-2xl">Tell me about your idea, and I’ll reach out to discuss how we can bring it to life.</p>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4 max-w-2xl">
          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm text-neutral-700 dark:text-neutral-300">Name</label>
            <input id="name" required className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 outline-none focus:ring-2 ring-neutral-300 dark:ring-neutral-700" />
          </div>
          <div className="grid gap-1">
            <label htmlFor="email" className="text-sm text-neutral-700 dark:text-neutral-300">Email</label>
            <input id="email" type="email" required className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 outline-none focus:ring-2 ring-neutral-300 dark:ring-neutral-700" />
          </div>
          <div className="grid gap-1">
            <label htmlFor="message" className="text-sm text-neutral-700 dark:text-neutral-300">Message</label>
            <textarea id="message" rows={5} required className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 outline-none focus:ring-2 ring-neutral-300 dark:ring-neutral-700" />
          </div>

        <div className="flex items-center gap-4">
          <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors">
            Send Message
          </button>
          <p className="text-sm text-emerald-600 dark:text-emerald-400">{status}</p>
        </div>
        </form>
      </div>
    </section>
  );
}
