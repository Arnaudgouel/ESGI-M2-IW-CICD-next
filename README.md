# Next.js Project CI/CD Workflows

Ce projet utilise GitHub Actions pour automatiser les processus d'intégration continue (CI) et de déploiement continu (CD). Voici une description des différents workflows configurés dans ce projet.

## CI for Next.js

Ce workflow s'exécute sur chaque pull request vers la branche `main` et effectue les étapes suivantes :

1. **Checkout repository**: Clone le dépôt.
2. **Install Node.js**: Installe Node.js version 18.
3. **Install dependencies**: Installe les dépendances du projet avec `npm install`.
4. **Run linting**: Exécute l'analyse statique du code avec `npm run lint -- --no-cache`.
5. **Test /hello route**: Exécute les tests avec `npm run test`.
6. **Start Next.js server**: Construit et démarre le serveur Next.js.
7. **Wait for server to start**: Attend 5 secondes pour s'assurer que le serveur est démarré.

Fichier de configuration : [`.github/workflows/ci-nextjs.yml`](.github/workflows/ci-nextjs.yml)

## CD - Create GitHub package

Ce workflow s'exécute sur chaque push vers la branche `main` et effectue les étapes suivantes :

### Job: Build Next.js

1. **Checkout repository**: Clone le dépôt.
2. **Install Node.js**: Installe Node.js version 18.
3. **Install dependencies**: Installe les dépendances du projet avec `npm install`.
4. **Build the project**: Construit le projet avec `npm run build`.
5. **Archive build artifacts**: Archive les artefacts de build dans le répertoire `release`.
6. **Upload build artifact**: Télécharge les artefacts de build en tant qu'artefact nommé `nextjs-build`.

### Job: Create GitHub package

1. **Checkout repository**: Clone le dépôt.
2. **Download build artifact**: Télécharge l'artefact de build nommé `nextjs-build`.

Fichier de configuration : [`.github/workflows/cd-nextjs.yml`](.github/workflows/cd-nextjs.yml)

## Create GitHub Release

Ce workflow s'exécute sur chaque push d'un tag correspondant au modèle `v*` (par exemple, `v1.0.0`) et effectue les étapes suivantes :

1. **Checkout repository**: Clone le dépôt.
2. **Extract tag name**: Extrait le nom du tag et le stocke dans une variable d'environnement.
3. **Release**: Crée une release GitHub en utilisant l'action `softprops/action-gh-release`.

Fichier de configuration : [`.github/workflows/cd-tag-nextjs.yml`](.github/workflows/cd-tag-nextjs.yml)