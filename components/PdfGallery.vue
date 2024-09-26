<template>
    <div class="container mx-auto p-4">
      <!-- PDF Gallery Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="pdf in pdfs"
          :key="pdf.name"
          class="border rounded shadow hover:shadow-lg cursor-pointer"
          @click="openModal(pdf)"
        >
          <!-- PDF Thumbnail -->
          <div class="flex items-center justify-center h-40 bg-gray-100 overflow-hidden">
            <img
              :src="getThumbnailUrl(pdf)"
              :alt="pdf.name"
              class="object-cover h-full w-full"
            />
          </div>
          <!-- PDF Name -->
          <div class="p-2 text-center">
            <p class="text-sm font-medium text-gray-700">{{ pdf.name }}</p>
          </div>
        </div>
      </div>
  
      <!-- Overlay Modal -->
      <div
        v-if="selectedPdf"
        class="fixed inset-0 h-[100vh] bg-black bg-opacity-50 flex items-center justify-center z-50"
        @click.self="closeModal"
      >
        <div class="bg-white rounded-lg overflow-hidden relative w-11/12 md:w-3/4 lg:w-1/2 h-[90vh] flex flex-col">
          <!-- Close Button -->
          <button
            class="absolute top-2 right-2 text-gray-600 hover:text-gray-800 z-10"
            @click="closeModal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
  
          <!-- PDF Viewer -->
          <iframe
            :src="pdfViewerUrl(selectedPdf.url)"
            class="flex-grow w-full"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  
  const pdfs = ref([
    { name: 'Sample 1', url: '/pdf/2023_KNPC.pdf', thumbnail: '/thumbnails/2023_KNPC.png' },
    { name: 'Sample 2', url: '/pdf/Ctc Registration 2024.pdf', thumbnail: '/thumbnails/Ctc_Registration_2024.jpg' },
    { name: 'Sample 3', url: '/pdf/ISO 9001 Green Spring Group Co. for General Trading & Contracting W.L.L.pdf', thumbnail: '/thumbnails/ISO_9001.jpg' },
    { name: 'Sample 4', url: '/pdf/ISO 14001 Green Spring Group Co. for General Trading & Contracting W.L.L.pdf', thumbnail: '/thumbnails/ISO_14001.jpg' },
    { name: 'Sample 5', url: '/pdf/ISO 45001 Green Spring Group Co. for General Trading & Contracting W.L.L.pdf', thumbnail: '/thumbnails/ISO_45001.jpg' },
  ])
  
  // Reactive variable to hold the selected PDF
  const selectedPdf = ref(null)
  
  // Function to open the modal with the selected PDF
  const openModal = (pdf) => {
    selectedPdf.value = pdf
  }
  
  // Function to close the modal
  const closeModal = () => {
    selectedPdf.value = null
  }
  
  // Function to construct the PDF viewer URL with parameters
    const pdfViewerUrl = (url) => {
    // Append URL parameters to hide UI elements and fit the page to the iframe
    return `${url}#toolbar=0&navpanes=0&scrollbar=0&view=FitH,100`
  }
  
  // Function to get the thumbnail URL for a PDF
  const getThumbnailUrl = (pdf) => {
    // If a thumbnail is specified, use it
    if (pdf.thumbnail) {
      return pdf.thumbnail
    }
    // Otherwise, return a placeholder image
    return '/images/pdf-placeholder.png'
  }
  </script>
  
  <style scoped>
  /* Optional: Add any additional styles here */
  
  /* Ensure the iframe fills the modal */
  iframe {
    border: none;
    width: 100%;
    height: 100%;
  }
  
  /* Optional: Add transition for modal appearance */
  .fixed {
    transition: opacity 0.3s ease;
  }
  
  /* Style for the thumbnail images */
  .object-cover {
    object-fit: cover;
  }
  </style>
  
  
  
  <style scoped>
  /* Optional: Add any additional styles here */
  
  /* Ensure the PDF container allows scrolling if content overflows */
  .pdf-container {
    overflow: hidden;
  }
  
  /* Style the loading and error messages */
  .pdf-container p {
    text-align: center;
    margin-top: 20px;
  }
  </style>
