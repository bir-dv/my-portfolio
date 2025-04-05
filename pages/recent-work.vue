<template>
    
    <div class="container px-6 py-10 mx-auto">
        <NavBar />
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our
            Portfolio
        </h1>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
            <div
            v-for="(card, index) in cards"
            :key="index"
            class="flex items-end overflow-hidden bg-contain bg-center bg-no-repeat rounded-lg h-96"
            :style="`background-image: url(${card.image})`"
            >
            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/80 dark:bg-gray-800/60">
                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                {{ card.title }}
                </h2>
                <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
                {{ card.type }}
                </p>
            </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import NavBar from '~/components/NavBar.vue';

 

const cards = [
    {
        title: "GitHub User Search",
        type: "Website",
        image: "/img/githubSearch.png",
    },
    {
        title: "GitHub User Search",
        type: "Website",
        image: "/img/githubSearch.png",
    },
    {
        title: "GitHub User Search",
        type: "Website",
        image: "/img/githubSearch.png",
    },
    {
        title: "GitHub User Search",
        type: "Website",
        image: "/img/githubSearch.png",
    },
]
</script>