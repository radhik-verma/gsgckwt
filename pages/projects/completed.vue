<template>
    <div class="min-h-screen bg-gray-100">
        <Header />
        <main class="container mx-auto px-4 py-8">
            <h1 class="text-3xl font-bold text-center mb-8">Completed Projects</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div v-for="project in projects" :key="project.id" class="bg-white shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                    <img :src="project.image" :alt="project.title" class="w-full h-56 object-cover">
                    <div class="py-1">
                        <h2 class="text-xl text-center font-semibold mb-2">{{ project.title }}</h2>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
    {
        id: 1,
        title: 'Project 1',
        image: '/projects/fabrication.jpeg',
    },
    {
        id: 2,
        title: 'Project 2',
        image: 'https://picsum.photos/seed/project2/400/300',
    },
    // Add more projects here
]);
</script>