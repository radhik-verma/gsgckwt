import { ref } from 'vue'
import { useFetch } from '#app'

export const usePosts = () => {
  const posts = ref([])
  const { data, error } = useFetch('/api/services')

  if (error.value) {
    console.error('Error fetching posts:', error.value)
  } else {
    posts.value = data.value
  }

  return {
    posts,
  }
}