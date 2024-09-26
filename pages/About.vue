<template>
    <Header />
    <div class="intro">
        <div class="intro-title">
            <p>About</p>
        </div>
        <div class="intro-text">

        </div>
    </div>

    <div>

    </div>
    
</template>

<script setup>
import Header from '~/components/Header.vue';
import { ref, onMounted } from 'vue'
import axios from 'axios'


// const about = ref([])

// onMounted(async () => {
//     try {
//         const response = await axios.get('https://staging.gsgckwt.com/wp-json/wp/v2/pages/6');
//         console.log(response)
//         about.value = response.data
//     } catch (error) {
//         console.error('Error fetching posts:', error)
//     }
//})
</script>

<style lang="scss" scoped>
.intro{
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
}


</style>