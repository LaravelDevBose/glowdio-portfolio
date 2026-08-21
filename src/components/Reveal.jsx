import useReveal from "../hooks/useReveal";

export default function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...rest }) {
  const [ref, inView] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "in" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay * 70}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
