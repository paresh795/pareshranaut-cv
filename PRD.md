# Portfolio Project - Product Requirement Document (PRD)

## 1. Introduction & Vision

**Goal:** To create a personal portfolio website showcasing skills, projects, and experience, primarily focused on AI/ML development (LLMs, RAG, agentic workflows, automation).

**Vision:** The portfolio should serve as a dynamic and compelling representation of capabilities, acting as a high-leverage asset for career exploration (job applications for roles like AI Engineer, Solutions Engineer, Prompt Engineer) and potentially attracting client projects. It should be simple, impactful, and easy to maintain/update.

**Target Audience:**
*   Potential Employers (Hiring Managers, Recruiters) in the AI/ML/Tech space.
*   Potential Clients or Collaborators.
*   Peers in the tech community.

## 2. Key Features (Initial Scope - v1.0)

*   **Home Page:**
    *   Custom introductory text reflecting personal brand and goals.
    *   Clear navigation.
*   **Projects Showcase Page (`/projects`):**
    *   Dedicated section to display key projects.
    *   Consistent format for each project (title, description, tech stack, links to repo/demo).
    *   **Project Inventory (Initial List):**
        *   **LinkedIn Post Generator:** ([GitHub](https://github.com/paresh795/linkedin_peronilzed_post_gen))
            *   _Description:_ AI tool generating engaging LinkedIn posts in a personalized style based on user ideas and preferences (tone, style, length).
            *   _Tech:_ Next.js, TypeScript, Tailwind CSS, Framer Motion, OpenAI API, Radix UI.
        *   **NCLEX Slide Generator:** ([GitHub](https://github.com/paresh795/NCLEX_slide_gen_YT))
            *   _Description:_ Parses NCLEX-style questions using GPT-4 and generates formatted presentation slides (question & answer/rationale) for educational content.
            *   _Tech:_ Next.js, TypeScript, Tailwind CSS, shadcn/ui, OpenAI API, html2canvas, JSZip.
        *   **Flux Fine-tuning UI:** ([GitHub](https://github.com/paresh795/Flux-1.1-Pro-Ultra---Fine-tuning-UI))
            *   _Description:_ GUI application for fine-tuning Flux 1.1 Pro/Ultra models (LoRA & full) via API, managing models, and generating images.
            *   _Tech:_ Python, Flux Pro API (specific GUI library not mentioned, likely Streamlit/Gradio/Flask).
        *   **VidGod - AI Video Generation:** ([GitHub](https://github.com/paresh795/vidgod))
            *   _Description:_ AI platform guiding users from story idea to generated video using AI chat, TTS (ElevenLabs), scene segmentation, and image/video generation (Replicate).
            *   _Tech:_ Next.js, TypeScript, Tailwind CSS, shadcn/ui, Prisma, SQLite, Replicate API, ElevenLabs API.
        *   **Twitter AI Agent:** ([GitHub](https://github.com/paresh795/twitter_x_ai_agent))
            *   _Description:_ AI agent that generates and schedules tweets matching a user's style (based on reference tweets) using OpenAI and Twitter APIs.
            *   _Tech:_ Python, Streamlit, OpenAI API, Twitter API.
        *   **Email RAG Assistant:** (GitHub link missing - assuming private or local?)
            *   _Description:_ Monitors Gmail, processes new emails with a multi-agent RAG system, and generates draft replies based on email content and a knowledge base.
            *   _Tech:_ Python, Gmail API, OpenAI API (or local LLM), RAG techniques.
        *   **Master Caller Agent (n8n):** ([Demo Video](https://www.youtube.com/watch?v=CqgfDZyj-qw))
            *   _Description:_ Robust n8n-based system for automating cold-calling campaigns. Uses Telegram for input, Google Sheets for state/contact management (ensuring no duplicate calls), and Vapi for dynamic AI call agent creation/execution. Designed for robustness by minimizing AI agent layers and using workflows for critical tasks.
            *   _Tech:_ n8n, Vapi API, OpenAI API, Google Sheets API, Telegram API, Workflow Automation, Agent Orchestration.
        *   **Invoice Processing Agent (n8n):** ([Demo Video](https://www.youtube.com/watch?v=VU4Kc1nIblc))
            *   _Description:_ Automates invoice data extraction and processing workflow. Receives invoices via Telegram, uses AI (Vision/OCR) for data extraction, verifies with user, records payment details, updates Google Sheets DB, and archives files to Google Drive.
            *   _Tech:_ n8n, Telegram API, OpenAI Vision API / OCR, Google Sheets API, Google Drive API, Workflow Automation.
*   **Navigation:**
    *   Simplified navigation (e.g., Home, Projects, Blog/About).
    *   Links should accurately reflect site structure.
*   **Footer:**
    *   Links to personal GitHub profile.
    *   Link to the portfolio's source code repository.
    *   Potentially RSS link (if blog is maintained).
    *   Updated copyright information.
*   **Styling:**
    *   Maintain the clean, modern aesthetic of the starter kit.
    *   Ensure responsiveness and usability on different devices.
    *   Leverage existing dark mode.
*   **Metadata:**
    *   Custom site title, description, and social sharing (Open Graph) tags.

## 3. Non-Goals (Initially)

*   Complex backend functionality beyond static site generation (unless required by a specific project demo).
*   Extensive blog content (Focus is on projects first).
*   User accounts or authentication.
*   Over-polishing minor visual details before core functionality is live.

## 4. Design & Technical Stack

*   **Technology:** Next.js (App Router), React, TypeScript, Tailwind CSS.
*   **Hosting:** Vercel (Leveraging existing deployment).
*   **Content:** Primarily static content, potentially Markdown for blog/project details if applicable.
*   **Development:** Utilize AI assistance (Cursor) for efficient coding and implementation.

## 5. Future Considerations / Backlog

*   Adding a dedicated Blog section with posts detailing project learnings or technical explorations.
*   Adding an "About" or "Contact" page.
*   Integrating more dynamic project demos (if feasible).
*   Refining visual design and animations.
*   Adding more detailed case studies for projects.
*   Tracking analytics more granularly.
*   Adding the Skool community link.
*   Incorporating insights from job market research (skills emphasis).

## 6. Certifications & Learning

*   **IBM AI Engineering Specialization** (IBM, Issued Oct 2024, Credential ID: 5T3F5ZP1K1WW)
    *   Skills: Artificial Intelligence (AI), Machine Learning, Generative AI
*   **Generative AI with Large Language Models** (DeepLearning.AI, Issued Oct 2023, Credential ID: 44VYBB7VE2ZU)
*   **Building AI Products with OpenAI Certificate** (Uplimit, Issued Aug 2023, Credential ID: 80630070)
*   **Computer Vision and Image Processing Essentials** (IBM, Issued Aug 2023, Credential ID: PLDN372ZV224)
*   **Machine Learning with Python** (IBM, Issued Jun 2023, Credential ID: PVVPPBAFBYJM)
    *   Skills: Regression Models, K-Nearest Neighbors (KNN), Machine Learning, Support Vector Machine (SVM), Decision Trees
*   **Python for Data Science, AI & Development** (IBM, Issued May 2023)
*   **Certified Solidworks Professional in Mechanical Design** (Dassault Systèmes, Issued Dec 2020, Credential ID: C-F5PZN72R9E)

*(This document will be updated as the project progresses)* 