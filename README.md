# Figma Lottery App - React Webapp

A mobile-first React webapp converted from Figma design, featuring a lottery lobby screen with game catalog, FAQ section, and footer.

## Project Structure

The project follows a design system hierarchy to maintain consistency and scalability:

```
src/
├── design-system/          # Design system foundation
│   ├── tokens/             # Design tokens (colors, typography, spacing)
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   └── index.ts
│   └── components/         # Base reusable components
│       ├── Button/
│       └── Card/
├── components/             # Feature components
│   ├── BrandMirHorizontal/
│   ├── CardLotteryButton/
│   ├── Catalog/
│   ├── FAQ/
│   ├── Footer/
│   ├── Header/
│   └── Moneybox/
├── screens/                # Screen-level components
│   └── LotteryLobby/
├── App.tsx                 # Main app component
├── App.css                 # Global styles
└── main.tsx                # Entry point
```

## Design System

The design system is organized in a hierarchical structure:

1. **Tokens** - Core design values (colors, typography, spacing)
2. **Base Components** - Reusable UI primitives (Button, Card)
3. **Feature Components** - Domain-specific components (Header, Catalog, etc.)
4. **Screens** - Complete page compositions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

Quick steps:
1. Create a GitHub repository
2. Push your code to the `main` branch
3. Enable GitHub Pages in repository settings
4. Enable GitHub Actions with write permissions
5. Your site will be available at `https://YOUR_USERNAME.github.io/figma/`

**Note**: The current image assets point to `localhost:3845`. You'll need to download and host these images for production deployment. See DEPLOYMENT.md for details.

## Features

- ✅ Mobile-first responsive design
- ✅ Design system with tokens and components
- ✅ Component-based architecture
- ✅ TypeScript for type safety
- ✅ Vite for fast development

## Design Tokens

All design values are centralized in the design system:

- **Colors**: System colors, dark theme, night colors with alpha
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Consistent spacing scale and border radius
- **Shadows**: Elevation and depth

## Component Structure

Each component follows a consistent structure:
- Component file (`.tsx`)
- Styles file (`.css`) if needed
- Index file for exports

## Notes

- Images are served from `http://localhost:3845/assets/` (Figma asset server)
- The design is optimized for mobile (360px width)
- All components use inline styles with design tokens for consistency
