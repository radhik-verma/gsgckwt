<template>
  <div class="welcome">
    <p class="welcome-message"></p>
    <p v-html="post?.content?.rendered"></p>
    {{ post }}
  </div>
</template>

<script setup>
const post = ref([]);
const { data, error } = useFetch("/api/post", {
  query: { id: "welcome-to-gsgc" },
});
if (error.value) {
  console.error("Error fetching posts:", error.value);
} else {
  post.value = data.value;
  console.log(post.value);
}
</script>

<style lang="scss">
.welcome {
  border: 1px black solid;
}
</style>
