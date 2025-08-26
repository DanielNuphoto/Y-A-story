<template lang="pug">
div(class="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300")
  div(class="px-4 py-5 sm:p-6")
    div(class="flex items-center")
      div(class="flex-shrink-0")
        span(class="text-2xl") {{ icon }}
      div(class="ml-4")
        h3(class="text-lg leading-6 font-medium text-gray-900") {{ title }}
        p(class="mt-2 text-sm text-gray-500") {{ description }}
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  icon: string
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.feature-card {
  border: 1px solid rgba($primary-color, 0.1);
  
  &:hover {
    border-color: rgba($primary-color, 0.3);
    transform: translateY(-2px);
    
    .icon {
      transform: scale(1.1);
    }
  }
}

.icon {
  transition: transform 0.2s ease;
}
</style>
