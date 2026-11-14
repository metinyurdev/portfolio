export interface ProjectImage {
  url: string;
  caption: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  problem: string;
  solution: string;
  metrics: string[];
  stack: string[];
  github: string;
  demoLabel: string;
  images?: ProjectImage[];
}

export const projectsData: Record<string, ProjectDetail> = {
  nexus: {
    id: "nexus",
    title: "NEXUS — Enterprise Compliance Agent",
    subtitle: "Multi-Agent Corporate Compliance Auditing Platform",
    category: "Multi-Agent AI & RAG Architecture",
    problem: "Manual regulatory auditing across thousands of corporate policy documents is slow, error-prone, and lacks traceability.",
    solution: "Engineered a multi-agent corporate compliance auditing platform featuring hybrid vector search, deterministic guardrails, and full LLM observability.",
    metrics: [
      "Sub-2s Retrieval Latency",
      "End-to-End Traceability via Langfuse",
      "100% Containerized Deployment"
    ],
    stack: ["GPT-4o", "LlamaIndex", "Qdrant", "FastAPI", "React 18", "Langfuse", "Docker Compose"],
    github: "https://github.com/metinyurdev/nexus-compliance-agent",
    demoLabel: "Architecture & Code",
    images: [
      { url: "/assets/projects/nexus/hero-ui.jpg", caption: "NEXUS Main Dashboard & Multi-Agent Status Panel" },
      { url: "/assets/projects/nexus/hero-ui2.jpg", caption: "Interactive Compliance Audit Report & Clause Analysis" },
      { url: "/assets/projects/nexus/langfuse-tracing.jpg", caption: "Langfuse Tracing & Observability Pipeline Execution" },
      { url: "/assets/projects/nexus/qdrant-dashboard.png", caption: "Qdrant Vector Database Collections (Contracts & Regulations)" }
    ]
  },
  "clinical-llm": {
    id: "clinical-llm",
    title: "Clinical Reasoning LLM (Qwen2.5-14B)",
    subtitle: "Parameter-Efficient Fine-Tuning & Quantization",
    category: "Parameter-Efficient Fine-Tuning (PEFT)",
    problem: "General-purpose open-source LLMs struggle with structured multi-step clinical diagnostic reasoning and medical precision.",
    solution: "Executed multi-stage fine-tuning using QLoRA and Unsloth on curated diagnostic datasets, compiling quantized GGUF weights for local clinical inference.",
    metrics: [
      "14B Parameter Domain Adaptation",
      "Published LoRA & GGUF Weights",
      "Local Offline Inference Ready"
    ],
    stack: ["PyTorch", "Hugging Face", "PEFT / QLoRA", "Unsloth", "GGUF", "Ollama"],
    github: "https://huggingface.co/metinyurdev",
    demoLabel: "Hugging Face Models"
  },
  "text-to-sql": {
    id: "text-to-sql",
    title: "Privacy-First Local Text-to-SQL Platform",
    subtitle: "Secure On-Premise Natural Language Database Analytics",
    category: "On-Premise Enterprise AI",
    problem: "Enterprises cannot send sensitive relational database schemas and financial records to third-party cloud LLM APIs.",
    solution: "Built a self-hosted natural language to SQL analytics engine running completely air-gapped on local infrastructure with schema-aware prompt injection protection.",
    metrics: [
      "Zero External Data Leakage",
      "Automated SQL Validation",
      "Real-Time Query Execution"
    ],
    stack: ["Python", "FastAPI", "Ollama", "PostgreSQL", "React", "Vite", "Docker"],
    github: "https://github.com/metinyurdev",
    demoLabel: "View Repository"
  },
  kubernetes: {
    id: "kubernetes",
    title: "Cloud-Native FastAPI Microservice",
    subtitle: "Enterprise Container Orchestration & Ingress Routing",
    category: "Kubernetes & Backend Infrastructure",
    problem: "Deploying scalable Python API services requires robust container orchestration, environment control, and traffic routing.",
    solution: "Developed and containerized a FastAPI microservice, deployed on Minikube Kubernetes cluster featuring custom Ingress routing and automated health probes.",
    metrics: [
      "Kubernetes Minikube Deployment",
      "Ingress Traffic Routing",
      "Production-Ready Health Probes"
    ],
    stack: ["Python", "FastAPI", "Docker", "Kubernetes (Minikube)", "YAML", "DevOps"],
    github: "https://github.com/metinyurdev",
    demoLabel: "View Architecture"
  }
};