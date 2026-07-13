import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "./Icon";

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="min-h-full flex flex-col">
      <header className="sticky top-0 z-40">
        <div className="glass">
          <div className="container-page flex items-center justify-between h-14">
            <Link to="/" className="flex items-center gap-2.5 group">
              <span className="grid place-items-center w-9 h-9 rounded-md bg-[var(--surface-muted)] border-2 border-[var(--border)]">
                <Icon name="compass" className="w-5 h-5 text-[var(--accent)]" />
              </span>
              <span className="font-bold tracking-tight text-[15px] text-[var(--text)]">
                Geo<span className="gold-text">Studium</span>
              </span>
            </Link>
            <nav className="flex items-center gap-1 text-sm font-medium text-[var(--text-dim)]">
              <Link
                to="/"
                className="px-3 py-1.5 rounded-md hover:text-[var(--text)] hover:bg-[var(--surface-muted)] border border-transparent hover:border-[var(--border)] transition"
              >
                Obory
              </Link>
              <a
                href="https://www.muni.cz"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-md hover:text-[var(--text)] hover:bg-[var(--surface-muted)] border border-transparent hover:border-[var(--border)] transition hidden sm:block"
              >
                MUNI
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 pb-20">{children}</main>

      <footer className="border-t-2 border-[var(--border)] mt-auto bg-[var(--surface)]">
        <div className="container-page py-6 text-sm text-[var(--text-dim)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="leading-relaxed">
            GeoStudium — studijní portál. Obsah čerpá z veřejných zdrojů,
            materiály lze průběžně doplňovat.
          </p>
          <p className="text-xs font-medium text-[var(--text-dim)]">
            Funguje offline · instalovatelné jako aplikace
          </p>
        </div>
      </footer>
    </div>
  );
}
