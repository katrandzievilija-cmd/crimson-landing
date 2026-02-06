export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          Контакт
        </p>
        <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
          Контактирајте нè
        </h2>
        <div className="mx-auto mt-4 h-0.5 w-12 bg-primary" />
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
          За повеќе информации, контактирајте нè преку Facebook Messenger или
          email.
        </p>
        <a
          href="mailto:info@crimson.mk"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Контактирај нè
        </a>
      </div>
    </section>
  )
}
