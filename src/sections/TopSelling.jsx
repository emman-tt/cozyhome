import { useRef } from "react";
import { isStatic } from "../anim";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import top1 from "../assets/decor1.jpg";
import top2 from "../assets/decor2.jpg";
import top3 from "../assets/decor3.jpg";
import top4 from "../assets/decor4.jpg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ITEMS = [
  { img: top1, name: "AURA VASES", rating: "4.6", price: "$19.50" },
  { img: top2, name: "AUTUMN CANDLE DECOR", rating: "4.8", price: "$23.00" },
  { img: top3, name: "SUN & MOON DUO", rating: "4.5", price: "$16.40" },
  { img: top4, name: "FACE VASE", rating: "4.9", price: "$18.35" },
];

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5 fill-[#f2c94c]">
      <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-4">
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="12" cy="12" r="8.2" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-4">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function TopSelling() {
  const scope = useRef(null);

  useGSAP(
    () => {
      if (isStatic()) return;

      gsap.set(".ts-reveal", { y: 36, opacity: 0 });
      gsap.set(".ts-card", { y: 70, opacity: 0 });

      gsap.to(".ts-reveal", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: { trigger: scope.current, start: "top 70%" },
      });
      gsap.to(".ts-card", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".ts-grid", start: "top 80%" },
      });
    },
    { scope },
  );

  return (
    <section id="top-selling" ref={scope} className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <h2 className="ts-reveal font-display text-5xl leading-none md:text-7xl">
            Top Selling Items
          </h2>
          <p className="ts-reveal max-w-xs text-sm leading-6 text-ink/60 md:justify-self-end">
            Bring timeless details into every living space, feel the comfort
          </p>
        </div>

        <div className="ts-grid mt-12 grid gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <article
              key={item.name}
              className="ts-card group relative aspect-[3/4.2] cursor-pointer overflow-hidden bg-gradient-to-b from-[#e4e4e4] to-[#ababab]"
            >
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/25 to-transparent" />

              <div className="absolute left-4 top-4 text-white">
                <p className="flex items-center gap-1.5 text-xs font-medium">
                  <Star />
                  {item.rating}
                </p>
                <h3 className="mt-2 text-sm font-semibold tracking-wide">{item.name}</h3>
                <p className="mt-1 text-xl font-bold">{item.price}</p>
              </div>

              <div className="absolute bottom-4 right-4 flex gap-2 opacity-90 transition-opacity group-hover:opacity-100">
                <button
                  type="button"
                  aria-label={`Quick view ${item.name}`}
                  className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-white text-ink shadow-md transition-transform hover:scale-110"
                >
                  <EyeIcon />
                </button>
                <button
                  type="button"
                  aria-label={`Open ${item.name}`}
                  className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-ink text-white shadow-md transition-transform hover:scale-110"
                >
                  <ArrowIcon />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
