import Image from "next/image";

const steps = [
  {
    title: "Discovery call",
    detail:
      "A 30-minute conversation to understand the driver — a client audit, a regulator finding, a new contract or an incident — and what a good outcome looks like for you.",
  },
  {
    title: "Site visit & baseline",
    detail:
      "Our consultant walks the site, reviews your documentation and talks to the people doing the work. Nothing is assessed from a desk.",
  },
  {
    title: "Findings & action plan",
    detail:
      "You receive a written report with findings graded by risk, photographic evidence, and a corrective action plan that names an owner and a date for each item.",
  },
  {
    title: "Implementation support",
    detail:
      "We help close the actions — writing the procedure, running the training, chairing the study or placing the HSE officer. You choose how much of it we do.",
  },
  {
    title: "Verification & close-out",
    detail:
      "A follow-up visit confirms the actions hold in practice, and you get a close-out pack you can put in front of a client or an auditor.",
  },
];

const displayHeading =
  "font-heading text-[clamp(2.125rem,8.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-balance";

/** How we work: a site photo in a left column that sticks on desktop, beside five numbered steps. */
export function ConsultancyProcess() {
  return (
    <section aria-labelledby="consultancy-process-heading" className="bg-[#f5f7fa] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="consultancy-process-heading" className={`${displayHeading} text-navy-deep`}>
            Five steps from first call to signed-off close-out
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-navy-deep/80 md:text-lg">
            No open-ended retainers and no report that sits in a drawer. Every engagement is scoped, priced and
            closed against agreed actions.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-deep/80">
            Every engagement starts with a walk-through of your actual operation, not a questionnaire. You get a
            prioritised action plan with owners and dates against every finding, and we stay involved until those
            actions are closed, not just until the report is issued.
          </p>
          <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[24px] shadow-[0_24px_48px_-24px_rgba(18,59,109,0.45)] lg:aspect-[5/4]">
            <Image
              src="/home/step-assess.webp"
              alt="Arbrit Safety assessor with a clipboard checking scaffolding work alongside a worker on site"
              fill
              sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[center_25%]"
            />
          </div>
        </div>

        <ol className="divide-y divide-navy-deep/10 border-y border-navy-deep/10 lg:self-center">
          {steps.map(({ title, detail }, index) => (
            <li key={title} className="flex gap-5 py-7 md:gap-8 md:py-9">
              <span
                aria-hidden="true"
                className="w-14 shrink-0 font-heading text-[44px] font-extrabold leading-none tracking-[-0.04em] text-[#0066b2] md:w-20 md:text-6xl"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-heading text-xl font-extrabold leading-snug tracking-[-0.01em] text-navy-deep md:text-2xl">
                  {title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-navy-deep/80">{detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
