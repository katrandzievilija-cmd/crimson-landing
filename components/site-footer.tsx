import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <Image
          src="/images/crimson-logo.png"
          alt="Crimson"
          width={120}
          height={78}
        />
        <p className="text-sm text-muted-foreground">
          {'© Crimson \u2014 Сите права задржани'}
        </p>
        <p className="text-xs text-muted-foreground">
          Производ за лична нега.
        </p>
      </div>
    </footer>
  )
}
