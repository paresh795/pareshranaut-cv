import Link from 'next/link'; // Import Link

// Simple static blog index page component
export default function BlogIndexPage() {
  const posts = [
    {
      id: 'antifragile',
      title: 'Stop Trying to Make Your Code Unbreakable. Make It Antifragile.',
      author: 'Paresh Ranaut',
      publishedDate: 'October 18, 2024',
    },
    {
      id: 'execution-vs-ideas',
      title: 'Million-Dollar Execution Beats Million-Dollar Ideas',
      author: 'Paresh Ranaut',
      publishedDate: 'January 04, 2025',
    },
    {
      id: 'so-arm100-robotics',
      title: 'Diving Headfirst into Robotics: Building the SO-ARM100 (and Why You Should Too)',
      author: 'Paresh Ranaut',
      publishedDate: 'March 15, 2025',
    },
    // Add future posts here
  ];

  // Sort posts by date, newest first (optional, but good practice)
  posts.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Blog</h1>

      {/* Index of Posts */}
      <div className="mb-12">
        {/* Optional: Add a small intro paragraph for the blog index page */}
        <ul className="list-none space-y-4"> {/* Increased spacing */}
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline font-medium">
                {post.title}
              </Link>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                 {post.publishedDate} 
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Removed the rendering of full post content from the index page */}
    </section>
  );
} 