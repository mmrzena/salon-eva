'use client';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://psisaloneva.cz",
    "name": "Psí salon Eva",
    "image": "https://psisaloneva.cz/logo.svg",
    "url": "https://psisaloneva.cz",
    "telephone": "+420605213768",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Na Tobolce 200",
      "addressLocality": "Jičín",
      "postalCode": "506 01",
      "addressCountry": "CZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.4372,
      "longitude": 15.3517
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "description": "Psí salon Eva v Jičíně nabízí kompletní péči o vašeho psa s více jak 20 lety zkušeností. Koupání španělskou kosmetikou PSH, stříhání, úprava srsti s individuálním přístupem.",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Čekárna",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Oplocená zahrada pro psy",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parkování",
        "value": true
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Eva Mrzenová"
    },
    "areaServed": {
      "@type": "City",
      "name": "Jičín"
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#ffffff,#fff6dd)] text-[#1b1b1b]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="sticky top-0 z-20 border-b border-black/5 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <div className="flex items-center">
            <a href="#" className="flex items-center  cursor-pointer" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img src="/text-style-logo.svg" alt="Psí salon Eva" className="h-10 w-auto sm:h-12" />
              <img src="/dog.svg" alt="" className="h-10 w-10 sm:h-12 sm:w-12 opacity-80" />
            </a>
          </div>
          <a
            href="tel:605213768"
            className="rounded-full border border-[#785b49]/40 px-4 py-2 text-sm font-semibold text-[#785b49] transition-colors hover:border-[#785b49]/70 sm:px-5"
          >
            <span className="hidden sm:inline">Objednání: </span>605 213 768
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-4xl px-6 pb-16 pt-16 text-center lg:pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#785b49]">
            Jičín · Více jak 20 let zkušeností
          </p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Ostříhaný pes, spokojený pes.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#785b49]">
            Profesionální péče s individuálním přístupem.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
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
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 text-sm text-[#785b49] sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-black/5 bg-white/80 p-5 transition-shadow hover:shadow-lg">
              <p className="font-semibold text-[#1b1b1b]">Individuální přístup</p>
              <p className="mt-1">Každý pes má svůj rytmus</p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white/80 p-5 transition-shadow hover:shadow-lg">
              <p className="font-semibold text-[#1b1b1b]">Šetrná kosmetika</p>
              <p className="mt-1">Jemná k pokožce i srsti</p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white/80 p-5 transition-shadow hover:shadow-lg">
              <p className="font-semibold text-[#1b1b1b]">Oplocená zahrada</p>
              <p className="mt-1">Bezpečný prostor pro psy</p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white/80 p-5 transition-shadow hover:shadow-lg">
              <p className="font-semibold text-[#1b1b1b]">Snadné parkování</p>
              <p className="mt-1">Pohodlný přístup k salonu</p>
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
                text: "Španělská kosmetika PSH, profesionální sušení a ochrana pokožky.",
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
                title: "Kompletní balíček",
                text: "Koupání, sušení, stříhání a kompletní péče v jednom termínu.",
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
              <div className="mt-6 flex items-center gap-4">
                <img
                  src="/eva.png"
                  alt="Eva Mrzenová"
                  className="h-20 w-20 rounded-full object-cover border-2 border-[#785b49]/20"
                />
                <p className="text-sm font-semibold text-[#1b1b1b]">Eva Mrzenová</p>
              </div>
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
              <div>
                <p className="font-semibold text-[#1b1b1b]">Pohodlné zázemí</p>
                <p>Čekárna, oplocená zahrada pro psy a snadné parkování.</p>
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
            <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-[#785b49] p-10 text-white">
              <div className="absolute right-0 top-0 opacity-20">
                <img src="/dog.svg" alt="Pes" className="h-40 w-40" />
              </div>
              <div className="relative z-10">
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
