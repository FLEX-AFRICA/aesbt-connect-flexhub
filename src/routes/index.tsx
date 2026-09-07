import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Section } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui-aesbt/SectionHeading";
import { ActionLink } from "@/components/ui-aesbt/ActionButton";
import { MediaFrame } from "@/components/ui-aesbt/MediaPlaceholder";
import { NewsCard } from "@/components/cards/NewsCard";
import { AlbumCard } from "@/components/cards/AlbumCard";
import { NextEventPanel } from "@/components/cards/EventCard";
import { StatsRow } from "@/components/cards/StatsRow";
import { EmptyState } from "@/components/ui-aesbt/States";
import { PRESIDENT_MESSAGE, STATISTICS } from "@/data/association";
import { listLatestNews } from "@/data/news";
import { listAlbums } from "@/data/albums";
import { getNextEvent } from "@/data/events";
import { CONTACT, REGISTRATION_ROUTE, SITE, SOCIALS } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AESBT — Association des Étudiants et Stagiaires Burkinabè en Tunisie" },
      { name: "description", content: SITE.description },
      { property: "og:title", content: "AESBT — Étudiants et stagiaires burkinabè en Tunisie" },
      { property: "og:description", content: SITE.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const news = listLatestNews(3);
  const albums = listAlbums().slice(0, 3);
  const nextEvent = getNextEvent();

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="mx-auto max-w-[1240px] px-6 pb-14 pt-16 sm:pt-20">
        <div className="mx-auto max-w-3xl animate-rise text-center">
          <p className="eyebrow">{SITE.longName}</p>
          <h1 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl md:text-6xl">
            Une communauté étudiante burkinabè, unie et solidaire en Tunisie.
          </h1>
          <p className="mx-auto mt-6 max-w-[52ch] text-[15px] leading-relaxed text-muted-ink text-pretty">
            L'AESBT accompagne les étudiants et stagiaires burkinabè dans leurs études, leur
            intégration et leur vie au quotidien, au service d'un collectif exigeant et humain.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <ActionLink to={REGISTRATION_ROUTE}>Rejoindre l'association</ActionLink>
            <ActionLink to="/association" variant="secondary">
              Découvrir l'AESBT
            </ActionLink>
          </div>
          <MediaFrame
            ratio="aspect-[16/9]"
            className="mt-12 sm:mt-14"
            label="Photo officielle de l'association à venir"
          />
        </div>
      </section>

      {/* Présentation succincte */}
      <Section className="border-y border-line/70 bg-frost-deep/40">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">L'association</p>
            <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              Représenter et accompagner
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-[15px] leading-relaxed text-muted-ink text-pretty">
              [Emplacement réservé à la présentation officielle de l'AESBT : missions, valeurs et
              champ d'action. Ce texte sera fourni par l'association.]
            </p>
            <Link
              to="/association"
              className="mt-6 inline-block text-[13px] font-semibold text-accent-blue underline-offset-4 hover:underline"
            >
              En savoir plus sur l'association
            </Link>
          </div>
        </div>
      </Section>

      {/* Mot du Président */}
      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <MediaFrame
              image={{ src: PRESIDENT_MESSAGE.photo.src, alt: PRESIDENT_MESSAGE.photo.alt }}
              ratio="aspect-[4/5]"
              label="Portrait du président à venir"
            />
          </div>
          <div className="flex flex-col justify-center md:col-span-7">
            <p className="eyebrow">Mot du Président</p>
            <blockquote className="mt-5 font-display text-2xl leading-snug text-ink-soft text-balance md:text-[28px]">
              {PRESIDENT_MESSAGE.message}
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent-blue" />
              <div>
                <p className="text-sm font-semibold text-ink">
                  {PRESIDENT_MESSAGE.name ?? "Nom à communiquer"}
                </p>
                <p className="text-[13px] text-muted-ink">{PRESIDENT_MESSAGE.role}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Actualités */}
      <Section className="border-t border-line/70">
        <SectionHeading
          eyebrow="Actualités"
          title="Les dernières nouvelles"
          action={{ label: "Toutes les actualités", to: "/actualites" }}
        />
        {news.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <EmptyState
            className="mt-10"
            title="Aucune actualité publiée"
            description="Les publications de l'association apparaîtront ici."
          />
        )}
      </Section>

      {/* Prochain événement */}
      <section className="mx-auto max-w-[1240px] px-6 pb-16">
        <NextEventPanel event={nextEvent} />
      </section>

      {/* Statistiques */}
      <section className="border-y border-line/70 bg-frost-deep/40">
        <StatsRow stats={STATISTICS} />
      </section>

      {/* Galerie */}
      <Section>
        <SectionHeading
          eyebrow="Galerie"
          title="En images"
          action={{ label: "Toute la galerie", to: "/galerie" }}
        />
        <div className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-3">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </Section>

      {/* Contact / réseaux */}
      <Section className="border-t border-line/70 bg-frost-deep/40">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              Rester en lien avec l'AESBT
            </h2>
            <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-muted-ink text-pretty">
              Une question, une demande d'accompagnement ou un partenariat ? L'association reste
              joignable par ses canaux officiels.
            </p>
            <div className="mt-7">
              <ActionLink to="/contact" variant="dark">
                Nous écrire
              </ActionLink>
            </div>
          </div>
          <dl className="grid gap-6 text-sm md:col-span-6 sm:grid-cols-2">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-muted-ink">E-mail</dt>
              <dd className="mt-1 text-ink">{CONTACT.email ?? "À communiquer"}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-muted-ink">Téléphone</dt>
              <dd className="mt-1 text-ink">{CONTACT.phone ?? "À communiquer"}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-[11px] uppercase tracking-[0.16em] text-muted-ink">Réseaux</dt>
              <dd className="mt-1 text-ink">
                {SOCIALS.map((s) => s.label).join(" · ")} — liens à venir
              </dd>
            </div>
          </dl>
        </div>
      </Section>
    </SiteLayout>
  );
}
