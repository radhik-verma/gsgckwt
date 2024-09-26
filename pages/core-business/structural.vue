<template>
    <Header />
  
    <div>
      <div class="relative">
        <img
          src="~/assets/images/fabrication.jpeg"
          alt="structural-division"
          class="w-full h-[30vh] object-cover"
        />
        <div class="absolute left-0 top-0 w-full h-full bg-black/50">
          <h1
            class="text-white text-4xl font-bold text-center flex justify-center items-center h-full"
          >
            Structural Division
          </h1>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="flex mt-10">
          <div class="flex-1">
            <h1 class="text-4xl font-bold">Structural Division</h1>
            <p class="max-w-xl py-10 font-light text-sm">
                Green Spring Group Company has established itself as a leader in structural steel works, offering comprehensive fabrication and erection services. With over 47 years of experience and more than 300,000 tons of steel fabricated and erected across various projects, the company ensures precision, quality, and timely delivery. Their structural steel works cater to diverse sectors including commercial buildings, industrial infrastructure, and oil & gas projects. The company’s state-of-the-art fabrication facilities and skilled workforce allow it to handle complex projects with ease, ensuring that every structure stands strong and durable.
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
  