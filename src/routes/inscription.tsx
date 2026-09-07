import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHeader, Section } from "@/components/layout/PageHeader";
import { FLEXHUB } from "@/config/site";

export const Route = createFileRoute("/inscription")({
  head: () => ({
    meta: [
      { title: "Inscription — AESBT Tunisie" },
      {
        name: "description",
        content:
          "Inscription à l'AESBT, association des étudiants et stagiaires burkinabè en Tunisie : procédure et informations à venir.",
      },
      { property: "og:title", content: "Inscription — AESBT Tunisie" },
      {
        property: "og:description",
        content: "Rejoindre l'AESBT : procédure d'inscription des étudiants et stagiaires burkinabè en Tunisie.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/inscription" },
    ],
    links: [{ rel: "canonical", href: "/inscription" }],
  }),
  component: InscriptionPage,
});

function InscriptionPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Adhésion"
        title="Inscription à l'AESBT"
        description="L'inscription en ligne sera ouverte prochainement. Les modalités officielles seront communiquées par le Bureau Exécutif."
      />

      <Section>
        <div className="max-w-[68ch] space-y-6">
          <div className="rounded-xl border border-line bg-surface/50 p-6">
            <p className="eyebrow">Statut</p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-ink">
              {FLEXHUB.registrationUrl
                ? "L'inscription en ligne est disponible."
                : "La plateforme d'inscription n'est pas encore reliée au site. Cette page sera automatiquement redirigée dès qu'elle sera activée."}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-medium tracking-tight text-ink">
              Qui peut adhérer ?
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-ink text-pretty">
              Les étudiantes, étudiants et stagiaires burkinabè résidant en Tunisie. Les conditions
              précises et les pièces à fournir seront publiées ici avec les documents officiels de
              l'association.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-medium tracking-tight text-ink">
              En attendant
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-ink text-pretty">
              Vous pouvez écrire au Bureau Exécutif via la page{" "}
              <Link to="/contact" className="font-semibold text-accent-blue hover:underline">
                Contact
              </Link>{" "}
              pour être informé de l'ouverture des inscriptions.
            </p>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
