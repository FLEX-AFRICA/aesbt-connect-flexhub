import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHeader, Section } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui-aesbt/SectionHeading";
import { MemberCard } from "@/components/cards/MemberCard";
import { MediaFrame } from "@/components/ui-aesbt/MediaPlaceholder";
import { BUREAU_MEMBERS, INSTITUTIONAL_DOCUMENTS } from "@/data/association";

const TITLE = "L'association — AESBT";
const DESCRIPTION =
  "Présentation, historique, missions, Bureau Exécutif et documents institutionnels de l'Association des Étudiants et Stagiaires Burkinabè en Tunisie.";

export const Route = createFileRoute("/association")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/association" },
    ],
    links: [{ rel: "canonical", href: "/association" }],
  }),
  component: AssociationPage,
});

function AssociationPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Association"
        title="Une organisation étudiante au service de sa communauté"
        description="[Emplacement réservé à la présentation générale de l'AESBT. Le texte officiel sera fourni par le Bureau Exécutif.]"
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionHeading eyebrow="Historique" title="Notre parcours" />
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-muted-ink md:col-span-8">
            <p>[Emplacement réservé à l'historique de l'association.]</p>
            <p>[Étapes clés, dates et faits marquants à compléter.]</p>
          </div>
        </div>
      </Section>

      <Section className="border-y border-line/70 bg-frost-deep/40">
        <SectionHeading eyebrow="Missions" title="Missions et objectifs" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border border-line bg-surface/60 p-6">
              <h3 className="font-display text-lg tracking-tight text-ink">[Mission {i}]</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-ink">
                [Description de la mission, à compléter avec le contenu officiel.]
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Gouvernance"
          title="Bureau Exécutif"
          description="Les noms des membres seront renseignés dès leur communication officielle."
        />
        <div className="mt-10 grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {BUREAU_MEMBERS.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-line/70">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeading eyebrow="Organisation" title="Organigramme" />
            <p className="mt-4 text-[15px] leading-relaxed text-muted-ink">
              [Emplacement réservé à l'organigramme officiel de l'association.]
            </p>
          </div>
          <div className="md:col-span-7">
            <MediaFrame ratio="aspect-[16/10]" label="Organigramme à venir" />
          </div>
        </div>
      </Section>

      <Section className="border-t border-line/70 bg-frost-deep/40">
        <SectionHeading eyebrow="Documents" title="Statuts et documents institutionnels" />
        <ul className="mt-10 divide-y divide-line rounded-xl border border-line bg-surface/60">
          {INSTITUTIONAL_DOCUMENTS.map((doc) => (
            <li key={doc.id} className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-lg tracking-tight text-ink">{doc.title}</h3>
                <p className="mt-1 text-sm text-muted-ink">{doc.description}</p>
              </div>
              {doc.file.url ? (
                <a
                  href={doc.file.url}
                  className="text-[13px] font-semibold text-accent-blue underline-offset-4 hover:underline"
                >
                  Télécharger
                </a>
              ) : (
                <span className="text-[13px] text-muted-ink">Document à venir</span>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </SiteLayout>
  );
}
