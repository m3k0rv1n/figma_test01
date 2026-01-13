#!/bin/bash

# Setup script for GitHub Pages deployment
# This script helps you set up the repository for GitHub Pages

echo "🚀 Setting up GitHub Pages deployment..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
fi

# Check if remote exists
if ! git remote | grep -q "origin"; then
    echo ""
    echo "⚠️  No remote repository found!"
    echo ""
    echo "Please create a GitHub repository first, then run:"
    echo "  git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
    echo ""
    read -p "Have you created the GitHub repository? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Enter your GitHub username: " username
        read -p "Enter your repository name (default: figma): " reponame
        reponame=${reponame:-figma}
        git remote add origin "https://github.com/$username/$reponame.git"
        echo "✅ Remote added: https://github.com/$username/$reponame.git"
    else
        echo "Please create a repository on GitHub first, then run this script again."
        exit 1
    fi
fi

# Add all files
echo "📝 Adding files to git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "✅ No changes to commit"
else
    echo "💾 Creating initial commit..."
    git commit -m "Initial commit: Figma lottery app configured for GitHub Pages"
    echo "✅ Commit created"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Push to GitHub: git push -u origin main"
echo "2. Go to your repository Settings → Pages"
echo "3. Select source: Branch 'main' → Folder '/ (root)'"
echo "4. Enable Actions → General → Workflow permissions → Read and write"
echo "5. Your site will be available at: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"
echo ""
