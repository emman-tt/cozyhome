import { useRef, useState } from "react";
import { isStatic } from "../anim";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import flora from "../assets/flora.jpg";
import thumb1 from "../assets/bouquet4.jpg";
import thumb2 from "../assets/bouquet5.jpg";
import thumb3 from "../assets/bouquet6.jpg";
import cat1 from "../assets/cat-1.jpg";
import about2 from "../assets/about-2.jpg";
import cat3 from "../assets/cat-3.jpg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SWATCHES = [
  { color: "pink", hue: 220, thumb: thumb1 },
  { color: "yellow", hue: 300, thumb: thumb2 },
  { color: "red", hue: 120, thumb: thumb3 },
];

const INLINE_WORDS = [
  { img: cat1, alt: "vase" },
  { img: about2, alt: "candles" },
  { img: cat3, alt: "cushions" },
];

export default function BestProduct() {
  const scope = useRef(null);
  const imgRef = useRef(null);
  const [selected, setSelected] = useState(0);

  useGSAP(
    () => {
      if (isStatic()) return;

      // group: label, headline, copy, swatches reveal together
      gsap.set(".bp-reveal", { y: 40, opacity: 0 });
      // image enters blurred, sharpens to clear
      gsap.set(imgRef.current, { filter: "blur(16px)" });

      gsap.to(".bp-reveal", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: { trigger: scope.current, start: "top 70%" },
      });
      // single element via ref
      gsap.to(imgRef.current, {
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: scope.current, start: "top 60%" },
      });
    },
    { scope },
  );

  const hue = SWATCHES[selected].hue;

  return (
    <section id="best-product" ref={scope} className="bg-white">
      <div className="mx-auto max-w-300 px-6 py-20 md:px-10 md:py-28">
        <p className="bp-reveal text-center text-sm font-medium tracking-wide text-terra">
          Explore Our Products
        </p>

        <p className="bp-reveal mx-auto mt-6 max-w-4xl text-balance text-center text-3xl leading-snug text-[#b3a89c] md:text-5xl">
          From stylish vases
          <img
            src={INLINE_WORDS[0].img}
            alt=""
            loading="lazy"
            decoding="async"
            className="mx-2 inline-block size-[0.85em] rounded-full object-cover align-[-0.1em]"
          />
          to cozy candles
          <img
            src={INLINE_WORDS[1].img}
            alt=""
            loading="lazy"
            decoding="async"
            className="mx-2 inline-block size-[0.85em] rounded-full object-cover align-[-0.1em]"
          />
          and elegant cushions
          <img
            src={INLINE_WORDS[2].img}
            alt=""
            loading="lazy"
            decoding="async"
            className="mx-2 inline-block size-[0.85em] rounded-full object-cover align-[-0.1em]"
          />
        </p>

        <div className="mt-14 grid items-center gap-12 md:mt-20 md:grid-cols-2 md:gap-16">
          <div ref={imgRef} className="relative mx-auto w-full max-w-115">
            <img
              src={SWATCHES[selected].thumb}
              alt="Flora Bag Vase"
              loading="lazy"
              decoding="async"
              className="aspect-76/82 w-full object-cover"
            />
            <div className="absolute -right-5 top-1/2 flex -translate-y-1/2 flex-col gap-3">
              {SWATCHES.map((swatch, i) =>
                swatch.thumb ? (
                  <button
                    key={swatch.color}
                    type="button"
                    aria-label={`Preview color ${i + 1}`}
                    onClick={() => setSelected(i)}
                    className={`size-14 cursor-pointer overflow-hidden rounded-full border-2 transition-all duration-300 ${
                      selected === i
                        ? "scale-110 border-ink shadow-lg"
                        : "border-white hover:scale-105"
                    }`}
                  >
                    <img
                      src={swatch.thumb}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover"
                    />
                  </button>
                ) : null,
              )}
            </div>
          </div>

          <div>
            <h3 className="bp-reveal text-3xl font-semibold text-ink md:text-4xl">
              Flora Bag Flower
            </h3>
            <p className="bp-reveal mt-3 text-2xl font-bold text-ink">$35.50</p>
            <p className="bp-reveal mt-5 max-w-lg text-[15px] leading-7 text-ink/60">
              This vase features a soft pouch-like shape tied gently at the top,
              giving it a unique and cozy character. Its smooth surface and
              rounded form create a sense of elegance and harmony. Designed to
              hold lush bouquets, it highlights the natural beauty of flowers
              without overpowering them.
            </p>

            <p className="bp-reveal mt-8 font-semibold text-ink">
              Choose your color:
            </p>
            <div className="bp-reveal mt-4 flex items-center gap-4">
              {SWATCHES.map((swatch, i) => (
                <button
                  key={swatch.color}
                  type="button"
                  aria-label={`Color ${i + 1}`}
                  onClick={() => setSelected(i)}
                  className={`size-10 cursor-pointer rounded-full transition-all duration-300 ${
                    selected === i
                      ? "ring-2 ring-ink ring-offset-4 ring-offset-white"
                      : "hover:scale-110"
                  }`}
                  style={{ backgroundColor: swatch.color }}
                />
              ))}
            </div>

            <button
              type="button"
              className="bp-reveal mt-10 inline-flex cursor-pointer items-center gap-3 rounded-full bg-ink px-9 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
            >
              Add to Cart
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
