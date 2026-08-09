export default function Header({ onHome }) {
  return (
    <header className="site-header">
      <button className="brand" onClick={onHome} type="button">
        <span className="brand-mark" aria-hidden="true">
          ✎
        </span>
        <span className="brand-text">
          <span className="brand-en">Poetry</span>
          <span className="brand-sub" dir="rtl">
            شِعر
          </span>
          <span className="brand-sub">Шүлэг</span>
        </span>
      </button>
      <p className="tagline">Arabic · English · Mongolian, side by side</p>
    </header>
  );
}
