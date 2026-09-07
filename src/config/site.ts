/**
 * Configuration centrale du site AESBT.
 *
 * Les valeurs marquées TODO sont des emplacements : elles doivent être
 * remplacées par les informations officielles fournies par l'association.
 * Ne pas inventer de coordonnées, de réseaux sociaux ni de chiffres.
 */

export const SITE = {
  shortName: "AESBT",
  name: "AESBT — Association des Étudiants et Stagiaires Burkinabè en Tunisie",
  longName: "Association des Étudiants et Stagiaires Burkinabè en Tunisie",
  description:
    "Site officiel de l'AESBT, association des étudiants et stagiaires burkinabè en Tunisie : association, actualités, galerie, centre de ressources, événements et contact.",
  locale: "fr_FR",
} as const;

/** Coordonnées officielles — à compléter (aucune donnée inventée). */
export const CONTACT = {
  email: null as string | null, // TODO: e-mail officiel AESBT
  phone: null as string | null, // TODO: téléphone officiel AESBT
  address: null as string | null, // TODO: adresse / localisation officielle
} as const;

export type SocialLink = {
  label: string;
  /** null tant que le lien officiel n'a pas été communiqué. */
  href: string | null;
};

/** Réseaux sociaux officiels — liens à renseigner par l'association. */
export const SOCIALS: SocialLink[] = [
  { label: "Facebook", href: null },
  { label: "Instagram", href: null },
  { label: "LinkedIn", href: null },
];

export type NavItem = {
  label: string;
  to: string;
};

export const MAIN_NAV: NavItem[] = [
  { label: "Accueil", to: "/" },
  { label: "Association", to: "/association" },
  { label: "Actualités", to: "/actualites" },
  { label: "Galerie", to: "/galerie" },
  { label: "Ressources", to: "/ressources" },
  { label: "Événements", to: "/evenements" },
  { label: "Contact", to: "/contact" },
];

/**
 * Point d'intégration FLEXHUB.
 *
 * FLEXHUB n'est PAS connecté. Lorsque l'intégration sera effectuée :
 * - renseigner `registrationUrl` pour rediriger le bouton « Inscription » ;
 * - brancher les événements via src/data/events.ts.
 */
export const FLEXHUB = {
  connected: false,
  /** URL externe d'inscription FLEXHUB — à renseigner. */
  registrationUrl: null as string | null,
} as const;

/** Route interne utilisée tant que FLEXHUB n'est pas branché. */
export const REGISTRATION_ROUTE = "/inscription";
