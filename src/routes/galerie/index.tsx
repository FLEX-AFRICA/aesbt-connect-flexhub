import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHeader, Section } from "@/components/layout/PageHeader";
import { AlbumCard } from "@/components/cards/AlbumCard";
import { EmptyState } from "@/components/ui-aesbt/States";
import { listAlbums } from "@/data/albums";

const TITLE = "Galerie photo — AESBT";
const DESCRIPTION =
  "Albums photo des activités, rencontres et moments de la communauté étudiante burkinabè en Tunisie.";

export const Route = createFileRoute("/galerie/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/galerie" },
    ],
    links: [{ rel: "canonical", href: "/galerie" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const albums = listAlbums();

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Galerie"
        title="Les moments de l'association en images"
        description="Chaque album regroupe les photos d'une activité ou d'un événement de l'AESBT."
      />
      <Section>
        {albums.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {albums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="Aucun album publié"
            description="Les albums photo de l'association apparaîtront ici."
          />
        )}
      </Section>
    </SiteLayout>
  );
}
