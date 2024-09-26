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
        Contact Us
      </h1>
    </div>
    <div class="container mx-auto py-12 px-4">
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Form on the left -->
        <div class="w-full md:w-1/2">
          <div class="bg-white rounded-lg shadow-md overflow-hidden h-full">
            <div class="bg-[#3d8e6d] text-white p-6">
              <h2 class="text-2xl font-semibold">Contact Us</h2>
              <p class="mt-2">We'd love to hear from you. Please fill out the form below.</p>
            </div>
            <form @submit.prevent="submitForm" class="p-6">
              <div class="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" id="firstName" v-model="form.firstName" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3d8e6d] focus:ring focus:ring-[#3d8e6d] focus:ring-opacity-50 bg-green-50">
                </div>
                <div>
                  <label for="middleName" class="block text-sm font-medium text-gray-700">Middle Name</label>
                  <input type="text" id="middleName" v-model="form.middleName" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3d8e6d] focus:ring focus:ring-[#3d8e6d] focus:ring-opacity-50 bg-green-50">
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" id="lastName" v-model="form.lastName" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3d8e6d] focus:ring focus:ring-[#3d8e6d] focus:ring-opacity-50 bg-green-50">
                </div>
              </div>
              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" v-model="form.email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3d8e6d] focus:ring focus:ring-[#3d8e6d] focus:ring-opacity-50 bg-green-50">
              </div>
              <div class="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label for="countryCode" class="block text-sm font-medium text-gray-700">Country Code</label>
                  <input type="text" id="countryCode" v-model="form.countryCode" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3d8e6d] focus:ring focus:ring-[#3d8e6d] focus:ring-opacity-50 bg-green-50">
                </div>
                <div class="col-span-2">
                  <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" id="phoneNumber" v-model="form.phoneNumber" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3d8e6d] focus:ring focus:ring-[#3d8e6d] focus:ring-opacity-50 bg-green-50">
                </div>
              </div>
              <div class="mb-4">
                <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" id="subject" v-model="form.subject" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3d8e6d] focus:ring focus:ring-[#3d8e6d] focus:ring-opacity-50 bg-green-50">
              </div>
              <div class="mb-4">
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" v-model="form.message" rows="4" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3d8e6d] focus:ring focus:ring-[#3d8e6d] focus:ring-opacity-50 bg-green-50"></textarea>
              </div>
              <div class="mt-6">
                <button type="submit" class="w-full bg-[#3d8e6d] text-white py-2 px-4 rounded-md hover:bg-[#327a5d] focus:outline-none focus:ring-2 focus:ring-[#3d8e6d] focus:ring-opacity-50">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <!-- Contact info on the right -->
        <div class="w-full md:w-1/2">
          <div class="bg-white rounded-lg shadow-md overflow-hidden h-full">
            <div class="bg-[#3d8e6d] text-white p-6">
              <h2 class="text-2xl font-semibold">Get in Touch</h2>
            </div>
            <div class="p-6 bg-green-50">
              <div class="space-y-4">
                <div>
                  <h3 class="font-semibold">Telephone:</h3>
                  <p>+965-24330597</p>
                </div>
                <div>
                  <h3 class="font-semibold">E-mail:</h3>
                  <p>info@gsgckwt.com</p>
                </div>
                <div>
                  <h3 class="font-semibold">Address:</h3>
                  <p>Office 49 - 50, Mezzanine Floor,<br>
                     Al-Waha Mall, Dajeej,<br>
                     Farwaniya Kuwait</p>
                </div>
              </div>
              <div class="mt-6">
                <div class="aspect-w-16 aspect-h-9">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.5751898421774!2d47.95420331545726!3d29.264145082150723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDE1JzUwLjkiTiA0N8KwNTcnMjMuMCJF!5e0!3m2!1sen!2s!4v1651234567890!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  
  
    <Footer />
  </template>
  <script setup>
  import Header from "~/components/Header.vue";
  import { ref } from 'vue';

// ... existing teamMembers array ...

const form = ref({
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  countryCode: '',
  phoneNumber: '',
  subject: '',
  message: ''
});

const submitForm = () => {
  // Handle form submission logic here
  console.log('Form submitted:', form.value);
  // Reset form after submission
  form.value = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    countryCode: '',
    phoneNumber: '',
    subject: '',
    message: ''
  };
};


 

// ... existing code ...
  </script>




