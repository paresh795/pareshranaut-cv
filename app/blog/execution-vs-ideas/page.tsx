// Content for the Execution vs Ideas blog post
export default function ExecutionPostPage() {
  const post = {
    title: 'Million-Dollar Execution Beats Million-Dollar Ideas',
    author: 'Paresh Ranaut',
    publishedDate: 'January 04, 2025', // Updated Date
    content: [
      `Remember when having "the idea" was everything? You'd guard it jealously, write elaborate business plans... all before writing a single line of functional code. Execution was hard, expensive, and gated.`,
      `That world is dead.`,
      `The timeline shift is brutal:\n*   **Pre-2023:** Ideas felt scarce, execution costly.\n*   **Late 2023 - Now:** The "Execution Stack" explodes... AI pair programmers... vaporize syntax friction.\n*   **Result:** A motivated builder can now string together a complex, AI-powered web application over a weekend...`,
      `The cost of *trying* has plummeted towards zero. Consequently, the value has shifted entirely from the static "idea" to the dynamic process of *execution*.`,
      `Why? Because ideas are cheap and plentiful... Real value emerges only when an idea collides with reality:`,
      `*   **Feedback is Gold:** Shipping *anything*... generates feedback data that's infinitely more valuable than market research reports...`,
      `*   **Iteration is the Moat:** Your initial idea *will* be flawed. Success comes from the *velocity* of your iteration loop...`,
      `*   **Distribution is Democratized:** A clever demo on X, a well-placed Show HN post... can yield user acquisition... Traction speaks louder than patents pending.`,
      `We're seeing an "Indie Renaissance." Solo founders and tiny teams are launching sophisticated products... They didn't wait for permission or perfection; they *executed*.`,
      `My personal playbook has become radically simple: Got an itch? Scaffold it... Deploy it... Show it to someone... See if it sticks...`,
      `The tools are too good, the feedback loops too fast... to let ideas stagnate in notebooks. That "million-dollar idea"? It's only worth something after the first \`git push\`... Stop planning, start building.`,
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
          <p key={index} className="mb-4 text-sm">
            {paragraph.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}
          </p>
        ))}
      </article>
    </section>
  );
} 