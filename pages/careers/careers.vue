<template>
    <div>
      <Header />
    </div>
  
    
    <div class="container mx-auto py-12 px-4">
      <!-- Hero Image Section -->
      <div class="mb-12">
        <div class="relative w-full" style="height: 50vh;">
          <img 
            src="/assets/images/team.jpeg" 
            alt="Our Team" 
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center pb-8">
            <h1 class="text-5xl font-bold text-white">Join Our Team</h1>
          </div>
        </div>
      </div>

      <!-- Current Openings Section -->
      <div class="mb-12">
        <div class="bg-[#3d8e6d] text-white p-6 rounded-t-lg">
          <h2 class="text-3xl font-bold">Current Openings</h2>
        </div>
        <div class="bg-green-100 p-8 rounded-b-lg">
          <div class="space-y-8">
            <div v-for="job in jobs" :key="job.title" class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-2xl font-semibold mb-2">{{ job.title }}</h3>
              <p class="mb-4">{{ job.description }}</p>
              <h4 class="text-lg font-semibold mb-2">Responsibilities:</h4>
              <ul class="list-disc pl-5 mb-4">
                <li v-for="responsibility in job.responsibilities" :key="responsibility">
                  {{ responsibility }}
                </li>
              </ul>
              <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Join Our Team Section -->
      <div>
        <div class="bg-[#3d8e6d] text-white p-6 rounded-t-lg">
          <h2 class="text-3xl font-bold">Join Our Team</h2>
        </div>
        <div class="bg-green-100 p-8 rounded-b-lg">
          <form @submit.prevent="submitCV" class="space-y-4">
            <div>
              <label for="name" class="block mb-1">Full Name</label>
              <input type="text" id="name" v-model="form.name" required class="w-full px-3 py-2 border rounded">
            </div>
            <div>
              <label for="email" class="block mb-1">Email</label>
              <input type="email" id="email" v-model="form.email" required class="w-full px-3 py-2 border rounded">
            </div>
            <div>
              <label for="cv" class="block mb-1">Upload CV (PDF)</label>
              <input type="file" id="cv" @change="handleFileUpload" accept=".pdf" required class="w-full">
            </div>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit CV</button>
          </form>
        </div>
      </div>
    </div>
</template>
<script setup>
import Header from "~/components/Header.vue";
import { ref } from 'vue';

// ... existing teamMembers array ...

const form = ref({
  name: '',
  email: '',
  cv: null
});

const handleFileUpload = (event) => {
  form.value.cv = event.target.files[0];
};

const submitCV = () => {
  // Handle CV submission logic here
  console.log('Submitting CV:', form.value);
  // Reset form after submission
  form.value = { name: '', email: '', cv: null };
};

const jobs = ref([
  {
    title: "Software Engineer",
    description: "We're seeking a talented Software Engineer to join our dynamic team and contribute to cutting-edge projects.",
    responsibilities: [
      "Develop and maintain high-quality software applications",
      "Collaborate with cross-functional teams to define and implement new features",
      "Participate in code reviews and contribute to best practices",
      "Troubleshoot, debug, and optimize application performance"
    ]
  },
  {
    title: "UX/UI Designer",
    description: "Join our creative team as a UX/UI Designer to craft intuitive and visually appealing user experiences.",
    responsibilities: [
      "Create user-centered designs by understanding business requirements and user feedback",
      "Design wireframes, storyboards, user flows, and process flows",
      "Develop UI mockups and prototypes that clearly illustrate how sites function and look",
      "Conduct user research and evaluate user feedback"
    ]
  },
  {
    title: "Marketing Specialist",
    description: "We're looking for a Marketing Specialist to help drive our brand awareness and lead generation efforts.",
    responsibilities: [
      "Develop and implement marketing strategies to reach target audiences",
      "Manage and create content for social media platforms",
      "Analyze marketing data to inform future marketing decisions",
      "Collaborate with the sales team to support lead generation efforts"
    ]
  }
]);

// ... existing code ...
</script>




