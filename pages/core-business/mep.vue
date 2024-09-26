<template>
    <Header />
  
    <div>
      <div class="relative">
        <img
          src="~/assets/images/fabrication.jpeg"
          alt="MEP-division"
          class="w-full h-[30vh] object-cover"
        />
        <div class="absolute left-0 top-0 w-full h-full bg-black/50">
          <h1
            class="text-white text-4xl font-bold text-center flex justify-center items-center h-full"
          >
            MEP Division
          </h1>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="flex mt-10">
          <div class="flex-1">
            <h1 class="text-4xl font-bold">MEP Division</h1>
            <p class="max-w-xl py-10 font-light text-sm">
                The MEP (Mechanical, Electrical, and Plumbing) division of Green Spring Group Company is dedicated to delivering high-quality services in mechanical works, electrical instrumentation & telecommunication, and piping works. Each subdivision plays a crucial role in ensuring the safety, efficiency, and reliability of the infrastructure.
            </p>

            <div>
              <!-- add here -->
              <div class="tab-system">
                <div class="tab-buttons">
                  <button
                    v-for="tab in tabs"
                    :key="tab.id"
                    @click="setActiveTab(tab.id)"
                    :class="{ active: activeTab === tab.id }"
                    class="tab-button"
                  >
                    {{ tab.title }}
                  </button>
                </div>
                <div class="tab-content">
                  <div v-for="tab in tabs" :key="tab.id" v-show="activeTab === tab.id" class="text-sm font-light max-w-xl">
                    {{ tab.content }}
                  </div>
                </div>
              </div>
            </div>
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
  import { ref, onMounted, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const router = useRouter();

  const activeTab = ref('tab1');

  const tabs = [
  {
      id: 'tab2',
      title: 'Electrical & Instrumentation',
      content: 'We provide comprehensive electrical and instrumentation services, including power distribution, control systems, and telecommunications infrastructure.'
    },
    {
      id: 'tab1',
      title: 'Mechanical Works',
      content: 'Our mechanical works division specializes in HVAC systems, industrial machinery installation, and maintenance services.'
    },
    
    {
      id: 'tab3',
      title: 'Piping Works',
      content: 'Our piping works team handles the design, installation, and maintenance of various piping systems for industrial and commercial applications.'
    },
    {
      id: 'tab4',
      title: 'HVAC Works',
      content: 'We provide comprehensive electrical and instrumentation services, including power distribution, control systems, and telecommunications infrastructure.'
    },
  ];

  const setActiveTab = (tabId) => {
    activeTab.value = tabId;
    router.push({ hash: `#${tabId}` });
  };

  const updateActiveTabFromHash = () => {
    const hash = route.hash.slice(1); // Remove the '#' from the hash
    if (tabs.some(tab => tab.id === hash)) {
      activeTab.value = hash;
    } else {
      activeTab.value = 'tab1'; // Default to the first tab if hash is invalid
    }
  };

  onMounted(() => {
    updateActiveTabFromHash();
  });

  watch(() => route.hash, updateActiveTabFromHash);
  </script>
  
  <style scoped>
  .tab-system {
    margin-top: 20px;
  }

  .tab-buttons {
    display: flex;
  }

  .tab-button {
    padding: 10px 20px;
    background-color: #f0f0f0;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .tab-button.active {
    background-color: #fff;
    border-bottom: 2px solid green;
  }

  .tab-content {
    padding: 20px;
    background-color: #fff;
  }
  </style>
