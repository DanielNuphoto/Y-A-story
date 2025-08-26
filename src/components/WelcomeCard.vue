<template lang="pug">
div(class="bg-white overflow-hidden shadow rounded-lg")
  div(class="px-4 py-5 sm:p-6")
    div(class="flex items-center")
      div(class="flex-shrink-0")
        div(class="flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white")
          span(class="text-lg") 👋
      div(class="ml-5 w-0 flex-1")
        dl
          dt(class="text-sm font-medium text-gray-500 truncate") Welcome Message
          dd(class="text-lg font-medium text-gray-900") {{ message }}
    
    div(class="mt-4")
      div(class="flex items-center justify-between")
        div(class="text-sm text-gray-500") Click count: {{ count }}
        button(
          @click="incrementCounter"
          type="button"
          class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        ) Click me!
</template>

<script setup lang="ts">
interface Props {
  message: string
  count: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  increment: []
}>()

const incrementCounter = (): void => {
  emit('increment')
}
</script>

<style lang="scss" scoped>
.welcome-card {
  background: linear-gradient(135deg, $primary-color 0%, $secondary-color 100%);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
}

button {
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
}
</style>
