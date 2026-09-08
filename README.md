# AESBT — site web

Site officiel de l'**Association des Étudiants et Stagiaires Burkinabè en Tunisie** (AESBT).

Il présente l'association et sa vie communautaire : présentation et bureau, actualités, galerie photos, centre de ressources (guides d'installation, démarches, études en Tunisie), agenda des événements et formulaire de contact.

> 🚧 **Projet en construction.** Le contenu et le design évoluent encore. Les coordonnées officielles, réseaux sociaux et chiffres restent à confirmer par l'association (emplacements marqués `TODO` dans `src/config/site.ts`) — aucune donnée n'est inventée.

## Stack

- [TanStack Start](https://tanstack.com/start) (React 19, TanStack Router) + Vite
- TypeScript, Tailwind CSS v4, composants Radix UI / shadcn
- Contenu éditorial statique dans `src/data/` — configuration centrale dans `src/config/site.ts`

## Démarrage

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production
npm run preview  # prévisualiser le build
```

Node.js 20+ recommandé.

## Structure

| Chemin | Rôle |
| --- | --- |
| `src/routes/` | Pages du site (accueil, association, actualités, galerie, ressources, événements, contact, inscription) |
| `src/data/` | Contenu : `association`, `news`, `albums`, `resources`, `events` |
| `src/config/site.ts` | Nom, navigation, contact, réseaux sociaux, intégration FLEXHUB |
| `src/components/` | Composants UI et de mise en page |

## Inscription / FLEXHUB

L'inscription aux événements passera par **FLEXHUB** (plateforme externe), aujourd'hui **non connectée**. Tant que l'intégration n'est pas faite, le bouton « Inscription » pointe vers la route interne `/inscription`. Voir la constante `FLEXHUB` dans `src/config/site.ts`.
