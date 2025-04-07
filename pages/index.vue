<template>
    <div class="bg-black min-h-screen">
        <NavBar />
        <section id="home">
            <Hero />
            <WorkedWith />
        </section>
        
        <section id="about">
            <about />
        </section>
        <section id="work">
            <recentWork />
        </section>
        <section id="contact">
            <contact />
        </section>
    </div>
</template>
<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Hero from '@/components/Hero.vue'
import WorkedWith from '@/components/WorkedWith.vue'
import about from './about.vue'
import contact from './contact.vue'
import recentWork from './recent-work.vue'

</script>