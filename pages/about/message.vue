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
        Message from Chairman
      </h1>
    </div>
  
    <div class="chairman-message container mx-auto py-8">
      
      <div class="flex flex-col md:flex-row gap-8 items-start">
        <img
          src="https://www.ivey.uwo.ca/imageGen.ashx?image=/media/3781222/executive-presence.jpg&width=1110&format=jpeg"
          alt="Chairman Portrait"
          class="w-full md:w-1/3 aspect-square object-cover rounded-lg"
        />
        <div class="flex-1">
          <p class="mb-4">Dear Valued Stakeholders,</p>
          <p class="mb-4">
            It is with great pleasure that I address you as the Chairman of our esteemed organization. Our commitment to excellence and innovation continues to drive our success in the ever-evolving business landscape.
          </p>
          <p class="mb-4">
            We remain dedicated to creating value for our shareholders, providing exceptional services to our clients, and fostering a positive impact on the communities we serve.
          </p>
          <p class="mb-4">
            Thank you for your continued trust and support. Together, we will achieve new heights and shape a brighter future.
          </p>
          <p class="mt-6 font-bold italic">John Doe</p>
          <p>Chairman of the Board</p>
        </div>
      </div>
    </div>
  
    <Footer />
 
</template>
  
<script setup>
import Header from "~/components/Header.vue";
</script>
