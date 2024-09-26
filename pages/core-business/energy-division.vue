<template>
  <Header />

  <div>
    <div class="relative">
      <img
        src="~/assets/images/fabrication.jpeg"
        alt="energy-division"
        class="w-full h-[30vh] object-cover"
      />
      <div class="absolute left-0 top-0 w-full h-full bg-black/50">
        <h1
          class="text-white text-4xl font-bold text-center flex justify-center items-center h-full"
        >
          Energy Division
        </h1>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="flex mt-10">
        <div class="flex-1">
          <h1 class="text-4xl font-bold">Energy Division</h1>
          <p class="max-w-xl py-10 font-light text-sm">
            The Energy Division of Green Spring Group Company is at the
            forefront of providing innovative and sustainable energy solutions.
            This division handles projects related to power generation, energy
            distribution, and renewable energy sources. The team is equipped
            with the expertise to manage complex energy projects, ensuring that
            all systems are efficient, reliable, and environmentally friendly.
            The Energy Division plays a crucial role in supporting Kuwait’s
            economic development by contributing to the country’s energy
            infrastructure.
          </p>
        </div>
        <div class="mr-10">
          <CBSideBuilder />
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import Header from "~/components/Header.vue";
</script>
