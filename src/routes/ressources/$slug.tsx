import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Section } from "@/components/layout/PageHeader";
import { EmptyState } from "@/components/ui-aesbt/States";
import { formatDate } from "@/lib/format";
import { getResourceBySlug } from "@/data/resources";

export const Route = createFileRoute("/ressources/$slug")({
  loader: ({ params }) => {
    const resource = getResourceBySlug(params.slug);
    if (!resource) throw notFound();
    return { resource };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Ressource introuvable — AESBT" }, { name: "robots", content: "noindex" }],
      };
    }
    const { resource } = loaderData;
    return {
      meta: [
        { title: `${resource.title} — Ressources AESBT` },
        { name: "description", content: resource.description },
        { property: "og:title", content: resource.title },
        { property: "og:description", content: resource.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/ressources/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/ressources/${params.slug}` }],
    };
  },
  notFoundComponent: ResourceNotFound,
  component: ResourceDetailPage,
});

function ResourceNotFound() {
  return (
    <SiteLayout>
      <Section>
        <EmptyState
          title="Ressource introuvable"
          description="Cette ressource n'existe pas ou n'est plus disponible."
          action={
            <Link to="/ressources" className="text-[13px] font-semibold text-accent-blue hover:underline">
              Retour au centre de ressources
            </Link>
          }
        />
      </Section>
    </SiteLayout>
  );
}

function ResourceDetailPage() {
  const { resource } = Route.useLoaderData();

  return (
    <SiteLayout>
      <header className="border-b border-line/70 bg-frost-deep/40">
        <div className="mx-auto max-w-[820px] px-6 py-14 sm:py-16">
          <p className="eyebrow">{resource.category}</p>
          <h1 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-ink text-balance sm:text-4xl">
            {resource.title}
          </h1>
          <p className="mt-4 text-[13px] uppercase tracking-[0.14em] text-muted-ink">
            Publié le {formatDate(resource.publishedAt)}
          </p>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-ink text-pretty">
            {resource.description}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[820px] px-6 py-14">
        <div className="space-y-5 text-[16px] leading-relaxed text-ink-soft">
          {resource.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {resource.document ? (
          <div className="mt-10 flex items-center justify-between rounded-xl border border-line bg-surface/60 p-5 text-sm">
            <span className="text-ink">{resource.document.label}</span>
            {resource.document.url ? (
              <a
                href={resource.document.url}
                className="font-semibold text-accent-blue hover:underline"
              >
                Télécharger
              </a>
            ) : (
              <span className="text-muted-ink">Document à venir</span>
            )}
          </div>
        ) : null}

        <p className="mt-12">
          <Link
            to="/ressources"
            className="text-[13px] font-semibold text-accent-blue underline-offset-4 hover:underline"
          >
            Retour au centre de ressources
          </Link>
        </p>
      </div>
    </SiteLayout>
  );
}
