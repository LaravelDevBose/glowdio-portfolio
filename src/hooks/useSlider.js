import { useState } from "react";

export default function useSlider(length) {
  const [index, setIndex] = useState(0);
  const goTo = (n) => setIndex((n + length) % length);
  return { index, goTo, prev: () => goTo(index - 1), next: () => goTo(index + 1) };
}
