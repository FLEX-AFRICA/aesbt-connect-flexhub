import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Section } from "@/components/layout/PageHeader";
import { MediaFrame } from "@/components/ui-aesbt/MediaPlaceholder";
import { EmptyState } from "@/components/ui-aesbt/States";
import { formatDate } from "@/lib/format";
import { getNewsBySlug } from "@/data/news";

export const Route = createFileRoute("/actualites/$slug")({
  loader: ({ params }) => {
    const article = getNewsBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Actualité introuvable — AESBT" }, { name: "robots", content: "noindex" }],
      };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} — AESBT` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/actualites/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/actualites/${params.slug}` }],
    };
  },
  notFoundComponent: NewsNotFound,
  component: NewsDetailPage,
});

function NewsNotFound() {
  return (
    <SiteLayout>
      <Section>
        <EmptyState
          title="Actualité introuvable"
          description="Cette publication n'existe pas ou n'est plus disponible."
          action={
            <Link to="/actualites" className="text-[13px] font-semibold text-accent-blue hover:underline">
              Retour aux actualités
            </Link>
          }
        />
      </Section>
    </SiteLayout>
  );
}

function NewsDetailPage() {
  const { article } = Route.useLoaderData();

  return (
    <SiteLayout>
      <article>
        <header className="border-b border-line/70 bg-frost-deep/40">
          <div className="mx-auto max-w-[820px] px-6 py-14 sm:py-16">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-muted-ink">
              <span>{article.category}</span>
              <span className="h-1 w-1 rounded-full bg-line" />
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </div>
            <h1 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-ink text-balance sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-ink text-pretty">
              {article.excerpt}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-[820px] px-6 py-14">
          <MediaFrame image={article.cover} ratio="aspect-[16/9]" label="Photo de l'actualité à venir" />

          <div className="mt-10 space-y-5 text-[16px] leading-relaxed text-ink-soft">
            {article.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {article.gallery && article.gallery.length > 0 ? (
            <section className="mt-12">
              <h2 className="font-display text-xl tracking-tight text-ink">Galerie de l'actualité</h2>
              <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3">
                {article.gallery.map((photo, i) => (
                  <MediaFrame key={i} image={photo} ratio="aspect-square" />
                ))}
              </div>
            </section>
          ) : null}

          {article.attachments && article.attachments.length > 0 ? (
            <section className="mt-12">
              <h2 className="font-display text-xl tracking-tight text-ink">Documents</h2>
              <ul className="mt-4 divide-y divide-line rounded-xl border border-line bg-surface/60">
                {article.attachments.map((file, i) => (
                  <li key={i} className="flex items-center justify-between p-4 text-sm">
                    <span className="text-ink">{file.label}</span>
                    {file.url ? (
                      <a href={file.url} className="font-semibold text-accent-blue hover:underline">
                        Télécharger
                      </a>
                    ) : (
                      <span className="text-muted-ink">Document à venir</span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {article.socialUrl ? (
            <p className="mt-10 text-sm">
              <a
                href={article.socialUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-accent-blue hover:underline"
              >
                Voir la publication sur les réseaux sociaux
              </a>
            </p>
          ) : null}

          <p className="mt-12">
            <Link
              to="/actualites"
              className="text-[13px] font-semibold text-accent-blue underline-offset-4 hover:underline"
            >
              Retour aux actualités
            </Link>
          </p>
        </div>
      </article>
    </SiteLayout>
  );
}
