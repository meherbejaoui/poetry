const base = {
  fontFamily: "var(--sans)",
  fontSize: 15.5,
  fontWeight: 600,
  borderRadius: "var(--radius)",
  padding: "13px 26px",
  cursor: "pointer",
  border: "1px solid transparent",
};

const variants = {
  primary: {
    color: "var(--surface)",
    background: "var(--ink)",
  },
  secondary: {
    color: "var(--ink)",
    background: "transparent",
    borderColor: "var(--ink)",
  },
  ghost: {
    fontSize: 14,
    fontWeight: 500,
    color: "var(--muted)",
    background: "transparent",
    borderStyle: "dashed",
    borderColor: "var(--hair)",
    borderRadius: "var(--radius-sm)",
    padding: "9px 14px",
  },
};

export default function Button({ variant = "primary", disabled, style, className = "", children, ...props }) {
  return (
    <button
      disabled={disabled}
      className={`eg-focus ${className}`}
      style={{
        ...base,
        ...variants[variant],
        opacity: disabled ? 0.4 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
