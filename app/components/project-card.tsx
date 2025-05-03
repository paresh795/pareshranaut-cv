import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string; // Made optional
  demoUrl?: string;
  videoUrl?: string; // Added video demo link
  category?: string;
}

export function ProjectCard({ title, description, techStack, githubUrl, demoUrl, videoUrl, category }: ProjectCardProps) {
  return (
    <div className="mb-6 p-4 border border-neutral-700 dark:border-neutral-800 rounded-lg relative">
      {category && (
        <span className="absolute top-2 right-2 text-xs bg-purple-900 text-purple-200 px-2 py-0.5 rounded-full">
          {category}
        </span>
      )}
      <h3 className="text-lg font-semibold mb-2 mr-20">{title}</h3>
      <p className="text-neutral-400 dark:text-neutral-400 mb-3 text-sm">
        {description}
      </p>
      <div className="mb-3 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="text-xs bg-neutral-800 dark:bg-neutral-900 text-neutral-300 dark:text-neutral-400 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {githubUrl && ( // Conditionally render GitHub link
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
            GitHub Repo
          </Link>
        )}
        {demoUrl && (
          <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-green-500 hover:underline">
            Live Demo
          </Link>
        )}
        {videoUrl && ( // Conditionally render Video link
           <Link href={videoUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-orange-500 hover:underline">
            Demo Video
          </Link>
        )}
      </div>
    </div>
  );
} 