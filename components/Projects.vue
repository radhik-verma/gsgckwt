<template>
  <div class="container mx-auto my-20">
    <p class="text-4xl font-bold text-green-700 ml-20">Our work</p>
    <h1 class="text-6xl font-extrabold mt-2 ml-20">
      Amazing structures <br/> built by us.
    </h1>

    <div class="flex gap-4 mt-10 justify-center ">
      <div
        v-for="project in projects"
        class="border hover:scale-105 ease-in-out duration-300 max-w-[300px]"
      >
        <img :src="project.img" class="w-[300px] h-[300px] object-cover" />
        <p class="text-base ml-2 mt-2 font-bold text-green-700">{{project.status}}</p>
        <h1 class="my-3 ml-2 font-regular text-xl text-wrap">{{ project.title }}</h1>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <button class="mt-5 bg-green-800 text-white py-2 px-16 rounded-md hover:scale-105 duration-200">
        View all projects
      </button>
    </div>
  </div>
</template>

<script setup>
import pr1 from "../assets/images/pr1.jpg";
import pr2 from "../assets/images/pr2.jpg";
import pr3 from "~/assets/images/pr3.jpg";
import pr4 from "~/assets/images/pr4.jpg";

const projects = ref([
  { img: pr1, status: "Ongoing", title: "Kuwait University with Shapoorji" },
  { img: pr2, status: "Ongoing", title: "Hawally Court" },
  {
    img: pr3,
    status: "Completed",
    title: "Sheikh Jaber Al-Ahmed Cultural Centre",
  },
  { img: pr4, status: "Completed", title: "Kuwait University Sinohydro" },
]);
</script>
