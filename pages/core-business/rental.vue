<template>
    <Header />
  
    <div>
      <div class="relative">
        <img
          src="~/assets/images/fabrication.jpeg"
          alt="rental-division"
          class="w-full h-[30vh] object-cover"
        />
        <div class="absolute left-0 top-0 w-full h-full bg-black/50">
          <h1
            class="text-white text-4xl font-bold text-center flex justify-center items-center h-full"
          >
            Rental Division
          </h1>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="flex mt-10">
          <div class="flex-1">
            <h1 class="text-4xl font-bold">Rental Division</h1>
            <p class="max-w-xl py-10 font-light text-sm">
                Green Spring Group Company offers a wide range of rental services to support construction and industrial projects. Their inventory includes scaffolding, equipment, and vehicles, all of which are maintained to the highest standards to ensure safety and reliability. The Rental Division provides customized solutions to meet the unique needs of each client, whether it’s for a short-term project or long-term infrastructure development. With a large fleet of cranes, loaders, and other equipment, Green Spring Group ensures that their clients have access to the resources they need to complete their projects efficiently.
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
  