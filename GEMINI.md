# Gemini Project Context

This document provides context for the Gemini agent to assist with the development and maintenance of the Silver Star website.

## Project Overview

The Silver Star website is a corporate platform built with Next.js, TypeScript, and Tailwind CSS. It serves to showcase the company's products and solutions. The website is designed to be modern, responsive, and easy to navigate.

## Key Technologies

- **Next.js:** The primary framework for the application. The project uses the App Router.
- **TypeScript:** For static typing and improved code quality.
- **Tailwind CSS:** For styling the application.
- **Framer Motion:** For animations.
- **Lucide React:** For icons.
- **Playwright:** For end-to-end testing.

## Project Structure

- **`/public`**: Contains static assets like images, fonts, and other files.
- **`/src`**: Contains the source code of the application.
  - **`/app`**: The main application directory for Next.js 13+ App Router.
    - **`/components`**: Contains reusable React components.
    - **`/data`**: Contains data files, such as JSON files.
    - **`/products`**: Contains the product pages.
    - **`/solutions`**: Contains the solution pages.
    - **`layout.tsx`**: The root layout of the application.
    - **`page.tsx`**: The home page of the application.

## Development Guidelines

### Creating New Pages

When creating a new page, follow these steps:

1.  Create a new directory in the `src/app` directory with the desired route name (e.g., `src/app/new-page`).
2.  Create a `page.tsx` file inside the new directory.
3.  Add the page content to the `page.tsx` file.
4.  If the page has a custom layout, create a `layout.tsx` file inside the new directory.

### Creating New Components

When creating a new component, follow these steps:

1.  Create a new file in the `src/app/components` directory with the component name (e.g., `src/app/components/new-component.tsx`).
2.  Add the component code to the new file.
3.  Export the component from the file.

### Styling

- Use Tailwind CSS for styling.
- Avoid using custom CSS files unless absolutely necessary.
- Follow the existing styling conventions in the project.

### State Management

- For simple component-level state, use the `useState` and `useReducer` hooks.
- For more complex global state, consider using React Context or a dedicated state management library if needed.

### Linting and Code Quality

- Run the linter before committing any changes: `pnpm lint`.
- Follow the ESLint rules defined in the `.eslintrc.js` file.

### Testing

- The project uses Playwright for end-to-end testing.
- Test files are located in the `tests` directory.
- Run tests using the `pnpm test-e2e` command (Note: this script may need to be added to `package.json`).

## Important Files

- **`src/app/layout.tsx`**: The root layout of the application. This file is a good place to add global styles and providers.
- **`src/app/page.tsx`**: The home page of the application.
- **`src/app/components/header-nav.tsx`**: The main navigation bar of the website.
- **`src/app/components/footer.tsx`**: The footer of the website.
- **`tailwind.config.ts`**: The configuration file for Tailwind CSS. You can customize the theme and add new utility classes here.
- **`next.config.ts`**: The configuration file for Next.js. You can configure various Next.js features here.
