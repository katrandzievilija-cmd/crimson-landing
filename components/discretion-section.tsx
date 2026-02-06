export function DiscretionSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-lg border border-border bg-card p-10 text-center md:p-16">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
            aria-hidden="true"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </div>
        <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
          Дискретност и доверба
        </h2>
        <div className="mx-auto mt-4 h-0.5 w-12 bg-primary" />
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
          Дискретна достава без ознаки. Брза испорака. Вашата приватност е
          секогаш заштитена.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            { label: "Дискретно пакување", icon: "package" },
            { label: "Брза испорака", icon: "truck" },
            { label: "Заштитена приватност", icon: "lock" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                {item.icon === "package" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m7.5 4.27 9 5.15" />
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    <path d="m3.3 7 8.7 5 8.7-5" />
                    <path d="M12 22V12" />
                  </svg>
                )}
                {item.icon === "truck" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                    <path d="M15 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.684-.948V8h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1" />
                    <circle cx="7" cy="18" r="2" />
                    <circle cx="17" cy="18" r="2" />
                  </svg>
                )}
                {item.icon === "lock" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                )}
              </div>
              <span className="text-sm font-medium text-secondary-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
