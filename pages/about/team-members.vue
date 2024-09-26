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
        Team Members
      </h1>
    </div>
  
    <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-8 text-center"></h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="member in teamMembers" :key="member.id" class="bg-white shadow-md rounded-lg overflow-hidden">
        <img :src="member.photo" :alt="member.name" class="w-full h-48 object-cover">
        <div class="p-4 text-center">
          <h2 class="font-bold text-lg">{{ member.name }}</h2>
          <p class="text-gray-600">{{ member.position }}</p>
        </div>
      </div>
    </div>
    </div>
  
    
  
   
    <Footer />
  </template>
  
  <script setup>
  import Header from "~/components/Header.vue";
 

  const teamMembers = [
  { id: 1, name: 'John Doe', position: 'CEO', photo: 'https://www.findmyprofession.com/wp-content/uploads/2023/02/Executive-Resume-Examples-Writing-Tips-3-Templates.png' },
  { id: 2, name: 'Jane Smith', position: 'CTO', photo: 'https://www.liveabout.com/thmb/VPCFdb9RRYIx6thL_5z9bt9SCjw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-executive-574646683df78c6bb05f019c.jpg' },
  { id: 1, name: 'John Doe', position: 'CEO', photo: 'https://www.findmyprofession.com/wp-content/uploads/2023/02/Executive-Resume-Examples-Writing-Tips-3-Templates.png' },
  { id: 1, name: 'John Doe', position: 'CEO', photo: 'https://www.findmyprofession.com/wp-content/uploads/2023/02/Executive-Resume-Examples-Writing-Tips-3-Templates.png' },
  { id: 1, name: 'John Doe', position: 'CEO', photo: 'https://www.findmyprofession.com/wp-content/uploads/2023/02/Executive-Resume-Examples-Writing-Tips-3-Templates.png' },
  { id: 1, name: 'John Doe', position: 'CEO', photo: 'https://www.findmyprofession.com/wp-content/uploads/2023/02/Executive-Resume-Examples-Writing-Tips-3-Templates.png' },
  { id: 1, name: 'John Doe', position: 'CEO', photo: 'https://www.findmyprofession.com/wp-content/uploads/2023/02/Executive-Resume-Examples-Writing-Tips-3-Templates.png' },
  { id: 1, name: 'John Doe', position: 'CEO', photo: 'https://www.findmyprofession.com/wp-content/uploads/2023/02/Executive-Resume-Examples-Writing-Tips-3-Templates.png' },
  
  // Add more team members as needed
];



  </script>
