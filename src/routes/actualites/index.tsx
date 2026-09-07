import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHeader, Section } from "@/components/layout/PageHeader";
import { NewsCard } from "@/components/cards/NewsCard";
import { EmptyState } from "@/components/ui-aesbt/States";
import { listNews } from "@/data/news";

const TITLE = "Actualités — AESBT";
const DESCRIPTION =
  "Toutes les actualités et publications officielles de l'Association des Étudiants et Stagiaires Burkinabè en Tunisie.";

export const Route = createFileRoute("/actualites/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/actualites" },
    ],
    links: [{ rel: "canonical", href: "/actualites" }],
  }),
  component: NewsListPage,
});

function NewsListPage() {
  const news = listNews();

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Actualités"
        title="La vie de l'association"
        description="Publications, comptes rendus et informations officielles de l'AESBT."
      />
      <Section>
        {news.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="Aucune actualité publiée"
            description="Les publications de l'association apparaîtront ici dès leur mise en ligne."
          />
        )}
      </Section>
    </SiteLayout>
  );
}
