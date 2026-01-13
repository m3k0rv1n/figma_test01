# Deployment Guide - GitHub Pages

This guide will help you deploy the Figma Lottery App to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your machine
3. Node.js 18+ installed

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it `figma` (or any name you prefer)
5. Make it **public** (required for free GitHub Pages)
6. **Do NOT** initialize with README, .gitignore, or license
7. Click "Create repository"

## Step 2: Initialize Git and Push Code

Run these commands in your project directory:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Figma lottery app"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/figma.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**

## Step 4: Enable GitHub Actions

1. Still in **Settings**
2. Click on **Actions** → **General**
3. Under **Workflow permissions**, select:
   - **Read and write permissions**
   - **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

## Step 5: Trigger Deployment

The GitHub Actions workflow will automatically deploy when you push to main. To trigger it manually:

1. Go to the **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select the branch (main) and click **Run workflow**

## Step 6: Access Your Site

After deployment completes (usually 1-2 minutes), your site will be available at:

```
https://YOUR_USERNAME.github.io/figma/
```

Replace `YOUR_USERNAME` with your GitHub username and `figma` with your repository name.

## Important Notes

### Image Assets

⚠️ **Important**: The current implementation uses images from `http://localhost:3845/assets/`, which won't work on GitHub Pages. You have two options:

1. **Option A**: Download the images from Figma and host them in your repository
   - Create a `public/assets` folder
   - Download all images from the Figma asset server
   - Update image paths in components to use `/assets/...`

2. **Option B**: Use a CDN or image hosting service
   - Upload images to a service like Cloudinary, Imgur, or similar
   - Update image paths in components

### Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings as per GitHub Pages documentation

## Troubleshooting

### Build Fails
- Check the Actions tab for error messages
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Site Not Loading
- Wait a few minutes after deployment
- Clear browser cache
- Check the repository Settings → Pages for the correct URL

### Images Not Showing
- Verify image paths are correct
- Ensure images are committed to the repository
- Check browser console for 404 errors

## Updating the Site

To update your site:

```bash
# Make your changes
# ...

# Commit changes
git add .
git commit -m "Update: description of changes"

# Push to GitHub (this will trigger automatic deployment)
git push origin main
```

The site will automatically rebuild and deploy within 1-2 minutes.
