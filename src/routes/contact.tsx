import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHeader, Section } from "@/components/layout/PageHeader";
import { ActionButton } from "@/components/ui-aesbt/ActionButton";
import { CONTACT, SOCIALS } from "@/config/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AESBT Tunisie" },
      {
        name: "description",
        content:
          "Contacter l'AESBT : coordonnées du Bureau Exécutif, réseaux sociaux et formulaire de message.",
      },
      { property: "og:title", content: "Contact — AESBT Tunisie" },
      {
        property: "og:description",
        content: "Écrire au Bureau Exécutif de l'AESBT, association des étudiants et stagiaires burkinabè en Tunisie.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

type Status = "idle" | "loading" | "success" | "error";

function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // Point d'intégration : brancher ici l'envoi réel du message.
      await new Promise((r) => setTimeout(r, 600));
      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const socials = SOCIALS.filter((s) => s.href);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Écrire à l'AESBT"
        description="Une question, une demande de partenariat ou une information ? Le Bureau Exécutif vous répond."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-xl font-medium tracking-tight text-ink">
                Coordonnées
              </h2>
              <dl className="mt-4 space-y-3 text-[15px]">
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.14em] text-muted-ink">E-mail</dt>
                  <dd className="text-ink">
                    {CONTACT.email ? (
                      <a href={`mailto:${CONTACT.email}`} className="text-accent-blue hover:underline">
                        {CONTACT.email}
                      </a>
                    ) : (
                      <span className="text-muted-ink">À communiquer</span>
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.14em] text-muted-ink">
                    Téléphone
                  </dt>
                  <dd className="text-ink">
                    {CONTACT.phone ? (
                      <a href={`tel:${CONTACT.phone}`} className="text-accent-blue hover:underline">
                        {CONTACT.phone}
                      </a>
                    ) : (
                      <span className="text-muted-ink">À communiquer</span>
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-[12px] uppercase tracking-[0.14em] text-muted-ink">
                    Localisation
                  </dt>
                  <dd className="text-ink">
                    {CONTACT.address ?? <span className="text-muted-ink">À communiquer</span>}
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="font-display text-xl font-medium tracking-tight text-ink">Réseaux</h2>
              {socials.length > 0 ? (
                <ul className="mt-4 space-y-2 text-[15px]">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a href={s.href!} className="text-accent-blue hover:underline">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-[15px] text-muted-ink">
                  Les liens officiels seront ajoutés dès leur communication.
                </p>
              )}
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-line bg-surface/50 p-6">
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-[13px] font-medium text-ink">Nom complet</span>
                <input
                  required
                  name="name"
                  className="rounded-md border border-line bg-frost px-3 py-2 text-[15px] text-ink outline-none focus:ring-2 focus:ring-accent-blue/40"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-[13px] font-medium text-ink">E-mail</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="rounded-md border border-line bg-frost px-3 py-2 text-[15px] text-ink outline-none focus:ring-2 focus:ring-accent-blue/40"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-[13px] font-medium text-ink">Message</span>
                <textarea
                  required
                  name="message"
                  rows={6}
                  className="rounded-md border border-line bg-frost px-3 py-2 text-[15px] text-ink outline-none focus:ring-2 focus:ring-accent-blue/40"
                />
              </label>

              <div className="flex flex-wrap items-center gap-4">
                <ActionButton type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
                </ActionButton>
                <p aria-live="polite" className="text-[13px] text-muted-ink">
                  {status === "success"
                    ? "Message envoyé. Merci !"
                    : status === "error"
                      ? "L'envoi n'est pas encore actif : le service de messagerie doit être connecté."
                      : null}
                </p>
              </div>
            </div>
          </form>
        </div>
      </Section>
    </SiteLayout>
  );
}
