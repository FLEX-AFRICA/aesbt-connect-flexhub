import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHeader, Section } from "@/components/layout/PageHeader";
import { EventCard } from "@/components/cards/EventCard";
import { EmptyState, LoadingState } from "@/components/ui-aesbt/States";
import { listEvents } from "@/data/events";
import { FLEXHUB } from "@/config/site";

const TITLE = "Événements — AESBT";
const DESCRIPTION =
  "Programme des rencontres, activités et temps forts organisés par l'Association des Étudiants et Stagiaires Burkinabè en Tunisie.";

export const Route = createFileRoute("/evenements")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/evenements" },
    ],
    links: [{ rel: "canonical", href: "/evenements" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  /**
   * FLEXHUB n'est pas connecté : aucune requête n'est effectuée.
   * Lorsque l'intégration sera faite, remplacer cet appel par la récupération
   * réelle (avec état de chargement via <LoadingState />).
   */
  const isLoading = false;
  const events = listEvents();

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Événements"
        title="Le programme de l'association"
        description="Les événements seront affichés ici dès leur publication par l'association."
      />
      <Section>
        {isLoading ? (
          <LoadingState />
        ) : events.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="Aucun événement programmé"
            description={
              FLEXHUB.connected
                ? "Aucun événement n'est actuellement annoncé."
                : "Cette page est prête à recevoir le programme officiel. Les événements y seront publiés dès leur mise en ligne."
            }
          />
        )}
      </Section>
    </SiteLayout>
  );
}
