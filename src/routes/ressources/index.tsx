import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHeader, Section } from "@/components/layout/PageHeader";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { EmptyState } from "@/components/ui-aesbt/States";
import { listResources } from "@/data/resources";
import { RESOURCE_CATEGORIES } from "@/types/content";

const TITLE = "Centre de ressources — AESBT";
const DESCRIPTION =
  "Guides pour étudier en Tunisie, vie pratique, documents de l'association, opportunités et questions fréquentes.";

export const Route = createFileRoute("/ressources/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ressources" },
    ],
    links: [{ rel: "canonical", href: "/ressources" }],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const [category, setCategory] = useState<string>("Toutes");
  const resources = listResources();
  const filtered =
    category === "Toutes" ? resources : resources.filter((r) => r.category === category);

  const filters = ["Toutes", ...RESOURCE_CATEGORIES];

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Ressources"
        title="Centre de ressources"
        description="Les informations utiles aux étudiants et stagiaires burkinabè en Tunisie, classées par thématique."
      />
      <Section>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par catégorie">
          {filters.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className="rounded-full border border-line px-4 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:bg-surface aria-pressed:border-accent-blue aria-pressed:bg-accent-blue aria-pressed:text-primary-foreground"
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          <EmptyState
            className="mt-10"
            title="Aucune ressource dans cette catégorie"
            description="De nouvelles ressources seront publiées prochainement."
          />
        )}
      </Section>
    </SiteLayout>
  );
}
