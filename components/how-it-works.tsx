const steps = [
  {
    number: "01",
    title: "Нанесете",
    description: "Нанесете 2\u20133 прскања на интимната област.",
  },
  {
    number: "02",
    title: "Почекајте",
    description: "Почекајте неколку секунди за апсорпција.",
  },
  {
    number: "03",
    title: "Уживајте",
    description: "Уживајте со поголема контрола и сигурност.",
  },
]

export function HowItWorks() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Едноставен процес
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Како функционира?
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/5">
                <span className="font-sans text-xl font-bold text-primary">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
