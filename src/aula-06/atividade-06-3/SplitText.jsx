import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

export default function SplitText({
  text,
  className,
  tag: Tag = "p",
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  from,
  to,
}) {
  const ref = useRef(null);

  useGSAP(() => {
    const split = new GSAPSplitText(ref.current, { type: "chars" });

    gsap.fromTo(split.chars, from, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
    });
  });

  return (
    <Tag ref={ref} className={className}>
      {text}
    </Tag>
  );
}
