<template>
    <Header />
  
    <div>
      <div class="relative">
        <img
          src="~/assets/images/fabrication.jpeg"
          alt="civil-division"
          class="w-full h-[30vh] object-cover"
        />
        <div class="absolute left-0 top-0 w-full h-full bg-black/50">
          <h1
            class="text-white text-4xl font-bold text-center flex justify-center items-center h-full"
          >
            Civil Division
          </h1>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="flex mt-10">
          <div class="flex-1">
            <h1 class="text-4xl font-bold">Civil Division</h1>
            <p class="max-w-xl py-10 font-light text-sm">
                The Civil Division of Green Spring Group Company is renowned for its excellence in executing large-scale construction projects. This division handles civil construction and maintenance works for a variety of sectors including commercial, industrial, and residential. Their projects range from building construction to earth and soil moving works, showcasing their versatility and commitment to quality. The Civil Division ensures that all projects are completed with the highest standards of safety and within the specified timelines.
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
  