const FOOTER_LINKS = [
  { label: "HOME", href: "#top" },
  { label: "SHOP", href: "#categories" },
  { label: "ABOUT", href: "#about" },
  { label: "BESTSELLERS", href: "#top-selling" },
  { label: "BEST PRODUCT", href: "#best-product" },
  { label: "PRIVACY POLICY", href: "#top" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="size-5">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7h2.5Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M21.5 8s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.8 4.8 12 4.8 12 4.8s-3.8 0-6.6.2c-.4.1-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.3 9.7 2.3 11.5v1c0 1.7.2 3.5.2 3.5s.2 1.5.8 2.1c.8.8 1.8.8 2.3.9 1.6.2 6.4.2 6.4.2s3.8 0 6.6-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.5v-1c0-1.8-.2-3.5-.2-3.5ZM10 14.9V9.5l5.2 2.7-5.2 2.7Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-stone-100 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 pb-12 pt-20 text-center md:pt-28">
        <a href="#top" className="font-display text-4xl text-ink md:text-5xl">
          CozyHome
        </a>

        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium tracking-[0.18em] text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#top"
            aria-label="Instagram"
            className="flex size-11 items-center justify-center rounded-full border border-stone-300 text-ink/70 transition-all hover:border-ink hover:bg-ink hover:text-white"
          >
            <InstagramIcon />
          </a>
          <a
            href="#top"
            aria-label="Facebook"
            className="flex size-11 items-center justify-center rounded-full border border-stone-300 text-ink/70 transition-all hover:border-ink hover:bg-ink hover:text-white"
          >
            <FacebookIcon />
          </a>
          <a
            href="#top"
            aria-label="YouTube"
            className="flex size-11 items-center justify-center rounded-full border border-stone-300 text-ink/70 transition-all hover:border-ink hover:bg-ink hover:text-white"
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
