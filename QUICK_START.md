# Quick Start - Deploy to GitHub Pages

## 🚀 Fastest Way to Deploy

### Option 1: Automated Setup (Recommended)

```bash
# Run the setup script
./setup-github.sh
```

Then follow the prompts!

### Option 2: Manual Setup

#### 1. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `figma` (or your preferred name)
3. Make it **Public**
4. **Don't** initialize with README
5. Click "Create repository"

#### 2. Push Your Code

```bash
# Add remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. **Settings** → **Pages**
3. Source: **Branch** `main` → **Folder** `/ (root)`
4. Click **Save**

#### 4. Enable GitHub Actions

1. **Settings** → **Actions** → **General**
2. **Workflow permissions**: **Read and write permissions**
3. Click **Save**

#### 5. Deploy

The deployment will start automatically! Check the **Actions** tab to see progress.

Your site will be live at:
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

## ⚠️ Important: Image Assets

The app currently uses images from `localhost:3845` which won't work online. You need to:

1. **Download images from Figma** (or use the asset URLs)
2. **Create a `public/assets` folder**
3. **Place images there**
4. **Update image paths** in components from `http://localhost:3845/assets/...` to `/assets/...`

Or use a CDN service like Cloudinary, Imgur, etc.

## 🔄 Updating Your Site

Just push changes to the `main` branch:

```bash
git add .
git commit -m "Your update message"
git push origin main
```

Deployment happens automatically! 🎉
