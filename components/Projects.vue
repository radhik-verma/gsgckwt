<template>
  <div class="container mx-auto my-20">
    <p class="text-4xl font-bold text-green-700 ml-20">Our work</p>
    <h1 class="text-6xl font-extrabold mt-2 ml-20">
      Amazing structures <br/> built by us.
    </h1>
  <Carousel :items-to-show="4" :wrap-around="true" :transition="500" autoplay="1000">
    <Slide v-for="project in projects" :key="project.id">
      <div class="h-[400px] w-[250px]">
        <div class="project-image">
          <img :src="project.image" :alt="project.title" />
        </div>
        <div class="">
          <h3>{{ project.title }}</h3>
          
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import pr1 from '~/assets/images/pr1.jpg'
import pr2 from '~/assets/images/pr2.jpg'
import pr3 from '~/assets/images/pr3.jpg'
import pr4 from '~/assets/images/pr4.jpg'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Projects',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      projects: [
        { id: 1, title: 'Kuwait University with Shapoorji', description: 'Description for Project 1', image: pr1 },
        { id: 2, title: 'Hawally Court', description: 'Description for Project 2', image: pr2 },
        { id: 3, title: 'Sheikh Jaber Al-Ahmed Cultural Centre', description: 'Description for Project 3', image: pr3 },
        { id: 4, title: 'Kuwait University Sinohydro', description: 'Description for Project 4', image: pr4 },
        { id: 1, title: 'Kuwait University with Shapoorji', description: 'Description for Project 1', image: pr1 },
        { id: 2, title: 'Hawally Court', description: 'Description for Project 2', image: pr2 },
        { id: 3, title: 'Sheikh Jaber Al-Ahmed Cultural Centre', description: 'Description for Project 3', image: pr3 },
        { id: 4, title: 'Kuwait University Sinohydro', description: 'Description for Project 4', image: pr4 },        { id: 1, title: 'Kuwait University with Shapoorji', description: 'Description for Project 1', image: pr1 },
        { id: 2, title: 'Hawally Court', description: 'Description for Project 2', image: pr2 },
        { id: 3, title: 'Sheikh Jaber Al-Ahmed Cultural Centre', description: 'Description for Project 3', image: pr3 },
        { id: 4, title: 'Kuwait University Sinohydro', description: 'Description for Project 4', image: pr4 },

        // Add more projects as needed
      ],
    }
  },
})
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

.project-image {
  width: 100%;
  height: 80%; /* Adjust this value to change the image-to-info ratio */
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* This will crop the image to fill the container */
  /* Alternatively, use 'contain' to fit the whole image without cropping */
  /* object-fit: contain; */
}

</style>
