<template>
    <Header />
  
    <div>
      <div class="relative">
        <img
          src="~/assets/images/fabrication.jpeg"
          alt="trading-division"
          class="w-full h-[30vh] object-cover"
        />
        <div class="absolute left-0 top-0 w-full h-full bg-black/50">
          <h1
            class="text-white text-4xl font-bold text-center flex justify-center items-center h-full"
          >
            Trading Division
          </h1>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="flex mt-10">
          <div class="flex-1">
            <h1 class="text-4xl font-bold">Trading Division</h1>
            <p class="max-w-xl py-10 font-light text-sm">
                The Trading Division of Green Spring Group Company is a key player in the supply chain, offering a wide range of products including steel, construction materials, electrical and instrumentation products, and automation products. Through strong partnerships with leading global suppliers, the Trading Division is able to provide high-quality products at competitive prices. This division ensures that all materials supplied meet the specific needs of each project, contributing to the overall success of Green Spring Group’s operations.
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
  