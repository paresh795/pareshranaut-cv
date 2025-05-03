// import { BlogPosts } from 'app/components/posts'
import { ProjectCard } from 'app/components/project-card'
import Link from 'next/link'

// Define featured projects data
const featuredProjects = [
  {
    title: 'VidGod - AI Video Generation',
    description: 'AI platform guiding users from story idea to generated video using AI chat, TTS, scene segmentation, and AI image/video generation.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Prisma', 'SQLite', 'Replicate API', 'ElevenLabs API'],
    githubUrl: 'https://github.com/paresh795/vidgod',
    category: 'AI Application',
  },
  {
    title: 'Flux Fine-tuning UI',
    description: 'GUI application for fine-tuning Flux 1.1 Pro/Ultra models (LoRA & full) via API, managing models, and generating images.',
    techStack: ['Python', 'Flux Pro API', 'GUI Framework?'],
    githubUrl: 'https://github.com/paresh795/Flux-1.1-Pro-Ultra---Fine-tuning-UI',
    category: 'AI Tooling',
  },
  {
    title: 'Master Caller Agent (n8n)',
    category: 'Automation Workflow',
    description: 'Robust n8n workflow automating cold-calling campaigns via Telegram, managing contacts/status in Google Sheets, and utilizing Vapi for dynamic AI call agents.',
    techStack: ['n8n', 'Vapi API', 'OpenAI API', 'Google Sheets', 'Workflow Automation', 'Agent Orchestration'],
    videoUrl: 'https://www.youtube.com/watch?v=CqgfDZyj-qw',
  },
  {
    title: 'Invoice Processing Agent (n8n)',
    category: 'Automation Workflow',
    description: 'Automates invoice data extraction & processing. Receives invoices via Telegram, uses AI (Vision/OCR), verifies with user, updates Google Sheets & archives files to Google Drive.',
    techStack: ['n8n', 'Telegram API', 'OpenAI Vision API / OCR', 'Google Sheets API', 'Google Drive API', 'Workflow Automation'],
    videoUrl: 'https://www.youtube.com/watch?v=VU4Kc1nIblc',
  },
  {
    title: 'Context-Aware Product Video Generator (n8n)',
    category: 'Automation Workflow / AI Video',
    description: 'Context-aware n8n workflow generating short vertical videos (Shorts/Reels) from a product idea. Uses Gemini 2.5, PiAPI/Kling Elements, ElevenLabs, and Creatomate.',
    techStack: ['n8n', 'Gemini 2.5', 'PiAPI (Kling, Flux)', 'ElevenLabs API', 'Creatomate API', 'Google Drive/Sheets', 'AI Planning', 'Multi-Modal AI'],
    videoUrl: 'https://youtu.be/QibN5tnQU3Q',
  },
]

// Certifications Data (from PRD)
const certifications = [
  { name: 'IBM AI Engineering Specialization', issuer: 'IBM', date: 'Oct 2024' },
  { name: 'Generative AI with Large Language Models', issuer: 'DeepLearning.AI', date: 'Oct 2023' },
  { name: 'Building AI Products with OpenAI Certificate', issuer: 'Uplimit', date: 'Aug 2023' },
  { name: 'Computer Vision and Image Processing Essentials', issuer: 'IBM', date: 'Aug 2023' },
  { name: 'Machine Learning with Python', issuer: 'IBM', date: 'Jun 2023' },
  { name: 'Python for Data Science, AI & Development', issuer: 'IBM', date: 'May 2023' },
  { name: 'Certified Solidworks Professional', issuer: 'Dassault Systèmes', date: 'Dec 2020' },
]

// Define blog post data for links
const blogPosts = [
  {
      id: 'so-arm100-robotics',
      title: 'Diving Headfirst into Robotics: Building the SO-ARM100 (and Why You Should Too)',
  },
  {
      id: 'execution-vs-ideas',
      title: 'Million-Dollar Execution Beats Million-Dollar Ideas',
  },
  {
      id: 'antifragile',
      title: 'Stop Trying to Make Your Code Unbreakable. Make It Antifragile.',
  },
];

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Paresh Ranaut // AI Engineer & Builder
      </h1>
      <p className="mb-4">
        {`Hooked on the potential of AI, I thrive on building with LLMs, RAG, and
        automation tools. For me, it's less about following a set path and more
        about exploring, combining different technologies, and bringing genuinely
        useful (and sometimes surprising) solutions to life. My background in
        mechanical design provides a unique foundation for structuring complex
        problems before diving into code.`}
      </p>
      <p className="mb-4">
        {`My approach is pragmatic and iterative: quickly learning new tools,
        connecting different systems, and translating AI concepts into working
        applications. From developing RAG pipelines for technical data to
        orchestrating agents for automated content creation, my focus is always
        on creating functional, useful solutions.`}
      </p>
      <p className="mb-4">
        {`Explore my projects below to see this approach in action. If you're
        seeking an AI/ML practitioner who bridges the gap between theoretical
        possibilities and practical implementation, let's connect.`}
      </p>

      {/* Featured Projects Section */}
      <div className="my-12">
        <h2 className="mb-6 text-xl font-semibold tracking-tighter">
          Featured Projects
        </h2>
        <div className="space-y-6 mb-6">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
              category={project.category}
              videoUrl={project.videoUrl}
            />
          ))}
        </div>
        <Link href="/projects" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">
          View All Projects →
        </Link>
      </div>

      {/* Certifications Section */}
      <div className="my-12">
        <h2 className="mb-6 text-xl font-semibold tracking-tighter">
          Certifications & Learning
        </h2>
        <ul className="list-none space-y-2 text-sm">
          {certifications.map((cert) => (
            <li key={cert.name} className="flex justify-between">
              <span>{cert.name} - <span className="text-neutral-500 dark:text-neutral-400">{cert.issuer}</span></span>
              <span className="text-neutral-500 dark:text-neutral-400">{cert.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Blog Links Section */}
      <div className="my-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">
          Recent Thoughts
        </h2>
        <ul className="list-none space-y-1">
          {blogPosts.map(post => (
             <li key={post.id}>
              <Link href={`/blog/${post.id}`} className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
