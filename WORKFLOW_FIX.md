# Workflow Fix Instructions

The workflow file on GitHub needs to be updated. Here's what to do:

## Option 1: Edit on GitHub (Easiest)

1. Go to: https://github.com/m3k0rv1n/figma_test01/edit/main/.github/workflows/deploy.yml
2. Find line 31 that says: `run: npm ci`
3. Change it to: `run: npm install`
4. Make sure line 28-29 looks like this (NO cache line):
   ```yaml
   with:
     node-version: '18'
   ```
5. Click "Commit changes"

## Option 2: Complete Correct Workflow File

Replace the entire content of `.github/workflows/deploy.yml` with:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
        env:
          NODE_ENV: production
          GITHUB_REPOSITORY: ${{ github.repository }}
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

After updating, the workflow will automatically run and deploy your site!
