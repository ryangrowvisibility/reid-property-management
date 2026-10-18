import Reveal from "./Reveal";
import Icon, { Stars } from "./Icon";

const PHONE = "(647) 571-2195";
const TEL = "tel:+16475712195";
const SMS = "sms:+16475712195";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Reid%20Property%20Management&query_place_id=ChIJn5SPWj6rU6YRVnZXqNTlgaE";
const TIKTOK = "https://www.tiktok.com/@reidpropertymanagement";

const services = [
  {
    title: "Wood Fence Installation",
    icon: "fence",
    text: "New wood privacy fences for backyards, side yards and driveways. We set solid posts, run straight, level boards and finish the job clean, so the fence looks good from both your side and the neighbour's.",
    featured: true,
  },
  {
    title: "Gates & Gate Replacement",
    icon: "gate",
    text: "Worn, sagging or broken gates replaced with new wood gates that swing true and latch properly. One recent customer had her parents' gates replaced, done on time and looking great.",
  },
  {
    title: "Chain Link to Wood Replacement",
    icon: "hammer",
    text: "Tired of looking through an old chain link fence? We take it out and put up a new wood fence and gate in its place, even in tight spots between a driveway and a neighbour's patio.",
  },
  {
    title: "Custom Fence Design",
    icon: "pencil",
    text: "We work the design out with you: height, layout, where the gate goes and how it meets the house. If your landscaper is working in the same yard, we'll coordinate with them.",
  },
  {
    title: "Multi-Home & Builder Fencing",
    icon: "homes",
    text: "Need fencing on more than one property? We've built fencing for five houses in two days for one customer, with the same quality and fair pricing on every lot.",
  },
  {
    title: "Odd Jobs & Property Help",
    icon: "plus",
    text: "While we're on site, we're happy to help with the small things too. Customers mention that we take care of extras outside the project, often without charging.",
  },
];

const reviews = [
  { name: "Stefano M.", job: "Fence project", text: "John and his brother were a pleasure to work with. The pricing was very fair and the workmanship fantastic. John took care of extra things outside the project without hesitation, often without charging, and even took the garbage to the curb so my wife didn't have to." },
  { name: "Tyler C.", job: "Chain link to wood fence + gate", text: "Replaced the old chain link along our backyard and driveway with a new wood fence and gate. We worked on the design together and he coordinated with our landscaper. A tight space between our driveway and the neighbour's patio, done quickly and well." },
  { name: "Rebecca D.", job: "Gate replacement", text: "Jonathan replaced my parents' gates and they look great. Done on time, professional and friendly. You can tell he takes pride in his work." },
  { name: "Brenda M.", job: "Fence installation", text: "Very happy with the fence Jonathan installed. Professional and accommodating to what we wanted. I recommend him 100%." },
  { name: "Adam G. O.", job: "Fencing for 5 homes", text: "Built five houses' worth of fencing in two days, with incredible quality and very fair prices." },
];

const steps = [
  { title: "Call or text", text: `Reach Jonathan at ${PHONE}. Tell us roughly how many feet of fence or which gate, and text a photo of the yard if you can.` },
  { title: "Measure and quote", text: "We come out, walk the fence line with you, talk through height, style and gate placement, and give you a fair, clear price." },
  { title: "We build it", text: "Old fencing comes out, posts go in, and the new fence and gate go up. We keep you posted and finish on the day we said." },
  { title: "Walk-through and clean-up", text: "We check every gate swings and latches, haul away the old material and leave the yard tidy." },
];

const faqs = [
  { q: "What areas do you serve?", a: "We're based in Etobicoke and build fences and gates across Toronto and nearby areas. Call or text your address and we'll confirm right away." },
  { q: "Do you give free quotes?", a: `Yes. Call or text ${PHONE} and we'll come take a look, measure the fence line and give you a price before any work starts.` },
  { q: "Can you replace my old chain link fence with wood?", a: "Yes, it's one of our most common jobs. We remove the chain link and build a new wood fence and gate in its place, including in tight spaces beside driveways and patios." },
  { q: "Can you just replace a gate?", a: "Absolutely. Gate-only jobs are welcome. We'll build a new gate that fits the opening, swings properly and latches securely." },
  { q: "Do you work with my landscaper or other contractors?", a: "Yes. If someone else is working in the yard, we'll coordinate with them so the fence and the rest of the project fit together." },
  { q: "Who will actually build my fence?", a: "Jonathan (John) Reid and his brother. You deal with the people doing the work, from the first call to the final walk-through." },
  { q: "What are your hours?", a: "We start at 8 a.m. Call or text anytime and we'll get back to you." },
];

const gallery = [
  { src: "/images/p3.jpg", alt: "New wood privacy fence and gate along the side of a brick home, with a dog in the yard" },
  { src: "/images/p4.jpg", alt: "New wood fence and gate at the end of a long driveway" },
  { src: "/images/p5.jpg", alt: "Long run of new wood board fence across a grassy backyard" },
  { src: "/images/p6.jpg", alt: "New wood fence meeting a neighbour's fence in a backyard with two dogs" },
  { src: "/images/p1.jpg", alt: "Arched wood gate set into a new privacy fence beside a house" },
];

const area = ["Etobicoke", "Toronto", "Nearby areas"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Reid Property Management",
  description: "Fence contractor in Toronto: wood fence installation, gates, chain link replacement and custom fence design.",
  telephone: "+16475712195",
  image: "/images/p2.jpg",
  founder: "Jonathan Reid",
  areaServed: ["Toronto", "Etobicoke"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "6" },
  sameAs: [TIKTOK],
  hasMap: MAPS,
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-char text-white shadow-[0_1px_0_oklch(1_0_0/0.08)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-cta text-char"><Icon name="fence" className="h-6 w-6" /></span>
            <span className="leading-tight">
              <span className="block font-head text-[1.375rem] font-bold uppercase">Reid</span>
              <span className="block text-sm font-semibold text-white/75">Fences &amp; Gates · Property Management</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 font-semibold text-white/85 lg:flex">
            <a href="#services" className="hover:text-cta">Services</a>
            <a href="#reviews" className="hover:text-cta">Reviews</a>
            <a href="#about" className="hover:text-cta">About</a>
            <a href="#work" className="hover:text-cta">Our Fences</a>
            <a href="#faq" className="hover:text-cta">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden font-head text-xl font-bold md:block hover:text-cta">{PHONE}</a>
            <a href={TEL} className="btn btn-cta hidden md:inline-flex">Free Quote</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="grid h-12 w-12 place-items-center rounded-xl bg-cta text-char md:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative isolate overflow-hidden">
          <img src="/images/p2.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" width={1440} height={1080} />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,oklch(0.2_0.012_60/0.92)_0%,oklch(0.2_0.012_60/0.78)_50%,oklch(0.2_0.012_60/0.35)_100%)]" />
          <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 pb-16 pt-14 text-white md:px-6 md:pb-24 md:pt-24 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="up mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[0.9375rem] font-semibold backdrop-blur">
                <Icon name="pin" className="h-4 w-4 text-cta" /> Etobicoke &amp; Toronto
              </p>
              <h1 className="up w1 text-[clamp(2.6rem,6vw,4.4rem)]">Wood Fence &amp; Gate Installation in Toronto</h1>
              <p className="up w2 mt-5 max-w-xl text-[1.1875rem] text-white/85">
                New fences, new gates and chain link replacements, built by Jonathan Reid and his brother. Fair prices, solid workmanship and the kind of crew that takes your garbage to the curb on the way out.
              </p>
              <div className="up w3 mt-8 flex flex-wrap gap-3">
                <a href={TEL} className="btn btn-cta text-lg"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
                <a href={SMS} className="btn btn-line text-white hover:bg-white hover:text-char"><Icon name="chat" className="h-5 w-5" /> Text a photo of your yard</a>
              </div>
              <div className="up w3 mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-semibold">
                <span className="flex items-center gap-2"><Stars /> 5.0 · 6 Google reviews</span>
                <span className="hidden h-4 w-px bg-white/30 sm:block" />
                <span>Owner on every job</span>
                <span className="hidden h-4 w-px bg-white/30 sm:block" />
                <span>Free quotes</span>
              </div>
            </div>
            <figure className="up w2 hidden rounded-2xl bg-white p-6 text-ink shadow-2xl lg:block">
              <Stars className="h-5 w-5" />
              <blockquote className="mt-3 text-[1.0625rem] leading-relaxed">&ldquo;Pricing was very fair and the workmanship fantastic. John took care of extra things outside the project without hesitation.&rdquo;</blockquote>
              <figcaption className="mt-4 border-t border-line pt-4 text-[0.9375rem] font-semibold text-muted">Stefano M. · Fence project · Google review</figcaption>
            </figure>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why homeowners choose Reid" className="border-b border-line bg-cedar-soft">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "sparkle", top: "5.0 on Google", sub: "Every review is 5 stars" },
              { icon: "users", top: "Brothers-run", sub: "Jonathan Reid on site" },
              { icon: "tag", top: "Fair pricing", sub: "Free, clear quotes" },
              { icon: "clock", top: "On time", sub: "Finished when promised" },
            ].map((t) => (
              <div key={t.top} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-cedar text-white"><Icon name={t.icon} /></span>
                <span>
                  <span className="block font-head text-lg font-semibold">{t.top}</span>
                  <span className="block text-[0.9375rem] text-muted">{t.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <p className="font-semibold text-cedar">What we build</p>
              <h2 className="mt-2 text-[clamp(2.1rem,4.2vw,3.2rem)]">Fences and gates, done right</h2>
              <p className="mt-4 text-muted">Whether it&apos;s one gate or a full backyard, you get the same care: straight lines, solid posts and a clean yard when we leave.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.title} className={`reveal lift flex flex-col rounded-2xl border-t-4 bg-white p-7 shadow-[0_1px_0_oklch(0.9_0.018_75),0_0_0_1px_oklch(0.9_0.018_75)] ${s.featured ? "border-cta" : "border-cedar"}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-cedar-soft text-cedar"><Icon name={s.icon} /></span>
                    {s.featured && <span className="rounded-full bg-cta px-3 py-1 text-sm font-bold text-char">Most popular</span>}
                  </div>
                  <h3 className="mt-5 text-[1.5rem]">{s.title}</h3>
                  <p className="mt-3 flex-1 text-[1.0625rem] text-muted">{s.text}</p>
                  <a href={TEL} className="cardlink mt-5 inline-flex items-center gap-2 font-semibold text-ink">Call about this <Icon name="arrow" className="arrow h-5 w-5 text-cedar" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-cedar-soft py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="flex items-center gap-3"><Stars className="h-6 w-6" /><span className="font-head text-2xl font-bold">5.0</span></p>
                <h2 className="mt-3 text-[clamp(2.1rem,4.2vw,3.2rem)]">Rated 5.0 from 6 Google reviews</h2>
                <p className="mt-3 text-muted">What Toronto homeowners say after the fence goes up.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-line shrink-0 bg-white text-char hover:bg-char hover:text-white">Read all reviews on Google <Icon name="arrow" className="arrow h-5 w-5" /></a>
            </div>
            <figure className="reveal mt-12 rounded-2xl bg-char p-8 text-white md:p-12">
              <Stars className="h-5 w-5" />
              <blockquote className="mt-4 max-w-4xl font-head text-[clamp(1.4rem,2.6vw,2rem)] font-semibold leading-snug">&ldquo;{reviews[1].text}&rdquo;</blockquote>
              <figcaption className="mt-6 text-white/75">{reviews[1].name} · {reviews[1].job} · Google review</figcaption>
            </figure>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {reviews.filter((_, i) => i !== 1).map((r) => (
                <figure key={r.name} className="reveal flex flex-col rounded-2xl bg-white p-7">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-4 flex-1 text-[1.0625rem] leading-relaxed">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-5">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-cedar font-head text-lg font-bold text-white">{r.name.charAt(0)}</span>
                    <span><span className="block font-semibold">{r.name}</span><span className="block text-sm text-muted">{r.job} · Google review</span></span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal grid grid-cols-2 gap-3">
              <img src="/images/p1.jpg" alt="Arched wood gate in a new privacy fence" className="aspect-[3/4] w-full rounded-2xl object-cover" loading="lazy" />
              <img src="/images/p5.jpg" alt="New wood fence line across a backyard" className="mt-10 aspect-[3/4] w-full rounded-2xl object-cover" loading="lazy" />
            </div>
            <div className="reveal">
              <p className="font-semibold text-cedar">About us</p>
              <h2 className="mt-2 text-[clamp(2.1rem,4.2vw,3.2rem)]">Two brothers who take pride in a good fence</h2>
              <div className="mt-5 space-y-4 text-muted">
                <p>Reid Property Management is Jonathan (John) Reid and his brother. We&apos;ve been building fences and gates for Toronto-area homeowners since at least 2022, and you can watch the work go up on our TikTok: another day, another fence.</p>
                <p>Our name says property management, but fencing is what we do every day. We keep our prices fair, show up when we say we will, and treat your yard like it&apos;s our parents&apos; yard. If there&apos;s a small extra job while we&apos;re there, we&apos;ll usually just take care of it.</p>
              </div>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: "users", t: "You deal with the owner", d: "Jonathan quotes, builds and walks it with you." },
                  { icon: "tag", t: "Fair, honest pricing", d: "Every reviewer mentions the price." },
                  { icon: "pencil", t: "Designed around your yard", d: "Tight spaces and tricky corners welcome." },
                  { icon: "heart", t: "Little extras, no charge", d: "Small jobs outside the scope, often free." },
                ].map((d) => (
                  <li key={d.t} className="flex gap-3 rounded-xl bg-cedar-soft p-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-cedar"><Icon name={d.icon} className="h-5 w-5" /></span>
                    <span><span className="block font-semibold">{d.t}</span><span className="block text-[0.9875rem] text-muted">{d.d}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-char py-16 text-white md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal max-w-2xl">
              <p className="font-semibold text-cta">How it works</p>
              <h2 className="mt-2 text-[clamp(2.1rem,4.2vw,3.2rem)]">From first call to finished fence</h2>
            </div>
            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal border-t-2 border-cta pt-6">
                  <span className="font-head text-5xl font-bold text-cta">{i + 1}</span>
                  <h3 className="mt-3 text-[1.375rem]">{s.title}</h3>
                  <p className="mt-2 text-[1.0625rem] text-white/80">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Gallery */}
        <section id="work" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="reveal flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="font-semibold text-cedar">Our fences</p>
                <h2 className="mt-2 text-[clamp(2.1rem,4.2vw,3.2rem)]">Recent fences and gates</h2>
              </div>
              <a href={TIKTOK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-ink hover:text-cedar"><Icon name="tiktok" className="h-5 w-5" /> More on TikTok</a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
              {gallery.map((g) => (
                <div key={g.src} className="reveal zoom overflow-hidden rounded-xl bg-cedar-soft">
                  <img src={g.src} alt={g.alt} className="aspect-[3/4] w-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="bg-cedar-soft py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal">
              <p className="font-semibold text-cedar">Service area</p>
              <h2 className="mt-2 text-[clamp(2.1rem,4.2vw,3.2rem)]">Fencing across Toronto</h2>
              <p className="mt-4 text-muted">We&apos;re based in Etobicoke and build fences and gates for homeowners across Toronto and nearby areas. Not sure if we come to you? Send your address by text and we&apos;ll let you know.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {area.map((a) => <li key={a} className="flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 font-semibold"><Icon name="pin" className="h-4 w-4 text-cedar" /> {a}</li>)}
              </ul>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-line mt-8 bg-white text-char hover:bg-char hover:text-white">View us on Google Maps <Icon name="arrow" className="arrow h-5 w-5" /></a>
            </div>
            <div className="reveal overflow-hidden rounded-2xl border border-line bg-white">
              <iframe title="Map of Etobicoke and Toronto, Reid Property Management's service area" src="https://maps.google.com/maps?q=Etobicoke%2C%20Toronto%2C%20ON&output=embed" className="h-[360px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <div className="reveal">
              <p className="font-semibold text-cedar">Questions</p>
              <h2 className="mt-2 text-[clamp(2.1rem,4.2vw,3.2rem)]">Fence questions, answered</h2>
            </div>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="reveal rounded-xl border border-line bg-white px-6 py-5 open:border-cedar">
                  <summary className="flex items-center justify-between gap-6 text-[1.1875rem] font-semibold">
                    {f.q}
                    <Icon name="chevron" className="chev h-6 w-6 shrink-0 text-cedar" />
                  </summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-cta">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-14 text-char md:flex-row md:items-center md:px-6 md:py-16">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3rem)]">Ready for a new fence? Call Jonathan at {PHONE}</h2>
              <p className="mt-3 text-[1.125rem] font-semibold text-char/80">Free quotes. We start at 8 a.m. Call or text anytime.</p>
            </div>
            <a href={TEL} className="btn shrink-0 bg-char text-lg text-white hover:bg-char-2"><Icon name="phone" className="h-5 w-5" /> Call {PHONE}</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-char pb-28 text-white/80 md:pb-0">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
          <div>
            <p className="font-head text-2xl font-bold uppercase text-white">Reid Property Management</p>
            <p className="mt-2">Fences &amp; gates by Jonathan Reid and his brother.</p>
            <div className="mt-5 space-y-2">
              <p><a href={TEL} className="flex items-center gap-2 font-semibold text-white hover:text-cta"><Icon name="phone" className="h-5 w-5 text-cta" /> {PHONE}</a></p>
              <p className="flex items-center gap-2"><Icon name="pin" className="h-5 w-5 text-cta" /> Etobicoke, Toronto, ON</p>
              <p className="flex items-center gap-2"><Icon name="clock" className="h-5 w-5 text-cta" /> Opens 8 a.m.</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-white">Services</p>
            <ul className="mt-4 space-y-2">
              {services.map((s) => <li key={s.title}><a href="#services" className="hover:text-cta">{s.title}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Service area</p>
            <p className="mt-4">Etobicoke, Toronto and nearby areas</p>
            <a href={TIKTOK} target="_blank" rel="noopener noreferrer" aria-label="Reid Property Management on TikTok" className="mt-6 inline-grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white hover:bg-cta hover:text-char"><Icon name="tiktok" className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto max-w-6xl px-5 py-5 text-sm md:px-6">© {new Date().getFullYear()} Reid Property Management. Fence and gate installation in Toronto.</p>
        </div>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden">
        <a href={TEL} className="btn btn-cta"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={SMS} className="btn bg-char text-white"><Icon name="chat" className="h-5 w-5" /> Text</a>
      </div>
    </>
  );
}
