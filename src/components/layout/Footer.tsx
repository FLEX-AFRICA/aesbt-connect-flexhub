import { Link } from "@tanstack/react-router";
import { CONTACT, MAIN_NAV, REGISTRATION_ROUTE, SITE, SOCIALS } from "@/config/site";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-ink text-frost/80">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="font-display text-2xl font-semibold tracking-tight text-frost">AESBT</span>
          <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-frost/70">
            {SITE.longName}. Un collectif au service de la réussite, de l'accompagnement et de la
            solidarité étudiante.
          </p>
          <Link
            to={REGISTRATION_ROUTE}
            className="mt-6 inline-flex items-center rounded-full bg-frost px-5 py-2.5 text-[13px] font-semibold text-ink transition-colors hover:bg-frost/85"
          >
            Inscription
          </Link>
          <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-frost/50">
            Site en construction — certains contenus sont provisoires
          </p>
        </div>

        <nav aria-label="Liens rapides" className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.2em] text-frost/50">Navigation</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {MAIN_NAV.filter((i) => i.to !== "/").map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-frost">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-2">
          <p className="text-[11px] uppercase tracking-[0.2em] text-frost/50">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm text-frost/70">
            <li>{CONTACT.email ?? "E-mail à communiquer"}</li>
            <li>{CONTACT.phone ?? "Téléphone à communiquer"}</li>
            <li>{CONTACT.address ?? "Adresse à communiquer"}</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-[11px] uppercase tracking-[0.2em] text-frost/50">Réseaux</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SOCIALS.map((s) =>
              s.href ? (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-frost"
                  >
                    {s.label}
                  </a>
                </li>
              ) : (
                <li key={s.label} className="text-frost/50">
                  {s.label} — lien à venir
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-frost/10">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-3 px-6 py-6 text-[12px] text-frost/50 sm:flex-row">
          <p>© {YEAR} AESBT — Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link to="/association" className="transition-colors hover:text-frost">
              Documents institutionnels
            </Link>
            <Link to="/contact" className="transition-colors hover:text-frost">
              Nous écrire
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
