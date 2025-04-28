import { ProjectCard } from '../components/project-card';

const projects = [
  {
    title: 'LinkedIn Post Generator',
    category: 'AI Application',
    description: 'AI tool generating engaging LinkedIn posts in a personalized style based on user ideas and preferences (tone, style, length).',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'OpenAI API', 'Radix UI'],
    githubUrl: 'https://github.com/paresh795/linkedin_peronilzed_post_gen',
  },
  {
    title: 'NCLEX Slide Generator',
    category: 'AI Tooling',
    description: 'Parses NCLEX-style questions using GPT-4 and generates formatted presentation slides (question & answer/rationale) for educational content.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'OpenAI API', 'html2canvas', 'JSZip'],
    githubUrl: 'https://github.com/paresh795/NCLEX_slide_gen_YT',
  },
  {
    title: 'Flux Fine-tuning UI',
    category: 'AI Tooling',
    description: 'GUI application for fine-tuning Flux 1.1 Pro/Ultra models (LoRA & full) via API, managing models, and generating images.',
    techStack: ['Python', 'Flux Pro API', 'GUI Framework?'], // Placeholder for specific GUI lib
    githubUrl: 'https://github.com/paresh795/Flux-1.1-Pro-Ultra---Fine-tuning-UI',
  },
  {
    title: 'VidGod - AI Video Generation',
    category: 'AI Application',
    description: 'AI platform guiding users from story idea to generated video using AI chat, TTS (ElevenLabs), scene segmentation, and image/video generation (Replicate).',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Prisma', 'SQLite', 'Replicate API', 'ElevenLabs API'],
    githubUrl: 'https://github.com/paresh795/vidgod',
  },
  {
    title: 'Twitter AI Agent',
    category: 'AI Agent / Automation',
    description: 'AI agent that generates and schedules tweets matching a user\'s style (based on reference tweets) using OpenAI and Twitter APIs.',
    techStack: ['Python', 'Streamlit', 'OpenAI API', 'Twitter API'],
    githubUrl: 'https://github.com/paresh795/twitter_x_ai_agent',
  },
  {
    title: 'Email RAG Assistant',
    category: 'AI Agent / Automation',
    description: 'Monitors Gmail, processes new emails with a multi-agent RAG system, and generates draft replies based on email content and a knowledge base.',
    techStack: ['Python', 'Gmail API', 'OpenAI API', 'RAG'],
    githubUrl: '', // Add link when available
  },
  {
    title: 'Master Caller Agent (n8n)',
    category: 'Automation Workflow',
    description: 'Robust n8n workflow automating cold-calling campaigns via Telegram, managing contacts/status in Google Sheets, and utilizing Vapi for dynamic AI call agents.',
    techStack: ['n8n', 'Vapi API', 'OpenAI API', 'Google Sheets', 'Workflow Automation', 'Agent Orchestration'],
    videoUrl: 'https://www.youtube.com/watch?v=CqgfDZyj-qw',
    // githubUrl: Optional link to documentation or related repo if exists
  },
  {
    title: 'Invoice Processing Agent (n8n)',
    category: 'Automation Workflow',
    description: 'Automates invoice data extraction & processing. Receives invoices via Telegram, uses AI (Vision/OCR), verifies with user, updates Google Sheets & archives files to Google Drive.',
    techStack: ['n8n', 'Telegram API', 'OpenAI Vision API / OCR', 'Google Sheets API', 'Google Drive API', 'Workflow Automation'],
    videoUrl: 'https://www.youtube.com/watch?v=VU4Kc1nIblc',
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Projects
      </h1>
      <div className="space-y-6"> {/* Add some spacing between cards */}
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
            category={project.category}
            videoUrl={project.videoUrl}
            // demoUrl={project.demoUrl} // Add demoUrl if available
          />
        ))}
      </div>
    </section>
  );
} 