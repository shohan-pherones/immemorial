import { useEffect } from "react";
import gsap from "gsap";

export const useGsapDownStagger = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      { y: "-100%", opacity: 0 },
      { y: 0, duration: 0.5, opacity: 1, stagger: 0.2, ease: "sine" }
    );
  }, []);
};

export const useGsapUpward = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      { y: "300%", opacity: 0 },
      { y: 0, duration: 1, opacity: 1, ease: "back", delay: 0.5 }
    );
  }, []);
};
