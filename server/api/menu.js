import axios from 'axios'

export default defineEventHandler(async (event) => {
  try {
    const { data } = await axios.get('https://staging.gsgckwt.com/wp-json/wp/v2/menu-item')
    return data
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
})
