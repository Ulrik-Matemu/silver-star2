# Silver Star Website

This is the official corporate website for Silver Star, a company that provides a wide range of products and solutions. This project is a Next.js application built with TypeScript and styled with Tailwind CSS.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20.x or later)
- pnpm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/silver-star.git
   ```
2. Install NPM packages
   ```sh
   pnpm install
   ```

### Running the Development Server

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `pnpm dev`: Runs the app in the development mode.
- `pnpm build`: Builds the app for production to the `.next` folder.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Runs the linter.

## Project Structure

- **`/public`**: Contains static assets like images, fonts, and other files.
- **`/src`**: Contains the source code of the application.
  - **`/app`**: The main application directory for Next.js 13+ App Router.
    - **`/components`**: Contains reusable React components.
    - **`/data`**: Contains data files, such as JSON files and ts files for regular typescript objects.
    - **`/products`**: Contains the product pages.
    - **`/solutions`**: Contains the solution pages.
    - **`layout.tsx`**: The root layout of the application.
    - **`page.tsx`**: The home page of the application.
- **`next.config.ts`**: The configuration file for Next.js.
- **`tailwind.config.ts`**: The configuration file for Tailwind CSS.
- **`tsconfig.json`**: The configuration file for TypeScript.

## Technologies Used

- [Next.js](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [Lucide React](https://lucide.dev/) - Icon Library
- [ESLint](https://eslint.org/) - Linter
- [Playwright](https://playwright.dev/) - E2E Testing Framework