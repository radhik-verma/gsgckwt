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
      Our Strength
    </h1>
  </div>

  <div class="mt-12 container mx-auto h-[30vh]">
    <ul>
      <li class="text-2xl font-thin">
        • 47 years plus proven track record with total steel fabrication and
        erection of more than 300,000 Tons and more than 300 completed projects.
      </li>
      <li class="text-2xl font-thin">
        • Organized, Focused and Visionary Leadership
      </li>
      <li class="text-2xl font-thin">
        • Skilled Manpower for Structural, Electrical and Mechanical works
      </li>
      <li class="text-2xl font-thin">
        • 300 plus committed workforce
      </li>
      <li class="text-2xl font-thin">
        • 80 plus owned equipment & vehicles
      </li>
      <li class="text-2xl font-thin">
        • ISO
      certified company 9001, 14001 & 45001
      </li>
    </ul>
  </div>

  <Footer />
</template>

<script setup>
import Header from "~/components/Header.vue";
</script>
