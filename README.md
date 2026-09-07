# AESBT Foundation

Tu es chargé de construire la BASE / SQUELETTE du site web officiel de l’AESBT — Association des Étudiants et Stagiaires Burkinabè en Tunisie.

IMPORTANT :

Ce projet est un véritable site institutionnel destiné à être utilisé publiquement. Il doit être conçu comme un site professionnel réalisé sur mesure pour l’AESBT.

==================================================

1. IDENTITÉ DU PROJET

==================================================

Nom officiel :

AESBT — Association des Étudiants et Stagiaires Burkinabè en Tunisie

Le site doit avoir une identité institutionnelle, professionnelle, moderne et humaine.

Il ne doit absolument pas donner l’impression d’être un template générique, un prototype ou un site automatiquement généré.

Le résultat doit être sobre, crédible, élégant, clair et adapté à une association étudiante officielle.

==================================================

2. INTERDICTION DE BRANDING LOVABLE

==================================================

Le site final doit être entièrement présenté comme un site de l’AESBT.

NE PAS afficher :

- le nom "Lovable"

- le logo Lovable

- le favicon Lovable

- "Lovable App"

- "Built with Lovable"

- une mention indiquant que le site a été créé avec Lovable

- un placeholder ou texte faisant référence à Lovable

- une image ou ressource Lovable visible sur le site

- un titre de page générique laissé par défaut

- des métadonnées génériques liées à Lovable

Vérifier également :

- le favicon ;

- le document title ;

- les meta descriptions ;

- Open Graph ;

- Twitter/X metadata ;

- manifest ;

- nom de l'application ;

- icônes ;

- texte de chargement ;

- pages 404 ;

- autres éléments visibles ou accessibles publiquement.

Tout doit être présenté sous l'identité AESBT.

Le favicon devra utiliser le logo officiel de l'AESBT lorsqu'il sera intégré au projet.

==================================================

3. OBJECTIF DE CETTE PREMIÈRE VERSION

==================================================

NE PAS essayer de terminer tout le site maintenant.

Cette première étape consiste à construire une architecture solide et propre qui permettra ensuite à plusieurs développeurs de travailler simultanément sur différentes pages.

Créer :

- l'architecture générale ;

- le système de navigation ;

- le header ;

- le footer ;

- les styles globaux ;

- les composants réutilisables ;

- les différentes routes ;

- les structures principales des pages ;

- les emplacements réservés aux contenus dynamiques ;

- la structure responsive ;

- les éléments nécessaires à une future connexion avec FLEXHUB.

Les contenus définitifs seront ajoutés et travaillés ensuite.

==================================================

4. PAGES / ROUTES À PRÉVOIR

==================================================

Préparer les routes suivantes :

/

Accueil

/association

Association

/actualites

Actualités

/actualites/:slug

Détail d'une actualité

/galerie

Galerie

/galerie/:slug

Détail d'un album

/ressources

Centre de ressources

/ressources/:slug

Détail d'une ressource

/evenements

Événements

/inscription

Inscription

/contact

Contact

Prévoir également une page 404 propre et cohérente avec l'identité AESBT.

==================================================

5. NAVIGATION PRINCIPALE

==================================================

Créer une navigation claire permettant d'accéder aux principales sections :

Accueil

Association

Actualités

Galerie

Ressources

Événements

Contact

Prévoir également un appel à l'action clairement identifiable pour :

"Inscription"

Ce bouton devra être facilement remplaçable par une redirection vers FLEXHUB lorsque l'intégration sera effectuée.

La navigation doit fonctionner correctement sur desktop, tablette et mobile.

Sur mobile, prévoir un menu adapté et professionnel.

==================================================

6. HEADER

==================================================

Créer un header institutionnel moderne.

Il doit contenir :

- logo AESBT ;

- navigation principale ;

- bouton d'inscription ;

- version mobile responsive.

Le header doit pouvoir évoluer facilement.

Prévoir éventuellement un comportement sticky lors du scroll si cela reste élégant.

Ne pas surcharger le header.

==================================================

7. FOOTER

==================================================

Créer un footer complet et professionnel contenant :

- logo AESBT ;

- courte présentation de l'association ;

- liens rapides ;

- liens vers les principales pages ;

- coordonnées ;

- réseaux sociaux officiels ;

- bouton ou lien d'inscription ;

- copyright.

Le footer doit être réutilisable sur toutes les pages.

Ne pas inventer de coordonnées ou de réseaux sociaux.

Utiliser des placeholders clairement identifiés lorsque les informations officielles ne sont pas encore disponibles.

==================================================

8. PAGE ACCUEIL — STRUCTURE

==================================================

Construire uniquement la structure principale de la page d'accueil.

Prévoir les sections suivantes :

1. Hero principal

- identité AESBT ;

- titre principal ;

- courte présentation ;

- CTA inscription ;

- CTA secondaire si nécessaire ;

- emplacement pour un visuel/photo réel de l'association.

2. Présentation succincte de l'AESBT

3. Mot du Président

Prévoir un composant facilement alimentable avec :

- photo ;

- nom ;

- fonction ;

- message.

4. Dernières actualités

Prévoir une section capable d'afficher les dernières publications.

5. Prochain événement

Prévoir un composant destiné à recevoir les informations d'un événement provenant ultérieurement de FLEXHUB.

6. Statistiques

Prévoir des emplacements pour les statistiques importantes de l'association.

7. Aperçu de la galerie

Afficher quelques albums/photos et prévoir un lien vers la galerie complète.

8. Contact / réseaux sociaux

Prévoir une section finale orientant vers les coordonnées et réseaux officiels.

IMPORTANT :

Ne pas inventer les chiffres, événements, textes ou informations de l'AESBT.

Utiliser des placeholders propres lorsque les données définitives ne sont pas encore disponibles.

==================================================

9. PAGE ASSOCIATION — STRUCTURE

==================================================

Créer la structure institutionnelle de la page.

Prévoir :

- présentation générale ;

- historique ;

- missions et objectifs ;

- Bureau Exécutif ;

- organigramme ;

- statuts et documents institutionnels.

Le Bureau Exécutif doit pouvoir présenter :

- photo ;

- nom ;

- fonction.

Prévoir une structure suffisamment flexible pour que les informations puissent être modifiées facilement.

Ne pas inventer les noms ou fonctions.

==================================================

10. PAGE ACTUALITÉS — STRUCTURE

==================================================

Créer la structure de :

/actualites

et :

/actualites/:slug

Prévoir :

- liste des actualités ;

- image de couverture ;

- titre ;

- date ;

- extrait ;

- catégorie si nécessaire ;

- page détail ;

- galerie d'images dans une actualité si nécessaire ;

- document téléchargeable si nécessaire ;

- lien vers une publication sur les réseaux sociaux si nécessaire.

IMPORTANT :

Prévoir dès maintenant une architecture permettant plus tard à un administrateur autorisé de :

- créer ;

- modifier ;

- supprimer ;

- publier

des actualités.

Ne pas construire une interface d'administration massive pour le moment.

Préparer simplement l'architecture afin qu'elle puisse être connectée à un système de gestion de contenu.

==================================================

11. PAGE GALERIE — STRUCTURE

==================================================

Créer :

/galerie

et :

/galerie/:slug

Prévoir :

- albums ;

- image de couverture ;

- titre ;

- date ;

- description ;

- photos ;

- navigation entre photos.

La galerie concerne principalement les PHOTOS.

Ne pas créer une galerie vidéo.

Prévoir également une architecture permettant plus tard de gérer :

- création d'album ;

- modification ;

- suppression ;

- ajout de photos.

==================================================

12. CENTRE DE RESSOURCES — STRUCTURE

==================================================

Créer :

/ressources

et :

/ressources/:slug

Prévoir les catégories :

- Étudier en Tunisie

- Vie pratique

- Documents AESBT

- Opportunités

- FAQ

Chaque ressource pourra contenir :

- titre ;

- description ;

- catégorie ;

- document téléchargeable ;

- date de publication.

Prévoir une structure permettant plus tard d'ajouter, modifier et supprimer les ressources.

La page doit rester très simple à utiliser.

==================================================

13. ÉVÉNEMENTS

==================================================

Créer la structure de la page :

/evenements

La page devra être préparée pour recevoir ultérieurement les événements provenant de FLEXHUB.

NE PAS simuler une vraie connexion FLEXHUB.

Créer uniquement :

- structure visuelle ;

- composants ;

- emplacements ;

- états de chargement ;

- état vide ;

- structure de détail d'un événement si nécessaire.

La connexion réelle à FLEXHUB sera effectuée ultérieurement.

==================================================

14. INSCRIPTION

==================================================

Créer :

/inscription

Préparer la page afin qu'elle puisse ultérieurement rediriger ou communiquer avec FLEXHUB.

NE PAS créer une fausse inscription fonctionnelle.

Prévoir simplement la structure nécessaire et un emplacement clairement identifiable pour l'intégration future.

==================================================

15. PAGE CONTACT

==================================================

Créer :

/contact

Prévoir :

- coordonnées ;

- e-mail ;

- téléphone ;

- réseaux sociaux ;

- localisation ;

- formulaire de contact.

Ne pas inventer les coordonnées.

Utiliser des placeholders propres jusqu'à réception des informations officielles.

Le formulaire doit avoir :

- états normaux ;

- état de chargement ;

- succès ;

- erreur.

Préparer le composant afin que son système d'envoi puisse être connecté ultérieurement.

==================================================

16. DESIGN SYSTEM

==================================================

Le site doit respecter la charte graphique officielle de l'AESBT.

Le logo fourni par l'AESBT est la référence principale de l'identité visuelle.

Utiliser une direction :

- institutionnelle ;

- moderne ;

- élégante ;

- professionnelle ;

- sobre ;

- humaine ;

- accessible.

La mise en page doit respirer.

Utiliser :

- beaucoup d'espace blanc ;

- une bonne hiérarchie typographique ;

- des sections clairement séparées ;

- des grilles propres ;

- des images bien cadrées ;

- des composants cohérents.

==================================================

17. STYLE À ÉVITER

==================================================

ABSOLUMENT ÉVITER :

- design qui ressemble à une interface générée par IA ;

- trop d'icônes ;

- emojis utilisés comme éléments graphiques ;

- gradients excessifs ;

- glassmorphism ;

- effets 3D inutiles ;

- animations partout ;

- particules ;

- effets lumineux ;

- blobs décoratifs ;

- cartes avec ombres excessives ;

- boutons gigantesques ;

- éléments flottants sans fonction ;

- couleurs trop nombreuses ;

- typographie fantaisiste ;

- illustrations IA lorsque de vraies photos AESBT seront disponibles.

Le site doit ressembler à un véritable site institutionnel réalisé par une équipe professionnelle.

==================================================

18. ANIMATIONS

==================================================

Les animations sont autorisées mais doivent être discrètes.

Utiliser uniquement lorsqu'elles améliorent réellement l'expérience.

Exemples acceptables :

- apparition douce d'une section ;

- transition légère ;

- hover subtil ;

- changement d'état propre.

Éviter les animations spectaculaires.

Le site doit rester professionnel même si toutes les animations sont désactivées.

==================================================

19. RESPONSIVE

==================================================

Le site doit être pensé dès le départ pour :

- desktop ;

- tablette ;

- mobile.

NE PAS simplement réduire la version desktop.

Adapter réellement :

- navigation ;

- tailles ;

- espacements ;

- grilles ;

- images ;

- boutons ;

- textes ;

- sections.

Tester particulièrement les écrans mobiles.

==================================================

20. ACCESSIBILITÉ ET QUALITÉ

==================================================

Respecter autant que possible :

- contraste lisible ;

- textes accessibles ;

- boutons clairement identifiables ;

- navigation clavier lorsque pertinent ;

- labels de formulaire ;

- alt text pour les images ;

- états de chargement ;

- états d'erreur ;

- états vides.

==================================================

21. ARCHITECTURE DU CODE

==================================================

Le code doit être organisé afin que plusieurs développeurs puissent travailler dessus.

Créer des composants réutilisables pour :

- Header ;

- Footer ;

- boutons ;

- titres de section ;

- cartes ;

- actualités ;

- albums ;

- ressources ;

- événements ;

- statistiques ;

- membres du Bureau ;

- formulaires ;

- états de chargement ;

- états vides.

Éviter de mettre toute la logique dans une seule page.

Organiser clairement les fichiers et composants.

Éviter les duplications inutiles.

==================================================

22. DONNÉES

==================================================

Pour cette première version, utiliser des données de démonstration clairement identifiables comme telles lorsque nécessaire.

NE PAS inventer de vraies informations concernant :

- les membres ;

- les dirigeants ;

- les événements ;

- les coordonnées ;

- les statistiques ;

- les documents ;

- les réseaux sociaux.

Créer plutôt des structures/types/interfaces permettant de remplacer facilement les données de démonstration par les vraies données.

==================================================

23. PRÉPARATION FUTURE POUR FLEXHUB

==================================================

Le site devra pouvoir être connecté ultérieurement à FLEXHUB.

Préparer donc proprement les composants concernés :

- événements ;

- inscriptions ;

- statistiques/membres lorsque nécessaire.

Mais :

NE PAS inventer d'API.

NE PAS inventer d'URL d'API.

NE PAS créer une fausse synchronisation.

NE PAS prétendre que FLEXHUB est déjà connecté.

Créer une architecture permettant une intégration future propre.

==================================================

24. SEO ET MÉTADONNÉES

==================================================

Préparer des métadonnées propres pour chaque page.

Utiliser l'identité :

AESBT — Association des Étudiants et Stagiaires Burkinabè en Tunisie

Prévoir :

- title ;

- meta description ;

- Open Graph ;

- favicon ;

- image de partage lorsque disponible.

AUCUNE référence à Lovable dans les metadata.

==================================================

25. PAGE 404

==================================================

Créer une page 404 élégante et cohérente avec AESBT.

Elle doit contenir :

- message simple ;

- bouton retour à l'accueil ;

- identité AESBT.

Aucune référence à Lovable.

==================================================

26. PERFORMANCE

==================================================

Privilégier :

- composants légers ;

- images optimisées ;

- chargement raisonnable ;

- structure propre ;

- absence de dépendances inutiles.

Ne pas installer ou ajouter des bibliothèques inutiles uniquement pour créer des effets visuels.

==================================================

27. IMPORTANT — NE PAS PRENDRE DE LIBERTÉS

==================================================

Tu dois respecter cette architecture.

Ne pas :

- inventer des fonctionnalités ;

- ajouter des pages non prévues ;

- modifier l'identité visuelle ;

- ajouter des effets inutiles ;

- transformer le projet en dashboard ;

- créer un système complexe d'administration ;

- connecter artificiellement FLEXHUB ;

- inventer du contenu institutionnel.

Si un élément n'est pas défini, créer une structure neutre et facilement modifiable plutôt que d'inventer.

==================================================

28. OBJECTIF FINAL DE CETTE ÉTAPE

==================================================

À la fin de cette génération, je veux obtenir :

1. Une architecture complète du site AESBT.

2. Toutes les routes principales.

3. Header et footer réutilisables.

4. Design system cohérent.

5. Responsive complet.

6. Squelette de toutes les pages.

7. Composants réutilisables.

8. Structures prêtes pour les contenus dynamiques.

9. Structures préparées pour FLEXHUB.

10. Métadonnées propres.

11. Favicon et identité AESBT prévus.

12. Aucun branding Lovable visible.

13. Aucun contenu institutionnel inventé.

14. Un code propre permettant à plusieurs développeurs de continuer le travail.

NE CHERCHE PAS À TERMINER LES CONTENUS.

Construis une excellente fondation professionnelle sur laquelle l'équipe pourra ensuite travailler page par page.

Le résultat doit donner l'impression que l'AESBT dispose déjà d'une véritable plateforme institutionnelle en construction, et non d'un prototype généré automatiquement.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6d6500de-38e2-4a57-b5d3-5a58e997fb58).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
