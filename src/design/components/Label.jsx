export default function Label({ children, color, style }) {
  return (
    <span
      style={{
        fontFamily: "var(--sans)",
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: color || "var(--faint)",
        fontWeight: 600,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
