<template lang="pug">
div#app.min-h-screen.bg-gradient-to-br.from-blue-50.to-indigo-100
  header.bg-white.shadow-sm
    nav.max-w-7xl.mx-auto.px-4.sm:px-6.lg:px-8
      div.flex.justify-between.h-16
        div.flex.items-center
          h1.text-2xl.font-bold.text-gray-900 Y&A Story
        div.flex.items-center.space-x-4
          a.text-gray-500.hover:text-gray-700.px-3.py-2.rounded-md.text-sm.font-medium(href="#") Home
          a.text-gray-500.hover:text-gray-700.px-3.py-2.rounded-md.text-sm.font-medium(href="#") About
          a.text-gray-500.hover:text-gray-700.px-3.py-2.rounded-md.text-sm.font-medium(href="#") Contact

  main.max-w-7xl.mx-auto.py-6.sm:px-6.lg:px-8
    div.px-4.py-6.sm:px-0
      WelcomeCard(:message="welcomeMessage" :count="count")
      
      div.mt-8.grid.grid-cols-1.gap-6.sm:grid-cols-2.lg:grid-cols-3
        FeatureCard(
          v-for="feature in features"
          :key="feature.id"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
        )

  footer.bg-white.border-t.border-gray-200.mt-auto
    div.max-w-7xl.mx-auto.py-4.px-4.sm:px-6.lg:px-8
      p.text-center.text-sm.text-gray-500 © 2024 Y&A Story. Built with Vue 3, TypeScript, Pug, Sass, and Tailwind CSS.
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import WelcomeCard from './components/WelcomeCard.vue'
import FeatureCard from './components/FeatureCard.vue'

interface Feature {
  id: number
  title: string
  description: string
  icon: string
}

const welcomeMessage = ref<string>('Welcome to Y&A Story!')
const count = ref<number>(0)

const features = ref<Feature[]>([
  {
    id: 1,
    title: 'Vue 3 Composition API',
    description: 'Built with the latest Vue 3 features and Composition API for modern development.',
    icon: '🚀'
  },
  {
    id: 2,
    title: 'TypeScript Support',
    description: 'Full TypeScript integration for type-safe development and better developer experience.',
    icon: '📝'
  },
  {
    id: 3,
    title: 'Pug Templates',
    description: 'Clean and readable templates using Pug preprocessor for better HTML structure.',
    icon: '🎨'
  },
  {
    id: 4,
    title: 'Sass Styling',
    description: 'Advanced CSS with Sass preprocessor for variables, mixins, and nested styles.',
    icon: '💅'
  },
  {
    id: 5,
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid UI development and consistent design.',
    icon: '🎯'
  },
  {
    id: 6,
    title: 'GitHub Pages Ready',
    description: 'Configured for easy deployment to GitHub Pages with automated workflows.',
    icon: '🌐'
  }
])

const incrementCount = (): void => {
  count.value++
}

onMounted(() => {
  console.log('Y&A Story app mounted successfully!')
})
</script>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}
</style>
