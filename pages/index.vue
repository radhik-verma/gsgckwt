
<template>

  <Header/>
  <main>
    <!-- <Carousal/>
    <WelcomeMessage/> -->
    <VideoCarousal/>
    <ClientsMarquee/>
    <AboutUs/>
    <Projects/>
    <Footer/>
  </main>
</template>

<script setup>
import Carousal from '~/components/Carousal.vue';
import VideoCarousal from '~/components/VideoCarousal.vue';
import Header from '~/components/Header.vue';
import ClientsMarquee from '~/components/ClientsMarquee.vue';
import AboutUs from '~/components/AboutUs.vue';
import Projects from '~/components/Projects.vue';
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

import WelcomeMessage from '~/components/WelcomeMessage.vue';
</script>