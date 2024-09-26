<template>
    <Header />
  
    <div>
      <div class="relative">
        <img
          src="~/assets/images/fabrication.jpeg"
          alt="demolishing-division"
          class="w-full h-[30vh] object-cover"
        />
        <div class="absolute left-0 top-0 w-full h-full bg-black/50">
          <h1
            class="text-white text-4xl font-bold text-center flex justify-center items-center h-full"
          >
          Demolishing Division
          </h1>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="flex mt-10">
          <div class="flex-1">
            <h1 class="text-4xl font-bold">Demolishing Division</h1>
            <p class="max-w-xl py-10 font-light text-sm">
                The Demolishing Division at Green Spring Group is specialized in executing safe and efficient demolition projects across various sectors, including commercial, industrial, and infrastructure. Leveraging advanced machinery and a skilled workforce, the division ensures that all demolition activities are carried out with precision, adhering to strict safety and environmental standards. With a comprehensive approach that includes site surveys, risk assessments, and waste management, Green Spring’s Demolishing Division is well-equipped to handle complex projects, making it a trusted partner for clients in Kuwait and the region.
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
  