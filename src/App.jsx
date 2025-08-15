export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f9fb] text-slate-800">
      <Header />

      <Hero />

      <Services />

      <WhyBanner />

      <CareProcess />

      <Caregivers />

      <Testimonials />

      <CTA />

      <Contact />

      <SiteFooter />
    </div>
  );
}

function Header(){
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <Logo className="h-8 w-8 text-[#1f5f87]"/>
          <span className="text-2xl font-semibold tracking-tight text-[#1f5f87] group-hover:opacity-90">relia</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-[#1f5f87]">Services</a>
          <a href="#why" className="hover:text-[#1f5f87]">Why Relia</a>
          <a href="#caregivers" className="hover:text-[#1f5f87]">Caregivers</a>
          <a href="#testimonials" className="hover:text-[#1f5f87]">Testimonials</a>
          <a href="#contact" className="hover:text-[#1f5f87]">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+14045550123" className="hidden sm:inline-block rounded-xl border border-[#1f5f87]/20 px-4 py-2 text-sm font-semibold text-[#0f3550] hover:bg-white shadow-sm">(404) 555‑0123</a>
          <a href="#contact" className="inline-flex items-center rounded-xl bg-[#1f5f87] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#194d6d]">Request Care</a>
        </div>
      </div>
    </header>
  )
}

function Hero(){
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white to-[#eef4f8]">
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#1f5f87]/10 blur-3xl"/>
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#1f5f87]/10 blur-3xl"/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">Licensed • Insured • Background‑Checked</div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Compassionate in‑home care you can <span className="text-[#1f5f87]">rely on</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl">
              Relia provides premium non‑medical home care—personal care, companionship, and respite—so your loved ones can live safely and comfortably at home.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-xl bg-[#1f5f87] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#194d6d]">Book a Free Assessment</a>
              <a href="tel:+14045550123" className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#1f5f87] ring-1 ring-[#1f5f87]/30 hover:bg-slate-50">Call Now</a>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-600 max-w-lg">
              <li className="flex items-center gap-2"><CheckIcon className="h-5 w-5 text-[#1f5f87]"/> No long‑term contracts</li>
              <li className="flex items-center gap-2"><CheckIcon className="h-5 w-5 text-[#1f5f87]"/> Flexible hourly & live‑in</li>
              <li className="flex items-center gap-2"><CheckIcon className="h-5 w-5 text-[#1f5f87]"/> Care plan within 24–48h</li>
              <li className="flex items-center gap-2"><CheckIcon className="h-5 w-5 text-[#1f5f87]"/> 24/7 support line</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-tr from-[#cfe0ec] to-white p-1 shadow-xl">
              <div className="h-full w-full rounded-3xl bg-white p-6 flex items-center justify-center">
                <HeroIllustration/>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Average client rating</p>
              <div className="mt-1 flex items-center gap-1">
                {Array.from({length:5}).map((_,i)=> <StarIcon key={i} className="h-5 w-5 text-amber-500"/>) }
                <span className="ml-2 text-sm font-medium text-slate-700">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services(){
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Services</h2>
          <p className="mt-3 text-slate-600">Personalized, non‑medical support tailored to each family’s needs.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard title="Personal Care" icon={<HandsIcon/>} items={["Bathing & grooming","Toileting & incontinence","Mobility & transfers"]}/>
          <ServiceCard title="Companionship" icon={<HeartHomeIcon/>} items={["Conversation & games","Meal prep & light chores","Walks & engagement"]}/>
          <ServiceCard title="Medication Reminders" icon={<PillIcon/>} items={["Timely prompts","Refill coordination","Documentation"]}/>
          <ServiceCard title="Dementia & Alzheimer’s" icon={<BrainIcon/>} items={["Safe redirection","Structured routine","Family guidance"]}/>
          <ServiceCard title="Respite Care" icon={<CalendarIcon/>} items={["Give family a break","Short‑term coverage","Overnight options"]}/>
          <ServiceCard title="Transportation" icon={<CarIcon/>} items={["Appointments","Groceries & errands","Social visits"]}/>
        </div>
      </div>
    </section>
  )
}

function WhyBanner(){
  return (
    <section id="why" className="bg-[#f4f8fb]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-[28px] bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold tracking-wide text-[#1f5f87]">Our Services</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Why choose <span className="text-[#1f5f87]">Relia</span>?</h2>
              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="flex items-start gap-3"><CheckIcon className="mt-1 h-5 w-5 text-[#1f5f87]"/> Experienced and trained caregivers</li>
                <li className="flex items-start gap-3"><CheckIcon className="mt-1 h-5 w-5 text-[#1f5f87]"/> Personalized care plans for your needs</li>
                <li className="flex items-start gap-3"><CheckIcon className="mt-1 h-5 w-5 text-[#1f5f87]"/> Commitment to safety and comfort</li>
              </ul>
              <div className="mt-8 flex gap-3">
                <a href="#contact" className="inline-flex items-center rounded-xl bg-[#1f5f87] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#194d6d]">Request Care</a>
                <a href="tel:+14045550123" className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#1f5f87] ring-1 ring-[#1f5f87]/30 hover:bg-slate-50">Call Us</a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/caregiver-1.png"
                alt="Smiling caregiver supporting an older adult at home"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CareProcess(){
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">How it works</h2>
          <p className="mt-3 text-slate-600">Getting started is simple and fast.</p>
        </div>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StepCard number={1} title="Free assessment" desc="We learn needs, preferences, and schedule."/>
          <StepCard number={2} title="Personalized plan" desc="Clear goals, tasks, and visit cadence."/>
          <StepCard number={3} title="Caregiver match" desc="Hand‑selected for skills & personality fit."/>
          <StepCard number={4} title="Ongoing support" desc="We monitor progress & adjust as needs change."/>
        </ol>
      </div>
    </section>
  )
}

function Caregivers(){
  return (
    <section id="caregivers" className="bg-[#f4f8fb]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Caregivers you’ll love and trust</h2>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><CheckIcon className="mt-1 h-5 w-5 text-[#1f5f87]"/> Comprehensive background checks & references</li>
              <li className="flex items-start gap-3"><CheckIcon className="mt-1 h-5 w-5 text-[#1f5f87]"/> Ongoing training in dementia, fall‑prevention, and safety</li>
              <li className="flex items-start gap-3"><CheckIcon className="mt-1 h-5 w-5 text-[#1f5f87]"/> Fully insured & supervised by a care manager</li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a href="#contact" className="rounded-xl bg-[#1f5f87] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#194d6d]">Meet Our Team</a>
              <a href="#contact" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#1f5f87] ring-1 ring-[#1f5f87]/30 hover:bg-slate-50">Become a Caregiver</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-tr from-white to-[#e6f0f7] p-1 shadow-xl">
              <div className="h-full w-full rounded-3xl bg-white p-6 grid grid-cols-3 gap-4">
                <img src="/caregiver-2.png" className="rounded-2xl border border-slate-200 h-28 w-full object-cover" alt="Caregiver with senior" />
                <img src="/caregiver-3.png" className="rounded-2xl border border-slate-200 h-28 w-full object-cover" alt="Caregiver helping senior" />
                <img src="/caregiver-4.png" className="rounded-2xl border border-slate-200 h-28 w-full object-cover" alt="Smiling senior" />
                <div className="rounded-2xl border-dashed border-2 border-[#1f5f87]/30 flex items-center justify-center text-slate-500 col-span-3 h-28">Team photos here</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials(){
  return (
    <section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">What families say</h2>
          <p className="mt-3 text-slate-600">Real words from clients who trust Relia.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Testimonial quote="Relia made it possible for mom to stay at home. The caregiver is a perfect match." name="Priya R."/>
          <Testimonial quote="Professional, kind, and always on time. Communication is outstanding." name="Michael S."/>
          <Testimonial quote="They adjusted the schedule quickly when dad’s needs changed—so helpful!" name="Sandra W."/>
        </div>
      </div>
    </section>
  )
}

function CTA(){
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -inset-x-10 -bottom-16 h-64 bg-gradient-to-t from-[#cfe0ec] to-transparent blur-2xl"/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-[#0f3550] text-white px-8 py-10 shadow-xl grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold">Ready to get started?</h3>
            <p className="mt-2 text-white/80">Book a free in‑home assessment today. We’ll craft a plan within 48 hours.</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href="#contact" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0f3550] hover:bg-slate-100">Request Care</a>
            <a href="tel:+14045550123" className="rounded-xl bg-[#1f5f87] px-6 py-3 text-sm font-semibold text-white hover:bg-[#194d6d]">Call (404) 555‑0123</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact(){
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Request Care</h2>
            <p className="mt-3 text-slate-600">Tell us a bit about your needs and a care manager will call you shortly.</p>
            <form onSubmit={(e)=>{ e.preventDefault(); alert("Thanks! We'll reach out shortly."); }}
             className="mt-8 grid gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full name</label>
                <input id="name" required className="mt-1 w-full rounded-xl border-slate-300 focus:border-[#1f5f87] focus:ring-[#1f5f87]" placeholder="Jane Doe"/>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone</label>
                  <input id="phone" required className="mt-1 w-full rounded-xl border-slate-300 focus:border-[#1f5f87] focus:ring-[#1f5f87]" placeholder="(###) ###‑####"/>
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-slate-700">ZIP code</label>
                  <input id="zip" required className="mt-1 w-full rounded-xl border-slate-300 focus:border-[#1f5f87] focus:ring-[#1f5f87]" placeholder="00000"/>
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700">Service type</label>
                <select id="service" className="mt-1 w-full rounded-xl border-slate-300 focus:border-[#1f5f87] focus:ring-[#1f5f87]">
                  <option>Personal Care</option>
                  <option>Companionship</option>
                  <option>Dementia Care</option>
                  <option>Respite Care</option>
                  <option>Transportation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-slate-700">Notes</label>
                <textarea id="notes" rows={4} className="mt-1 w-full rounded-xl border-slate-300 focus:border-[#1f5f87] focus:ring-[#1f5f87]" placeholder="Share any details we should know"/>
              </div>
              <button className="inline-flex items-center justify-center rounded-xl bg-[#1f5f87] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#194d6d]">Submit</button>
            </form>
          </div>
          <div className="lg:pl-12">
            <div className="rounded-3xl border border-slate-200 bg-[#f7fbff] p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Contact</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex items-center gap-3"><PhoneIcon className="h-5 w-5 text-[#1f5f87]"/> (404) 555‑0123</li>
                <li className="flex items-center gap-3"><MailIcon className="h-5 w-5 text-[#1f5f87]"/> hello@relia.care</li>
                <li className="flex items-center gap-3"><PinIcon className="h-5 w-5 text-[#1f5f87]"/> Serving your city & nearby areas</li>
                <li className="flex items-center gap-3"><ClockIcon className="h-5 w-5 text-[#1f5f87]"/> Office hours: Mon–Fri 9am–6pm • 24/7 on‑call</li>
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                  <p className="text-sm text-slate-500">Avg. start time</p>
                  <p className="text-2xl font-bold text-slate-900">48 hours</p>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                  <p className="text-sm text-slate-500">Client satisfaction</p>
                  <p className="text-2xl font-bold text-slate-900">98%</p>
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-white p-4 ring-1 ring-slate-200 text-sm text-slate-600">
                *Relia provides non‑medical home care. For medical or emergency needs, call 911 or contact a licensed clinician.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SiteFooter(){
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-7 w-7 text-[#1f5f87]"/>
            <span className="text-xl font-semibold text-[#1f5f87]">relia</span>
          </div>
          <p className="mt-3 text-sm text-slate-600 max-w-sm">Premium, compassionate home care that keeps life comfortable at home.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#services" className="hover:text-[#1f5f87]">Services</a></li>
              <li><a href="#why" className="hover:text-[#1f5f87]">Why Relia</a></li>
              <li><a href="#caregivers" className="hover:text-[#1f5f87]">Caregivers</a></li>
              <li><a href="#contact" className="hover:text-[#1f5f87]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-[#1f5f87]">FAQ</a></li>
              <li><a href="#" className="hover:text-[#1f5f87]">Caregiver Jobs</a></li>
              <li><a href="#" className="hover:text-[#1f5f87]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#1f5f87]">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="md:text-right">
          <a href="#contact" className="inline-flex items-center rounded-xl bg-[#1f5f87] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#194d6d]">Get Started</a>
          <p className="mt-4 text-sm text-slate-500">© {new Date().getFullYear()} Relia Home Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// --- Icons & small components ---
function Logo({className}){
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M32 57c-13-8.6-22-15.3-22-26.4C10 23 15.7 17 23 17c5.5 0 8.3 3.1 9 4 0.7-0.9 3.5-4 9-4 7.3 0 13 6 13 13.6C54 41.7 45 48.4 32 57Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 35V27l10-8 10 8v8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="29" y="33" width="6" height="6" fill="currentColor"/>
    </svg>
  );
}
function CheckIcon({className}){
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
function StarIcon({className}){
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.402 8.166L12 18.896l-7.336 3.866 1.402-8.166L.132 9.21l8.2-1.192z"/>
    </svg>
  )
}
function HeartHomeIcon({className}){
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s-7-4.35-7-9a5 5 0 0 1 9-3.54A5 5 0 0 1 19 12c0 4.65-7 9-7 9z"/>
      <path d="M8 13V9l4-3 4 3v4"/>
      <rect x="11" y="12" width="2" height="2"/>
    </svg>
  )
}
function HandsIcon(){
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#1f5f87]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 11s-1.5-2-3-2-3 1.5-3 3 1 3 3 3h3v-4zM15 11s1.5-2 3-2 3 1.5 3 3-1 3-3 3h-3v-4z"/>
    </svg>
  )
}
function PillIcon(){
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#1f5f87]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="8" width="8" height="13" rx="4"/>
      <rect x="13" y="3" width="8" height="13" rx="4"/>
      <path d="M13 9h8"/>
    </svg>
  )
}
function BrainIcon(){
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#1f5f87]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 6a3 3 0 10-3 3 3 3 0 003 3v6a3 3 0 003 3"/>
      <path d="M16 6a3 3 0 113 3 3 3 0 01-3 3v6a3 3 0 01-3 3"/>
    </svg>
  )
}
function CalendarIcon(){
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#1f5f87]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <path d="M16 2v4M8 2v4M3 10h18"/>
    </svg>
  )
}
function CarIcon(){
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#1f5f87]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 13l2-5h14l2 5v6H3z"/>
      <circle cx="7" cy="19" r="2"/>
      <circle cx="17" cy="19" r="2"/>
    </svg>
  )
}
function ShieldIcon(){
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#1f5f87]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}
function ClipboardIcon(){
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#1f5f87]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="8" y="3" width="8" height="4" rx="1"/>
      <rect x="4" y="7" width="16" height="14" rx="2"/>
      <path d="M8 12h8M8 16h6"/>
    </svg>
  )
}
function HeadsetIcon(){
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#1f5f87]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 12a8 8 0 0116 0v5a3 3 0 01-3 3h-1v-6h4"/>
      <path d="M4 17h4v6H7a3 3 0 01-3-3v-3z"/>
    </svg>
  )
}
function PhoneIcon({className}){return(<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.46-1.13a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z"/></svg>)}
function MailIcon({className}){return(<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>)}
function PinIcon({className}){return(<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>)}
function ClockIcon({className}){return(<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>)}

function ServiceCard({title, icon, items}){
  return (
    <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8f1f7] text-[#1f5f87] ring-1 ring-[#1f5f87]/20">{icon}</div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {items.map((t)=> <li key={t} className="flex items-start gap-2"><CheckIcon className="mt-1 h-4 w-4 text-[#1f5f87]"/> {t}</li>)}
      </ul>
    </div>
  );
}
function WhyCard({title, desc, icon}){return null}
function StepCard({number, title, desc}){
  return (
    <li className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 grid place-items-center rounded-2xl bg-[#1f5f87] text-white font-bold">{number}</div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-slate-600">{desc}</p>
    </li>
  );
}
function Testimonial({quote, name}){
  return (
    <figure className="rounded-3xl bg-[#f7f9fb] p-6 ring-1 ring-slate-200 shadow-sm">
      <blockquote className="text-slate-700">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-slate-900">— {name}</figcaption>
    </figure>
  );
}
function HeroIllustration(){
  return (
    <svg viewBox="0 0 420 300" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a caregiver assisting a senior at home">
      <defs>
        <linearGradient id="g1" x1="0" x2="1"><stop offset="0%" stopColor="#e6f0f7"/><stop offset="100%" stopColor="#ffffff"/></linearGradient>
      </defs>
      <rect x="0" y="0" width="420" height="300" rx="24" fill="url(#g1)"/>
      <circle cx="340" cy="70" r="40" fill="#cfe0ec"/>
      <rect x="60" y="150" width="300" height="120" rx="16" fill="#eef4f8" stroke="#d1d9e0"/>
      <rect x="80" y="100" width="120" height="70" rx="12" fill="#e1edf5" stroke="#c8d6e2"/>
      <rect x="95" y="115" width="35" height="35" rx="6" fill="#ffffff" stroke="#c8d6e2"/>
      <rect x="135" y="115" width="50" height="8" rx="4" fill="#a7c3d8"/>
      <rect x="135" y="130" width="60" height="8" rx="4" fill="#a7c3d8"/>
      <rect x="135" y="145" width="40" height="8" rx="4" fill="#a7c3d8"/>
      <circle cx="260" cy="190" r="36" fill="#d9e8f2" stroke="#c8d6e2"/>
      <circle cx="245" cy="185" r="12" fill="#ffffff"/>
      <rect x="270" y="175" width="55" height="12" rx="6" fill="#a7c3d8"/>
      <rect x="270" y="193" width="45" height="10" rx="5" fill="#a7c3d8"/>
      <rect x="270" y="209" width="35" height="8" rx="4" fill="#a7c3d8"/>
    </svg>
  )
}
