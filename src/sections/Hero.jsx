import { useRef, useSyncExternalStore } from "react";
import { isStatic } from "../anim";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import teddyImg from "../assets/teddy.jpg";
import flowerImg from "../assets/bouquet.webp";
import circle1 from "../assets/flower1.jpg";
import circle2 from "../assets/flower2.jpg";
import circle3 from "../assets/flower3.jpg";

gsap.registerPlugin(useGSAP);

const LINKS = [
  { label: "HOME", href: "#top" },
  { label: "SHOP", href: "#categories" },
  { label: "ABOUT", href: "#about" },
  { label: "BESTSELLERS", href: "#top-selling" },
  { label: "BEST PRODUCT", href: "#best-product" },
  { label: "CART (0)", href: "#top" },
];

function Nav() {
  return (
    <header className="anim-nav absolute inset-x-[1.1cqw] top-[1.6cqh] z-30 flex items-center justify-between">
      <a
        href="#top"
        className="cursor-pointer text-[1.35cqw] font-bold tracking-tight text-white"
      >
        CozyHome
      </a>

      <nav className="absolute left-1/2 flex -translate-x-1/2 items-center gap-[1.8cqw]">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="group relative cursor-pointer text-[0.82cqw] font-medium tracking-[0.14cqw] text-white/75 transition-colors hover:text-white"
          >
            {link.label}
            <span className="absolute -bottom-[0.7cqh] left-0 h-[0.1cqw] w-0 bg-ink transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-[1.4cqw] text-white">
        <button
          type="button"
          aria-label="Search"
          className="cursor-pointer opacity-75 transition-opacity hover:opacity-100"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="size-[1.1cqw]"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Cart"
          className="cursor-pointer opacity-75 transition-opacity hover:opacity-100"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="size-[1.1cqw]"
          >
            <path d="M5 8h14l-1.2 12.2a1.5 1.5 0 0 1-1.5 1.3H7.7a1.5 1.5 0 0 1-1.5-1.3L5 8Z" />
            <path d="M8.5 10.5V7a3.5 3.5 0 0 1 7 0v3.5" />
          </svg>
        </button>
        <a
          href="#best-product"
          className="cursor-pointer rounded-full bg-ink px-[1.7cqw] py-[0.62cqw] text-[0.8cqw] font-semibold tracking-[0.1cqw] text-white transition-transform duration-300 hover:scale-105"
        >
          Start Shopping
        </a>
      </div>
    </header>
  );
}

function Headline({ badgeRef, headlineText }) {
  return (
    <>
      <h1
        ref={headlineText}
        className="absolute 
       top-[22.8cqh] z-10 flex  left-70
       justify-between items-center gap-10 font-display text-[8.2cqw]
        leading-[0.92] tracking-[0.015em] text-white"
      >
        <span className="block overflow-hidden pb-[0.4cqh]">
          <span className="anim-word block">DECOR</span>
        </span>
        <em className="mr-[0.7cqw] align-baseline text-[5.8cqw]  opacity-90">
          &amp;
        </em>
        <span className="block overflow-hidden pb-[0.4cqh]">
          <span className="anim-word block">MORE</span>
        </span>
      </h1>
    </>
  );
}

function LeftColumn({ teddyRef, teddyRefContainer, leftColumn }) {
  return (
    <section className="absolute  left-[7cqw] top-[34.3cqh] z-10 w-[25cqw]">
      <div ref={leftColumn}>
        <p className="anim-fade-up text-[0.95cqw] leading-[1.75] text-white/75">
          Special things for special days — explore our catalogue of home decor
          designed with love and care to make your home warm and beautiful.
        </p>
        <div ref={teddyRefContainer} className="   overflow-hidden w-100">
          <img
            ref={teddyRef}
            src={teddyImg}
            alt="Plush toys and home decor"
            fetchPriority="high"
            decoding="async"
            className="mt-[2.4cqh]  w-auto  object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function CenterPiece({ blockRef, flowerRef }) {
  return (
    <section aria-label="Featured product">
      <div
        ref={blockRef}
        className="absolute left-[38cqw] top-[58.2cqh] h-[35.4cqh] w-[21.6cqw] rounded-[0.55cqw] bg-maroon"
      />

      <img
        ref={flowerRef}
        src={flowerImg}
        alt="Hydrangea bouquet in a ceramic vase"
        fetchPriority="high"
        decoding="async"
        className="absolute left-[38.15cqw] top-[44.9cqh] z-20 h-[47cqh] w-[22.5cqw]"
      />
    </section>
  );
}

const STATS = [
  {
    left: "66cqw",
    top: "50.4cqh",
    count: 1,
    suffix: "+",
    label: "YEARS OF WORK",
  },
  {
    left: "73.4cqw",
    top: "50.4cqh",
    count: 654,
    suffix: "K",
    label: "SUCCESFUL DELIVERIES",
  },
  {
    left: "80.8cqw",
    top: "50.4cqh",
    count: 48,
    suffix: "K+",
    label: "HAPPY CUSTOMERS",
  },
];

function RightColumn({ arrowRef }) {
  return (
    <section aria-label="Store highlights" className="absolute inset-0 z-10">
      {STATS.map((s) => (
        <div
          key={s.label}
          className="anim-stat absolute w-[6.4cqw]"
          style={{ left: s.left, top: s.top }}
        >
          <p className="text-[1.9cqw] font-semibold leading-none text-white">
            <span data-count={s.count} data-suffix={s.suffix}>
              0{s.suffix}
            </span>
          </p>
          <p className="mt-[0.55cqh] text-[0.68cqw] font-medium uppercase leading-[1.45] tracking-[0.1cqw] text-white/60">
            {s.label}
          </p>
        </div>
      ))}

      <img
        src={circle1}
        alt="Plant in a terracotta pot"
        className="anim-circle absolute left-[66cqw] top-[56.4cqh] z-10 size-[7.5cqw] rounded-full object-cover [clip-path:inset(0_50%_0_0)]"
      />
      <img
        src={circle2}
        alt="Red ceramic vase"
        className="anim-circle absolute left-[73.4cqw] top-[56.4cqh] z-10 size-[7.5cqw] rounded-full object-cover [clip-path:inset(0_50%_0_0)]"
      />
      <img
        src={circle3}
        alt="Candle and decor objects"
        className="anim-circle absolute left-[80.8cqw] top-[56.4cqh] z-10 size-[7.5cqw] rounded-full object-cover"
      />

      <p className="anim-fade-up absolute left-[66.6cqw] top-[75.2cqh] w-[24cqw] text-right text-[0.95cqw] leading-[1.75] text-white/80">
        Our shop is a cozy place where every decor piece is chosen with love and
        care to make your home warm and beautiful.
      </p>

      <div className="absolute left-[75.6cqw] top-[83.6cqh] flex items-center gap-[1.3cqw]">
        <span className="anim-scroll text-[0.72cqw] font-semibold tracking-[0.32cqw] text-white/70">
          SCROLL DOWN
        </span>
        <button
          type="button"
          aria-label="Scroll down"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="anim-scroll flex size-[4.3cqw] cursor-pointer items-center justify-center rounded-full bg-ink text-white transition-transform duration-300 hover:scale-110"
        >
          <svg
            ref={arrowRef}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="size-[1.5cqw]"
          >
            <path d="m5 9 7 7 7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

function Blobs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute left-[-12vw] top-[18vh] h-[72vh] w-[58vw] rounded-full opacity-60 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, #c97168, transparent)",
        }}
      />
      <div
        className="absolute right-[-10vw] bottom-[-18vh] h-[78vh] w-[56vw] rounded-full opacity-50 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, #d69089, transparent)",
        }}
      />
      <div
        className="absolute left-[28vw] top-[-22vh] h-[52vh] w-[46vw] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, #d29287, transparent)",
        }}
      />
    </div>
  );
}

function useIsMobile() {
  const subscribe = (cb) => {
    const mq = window.matchMedia("(max-width: 767px)");
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  };
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia("(max-width: 767px)").matches,
  );
}

function MobileHero({ blockRef }) {
  return (
    <div className="relative flex h-full flex-col px-5 pb-7 pt-5">
      <header className="anim-nav relative z-30 flex items-center justify-between">
        <a href="#top" className="text-lg font-bold tracking-tight text-white">
          CozyHome
        </a>
        <a
          href="#best-product"
          className="rounded-full bg-ink px-4 py-2 text-xs font-semibold tracking-wide text-white"
        >
          Start Shopping
        </a>
      </header>

      <h1 className="relative z-20 mt-7 text-center font-display text-6xl leading-[0.95] tracking-[0.01em] text-white">
        <span className="block overflow-hidden pb-1">
          <span className="anim-word block">DECOR</span>
        </span>
        <span className="block overflow-hidden pb-1">
          <span className="anim-word block">&amp; MORE</span>
        </span>
      </h1>

      <div className="relative mt-5 flex flex-1 items-start justify-center">
        {/* maroon block behind the bouquet — blockRef drives the explosion transition */}
        <div
          ref={blockRef}
          className="absolute left-1/2 top-[16svh] h-[26svh] w-[62vw] -translate-x-1/2 rounded-md bg-maroon"
        />
        <img
          src={flowerImg}
          alt="Bouquet in a ceramic vase"
          fetchPriority="high"
          decoding="async"
          className="anim-fade-up relative z-10 h-[32svh] w-auto object-contain"
        />
      </div>

      <div className="relative z-10 mt-6 grid grid-cols-3 gap-3 text-center">
        {STATS.map((s) => (
          <div key={s.label} className="anim-stat">
            <p className="text-2xl font-semibold leading-none text-white">
              <span data-count={s.count} data-suffix={s.suffix}>
                0{s.suffix}
              </span>
            </p>
            <p className="mt-1.5 text-[10px] font-medium uppercase leading-tight tracking-wider text-white/60">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-auto flex items-center justify-center gap-3 pt-6">
        <span className="anim-scroll text-[10px] font-semibold tracking-[0.3em] text-white/70">
          SCROLL DOWN
        </span>
        <button
          type="button"
          aria-label="Scroll down"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="anim-scroll flex size-10 items-center justify-center rounded-full bg-ink text-white"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="size-4"
          >
            <path d="m5 9 7 7 7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Hero() {
  const scope = useRef(null);
  const badgeRef = useRef(null);
  const headlineText = useRef(null);
  const teddyRef = useRef(null);
  const leftColumn = useRef(null);
  const centerContainer = useRef(null);
  const teddyRefContainer = useRef(null);
  const blockRef = useRef(null);
  const flowerRef = useRef(null);
  const arrowRef = useRef(null);
  const isMobile = useIsMobile();

  useGSAP(
    () => {
      if (isStatic()) return;

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // groups (staggered / simultaneous sets) stay class-selected
      tl.from(
        ".anim-nav > *",
        { y: -26, opacity: 0, duration: 0.7, stagger: 0.06 },
        0.1,
      )
        .from(
          ".anim-word",
          { yPercent: 115, duration: 1.1, stagger: 0.14 },
          0.25,
        )
        .from(
          ".anim-fade-up",
          { y: 34, opacity: 0, duration: 0.9, stagger: 0.1 },
          0.9,
        )
        .from(
          ".anim-circle",
          { scale: 0, duration: 0.9, ease: "back.out(2.2)", stagger: 0.12 },
          1.15,
        )
        .from(
          ".anim-stat",
          { y: 22, opacity: 0, duration: 0.7, stagger: 0.12 },
          1.3,
        )
        .from(
          ".anim-scroll",
          { scale: 0, duration: 0.7, ease: "back.out(2)" },
          1.6,
        );

      // block explosion runs on both layouts
      tl.to(
        blockRef.current,
        {
          width: "300em",
          x: -2000,
          y: -1200,
          scale: 4,
          height: "140em",
          rotateZ: "48deg",
          duration: 5,
          ease: "none",
        },
        0.3,
      );

      // remaining ref-targeted tweens — desktop stage only
      if (!isMobile)
        tl.to(
          teddyRefContainer.current,
          {
            width: "90%",
            duration: 1.8,
            ease: "power3.inOut",
          },
          0.7,
        )
          .to(
            leftColumn.current,
            {
              y: 220,
              x: -100,
              duration: 2,
              ease: "power4.inOut",
            },
            0.3,
          )
          .to(
            teddyRef.current,
            {
              scale: 1.5,
              duration: 1.5,
              ease: "power4.inOut",
            },
            1,
          )
          .to(
            headlineText.current,
            {
              y: -20,
              x: -40,
              scale: 1.3,
              duration: 2,
              ease: "back.inOut",
            },
            0.7,
          )
          .to(
            flowerRef.current,
            {
              y: -100,
              scale: 1.5,
              rotate: -6,
              duration: 3.1,
              ease: "back.out(1.5)",
            },
            0.7,
          );

      if (arrowRef.current)
        gsap.to(arrowRef.current, {
          y: 4,
          duration: 0.9,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });

      // count-up numbers
      scope.current.querySelectorAll("[data-count]").forEach((el) => {
        const end = Number(el.dataset.count);
        const suffix = el.dataset.suffix ?? "";
        const state = { v: 0 };
        tl.to(
          state,
          {
            v: end,
            duration: 1.4,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = `${Math.round(state.v)}${suffix}`;
            },
          },
          1.35,
        );
      });

      // gentle idle motion after the intro settles
      // gsap.to(flowerRef.current, {
      //   y: -5,
      //   duration: 3.2,
      //   yoyo: true,
      //   repeat: -1,
      //   ease: "sine.inOut",
      //   delay: 2.6,
      // });
    },
    { scope, dependencies: [isMobile] },
  );

  return (
    <section
      id="top"
      ref={scope}
      className="relative h-svh w-full overflow-hidden bg-salmon text-white md:h-screen"
    >
      <Blobs />
      {isMobile ? (
        <MobileHero blockRef={blockRef} />
      ) : (
        /* design stage: 1473×1045 canvas, scales to fit any viewport */
        <div className="@container absolute left-1/2 top-1/2 aspect-1473/1045 w-[min(100vw,141.2vh)] -translate-x-1/2 -translate-y-1/2">
          <Nav />
          <Headline badgeRef={badgeRef} headlineText={headlineText} />
          <LeftColumn
            teddyRef={teddyRef}
            leftColumn={leftColumn}
            teddyRefContainer={teddyRefContainer}
          />
          <CenterPiece blockRef={blockRef} flowerRef={flowerRef} />
          <RightColumn arrowRef={arrowRef} />
        </div>
      )}
    </section>
  );
}
