<template>
  <div class="posts">
    <div v-for="post in posts" :key="post.id" class="post">
      <h2>{{ post.title.rendered }}</h2>
      <div v-html="post.content.rendered"></div>
      <div v-html="post.acf?.about_the_service"></div>
    </div>
  </div>
</template>

<script setup>
//import { usePosts } from "~/composables/usePosts";

const posts = ref([])
  const { data, error } = useFetch('/api/services')

  if (error.value) {
    console.error('Error fetching posts:', error.value)
  } else {
    posts.value = data.value
  }
</script>

<style scoped>
.postss {
  display: flex;
  flex-direction: column;
}
.post {
  margin-bottom: 20px;
}
</style>
