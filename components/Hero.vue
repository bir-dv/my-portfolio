<template>
  <div class="min-h-screen flex items-center bg-black text-white px-4 -mt-20">
    <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          Biruk Yoseph <br>
          <span class="text-4xl bg-gradient-to-r from-green-700 to-green-400 bg-clip-text text-transparent font-mono">
           Frontend Developer
          </span>
        </h1>
        <p class="text-gray-400 text-lg mb-8">
          {{ introText }}
        </p>
        <NuxtLink
          class="inline-block bg-green-600 hover:bg-green-700 text-white px-16 py-6 rounded-md transition-colors duration-300 shadow-2xl shadow-green-600/50"
        >
        <div class="flex items-center gap-2 cursor-pointer">
            Let's get started
            <span class="ml-2 animate-ping">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
               </svg>
            </span>
        </div>
        </NuxtLink>
      </div>
      <div class="hidden lg:block pt-10">
        <div class="relative w-[28rem] h-[28rem] mx-auto ">
          <img
            src="/assets/img/Frame.png"
            alt="Profile"
            class="w-full h-full object-cover animate-spin-slow hover:[animation-play-state:paused] "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const introText = "Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
</script>
