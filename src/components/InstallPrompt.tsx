import { useEffect, useState } from "react";
import { Icon } from "./Icon";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (!deferred || hidden) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:bottom-6 z-50 animate-in">
      <div className="glass rounded-2xl p-4 flex items-center gap-3 shadow-2xl max-w-sm mx-auto">
        <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-200 to-sky-200 border border-black/5 shrink-0">
          <Icon name="install" className="w-5 h-5 text-emerald-700" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-medium text-sm leading-tight">Nainstalovat aplikaci</p>
          <p className="text-xs text-[var(--text-dim)]">Rychlý přístup a offline studium</p>
        </div>
        <button
          className="btn btn-primary py-1.5 px-3 text-xs shrink-0"
          onClick={async () => {
            await deferred.prompt();
            await deferred.userChoice;
            setDeferred(null);
          }}
        >
          Instalovat
        </button>
        <button
          className="text-[var(--text-dim)] hover:text-[var(--text)] transition shrink-0"
          onClick={() => setHidden(true)}
          aria-label="Zavřít"
        >
          <Icon name="x" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
