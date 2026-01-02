export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#ffffff,#fff6dd)] text-[#1b1b1b]">
      <header className="sticky top-0 z-20 border-b border-black/5 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center">
            <img src="/text-style-logo.svg" alt="Psí salon Eva" className="h-12 w-auto sm:h-14" />
          </div>
          <a
            href="tel:605213768"
            className="rounded-full border border-[#785b49]/40 px-5 py-2 text-sm font-semibold text-[#785b49] transition-colors hover:border-[#785b49]/70"
          >
            Objednání: 605 213 768
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#785b49]">
              Jičín · Více jak 15 let zkušeností
            </p>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Ostříhaný pes, spokojený pes.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#785b49]">
              Profesionální péče s individuálním přístupem.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:605213768"
                className="inline-flex items-center justify-center rounded-full bg-[#ffbe31] px-6 py-3 text-sm font-semibold text-[#1b1b1b] transition-colors hover:bg-[#f0ad1f]"
              >
                Rezervovat termín
              </a>
              <a
                href="#sluzby"
                className="inline-flex items-center justify-center rounded-full border border-[#785b49]/40 px-6 py-3 text-sm font-semibold text-[#785b49] transition-colors hover:border-[#785b49]"
              >
                Služby
              </a>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 text-sm text-[#785b49] sm:grid-cols-3">
              <div className="rounded-2xl border border-black/5 bg-white/80 p-4">
                <p className="font-semibold text-[#1b1b1b]">Individuální přístup</p>
                <p>Každý pes má svůj rytmus</p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white/80 p-4">
                <p className="font-semibold text-[#1b1b1b]">Šetrná kosmetika</p>
                <p>Jemná k pokožce i srsti</p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white/80 p-4">
                <p className="font-semibold text-[#1b1b1b]">Tiché prostředí</p>
                <p>Bez stresu a spěchu</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white/80 p-10 shadow-[0_20px_60px_rgba(27,27,27,0.08)]">
            <div className="aspect-square rounded-2xl bg-[#ffbe31]/20 p-10">
              <img src="/dog.svg" alt="Upravený pes" className="h-full w-full object-contain" />
            </div>
            <div className="mt-6 text-sm text-[#785b49]">
              <p className="font-semibold text-[#1b1b1b]">Psí salon Eva</p>
              <p>Na Tobolce 200, Jičín</p>
              <p>Dle objednávek</p>
            </div>
          </div>
        </section>

        <section id="sluzby" className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#785b49]">
                Služby
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Koupání a sušení",
                text: "Šetrné šampony, profesionální sušení a ochrana pokožky.",
              },
              {
                title: "Stříhání a styling",
                text: "Úprava podle standardů plemene nebo vašeho přání.",
              },
              {
                title: "Péče o drápky",
                text: "Bezpečné zkrácení a kontrola tlapek.",
              },
              {
                title: "Čištění uší",
                text: "Jemná péče s důrazem na prevenci.",
              },
              {
                title: "Dentální hygiena",
                text: "Základní čištění pro svěží dech a zdravé dásně.",
              },
              {
                title: "Kompletní balíček",
                text: "Nejkomplexnější péče v jednom termínu.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-black/5 bg-white/80 p-6 transition-shadow hover:shadow-[0_12px_30px_rgba(27,27,27,0.08)]"
              >
                <h3 className="font-serif text-xl font-semibold text-[#1b1b1b]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-[#785b49]">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 rounded-3xl border border-black/5 bg-white/80 p-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#785b49]">
                Přístup
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                Péče, která je vidět i cítit
              </h2>
              <p className="mt-4 text-sm text-[#785b49]">
                &quot;V Psím salonu Eva věřím v klid, respekt a trpělivost. Mým cílem je, aby se váš
                pes cítil bezpečně a odcházel spokojený.&quot;
              </p>
              <p className="mt-3 text-sm text-[#785b49]">
                Každý rok si obnovuji certifikace a jdu s trendy ve stříhání.
              </p>
              <p className="mt-4 text-sm font-semibold text-[#1b1b1b]">Eva Mrzenová</p>
            </div>
            <div className="grid gap-6 text-sm text-[#785b49]">
              <div>
                <p className="font-semibold text-[#1b1b1b]">Jemná práce</p>
                <p>Bez stresu, s respektem k povaze psa.</p>
              </div>
              <div>
                <p className="font-semibold text-[#1b1b1b]">Čistota a kvalita</p>
                <p>Prověřené produkty a pečlivá hygiena.</p>
              </div>
              <div>
                <p className="font-semibold text-[#1b1b1b]">Praktická domluva</p>
                <p>Termíny sjednáte jednoduše po telefonu.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 border-t border-black/5 pt-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#785b49]">
                Kontakt
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                Rychlá domluva
              </h2>
              <p className="mt-4 text-sm text-[#785b49]">
                Nejlépe mě zastihnete telefonicky. Ráda poradím s výběrem služby i orientační
                dobou péče.
              </p>
              <div className="mt-6 text-sm text-[#785b49]">
                <p className="font-semibold text-[#1b1b1b]">Adresa</p>
                <p>Na Tobolce 200, Jičín</p>
                <p className="mt-4 font-semibold text-[#1b1b1b]">Otevírací doba</p>
                <p>Dle objednávek</p>
              </div>
            </div>
            <div className="rounded-3xl border border-black/5 bg-[#785b49] p-10 text-white">
              <p className="text-sm uppercase tracking-[0.32em] text-white/60">Objednání</p>
              <p className="mt-4 text-3xl font-semibold">605 213 768</p>
              <p className="mt-3 text-sm text-white/70">Zavolejte a domluvíme vhodný termín.</p>
              <a
                href="tel:605213768"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#ffbe31] px-6 py-3 text-sm font-semibold text-[#1b1b1b] transition-colors hover:bg-[#f0ad1f]"
              >
                Zavolat
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[#785b49] sm:flex-row">
          <p>© {new Date().getFullYear()} Psí salon Eva</p>
          <p>Profesionální psí salon v Jičíně</p>
        </div>
      </footer>
    </div>
  );
}
