import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number; // 0 to 1 (default: 0.1)
  triggerOnce?: boolean; // (default: true)
}

export const useInView = ({
  threshold = 0.1,
  triggerOnce = true,
}: UseInViewOptions = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, triggerOnce]);

  return { ref, isInView };
};
