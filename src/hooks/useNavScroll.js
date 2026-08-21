import { useEffect, useState } from "react";

export default function useNavScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || window.pageYOffset;
      setScrolled(y > 20);
      setShowTop(y > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrolled, showTop };
}
