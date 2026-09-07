import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Section } from "@/components/layout/PageHeader";
import { MediaFrame } from "@/components/ui-aesbt/MediaPlaceholder";
import { EmptyState } from "@/components/ui-aesbt/States";
import { formatDate } from "@/lib/format";
import { getAlbumBySlug } from "@/data/albums";

export const Route = createFileRoute("/galerie/$slug")({
  loader: ({ params }) => {
    const album = getAlbumBySlug(params.slug);
    if (!album) throw notFound();
    return { album };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Album introuvable — AESBT" }, { name: "robots", content: "noindex" }],
      };
    }
    const { album } = loaderData;
    return {
      meta: [
        { title: `${album.title} — Galerie AESBT` },
        { name: "description", content: album.description },
        { property: "og:title", content: album.title },
        { property: "og:description", content: album.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/galerie/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/galerie/${params.slug}` }],
    };
  },
  notFoundComponent: AlbumNotFound,
  component: AlbumDetailPage,
});

function AlbumNotFound() {
  return (
    <SiteLayout>
      <Section>
        <EmptyState
          title="Album introuvable"
          description="Cet album n'existe pas ou n'est plus disponible."
          action={
            <Link to="/galerie" className="text-[13px] font-semibold text-accent-blue hover:underline">
              Retour à la galerie
            </Link>
          }
        />
      </Section>
    </SiteLayout>
  );
}

function AlbumDetailPage() {
  const { album } = Route.useLoaderData();
  const [index, setIndex] = useState(0);
  const total = album.photos.length;
  const current = album.photos[index];

  return (
    <SiteLayout>
      <header className="border-b border-line/70 bg-frost-deep/40">
        <div className="mx-auto max-w-[1240px] px-6 py-14 sm:py-16">
          <p className="eyebrow">Album</p>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight text-ink text-balance sm:text-4xl">
            {album.title}
          </h1>
          <p className="mt-4 text-[13px] uppercase tracking-[0.14em] text-muted-ink">
            {formatDate(album.date)} · {total} photo{total > 1 ? "s" : ""}
          </p>
          <p className="mt-5 max-w-[60ch] text-[15px] leading-relaxed text-muted-ink text-pretty">
            {album.description}
          </p>
        </div>
      </header>

      <Section>
        {total > 0 ? (
          <>
            <MediaFrame
              {...(current ? { image: current } : {})}
              ratio="aspect-[16/9]"
              label="Photo à venir"
            />
            <div className="mt-4 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setIndex((i) => (i - 1 + total) % total)}
                className="rounded-full border border-line px-4 py-2 text-[13px] font-semibold text-ink transition-colors hover:bg-surface"
              >
                Photo précédente
              </button>
              <span aria-live="polite" className="text-[13px] text-muted-ink">
                {index + 1} / {total}
              </span>
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % total)}
                className="rounded-full border border-line px-4 py-2 text-[13px] font-semibold text-ink transition-colors hover:bg-surface"
              >
                Photo suivante
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 md:grid-cols-6">
              {album.photos.map((photo, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-current={i === index}
                  className="rounded-lg ring-offset-2 aria-[current=true]:ring-2 aria-[current=true]:ring-accent-blue"
                >
                  <MediaFrame image={photo} ratio="aspect-square" label="Photo" />
                </button>
              ))}
            </div>
          </>
        ) : (
          <EmptyState title="Album vide" description="Les photos de cet album seront ajoutées prochainement." />
        )}

        <p className="mt-12">
          <Link
            to="/galerie"
            className="text-[13px] font-semibold text-accent-blue underline-offset-4 hover:underline"
          >
            Retour à la galerie
          </Link>
        </p>
      </Section>
    </SiteLayout>
  );
}
