# Portfolio - Moustapha Aden

Portfolio professionnel moderne créé avec React et Vite, présentant mes compétences en développement Full Stack et cybersécurité.

## 🚀 Fonctionnalités

- ✨ Design moderne et responsive
- 🎨 Interface utilisateur élégante avec animations
- 📱 Compatible mobile, tablette et desktop
- ⚡ Performance optimisée avec Vite
- 🎯 Sections complètes :
  - Hero avec animation de texte
  - À propos avec code block stylisé
  - Projets avec cartes interactives
  - Stack technique avec icônes
  - Statistiques GitHub
  - Objectifs 2025
  - Contact et réseaux sociaux
  - Citations inspirantes
  - Animation Snake GitHub

## 🛠️ Technologies Utilisées

- **React 19** - Bibliothèque JavaScript
- **Vite** - Build tool rapide
- **React Icons** - Icônes modernes
- **CSS3** - Styles personnalisés avec variables CSS
- **HTML5** - Structure sémantique

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 🎨 Personnalisation

### Mettre à jour vos informations

1. **Photo de profil** : 
   - Placez votre photo dans le dossier `public/` avec le nom `profile-photo.jpg`
   - Format recommandé : JPG ou PNG, carré (1:1), minimum 400x400px
   - Si la photo n'existe pas, une image placeholder sera affichée automatiquement

2. **GitHub Username** : Modifiez `username` dans :
   - `src/components/GitHubStats.jsx`
   - `src/components/SnakeAnimation.jsx`

3. **Liens sociaux** : Modifiez les URLs dans :
   - `src/components/Hero.jsx` (section hero-social)
   - `src/components/Contact.jsx` (section contact)

4. **Projets** : Modifiez les projets dans `src/components/Projects.jsx`

5. **Informations personnelles** : Modifiez les données dans `src/components/About.jsx`

### Couleurs

Les couleurs peuvent être personnalisées dans `src/App.css` via les variables CSS :

```css
:root {
  --primary-color: #4F46E5;
  --secondary-color: #10B981;
  --accent-color: #F59E0B;
  /* ... */
}
```

## 📁 Structure du Projet

```
src/
├── components/
│   ├── Header.jsx          # Navigation
│   ├── Hero.jsx            # Section hero avec animation
│   ├── About.jsx           # À propos
│   ├── Projects.jsx        # Projets
│   ├── TechStack.jsx       # Stack technique
│   ├── GitHubStats.jsx     # Statistiques GitHub
│   ├── Goals.jsx           # Objectifs 2025
│   ├── Contact.jsx         # Contact
│   ├── Quote.jsx           # Citations
│   ├── SnakeAnimation.jsx # Animation Snake
│   └── Footer.jsx          # Pied de page
├── App.jsx                 # Composant principal
├── App.css                 # Styles principaux
└── index.css               # Styles globaux
```

## 🌐 Déploiement avec Nom de Domaine

### Vercel (Recommandé)
1. Créez un compte sur [vercel.com](https://vercel.com)
2. Connectez votre repository GitHub
3. Vercel détectera automatiquement Vite et déploiera
4. Dans Settings → Domains, ajoutez votre nom de domaine
5. Configurez les DNS selon les instructions Vercel

### Netlify
1. Créez un compte sur [netlify.com](https://netlify.com)
2. Connectez votre repository GitHub
3. Configurez : Build command: `npm run build`, Publish: `dist`
4. Dans Domain settings, ajoutez votre domaine personnalisé

### GitHub Pages
1. Installez gh-pages : `npm install --save-dev gh-pages`
2. Ajoutez dans package.json :
   ```json
   "homepage": "https://votre-username.github.io/Portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Déployez : `npm run deploy`
4. Créez un fichier `CNAME` dans `public/` avec votre domaine

📖 **Guide complet** : Voir [DEPLOYMENT.md](./DEPLOYMENT.md) pour les instructions détaillées.

## 📝 Notes

- Assurez-vous de remplacer tous les liens placeholder (GitHub, LinkedIn, Email, Twitter) par vos vrais liens
- Les images de projets utilisent des placeholders - remplacez-les par vos vraies images
- Le username GitHub doit être mis à jour pour afficher vos vraies statistiques

## 📄 Licence

Ce projet est sous licence MIT.

## 👤 Auteur

**Moustapha Aden**
- Full Stack Developer & Cybersecurity Enthusiast
- Software Engineering Student
- Djibouti 🇩🇯

---

Fait avec ❤️ en utilisant React et Vite
