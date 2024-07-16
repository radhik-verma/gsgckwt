import axios from 'axios'

export default defineEventHandler(async (event) => {
  // Retrieve the post ID from the query parameters
  const query = getQuery(event)
  try {
    // Use the postId in the API endpoint to fetch a specific post
    const { data } = await axios.get(`https://staging.gsgckwt.com/wp-json/wp/v2/posts?slug=${query.id}}`)
    return data
  } catch (error) {
    console.error(`Error fetching post with ID }:`, error)
    throw error
  }
})
