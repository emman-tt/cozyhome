import { useEffect, useRef, useState } from "react";
import { isStatic } from "../anim";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import avatar1 from "../assets/avatar-1.jpg";
import avatar2 from "../assets/avatar-2.jpg";
import avatar3 from "../assets/avatar-3.jpg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const QUOTES = [
  {
    name: "Emily Johnson",
    text: "I recently ordered a few decorative items for my living room, and I couldn’t be happier with my purchase.",
    img: avatar1,
    offset: "md:ml-12",
  },
  {
    name: "Helga Kuts",
    text: "This store has become my go-to for stylish home essentials.",
    img: avatar2,
    offset: "",
  },
  {
    name: "Andrew Jeff",
    text: "I absolutely love the quality of the home decor I bought here! The candles and vases look even better in person.",
    img: avatar3,
    offset: "md:ml-6",
  },
];

function QuoteMark({ active }) {
  return (
    <svg
      viewBox="0 0 40 30"
      className={`size-7 transition-colors duration-500 ${active ? "fill-salmon" : "fill-stone-300"}`}
    >
      <path d="M0 30V16C0 7 5 1 15 0l2 6c-6 1.5-9 4.5-9.5 9H16v15H0Zm24 0V16c0-9 5-15 15-16l2 6c-6 1.5-9 4.5-9.5 9H40v15H24Z" />
    </svg>
  );
}

export default function Testimonials() {
  const scope = useRef(null);
  const [active, setActive] = useState(1);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % QUOTES.length),
      3500,
    );
    return () => clearInterval(id);
  }, []);

  useGSAP(
    () => {
      if (isStatic()) return;

      gsap.set(".tst-reveal", { y: 40, opacity: 0 });
      gsap.set(".tst-card", { x: 60, opacity: 0 });

      gsap.to(".tst-reveal", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: { trigger: scope.current, start: "top 70%" },
      });
      gsap.to(".tst-card", {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ".tst-list", start: "top 78%" },
      });
    },
    { scope },
  );

  return (
    <section id="testimonials" ref={scope} className="bg-white">
      <div className="mx-auto grid max-w-[1200px] gap-14 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <div>
          <h2 className="tst-reveal font-display text-5xl leading-[1.05] md:text-7xl">
            What Our
            <br />
            Customers Say
          </h2>
          <p className="tst-reveal mt-8 max-w-md text-[15px] leading-7 text-ink/60">
            Stories of comfort, elegance, and style told by those who have
            brought our details into their own homes. Each piece becomes a part
            of their story, adding warmth and character to every space.
          </p>
          <button
            type="button"
            className="tst-reveal mt-10 inline-flex cursor-pointer items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
          >
            Read More
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

        <div className="tst-list flex flex-col justify-center gap-5">
          {QUOTES.map((quote, i) => {
            const isActive = i === active;
            return (
              <figure
                key={quote.name}
                onMouseEnter={() => setActive(i)}
                className={`tst-card flex items-start gap-4 border border-stone-200 bg-white p-5 transition-all duration-500 ${quote.offset} ${
                  isActive
                    ? "border-l-4 border-l-salmon shadow-[0_10px_30px_rgba(34,12,9,0.06)]"
                    : "opacity-90"
                }`}
              >
                <img
                  src={quote.img}
                  alt={quote.name}
                  loading="lazy"
                  decoding="async"
                  className="size-14 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <figcaption className="font-semibold text-ink">
                    {quote.name}
                  </figcaption>
                  <blockquote className="mt-1 text-sm leading-6 text-ink/60">
                    {quote.text}
                  </blockquote>
                </div>
                <QuoteMark active={isActive} />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
