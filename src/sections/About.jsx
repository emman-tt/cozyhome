import { useRef } from "react";
import { isStatic } from "../anim";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import about1 from "../assets/decor5.jpg";
import about2 from "../assets/decor6.jpg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function About() {
  const scope = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useGSAP(
    () => {
      if (isStatic()) return;

      // hidden states first, then explicit to() targets — immune to
      // ScrollTrigger refreshes re-recording from() end values
      gsap.set(".about-reveal", { y: 40, opacity: 0 });
      gsap.set(img1Ref.current, { clipPath: "inset(0% 100% 0% 0%)" });
      gsap.set(img2Ref.current, { clipPath: "inset(0% 0% 0% 100%)" });

      gsap.to(".about-reveal", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: { trigger: scope.current, start: "top 70%" },
      });
      gsap.to(img1Ref.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.2,
        ease: "power4.inOut",
        scrollTrigger: { trigger: scope.current, start: "top 65%" },
      });
      gsap.to(img2Ref.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.2,
        ease: "power4.inOut",
        scrollTrigger: { trigger: scope.current, start: "top 65%" },
      });
    },
    { scope },
  );

  return (
    <section id="about" ref={scope} className="bg-white">
      {/* maroon band carried over from the hero transition */}
      <div className="h-14 w-full bg-maroon md:h-20" aria-hidden />

      <div className="mx-auto max-w-300 px-6 py-20 md:px-10 md:py-28">
        <h2 className="about-reveal font-display text-5xl leading-none md:text-7xl">
          About Us
        </h2>

        <div className="mt-10 grid gap-12 md:mt-14 md:grid-cols-2 md:gap-20">
          <div>
            <p className="about-reveal max-w-md text-[15px] leading-7 text-ink/60">
              Inspired by the beauty of everyday living, we craft decor that
              blends elegance and comfort
            </p>
            <img
              ref={img1Ref}
              src={about1}
              alt="Decorative ceramic vases"
              loading="lazy"
              decoding="async"
              className="mt-10 aspect-88/68 w-full object-cover"
            />
          </div>
          <div>
            <img
              ref={img2Ref}
              src={about2}
              alt="Scented candles"
              loading="lazy"
              decoding="async"
              className="aspect-88/65 w-full object-cover"
            />
            <p className="about-reveal mt-8 max-w-md text-[15px] leading-7 text-ink/60">
              Our mission is to fill your home with thoughtful designs that
              create harmony, comfort, and effortless style
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
