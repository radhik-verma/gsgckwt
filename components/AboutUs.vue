<template>

<div class="w-[100vw]" style="background-image:linear-gradient(to bottom, rgba(255,255,255,1) 10% ,rgba(255,255,255,0.5) 25%, rgba(255,255,255,0.5) 75%, rgba(255,255,255,1) 90%), url('https://staging.gsgckwt.com/wp-content/uploads/2024/07/pattern_hexagon-5_0.5_2_0-0_0_1__ffffff_009414.png'); background-size: contain; background-position: center;">
  <div class="container mx-auto mt-10" style="background-image:linear-gradient(to bottom, rgba(255,255,255,1) 10% ,rgba(255,255,255,0.5) 25%, rgba(255,255,255,0.5) 75%, rgba(255,255,255,1) 90%), url('https://staging.gsgckwt.com/wp-content/uploads/2024/07/pattern_hexagon-5_0.5_2_0-0_0_1__ffffff_009414.png'); background-size: contain; background-position: center;">
    <p class="text-4xl font-bold text-green-700 ml-20">Who we are</p>
    <h1 class="text-6xl font-extrabold mt-4 ml-20">About Green Spring Group Co.</h1>

    <p class="font-light leading-7 mt-4 ml-20 max-w-[70%]">
      We are a Kuwaiti company established in 1976 with a proven track record of
      excellence. We specialize in executing large-scale projects, including
      commercial buildings, hospitals, industrial, infrastructure, and oil & gas
      projects. Our professional team ensures the highest standards of quality
      and safety in every project.
    </p>

    <div class="flex gap-4 mt-10 items-center justify-center">
      <div v-for="business in coreBusiness" class="border hover:scale-105 ease-in-out duration-300">
        <img :src="business.img" class="w-[300px] h-[300px] object-cover"/>
        <h1 class="my-3 font-regular text-3xl ml-6">{{ business.title }}</h1>
      </div>
    </div>

    <div class="flex items-center justify-center">
      <button class="mt-5 bg-green-800 text-white py-2 px-16 rounded-md hover:scale-105 duration-200">
        View all services
      </button>
    </div>
  </div>

</div>
    
  
</template>

<script setup>
import fabricationImage from "../assets/images/fabrication.jpeg";
import constructionImage from "../assets/images/construction.jpg";
import tradingImage from "~/assets/images/trading.webp";
import rentalImage from "~/assets/images/rental.jpg";

const urlImg = ref("https://staging.gsgckwt.com/wp-content/uploads/2024/07/bgpattern.png");

const coreBusiness = ref([
  { img: fabricationImage, title: "Fabrication" },
  { img: constructionImage, title: "Construction" },
  { img: tradingImage, title: "Trading" },
  { img: rentalImage, title: "Rental" },
]);
</script>
