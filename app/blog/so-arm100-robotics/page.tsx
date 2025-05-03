// Content for the SO-ARM100 Robotics blog post
import Link from 'next/link'; // Import Link for external link
// import Image from 'next/image'; // Uncomment if adding images

export default function SoArm100PostPage() {
  const post = {
    title: 'Diving Headfirst into Robotics: Building the SO-ARM100 (and Why You Should Too)',
    author: 'Paresh Ranaut',
    publishedDate: 'March 15, 2025',
    content: [
      `Let's be honest – jumping into robotics when your background is more CAD and code than circuits and servos feels like leaping into the deep end. But when I stumbled upon the <Link href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">SO-ARM100 project</Link> from The Robot Studio / Hugging Face, I was hooked. An open-source, 3D-printable robotic arm? One that uses fascinating concepts like leader-follower imitation learning, potentially leveraging things like Action Chunking Transformers? Sign me up.`,
      `I'm absolutely **not** a robotics expert. My journey involved squinting at wiring diagrams, learning the difference between various servo motors (the hard way, sometimes), and discovering the unique joys and frustrations of assembling dozens of 3D-printed parts. There were moments I was sure I'd gotten in over my head, trying to debug connections or figure out why a joint wasn't moving quite right.`,
      `But then... it moves. You send a command, or maybe you're setting up the leader arm for imitation, and the physical thing you *built* comes alive. There's a certain magic to that moment that lines of code on a screen, or even complex n8n workflows, just can't replicate. Seeing the physical manifestation of logic and mechanics working together is incredibly rewarding.`,
      // Optional Image Placeholder:
      // `<div><Image src="/images/your-build-image.jpg" width={600} height={400} alt="My SO-ARM100 Build" className="rounded-lg mx-auto my-4" /></div>`,
      `This project is more than just assembling parts; it's a crash course. You're not just printing plastic; you're learning about tolerances, mechanics, electronics integration, and the fundamentals of robotic control. You get a tangible feel for concepts that often seem abstract, like how imitation learning translates human movement into robotic action.`,
      `The SO-ARM100 isn't just some high-level research project locked away in a lab. It's designed to be built, tinkered with, and learned from. If you have even a flicker of interest in robotics, AI's physical embodiment, or just the sheer satisfaction of building something complex with your own hands (and a 3D printer), I can't recommend diving into a project like this enough. It's challenging, sure. You'll probably mess things up, just like I did. But the learning curve is immense, and the payoff – seeing that arm twitch, grasp, and maybe even learn – is totally worth it. Consider this your nudge: go build a robot!`,
    ],
  };

  return (
    <section>
      <article className="mb-12 prose dark:prose-invert max-w-none">
        <h1 className="text-2xl font-semibold tracking-tighter mb-2">{post.title}</h1>
        <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
          By {post.author} on {post.publishedDate}
        </div>
        {post.content.map((paragraph, index) => (
          // Special handling for the first paragraph with the link
          index === 0 ? (
             <p key={index} className="mb-4 text-sm" dangerouslySetInnerHTML={{ __html: paragraph }} />
          ) : (
             // Render other paragraphs normally (or handle image placeholders)
             // Check if the paragraph looks like the image placeholder structure
             paragraph.startsWith('// `<div><Image src=') ? (
                 // This is the commented-out image placeholder, render nothing or a comment
                 null 
             ) : (
                 <p key={index} className="mb-4 text-sm">
                 {/* Split paragraphs by actual newline characters if any, otherwise render as is */}
                 {paragraph.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}
                 </p>
             )
          )
        ))}
      </article>
    </section>
  );
} 