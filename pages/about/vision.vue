<template>
    <div>
      <Header />
    </div>
  
    <div class="relative container mx-auto h-[50vh] overflow-hidden">
      <!-- Image -->
      <img
        src="https://staging.gsgckwt.com/wp-content/uploads/2024/07/pexels-mikhail-nilov-7582648-scaled.jpg"
        alt="vision"
        class="w-full h-full object-cover"
      />
  
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black opacity-40"></div>
  
      <!-- Text -->
      <h1
        class="absolute inset-0 flex items-center justify-center text-6xl text-white font-bold"
      >
        Vision
      </h1>
    </div>
  
    <div class="mt-12 container mx-auto h-[30vh]">
      <p class="text-2xl font-thin">
        Our vision is to be a leading provider of innovative
and sustainable solutions in our key business verticals,
delivering value to all our stakeholders and contributing to
the economic development of Kuwait and the region.
      </p>
    </div>
  
    <Footer />
  </template>
  
  <script setup>
  import Header from "~/components/Header.vue";
  </script>
  