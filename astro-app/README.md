# Portfolio Website

This is a portfolio website built with Astro, showcasing various features and components for a modern web application.

## Tech Stack

- **Astro**: A modern static site generator.
- **React**: JavaScript library for building user interfaces, integrated via Astro React.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Radix UI**: Set of accessible UI primitives for building component libraries.
- **Canvas Confetti**: Library for creating confetti animations.
- **Lucide Icons**: A collection of simple and customizable icons.
- **TypeScript**: Strongly typed programming language that builds on JavaScript.

## Styling

The website uses **Tailwind CSS** to achieve a clean, responsive, and modern design. Tailwind's utility-first approach allows for great flexibility and consistency in styling, helping to maintain the visual integrity of the website across different devices and screen sizes.

## Deployment

Deployment is typically managed through static hosting providers. Here are general steps to consider for deployment:

1. **Build the Site:**
   ```sh
   npm run build
   ```

2. **Deploy the Build Folder:**
   The build output is located in the `dist` folder. You can deploy this folder to static hosting services like Vercel, Netlify, or GitHub Pages.

3. **Continuous Deployment:**
   - On each push on main, we connect the runner to tailscale and do the commands to create and use a dockerfile for the website.

## Project Setup

```sh
# Install dependencies
npm install

# Start the development server
npm run dev

# Build the project for production
npm run build

# Preview the production build
npm run preview
```

## About the Website

This website is designed to showcase projects, blogs, and other content related to the author's work and interests. It leverages modern technologies to deliver a fast and visually appealing user experience.
