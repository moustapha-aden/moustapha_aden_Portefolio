# Guide de Déploiement avec Nom de Domaine

Ce guide vous explique comment déployer votre portfolio avec un nom de domaine personnalisé ou gratuit.

## 🆓 Option 0 : Déploiement GRATUIT sans nom de domaine personnalisé

### Utiliser le sous-domaine Vercel/Netlify (Gratuit)

**Vercel** vous donne automatiquement un domaine gratuit :
- Format : `votre-projet.vercel.app`
- Exemple : `moustapha-aden-portfolio.vercel.app`
- SSL inclus automatiquement
- Aucun coût

**Netlify** vous donne aussi un domaine gratuit :
- Format : `votre-projet.netlify.app`
- Exemple : `moustapha-aden-portfolio.netlify.app`
- SSL inclus automatiquement

**Avantages** :
- ✅ 100% gratuit
- ✅ SSL automatique
- ✅ Déploiement instantané
- ✅ Pas besoin d'acheter un domaine

**Inconvénients** :
- ⚠️ URL avec `.vercel.app` ou `.netlify.app`
- ⚠️ Moins professionnel qu'un domaine personnalisé

---

## 🚀 Option 1 : Déploiement sur Vercel (Recommandé)

### Étape 1 : Préparer le projet

1. Assurez-vous que votre code est sur GitHub :
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

### Étape 2 : Déployer sur Vercel

1. **Créer un compte Vercel** :
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez-vous avec votre compte GitHub

2. **Importer votre projet** :
   - Cliquez sur "Add New Project"
   - Sélectionnez votre repository GitHub
   - Vercel détectera automatiquement Vite
   - Cliquez sur "Deploy"

3. **Configuration** :
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Étape 3 : Utiliser le domaine gratuit OU configurer un nom de domaine personnalisé

#### Option A : Utiliser le domaine gratuit Vercel (Recommandé si vous n'avez pas de budget)

Après le déploiement, Vercel vous donne automatiquement :
- URL : `votre-projet.vercel.app`
- C'est déjà configuré, rien à faire !
- Vous pouvez partager cette URL directement

#### Option B : Ajouter un domaine personnalisé (Si vous en avez un)

1. **Dans Vercel Dashboard** :
   - Allez dans votre projet
   - Cliquez sur "Settings" → "Domains"

2. **Ajouter un domaine personnalisé** :
   - Entrez votre nom de domaine (ex: `moustaphaaden.com`)
   - Cliquez sur "Add"

3. **Configurer les DNS** :
   
   **Option A : Utiliser les serveurs de noms Vercel (Recommandé)**
   - Vercel vous donnera des serveurs de noms (ex: `ns1.vercel-dns.com`)
   - Allez chez votre registrar de domaine (GoDaddy, Namecheap, etc.)
   - Changez les serveurs de noms vers ceux de Vercel

   **Option B : Utiliser des enregistrements DNS**
   - Ajoutez un enregistrement A :
     - Type: A
     - Name: @
     - Value: `76.76.21.21`
   - Ajoutez un enregistrement CNAME :
     - Type: CNAME
     - Name: www
     - Value: `cname.vercel-dns.com`

4. **Attendre la propagation DNS** (peut prendre jusqu'à 48h, généralement 1-2h)

5. **Vérifier** :
   - Vercel vérifiera automatiquement la configuration
   - Un certificat SSL sera généré automatiquement

#### Option C : Changer le domaine après configuration

Si vous voulez changer de domaine plus tard :

1. **Supprimer l'ancien domaine** :
   - Settings → Domains → Cliquez sur les 3 points → Remove

2. **Ajouter le nouveau domaine** :
   - Cliquez sur "Add" et suivez les mêmes étapes

3. **Mettre à jour les DNS** :
   - Modifiez les enregistrements DNS chez votre registrar
   - Attendez la propagation (1-2h)

**Note** : Vous pouvez avoir plusieurs domaines pointant vers le même site !

---

## 🌐 Option 2 : Déploiement sur Netlify

### Étape 1 : Préparer le projet

1. Créez un fichier `netlify.toml` à la racine :
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### Étape 2 : Déployer

1. Allez sur [netlify.com](https://netlify.com)
2. Connectez votre repository GitHub
3. Configurez :
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Cliquez sur "Deploy site"

### Étape 3 : Configurer le domaine

1. Allez dans "Site settings" → "Domain management"
2. Cliquez sur "Add custom domain"
3. Suivez les instructions pour configurer les DNS

---

## 📦 Option 3 : Déploiement sur GitHub Pages

### Étape 1 : Installer gh-pages

```bash
npm install --save-dev gh-pages
```

### Étape 2 : Modifier package.json

Ajoutez ces scripts :
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://moustapha-aden.github.io/Portfolio"
}
```

### Étape 3 : Déployer

```bash
npm run deploy
```

### Étape 4 : Configurer un nom de domaine personnalisé

1. Créez un fichier `CNAME` dans le dossier `public/` :
   ```
   moustaphaaden.com
   ```

2. Configurez les DNS chez votre registrar :
   - Type: A
   - Value: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

---

## 🔧 Configuration Vite pour le déploiement

Le fichier `vite.config.js` est déjà configuré correctement. Si vous avez besoin de modifications :

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Changez en '/Portfolio/' si vous utilisez GitHub Pages avec un sous-dossier
})
```

---

## 📝 Checklist avant déploiement

- [ ] Tous les liens sont corrects (GitHub, LinkedIn, Email, Twitter)
- [ ] Les images sont accessibles (vérifiez les chemins)
- [ ] Le build fonctionne localement : `npm run build`
- [ ] Le preview fonctionne : `npm run preview`
- [ ] Les variables d'environnement sont configurées si nécessaire
- [ ] Le nom de domaine est acheté
- [ ] Les DNS sont configurés

---

## 🎯 Recommandation

**Pour commencer (Gratuit)** :
1. Déployez sur Vercel avec le domaine gratuit `.vercel.app`
2. Partagez votre portfolio avec cette URL
3. Plus tard, si vous voulez un domaine personnalisé, vous pouvez l'ajouter facilement

**Vercel est la meilleure option** car :
- ✅ Déploiement automatique depuis GitHub
- ✅ SSL gratuit automatique (même pour les domaines gratuits)
- ✅ Domaine gratuit inclus (`.vercel.app`)
- ✅ Configuration DNS simple (si vous ajoutez un domaine personnalisé)
- ✅ Performance optimale
- ✅ Support excellent pour Vite/React
- ✅ Vous pouvez changer/ajouter des domaines à tout moment

---

## 🆘 Support

Si vous rencontrez des problèmes :
1. Vérifiez les logs de build dans votre plateforme
2. Testez le build localement : `npm run build`
3. Vérifiez la configuration DNS avec des outils comme [whatsmydns.net](https://www.whatsmydns.net)

---

**Bon déploiement ! 🚀**

