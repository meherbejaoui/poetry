export default function Card({ as: As = "div", accent, interactive, style, className = "", children, ...props }) {
  return (
    <As
      type={As === "button" ? "button" : undefined}
      className={`${interactive ? "eg-focus eg-card" : ""} ${className}`}
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderRadius: "var(--radius-lg)",
        padding: "18px 20px",
        textAlign: "left",
        cursor: interactive ? "pointer" : undefined,
        position: "relative",
        width: As === "button" ? "100%" : undefined,
        font: As === "button" ? "inherit" : undefined,
        color: "inherit",
        textDecoration: As === "a" ? "none" : undefined,
        display: As === "a" ? "block" : undefined,
        // only touch borderLeft when there IS an accent — setting it to
        // `undefined` otherwise makes React clear the border-left-* it just
        // inherited from the `border` shorthand above, exposing the
        // browser's default <button> border on that one edge.
        ...(accent ? { borderLeft: `4px solid ${accent}` } : {}),
        ...style,
      }}
      {...props}
    >
      {children}
    </As>
  );
}
