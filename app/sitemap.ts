// Remove the import for getBlogPosts
// import { getBlogPosts } from 'app/blog/utils'

// Update this to your actual production URL when ready
export const baseUrl = 'https://pareshranaut-cv.vercel.app' 

export default async function sitemap() {
  // Remove the dynamic blog post generation
  /*
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))
  */

  // Define static routes
  let routes = ['', '/blog', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  // Return only the static routes
  return routes
}
