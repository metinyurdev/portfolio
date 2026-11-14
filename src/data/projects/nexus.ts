import type { ProjectDetail } from '../projectTypes';

export const nexusProject: ProjectDetail = {
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
};