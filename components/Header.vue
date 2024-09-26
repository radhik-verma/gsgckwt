<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center pr-10">
        <div>
          <img src="/assets/images/logo.jpeg" alt="GSGC" class="h-20">
        </div>
        
        <nav class="relative">
          <ul class="flex space-x-4">
            <li v-for="menu in menuItems" :key="menu.item" class="relative group">
              <a :href="menu.url" class="text-gray-700 hover:text-[#3d8e6d] font-medium py-2 px-3 rounded-md transition-colors duration-200 flex items-center">
                {{ menu.item }}
                <ChevronDown v-if="menu.children" class="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </a>
              <template v-if="menu.children">
                <ul class="absolute left-0 mt-2 w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <li v-for="child in menu.children" :key="child.item" class="relative group/child">
                    <a :href="child.url" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#3d8e6d] hover:text-white transition-colors duration-200 flex items-center justify-between">
                      {{ child.item }}
                      <ChevronRight v-if="child.children" class="w-4 h-4 transition-transform duration-200 group-hover/child:rotate-90" />
                    </a>
                    <template v-if="child.children">
                      <ul class="absolute left-full top-0 w-52 bg-white shadow-lg opacity-0 invisible group-hover/child:opacity-100 group-hover/child:visible transition-all duration-200">
                        <li v-for="grandchild in child.children" :key="grandchild.item">
                          <a :href="grandchild.url" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#3d8e6d] hover:text-white transition-colors duration-200">
                            {{ grandchild.item }}
                          </a>
                        </li>
                      </ul>
                    </template>
                  </li>
                </ul>
              </template>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { ChevronDown, ChevronRight } from 'lucide-vue-next';

const menuItems = ref([
  { item: 'Home', url: '/' },
  {
    item: 'About Us',
    url: '/about',
    children: [
      { item: 'Our mission', url: '/about/mission' },
      { item: 'Our vision', url: '/about/vision' },
      { item: 'Message from Chairman', url: '/about/message' },
      { item: 'Team Members', url: '/about/team-members' },
    ],
  },
  {
    item: 'Qualification',
    url: '/qhse',
    children: [
      { item: 'Certification', url: '/qualifications/certifications' },
      { item: 'Approval', url: '/' },
      { item: 'Quality', url: '/' },
      { item: 'HSE', url: '/' },
    ],
  },
  {
    item: 'Core Business',
    url: '/core-business',
    children: [
      { item: 'Structural Steel Works', url: '/core-business/structural' },
      { item: 'MEP', url: '/core-business/mep',children: [
          { item: 'Electrical Instrumentation& Telecommunication Works', url: '/core-business/mep#tab2' },
          { item: 'Mechanical Works ', url: '/core-business/mep#tab1' },
          { item: 'Piping works ', url: '/core-business/mep#tab3' },
          { item: 'HVAC works', url: '/core-business/mep/hvac' },
        ], },
      {
        item: 'Energy Division',
        url: '/core-business/energy-division',
        
      },
      { item: 'Civil Division', url: '/core-business/civil' },
      { item: 'Rental', url: '/core-business/rental' },
      { item: 'Trading', url: '/core-business/trading' },
      { item: 'Demolishing', url: '/core-business/demolishing' },
    ],
  },{
    item: 'Projects',
    url: '/projects',
    children: [
      { item: 'Completed Projects', url: '/projects/completed' },
      { item: 'Ongoing Projects', url: '/projects/ongoing' },
      { item: 'Iconic Projects', url: '/projects/iconic' },
    ],
  },
{
  item: 'Careers',
    url: '/careers',
    
  },
  {
    item: 'Contact Us',
    url: '/contact',
    
  },
  // ... (other menu items remain the same)
]);
</script>

<style scoped>
.group:last-child ul,
.group:nth-last-child(2) ul {
  right: 0;
  left: auto;
}

.group:last-child ul ul,
.group:nth-last-child(2) ul ul {
  right: 100%;
  left: auto;
}
</style>


