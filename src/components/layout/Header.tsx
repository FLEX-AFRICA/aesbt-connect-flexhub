import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FLEXHUB, MAIN_NAV, REGISTRATION_ROUTE } from "@/config/site";
import { Logo } from "./Logo";
import { actionButtonClass } from "@/components/ui-aesbt/ActionButton";

/**
 * En-tête institutionnel, sticky et responsive.
 * Le bouton « Inscription » pointe vers /inscription tant que FLEXHUB n'est
 * pas branché ; il suffira de renseigner FLEXHUB.registrationUrl.
 */
export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const registrationButton = FLEXHUB.registrationUrl ? (
    <a
      href={FLEXHUB.registrationUrl}
      className={actionButtonClass("primary", "px-5 py-2.5 text-[13px]")}
    >
      Inscription
    </a>
  ) : (
    <Link
      to={REGISTRATION_ROUTE}
      onClick={() => setOpen(false)}
      className={actionButtonClass("primary", "px-5 py-2.5 text-[13px]")}
    >
      Inscription
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-frost/80 backdrop-blur-md">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-sm"
      >
        Aller au contenu
      </a>
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-6 px-6">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 md:flex">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-accent-blue" }}
              className="text-[13.5px] font-medium text-ink-soft transition-colors hover:text-accent-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">{registrationButton}</div>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-md ring-1 ring-line md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-5 bg-ink" />
              <span className="block h-px w-5 bg-ink" />
              <span className="block h-px w-5 bg-ink" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div id="menu-mobile" className="border-t border-line/70 bg-frost md:hidden">
          <nav aria-label="Navigation mobile" className="mx-auto max-w-[1240px] px-6 py-4">
            <ul className="divide-y divide-line/60">
              {MAIN_NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "text-accent-blue" }}
                    className="block py-3 text-[15px] font-medium text-ink-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4 sm:hidden">{registrationButton}</div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
