# Tailwind V4 Theming Examples

A comprehensive guide and example implementation for setting up custom themes and color schemes in Tailwind CSS v4 with Next.js and shadcn/ui.

## Features

- 🎨 Multiple theme support (Light, Dark, and custom themes)
- 🎯 Custom color variables using modern `oklch` color space
- 🔄 Theme switching with next-themes
- 📦 Integration with shadcn/ui
- ⚡ Built with Next.js and Tailwind CSS v4

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, pnpm, or yarn

### Installation

1. Clone the repository:

```bash
git clone git@github.com:Eveelin/tailwind-v4-theming-examples.git
cd tailwind-v4-theming-examples
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

## Theme Setup Guide

### 1. Install Required Dependencies

```bash
npm install next-themes tailwindcss @tailwindcss/postcss postcss
```

### 2. Configure PostCSS

Create `postcss.config.mjs`:

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### 3. Set Up Theme Provider

Create `components/theme-provider.tsx`:

```typescript
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

### 4. Configure Root Layout

Update your `app/layout.tsx`:

```typescript
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### 5. Define Custom Themes

In your `globals.css`, define theme variables using modern color spaces like `oklch`:

```css
:root {
  --background: oklch(1 0 0); /* #ffffff - pure white */
  --foreground: oklch(0 0 0); /* #000000 - pure black */
  --warning: oklch(0.84 0.16 84);
  --warning-foreground: oklch(0.28 0.07 46);
}

.dark {
  --background: oklch(0 0 0); /* #000000 - pure black */
  --foreground: oklch(1 0 0); /* #ffffff - pure white */
  --warning: oklch(0.41 0.11 46);
  --warning-foreground: oklch(0.99 0.02 95);
}

/* Custom theme examples */
.green {
  --background: oklch(0.26 0.05 173);
  --foreground: oklch(0.85 0.13 165);
}

.yellow {
  --background: oklch(0.97 0.15 85);
  --foreground: oklch(0.25 0.05 85);
}
```

## Understanding the Theme Structure

### Color Space: OKLCH

We use the `oklch` color space because:

- Better perceptual uniformity
- Wider color gamut
- More intuitive color adjustments
- Better color accessibility

### Theme Variables

Each theme defines these essential variables:

- `--background`: Main background color
- `--foreground`: Main text color
- `--warning`: Warning state color
- `--warning-foreground`: Text color for warning elements

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the theming implementation inspiration
- [Tailwind CSS](https://tailwindcss.com/) for the excellent utility-first CSS framework
- [next-themes](https://github.com/pacocoursey/next-themes) for theme management

## Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
