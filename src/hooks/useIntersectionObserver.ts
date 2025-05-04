import { useState, useEffect } from "react";

const section_ids = [
  "firstview",
  "about",
  "timeline",
  "projects",
  "resume",
  "faq",
  "contact"
];

export function useNavbarIntersection() {
  const [currentSection, setCurrentSection] = useState("");
  useEffect(() => {

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const navbar_observer = new IntersectionObserver(callback, options);
    const targets = section_ids.map(id => document.getElementById(id))
    targets.forEach((target) => {
      if (target) {
        navbar_observer.observe(target);
      }
    });

    return () => {
      navbar_observer.disconnect();
    };
  }, []);
  return currentSection;
}