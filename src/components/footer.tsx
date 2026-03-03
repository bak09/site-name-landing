import Container from "./ui/container";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-stroke/60 py-10">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-xs font-semibold tracking-[0.25em] text-white/90">SITE NAME</div>
            <p className="mt-3 text-sm text-white/65">
              AI-based blockchain landing. Next.js + Tailwind + semantic HTML + performance.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <div className="text-sm font-semibold">Navigation</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a className="hover:text-white" href="#smart-contracts">Smart Contracts</a></li>
              <li><a className="hover:text-white" href="#services">Services</a></li>
              <li><a className="hover:text-white" href="#solutions">Solutions</a></li>
              <li><a className="hover:text-white" href="#roadmap">Roadmap</a></li>
              <li><a className="hover:text-white" href="#whitepaper">Whitepaper</a></li>
            </ul>
          </nav>

          <div>
            <div className="text-sm font-semibold">Contacts</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>hello@sitename.ai</li>
              <li>+7 (707) 000-00-00</li>
              <li>Almaty / Remote</li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-white" href="#">Terms of Service</a></li>
              <li><a className="hover:text-white" href="#">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-stroke/60 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Site Name. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="hover:text-white" href="#reviews">Reviews</a>
            <a className="hover:text-white" href="#benefits">Benefits</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
