import type { ReactNode } from "react";

/** En-tête de page institutionnel, réutilisé sur toutes les pages internes. */
export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line/70 bg-frost-deep/40">
      <div className="mx-auto max-w-[1240px] px-6 py-14 sm:py-16">
        <div className="max-w-3xl animate-rise">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-ink text-balance sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-[60ch] text-[15px] leading-relaxed text-muted-ink text-pretty">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

/** Conteneur de section standard (largeur et rythme verticaux communs). */
export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-[1240px] px-6 py-14 sm:py-16">{children}</div>
    </section>
  );
}
