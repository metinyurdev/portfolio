import type { ProjectDetail } from '../projectTypes';

export const textToSqlProject: ProjectDetail = {
  id: "text-to-sql",
  title: "Privacy-First Local Text-to-SQL Platform",
  subtitle: "Secure On-Premise Natural Language Database Analytics & Visualization",
  category: "On-Premise Enterprise AI",
  problem: "Enterprises cannot send sensitive relational database schemas, financial ledgers, and proprietary business metrics to third-party cloud LLM APIs due to strict data privacy mandates and compliance regulations.",
  solution: "Engineered a full-stack, air-gapped Natural Language to SQL analytics platform running completely on-premise. Features secure authentication, dynamic natural language prompt presets, local multi-model LLM inference via Ollama (CodeLlama & Llama 3.2), automated SQL validation against PostgreSQL, and real-time interactive chart generation (Pie & Bar charts).",
  metrics: [
    "100% Air-Gapped & Zero Data Leakage",
    "Dual Local LLM Integration (CodeLlama & Llama 3.2)",
    "Automated Tabular & Visual Data Analytics"
  ],
  stack: ["React", "Vite", "FastAPI", "PostgreSQL", "Ollama", "CodeLlama", "Docker Compose"],
  github: "https://github.com/metinyurdev/text2sql_fullstack_app",
  demoLabel: "Explore Repository & Demo",
  images: [
    { url: "/assets/projects/text2sql/text2sql-1.png", caption: "Figure 1.1: Secure authentication login interface guarding enterprise database analytics." },
    { url: "/assets/projects/text2sql/text2sql-2.png", caption: "Figure 1.2: Main analytics dashboard featuring pre-built natural language query suggestion chips and prompt editor." },
    { url: "/assets/projects/text2sql/text2sql-3.png", caption: "Figure 1.3: Natural language query prompt input interface with active selection." },
    { url: "/assets/projects/text2sql/text2sql-4.png", caption: "Figure 2.1: Generated PostgreSQL query output displaying structured tabular dataset." },
    { url: "/assets/projects/text2sql/text2sql-5.png", caption: "Figure 3.1: Automated Pie Chart visualization rendering query results dynamically." },
    { url: "/assets/projects/text2sql/text2sql-6.png", caption: "Figure 3.2: Interactive Bar Chart breakdown of monthly metrics for business intelligence." },
    { url: "/assets/projects/text2sql/text2sql-7.png", caption: "Figure 4.1: Interactive AI Assistant Panel and Quick-Action Natural Language Prompts." }

  ],
  architectureDetails: [
    {
      title: "Secure Session & Authentication",
      description: "Protected enterprise endpoint architecture featuring clean login screens, JWT-secured token handling, and user state management."
    },
    {
      title: "Interactive AI Assistant Panel",
      description: "Features a dedicated chat drawer powered by local LLMs, enabling users to interact via conversational natural language, ask database questions, and utilize quick-action prompt chips."
    },
    {
      title: "Air-Gapped Local LLM Inference",
      description: "Leverages Ollama locally to host specialized models (`codellama:latest` for precise SQL translation and `llama3.2:latest` for assistant workflows) ensuring absolute data sovereignty."
    },
    {
      title: "Schema-Aware Context Injection",
      description: "Dynamically injects relational database table schemas (Sales, Products, Employees) into model context windows to eliminate hallucinated references."
    },
    {
      title: "Automated Data Visualization Engine",
      description: "Instantly parses tabular SQL execution results into interactive Pie and Bar charts, turning raw database records into immediate executive insights."
    }
  ]
};