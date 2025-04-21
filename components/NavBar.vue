<template>
  <nav class="fixed top-5 w-full max-w-7xl mx-auto z-50 bg-[#1B1B1B]/80 backdrop-blur-sm rounded-lg md:left-0 md:right-0">
    <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center space-x-8 text-sm">

          <NuxtLink
            href="#home" 
            class="text-white cursor-pointer"
            @click="scrollToSection('home')"
          >
            Home
          </NuxtLink>
          
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.id"
            :href="`#${item.id}`"
            class="text-gray-300 hover:text-green-600 transition-colors hidden md:flex items-center"
            @click="scrollToSection(item.id)"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="isOpen = !isOpen"
            class="text-gray-300 hover:text-white"
          >
            <span class="sr-only">Open menu</span>
            <svg 
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <!-- icons -->
        <div class="hidden md:flex space-x-1">
          <NuxtLink 
          href="https://www.linkedin.com/in/biruk-yoseph/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-gray-300 hover:text-green-900" viewBox="0 0 60 60" fill="currentColor" stroke-width="2">
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
          </NuxtLink>
          <NuxtLink 
          href="https://github.com/bir-dv"
          target="_blank"
          rel="noopener noreferrer"
          class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-gray-300 hover:text-green-900 -mt-1" viewBox="0 0 60 60" fill="currentColor" stroke-width="2">
                  <path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"></path>
              </svg>
          </NuxtLink>
      </div>
      </div>
    </div>
    

    <!-- Mobile menu -->
    <div 
      v-show="isOpen" 
      class="md:hidden"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="text-gray-300 hover:text-white block px-3 py-2"
          @click="scrollToSection(item.id)"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const menuItems = [
  { name: 'About Me', id: 'about' },
  { name: 'Recent Work',  id: 'work' },
  { name: 'Contact', id: 'contact' }
]

const scrollToSection = (id: string)=> {
  isOpen.value = false
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
