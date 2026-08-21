import useNavScroll from "../hooks/useNavScroll";
import { ArrowUp } from "./icons";

export default function ToTop() {
  const { showTop } = useNavScroll();
  return (
    <button
      className={`totop${showTop ? " show" : ""}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp />
    </button>
  );
}
