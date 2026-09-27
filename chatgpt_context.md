# Outright Project Context

This document provides context about the "Outright" project. You can share this with ChatGPT or other AI tools to get them up to speed on the codebase.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Site Generation / Server-Side Rendering)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS tokens (`src/styles/tokens.css`)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [Nanostores](https://github.com/nanostores/nanostores) (`@nanostores/react`)
- **3D / Canvas**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) (`@react-three/fiber`, `@react-three/drei`)
- **Language**: TypeScript

## 📁 Project Structure

The source code is located in the `src/` directory. Here is the structure:

```text
src/
├── components/          # React components (UI, 3D, Forms)
│   ├── Cart.tsx         # Shopping cart side-panel
│   ├── ProductDetail.tsx# Product detail modal
│   ├── SpatialCatalog.tsx # 3D catalog view (R3F)
│   ├── SearchModal.tsx  # Search functionality
│   ├── Watchlist.tsx    # Saved products list
│   └── ...
├── data/                # Static data and types
│   ├── products.ts      # Product database (Sneakers like Nike Dunk Low)
│   └── filters.ts       # Filter definitions
├── layouts/             # Astro layouts
│   └── BaseLayout.astro # Main HTML wrapper & head tags
├── pages/               # Astro routes (file-based routing)
│   ├── index.astro      # Home page (Catalog)
│   ├── checkout.astro   # Checkout flow
│   ├── orders.astro     # Order history
│   ├── watchlist.astro  # Watchlist page
│   └── about.astro      # About page
├── store/               # Nanostores for global state
│   ├── cartStore.ts     # Cart items and system messages
│   ├── systemStore.ts   # System stats (FPS, Memory)
│   ├── searchStore.ts   # Search state
│   ├── orderStore.ts    # Checkout / orders state
│   └── watchlistStore.ts# Saved items
├── styles/              # Global CSS
│   ├── global.css       # Base styles & resets
│   ├── tokens.css       # CSS variables (colors, spacing, etc.)
│   └── typography.css   # Font definitions
└── utils/               # Utility functions
    ├── share.ts         # Web Share API wrapper
    └── sound.ts         # UI sound effects
```

## 🧠 Key Architecture & Patterns

1. **Astro + React**: The app relies heavily on Astro for routing (`src/pages/*.astro`) and layout (`src/layouts/BaseLayout.astro`). Interactive UI components are built in React and mounted in Astro pages.
2. **Global State (Nanostores)**: Instead of React Context, global state is managed outside of React using Nanostores. This allows state to be shared easily between Astro components, React components, and vanilla JS. Files in `src/store/` define atoms like `cartItems`, `watchlist`, and `cameraPosition`. React components consume these using `useStore(cartItems)`.
3. **Styling & Aesthetics**: 
   - Uses Tailwind CSS alongside CSS variables (`var(--ink-primary)`, `var(--paper-base)`) for a specific "receipt" / "paper" / monospaced aesthetic. 
   - Components often use `framer-motion` for smooth, dynamic animations (like the `<PrintEffect />` when adding to cart).
4. **Data Handling**: The app currently uses a static data file (`src/data/products.ts`) containing heavily detailed product definitions (e.g., Nike Dunk Lows) including attributes like colorHex, materials, 3D position/rotation, and sizes. This is supplemented by `src/data/objectData.ts` which provides rich archival data (lore, cultural records, and relationships) for specific featured objects.
5. **Typescript**: The project is strictly typed. Pay attention to types exported in the `store` and `data` directories (e.g. `Product`, `CartItem`).

## 💡 Notes for the AI
- When making components, prioritize using standard Tailwind classes and the CSS tokens defined in `src/styles/tokens.css`.
- Rely on `@nanostores/react`'s `useStore` hook to consume global state.
- Ensure that TypeScript interfaces are respected (e.g., `sizes: number[]` in `Product`).
