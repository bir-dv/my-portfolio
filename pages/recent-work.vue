<template>
    <div class="container px-6 py-10 mx-auto max-w-7xl">
        <h1 class="text-4xl font-bold bg-gradient-to-r from-green-900 to-green-400 bg-clip-text text-transparent font-mono text-center">
            Portfolio
        </h1>
        <div class="flex justify-center mx-auto mt-6">
            <span class="inline-block w-40 h-1 bg-green-900 rounded-full"></span>
            <span class="inline-block w-3 h-1 mx-1 bg-green-900 rounded-full"></span>
            <span class="inline-block w-1 h-1 bg-green-900 rounded-full"></span>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
            <div
            v-for="(card, index) in cards"
            :key="index"
            class="flex flex-col justify-end overflow-hidden bg-cover bg-center bg-no-repeat rounded-lg h-96 transition-transform duration-300 ease-in-out hover:scale-105"
            :style="`background-image: url(${card.image})`"
            >
            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/80 dark:bg-gray-800/60">
                <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                {{ card.title }}
                </h2>
                <a 
                :href="card.link || '#'"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-2 text-sm tracking-wider text-blue-500 dark:text-blue-400">
                {{ card.type }}
                </a>
            </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">

 

const cards = [
    {
        title: "GitHub User Search",
        type: "Web Development",
        image: "/img/githubSearch.png",
        link: "https://alx-fe-reactjs-weld.vercel.app/"
    },
    {
        title: "Weather Dashboard",
        type: "Web Development",
        image: "/img/weather.png",
        link: "https://weather-dashboard-forecast.vercel.app/"
    },
    {
        title: "Weight Loss Meds",
        type: "Web Development",
        image: "/img/wloss.png",
        link: "https://weight-loss-meds.vercel.app/"
    },
    {
        title: "SoCal Autorestoration",
        type: "Web Development",
        image: "/img/socal.png",
        link: "https://so-cal-six.vercel.app/"
    },
    {
        title: "User Authentication",
        type: "Web Development",
        image: "/img/login.png",
    },
    {
        title: "Event Snap",
        type: "UI/UX Design",
        image: "/img/snap.png",
        link: "https://www.figma.com/proto/CvaS8V1ToBibCiVXy9EZVm/Event-Snap?node-id=5-2&t=gRj8QQaa5eoOnSxp-1"
    },
    {
        title: "Finance",
        type: "UI/UX Design",
        image: "/img/finance.png",
        link: "https://www.figma.com/design/u8s5BUwrMaiLBwIJF5SjHr/AIFinance-Web-App?node-id=0-1&t=RtZM2dPOLG5OPG6x-1"
    },
    {
        title: "Event Management",
        type: "UI/UX Design",
        image: "/img/event.png",
        link: "https://www.figma.com/file/EmWxyj5V6jpvzaGWGBywR1/event?type=design&node-id=0%3A1&mode=design&t=RP6yIjJkND5gDapL-1"
    },
    {
        title: "Open Fashion",
        type: "UI/UX Design",
        image: "/img/fashion.png",
        link: "https://www.figma.com/design/cU9JvyyOTFXHy7zVCygNgz/Open-Fashion?node-id=417-615&t=PP8lhR5lCJtaGmDt-1"
    },
]
</script>