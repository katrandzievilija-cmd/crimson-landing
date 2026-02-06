import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 py-16 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0_0%_16%/0.3)_0%,_transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-10">
          <Image
            src="/images/crimson-logo.png"
            alt="Crimson"
            width={280}
            height={180}
            className="mx-auto"
            priority
          />
        </div>

        <h2 className="text-balance font-sans text-2xl font-bold leading-tight text-foreground md:text-3xl lg:text-4xl">
          {'\u201EКога секоја секунда е важна, тука сме да ви помогнеме\u201C'}
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Дискретни решенија за подобра контрола и подолга издржливост.
        </p>

        <a
          href="#product"
          className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Повеќе информации
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
