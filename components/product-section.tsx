import Image from "next/image"

export function ProductSection() {
  return (
    <section id="product" className="px-6 py-12">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/images/timelag-spray.jpg"
              alt="TimeLag Spray - производ за лична нега"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Наш производ
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            TimeLag Spray
          </h2>
          <div className="mt-4 h-0.5 w-12 bg-primary" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            TimeLag е производ на природна база наменет за мажи кои сакаат
            подобра контрола и сигурност во интимните моменти. Формулата делува
            со нежно намалување на чувствителноста, без употреба на анестетици.
          </p>
        </div>
      </div>
    </section>
  )
}
