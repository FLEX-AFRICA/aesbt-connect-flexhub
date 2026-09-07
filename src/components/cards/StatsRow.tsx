import type { Statistic } from "@/types/content";

/**
 * Bande de statistiques. Les valeurs non communiquées affichent « — » :
 * aucun chiffre n'est inventé.
 */
export function StatsRow({ stats }: { stats: Statistic[] }) {
  return (
    <dl className="mx-auto grid max-w-[1240px] grid-cols-2 gap-y-8 px-6 py-12 text-center md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.id}>
          <dt className="sr-only">{stat.label}</dt>
          <dd>
            <span className="block font-display text-4xl tracking-tight text-ink">
              {stat.value ?? "—"}
            </span>
            <span className="mt-2 block text-[12px] uppercase tracking-[0.16em] text-muted-ink">
              {stat.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
