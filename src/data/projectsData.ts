export interface ProjectImage {
  url: string;
  caption: string;
}

export interface ArchitectureDetailItem {
  title: string;
  description: string;
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
  architectureDetails?: ArchitectureDetailItem[];
}

export const projectsData: Record<string, ProjectDetail> = {
  nexus: {
    id: "nexus",
    title: "NEXUS — Enterprise Multi-Agent Compliance Auditor",
    subtitle: "Hierarchical Multi-Agent RAG & Observability Platform",
    category: "Multi-Agent AI & RAG Architecture",
    problem: "Traditional RAG pipelines suffer from context loss, hallucinations, and cross-tenant data leakage when auditing complex corporate agreements against statutory frameworks like EU AI Act, GDPR, and KVKK.",
    solution: "Engineered an enterprise-grade multi-agent compliance auditing platform combining hierarchical orchestration (GPT-4o), session-isolated Qdrant vector storage, BAAI/bge-m3 dense retrieval with cross-encoder reranking, and full-stack LLM observability via self-hosted Langfuse.",
    metrics: [
      "Sub-2s Dense Retrieval Latency",
      "End-to-End Tracing via Langfuse OSS",
      "100% Containerized Multi-Service Stack"
    ],
    stack: ["GPT-4o", "LlamaIndex", "Qdrant", "FastAPI", "React 18", "Langfuse", "Docker Compose"],
    github: "https://github.com/metinyurdev/nexus-compliance-agent",
    demoLabel: "Explore Full Repository & Docs",
    images: [
      { url: "/assets/projects/nexus/hero-ui.png", caption: "Figure 1.1: Multi-agent execution pipeline active, delegating compliance reasoning across Contract, Regulation, and Web Research agents." },
      { url: "/assets/projects/nexus/hero-ui2.png", caption: "Figure 1.2: Completed audit output displaying clause extraction, statutory non-compliance mappings (GDPR & KVKK), and remediation steps." },
      { url: "/assets/projects/nexus/langfuse-tracing.png", caption: "Figure 2.1: Langfuse observability dashboard recording real-time session execution traces and LlamaIndex index construction." },
      { url: "/assets/projects/nexus/qdrant-dashboard.png", caption: "Figure 3.1: Qdrant Vector DB management interface showing active contracts and regulations collections (1024-dim dense vectors)." }
    ],
    architectureDetails: [
      {
        title: "Hierarchical Multi-Agent Orchestration",
        description: "Chief Compliance Officer orchestrator intelligently delegates sub-tasks to specialized domain agents (Contract Auditor, Regulation Specialist, Web Researcher)."
      },
      {
        title: "Session-Isolated Retrieval",
        description: "Vectors stored in Qdrant are tagged using dynamic session_id metadata, completely preventing cross-tenant document leakage."
      },
      {
        title: "Two-Stage Retrieval & Reranking",
        description: "Combines dense semantic retrieval using BAAI/bge-m3 with Cross-Encoder reranking (BAAI/bge-reranker-base) for maximum precision."
      },
      {
        title: "Full-Stack LLM Observability",
        description: "Integrated with self-hosted Langfuse OSS to capture prompt execution, tool routing, token usage, and sub-second response latency."
      }
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