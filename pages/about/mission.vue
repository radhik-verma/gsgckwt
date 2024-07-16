<template>
  <div>
    <Header />
  </div>

  <div class="relative container mx-auto h-[50vh] overflow-hidden">
    <!-- Image -->
    <img
      src="https://staging.gsgckwt.com/wp-content/uploads/2024/07/pexels-mikhail-nilov-7582648-scaled.jpg"
      alt="mission"
      class="w-full h-full object-cover"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black opacity-40"></div>

    <!-- Text -->
    <h1
      class="absolute inset-0 flex items-center justify-center text-6xl text-white font-bold"
    >
      MISSION
    </h1>
  </div>

  <div class="mt-12 container mx-auto h-[30vh]">
    <p class="text-2xl font-thin">
      We are committed to providing exceptional products and services in Steel
      fabrication, Construction works, Trading and Scaffolding & Equipment
      Rental Services. We strive to exceed our clients’ expectations through
      innovation, quality, and timely delivery. We are dedicated to our
      employees’ growth and development, providing a safe and positive work
      environment, and creating value for our shareholders while giving back to
      the community.
    </p>
  </div>

  <Footer />
</template>

<script setup>
import Header from "~/components/Header.vue";
</script>
