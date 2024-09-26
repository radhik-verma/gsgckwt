<template>
    <div>
        <Header />
    </div>

    <div class="relative container mx-auto h-[50vh] overflow-hidden">
        <!-- Image -->
        <img src="https://staging.gsgckwt.com/wp-content/uploads/2024/07/pexels-mikhail-nilov-7582648-scaled.jpg"
            alt="vision" class="w-full h-full object-cover" />

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black opacity-40"></div>

        <!-- Text -->
        <h1 class="absolute inset-0 flex items-center justify-center text-6xl text-white font-bold">
            Our values
        </h1>
    </div>

    <div class="mt-12 container mx-auto h-[30vh]">
        <p class="text-2xl font-thin">
            T – Teamwork: Divides the work and multiplies the success
           
        </p>
        <p class="text-2xl font-thin">
            E – Ethics: Always do the right things
           
        </p>
        <p class="text-2xl font-thin">
            A – Accountability: Take Ownership & Responsibility
           
        </p>
        <p class="text-2xl font-thin">
            M – Mutual Respect: Trust & Respect the Ideas
           
        </p>
        <p class="text-2xl font-thin">
            S – Service Excellences: Solution oriented Mind set
           
        </p>
        
            
           
            
    </div>

    <Footer />
</template>

<script setup>
import Header from "~/components/Header.vue";
</script>