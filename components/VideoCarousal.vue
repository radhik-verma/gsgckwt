<template>
    <div class="relative w-full h-[70vh] overflow-hidden">
      <video 
        class="w-full h-full object-cover"
        src="https://assets.mixkit.co/videos/9686/9686-720.mp4" 
        autoplay 
        loop 
        muted
      >
        Your browser does not support the video tag.
      </video>
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      
      <div class="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-thin text-5xl">
      {{ currentText }}
    </div>
    <div class="absolute top-[60%] left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-thin text-5xl">
      <button class="bg-white text-black rounded-md px-6 py-1 text-2xl">
        Services
      </button>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const texts = [
    'Expert Steel Works',
    'Global Trading Partners',
    'Professional Scaffolding Services',
    'Reliable Equipment Rentals'
  ]
  const currentText = ref(texts[0])
  let textIndex = 0
  
  const updateText = () => {
    textIndex = (textIndex + 1) % texts.length
    currentText.value = texts[textIndex]
  }
  
  onMounted(() => {
    const interval = setInterval(updateText, 3000)  // Change text every 3 seconds
    return () => clearInterval(interval)
  })
  </script>
  
  <style scoped>
  /* Tailwind classes handle everything, so no additional styles needed unless customization beyond Tailwind is required */
  </style>
  