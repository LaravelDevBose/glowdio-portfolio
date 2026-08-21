const MISSING_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='100%' height='100%' fill='#F5F8FA'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#5C707C' font-family='sans-serif' font-size='16'>Image missing</text></svg>`
  );

export default function SmartImg({ src, alt, ...rest }) {
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = MISSING_SVG;
      }}
      {...rest}
    />
  );
}
