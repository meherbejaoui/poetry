export default function Chip({ color = "var(--ink)", children, style }) {
  return (
    <span
      style={{
        fontFamily: "var(--sans)",
        fontSize: 13.5,
        fontWeight: 500,
        color,
        background: "var(--surface)",
        border: `1px solid ${color}`,
        borderRadius: 999,
        padding: "6px 13px",
        display: "inline-block",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
