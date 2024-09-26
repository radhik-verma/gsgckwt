<template>
    <div>
        <div v-for="item in items" class="py-2 pl-6 pr-10 bg-gray-200 my-1" 
             :class="{ 'border-l-4 border-l-green-500': isCurrentPage(item.url) }" 
             :key="item.title">
            <a class="text-md font-light" :href="item.url">{{ item.title }}</a>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const items = ref([
{
        title: 'Structural Steel Works',
        url: '/core-business/structural',
    },
    {
        title: 'MEP Division',
        url: '/core-business/mep',
    },
    {
        title: 'Energy Division',
        url: '/core-business/energy-division',
    },
   
    {
        title: 'Civil Division',
        url: '/core-business/civil',
    },
    {
        title: 'Rental Division',
        url: '/core-business/rental',
    },
    {
        title: 'Trading Division',
        url: '/core-business/trading',
    },
    {
        title: 'Demolishing Division',
        url: '/core-business/demolishing',
    },
]);

const currentPath = computed(() => window.location.pathname);

const isCurrentPage = (url) => currentPath.value === url;
</script>