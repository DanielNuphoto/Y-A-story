# Y&A Story Web App

A modern web application built with Vue 3, TypeScript, Pug templates, Sass, and Tailwind CSS, configured for easy deployment to GitHub Pages.

## 🚀 Features

- **Vue 3** with Composition API
- **TypeScript** for type safety
- **Pug** templates for clean HTML structure
- **Sass/SCSS** for advanced styling
- **Tailwind CSS** for utility-first styling
- **Vite** for fast development and building
- **GitHub Pages** deployment ready

## 📦 Tech Stack

- Vue 3 with `<script setup>` syntax
- TypeScript for type checking
- Pug template preprocessor
- Sass/SCSS with variables and mixins
- Tailwind CSS for styling
- Vite for build tooling
- GitHub Actions for CI/CD

## 🛠️ Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/Y&A-story.git
cd Y&A-story
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
Y&A-story/
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages deployment workflow
├── public/
│   └── vite.svg            # Static assets
├── src/
│   ├── components/         # Vue components
│   │   ├── WelcomeCard.vue
│   │   └── FeatureCard.vue
│   ├── styles/             # SCSS styles
│   │   ├── main.scss       # Main styles with Tailwind imports
│   │   └── variables.scss  # SCSS variables
│   ├── App.vue             # Root component
│   ├── main.ts             # Application entry point
│   └── vite-env.d.ts       # Type definitions
├── index.html              # HTML entry point
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Vue Component Structure

Components are written as Single File Components (SFCs) with:

- **Template**: Pug syntax for clean, indented markup
- **Script**: TypeScript with Composition API
- **Style**: Sass/SCSS with scoped styling

Example component structure:
```vue
<template lang="pug">
div.my-component
  h1.title {{ title }}
  button.btn(@click="handleClick") Click me
</template>

<script setup lang="ts">
interface Props {
  title: string
}

const props = defineProps<Props>()

const handleClick = (): void => {
  console.log('Button clicked!')
}
</script>

<style lang="scss" scoped>
.my-component {
  @apply bg-white p-4 rounded-lg shadow;
  
  .title {
    color: $primary-color;
  }
}
</style>
```

## 🚢 Deployment to GitHub Pages

### Automatic Deployment

The project is configured with GitHub Actions for automatic deployment:

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://your-username.github.io/Y&A-story/`

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. The deployment workflow will handle the rest

### Manual Deployment

You can also deploy manually using the gh-pages package:

```bash
npm run deploy
```

## 🔧 Configuration

### Vite Configuration

The `vite.config.ts` includes:
- Vue plugin with Pug support
- Path aliases (`@` for `src/`)
- Base URL for GitHub Pages
- SCSS preprocessing

### Tailwind Configuration

Tailwind is configured to scan all Vue, JS, TS, and Pug files for classes.

### TypeScript Configuration

TypeScript is set up with:
- Strict type checking
- Path mapping for `@/*` imports
- Vue SFC support
- Pug template support

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages manually

## 🎯 Customization

### Changing the Base URL

Update the `base` property in `vite.config.ts` to match your repository name:

```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
})
```

### Adding New Components

1. Create a new `.vue` file in `src/components/`
2. Use Pug for templates, TypeScript for scripts, and Sass for styles
3. Import and use in other components or `App.vue`

### Styling

- Use Tailwind classes for utility-first styling
- Define custom SCSS variables in `src/styles/variables.scss`
- Add global styles in `src/styles/main.scss`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit your changes
5. Push to the branch
6. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Troubleshooting

### Common Issues

1. **Build fails with Pug errors**: Ensure all Pug templates are properly indented
2. **TypeScript errors**: Check that all imports have proper type definitions
3. **Tailwind classes not working**: Verify the file is included in `tailwind.config.js` content array
4. **GitHub Pages not updating**: Check the Actions tab for deployment status

### Getting Help

- Check the [Vue 3 documentation](https://vuejs.org/)
- Review [Vite documentation](https://vitejs.dev/)
- Check [Tailwind CSS documentation](https://tailwindcss.com/)
- Visit [TypeScript documentation](https://www.typescriptlang.org/)

---

Built with ❤️ using Vue 3, TypeScript, Pug, Sass, and Tailwind CSS.
