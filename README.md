# Kakuma Made Creative Hub

Welcome to the **Kakuma Made Creative Hub** repository. 

Kakuma Made Creative is a youth-led initiative based in Kakuma Refugee Camp, Kenya. We work with refugees and host-community youth to unlock creativity, build skills, and create positive social impact through art, design, education, environmental action, and storytelling.

## 🚀 Tech Stack

This project is a modern Single Page Application (SPA) built with:
- **[React](https://reactjs.org/)** (v18)
- **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling
- **[TypeScript](https://www.typescriptlang.org/)** - For robust, type-safe code
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development
- **[Shadcn UI](https://ui.shadcn.com/)** - Beautifully designed, accessible components built on top of Radix UI
- **[Framer Motion](https://www.framer.com/motion/)** - For smooth, physics-based animations
- **[React Router](https://reactrouter.com/)** - Declarative routing for React

## 📁 Project Structure

- `/src/pages` - Core page components (Home, Programs, About, Donate, etc.)
- `/src/components` - Reusable UI elements, global layout components (Navbar, Footer), and Shadcn base components
- `/src/assets` - Static assets including images, icons, and logos
- `/src/hooks` - Custom React hooks (e.g., `useCountUp` for animated stats)

## 🛠️ Local Development

To run this project locally, you will need **Node.js** installed on your machine.

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd kakuma-creative-hub
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The app will typically be available at `http://localhost:8080`.

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

This commands compiles and minifies the application into the `dist` directory, optimizing it for performance.

## 🌐 Deployment Configuration

This project includes proper routing fallback configurations for SPA deployments to ensure direct page links do not return a 404 error:
- `public/_redirects` (For Netlify, Cloudflare Pages)
- `vercel.json` (For Vercel)

## 🤝 Contributing

We welcome contributions! Please follow standard pull request workflows to safely introduce changes to the codebase. When adding new UI components or modifying existing ones, be sure to utilize the established Tailwind and Shadcn patterns to maintain design consistency.
