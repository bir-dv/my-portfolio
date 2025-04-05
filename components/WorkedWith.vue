<template>
  <div class="bg-black text-white py-10 px-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl mb-8 font-mono">Worked with</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div 
          v-for="(company, index) in companies" 
          :key="index"
          class="border-2 border-green-900/30 rounded-lg p-6 flex items-center justify-center"
        >
          <img :src="company.logo" :alt="company.name" class="h-10 opacity-90 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const companies = [
  { name: 'ClickUp', logo: '/skill-logo/nuxt.png' },
  { name: 'Dropbox', logo: '/skill-logo/react.png' },
  { name: 'Paychex', logo: '/skill-logo/vue.png' },
  { name: 'Elastic', logo: '/skill-logo/figma.png' },
  { name: 'Stripe', logo: '/skill-logo/vite.png' },
]
</script>
