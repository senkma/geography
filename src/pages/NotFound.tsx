import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";

export function NotFound() {
  return (
    <div className="container-page pt-24 text-center">
      <div className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-white/70 border border-[var(--border)] mb-5">
        <Icon name="compass" className="w-8 h-8 text-emerald-700" />
      </div>
      <h1 className="text-2xl font-semibold">Stránka nenalezena</h1>
      <p className="text-[var(--text-dim)] mt-2">
        Obsah, který hledáš, tu není.
      </p>
      <Link to="/" className="btn btn-primary mt-6">
        Zpět na obory
      </Link>
    </div>
  );
}
