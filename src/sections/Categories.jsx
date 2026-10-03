import { useRef } from "react";
import { isStatic } from "../anim";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import cat1 from "../assets/decor9.jpg";
import cat2 from "../assets/decor10.jpg";
import cat3 from "../assets/decor11.jpg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CATEGORIES = [
  {
    img: cat1,
    name: "CANDLES & VASES",
    num: "/01",
    desc: "Unique pieces to highlight your interior",
    ratio: "aspect-[318/310]",
  },
  {
    img: cat2,
    name: "KIDS’ ROOM",
    num: "/02",
    desc: "Adorable accents to brighten little cozy spaces",
    ratio: "aspect-[318/272]",
  },
  {
    img: cat3,
    name: "DECORATIVE PILLOWS",
    num: "/03",
    desc: "Beautiful textures for a welcoming atmosphere",
    ratio: "aspect-[318/392]",
  },
];

export default function Categories() {
  const scope = useRef(null);

  useGSAP(
    () => {
      if (isStatic()) return;

      gsap.set(".cat-reveal", { y: 36, opacity: 0 });
      gsap.set(".cat-card", { y: 70 });
      // images enter blurred, sharpen to clear — no opacity fade
      gsap.set(".cat-img", { filter: "blur(16px)" });

      gsap.to(".cat-reveal", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: { trigger: scope.current, start: "top 70%" },
      });
      gsap.to(".cat-card", {
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.14,
        scrollTrigger: { trigger: ".cat-grid", start: "top 78%" },
      });
      gsap.to(".cat-img", {
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.14,
        scrollTrigger: { trigger: ".cat-grid", start: "top 78%" },
      });
    },
    { scope },
  );

  return (
    <section id="categories" ref={scope} className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <h2 className="cat-reveal font-display text-5xl leading-none md:text-7xl">
            Product Categories
          </h2>
          <div className="cat-reveal md:justify-self-end">
            <p className="max-w-xs text-sm leading-6 text-ink/60">
              Timeless thoughtful details that create warmth, comfort, and style
            </p>
            <a
              href="#categories"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-terra"
            >
              View all Categories
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="size-4"
              >
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
        </div>

        <div className="cat-grid mt-12 grid gap-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.name}
              href="#top-selling"
              className="cat-card group block cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.name}
                  loading="lazy"
                  decoding="async"
                  className={`cat-img ${cat.ratio} w-full object-cover transition-transform duration-700 group-hover:scale-105`}
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="text-lg font-semibold tracking-wide text-ink">
                  {cat.name}
                </h3>
                <span className="text-lg text-ink/45">{cat.num}</span>
              </div>
              <p className="mt-2 max-w-[16rem] text-sm leading-6 text-ink/55">
                {cat.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
