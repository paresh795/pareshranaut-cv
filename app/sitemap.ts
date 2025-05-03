// Remove the import for getBlogPosts
// import { getBlogPosts } from 'app/blog/utils'

// Update this to your actual production URL when ready
export const baseUrl = 'https://pareshranaut-cv.vercel.app' 

export default async function sitemap() {
  // Removed dynamic blog post generation

  // Define static routes including the new blog post pages
  let routes = [
    '',
    '/blog',
    '/projects',
    '/blog/antifragile', 
    '/blog/execution-vs-ideas',
    '/blog/so-arm100-robotics'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  // Return only the static routes
  return routes
}
