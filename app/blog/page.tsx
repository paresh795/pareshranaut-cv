// Simple static blog page component with anchor links
export default function BlogPage() {
  const post1 = {
    id: 'antifragile', // Added ID for anchor link
    title: 'Stop Trying to Make Your Code Unbreakable. Make It Antifragile.',
    content: [
      `We developers worship at the altar of robustness. We write tests, build redundancy, implement failovers – all in a desperate attempt to prevent our creations from shattering under pressure. We treat failure like a disease to be eradicated. But what if that's fundamentally the wrong approach?`,
      `Nassim Taleb coined the term "antifragile" – not systems that merely *resist* shock (robustness), nor those that simply recover (resilience), but systems that actually *get stronger* from disorder, volatility, and stress. Think of human bones strengthening under load, or ecosystems becoming more diverse after a fire clears out old growth.`,
      `Can software achieve this? Can code actually *benefit* from the inevitable chaos of production?`,
      `It sounds like sci-fi, but the building blocks are starting to emerge. True software antifragility wouldn't just be about *surviving* bugs or traffic spikes; it would be about *using* those events as catalysts for improvement. It requires a shift in mindset and architecture:`,
      `1.  **Deep Observability as Sensory Input:** Forget basic logging. We need systems that don't just record errors but *diagnose* their patterns... Rich, structured telemetry combined with anomaly detection transforms raw failure signals into actionable insights...`,
      `2.  **AI as an Adaptive Immune System:** This is where LLMs get interesting... as highly specialized *patch creators*. Imagine an observability system flagging a specific type of recurring error signature... The AI proposes a targeted fix...`,
      `3.  **Controlled Stressors & Safe Deployment:** Antifragile systems need exercise. Chaos engineering, automated canary releases... these aren't just safety measures; they're the *training ground*... The key is making failure low-cost and high-information...`,
      `Let's be clear: fully autonomous, self-healing systems aren't deploying to production globally tomorrow... But the *principles* are actionable *now*. We can invest in better observability... We can embrace controlled chaos...`,
      `The ultimate goal isn't code that never breaks. It's code that *learns* when it breaks. It's building systems that treat failures not as disasters, but as data points on the path to becoming stronger. It's time we started designing for the fire, not just the candle.`,
    ],
  };

  const post2 = {
    id: 'execution-vs-ideas', // Added ID for anchor link
    title: 'Million-Dollar Execution Beats Million-Dollar Ideas',
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

  const posts = [post1, post2];

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Blog</h1>

      {/* Index of Posts */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold tracking-tighter mb-4">Posts</h2>
        <ul className="list-disc list-inside space-y-2">
          {posts.map((post) => (
            <li key={post.id}>
              <a href={`#${post.id}`} className="text-blue-500 hover:underline">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <hr className="my-8 border-neutral-700 dark:border-neutral-800" />

      {/* Full Post Content */}
      {posts.map((post) => (
        <article key={post.id} id={post.id} className="mb-12 prose dark:prose-invert max-w-none scroll-mt-20"> {/* Added scroll-mt for better anchor linking */}
          <h2 className="text-xl font-semibold tracking-tighter mb-4">{post.title}</h2>
          {post.content.map((paragraph, index) => (
            <p key={index} className="mb-4 text-sm">
              {paragraph.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}
            </p>
          ))}
           <hr className="my-8 border-neutral-700 dark:border-neutral-800" /> {/* Separator */} 
        </article>
      ))}
    </section>
  );
} 