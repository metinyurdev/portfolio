import type { ProjectDetail } from '../projectTypes';

export const clinicalLlmProject: ProjectDetail = {
  id: "clinical-llm",
  title: "Clinical Reasoning & Medical Diagnostics LLM",
  subtitle: "3-Stage Parameter-Efficient Fine-Tuning (PEFT/LoRA) of Qwen2.5-14B for Clinical Diagnostics",
  category: "Medical AI & Fine-Tuning",
  problem: "Standard foundational large language models lack rigorous clinical reasoning workflows, differential diagnosis structures, and multi-step symptom correlation required for reliable medical decision support.",
  solution: "Engineered a rigorous 3-Stage Fine-Tuning Pipeline using Unsloth and LoRA on Qwen2.5-14B-Instruct to equip the model with advanced clinical reasoning skills, differential diagnostics, and methodical symptom correlation. Published gated GGUF artifacts for local Ollama deployment alongside PEFT adapters on Hugging Face.",
  metrics: [
    "3-Stage Domain Fine-Tuning Architecture",
    "Consumer Desktop Local Deployment via GGUF & Ollama",
    "Gated Institutional & Academic Research Repository"
  ],
  stack: ["PyTorch", "Unsloth", "PEFT / LoRA", "Qwen2.5-14B", "Ollama", "Hugging Face", "Python"],
  github: "https://huggingface.co/metinyurdev/clinical-asistant-qwen2.5-14b-lora",
  demoLabel: "Explore Hugging Face Model & GGUF",
  images: [
    { url: "/assets/projects/clinical/clinicalLlm-1.jpg", caption: "Figure 1.1: Clinical reasoning test prompt evaluating acute coronary syndrome (ACS) symptoms and differential diagnosis steps." },
    { url: "/assets/projects/clinical/clinicalLlm-2.jpg", caption: "Figure 1.2: Diagnostic reasoning breakdown identifying measles (rubeola), Koplik's spots, and immediate isolation protocols." },
    { url: "/assets/projects/clinical/clinicalLlm-3.jpg", caption: "Figure 2.1: Hugging Face gated repository view for the Ollama-compatible Q4_K_M GGUF quantized model artifact." },
    { url: "/assets/projects/clinical/clinicalLlm-4.jpg", caption: "Figure 2.2: Hugging Face repository view for the primary PEFT (LoRA) training adapters and academic research documentation." }
  ],
  architectureDetails: [
    {
      title: "Stage 1 & 2: Medical Knowledge & Instruction Tuning",
      description: "Infused foundational clinical concepts, domain vocabulary alignment, and multi-turn synthetic dialogue simulating clinician-patient clinical reasoning tracks."
    },
    {
      title: "Stage 3: Advanced Diagnostics Alignment",
      description: "Fine-tuned on complex diagnostic decision trees, differential diagnosis generation, and cross-examination of overlapping symptoms (Final training checkpoint: #1800)."
    },
    {
      title: "Squeeze-Quantized GGUF & Ollama Integration",
      description: "Compiled 4-bit q4_k_m GGUF format optimized for immediate local desktop evaluations (CPU + GPU co-allocation) with strict system parameters (temperature 0.2)."
    },
    {
      title: "Gated Security & Access Control",
      description: "Implemented secure access monitoring on Hugging Face to safeguard academic research guidelines, institutional data privacy, and evaluation compliance."
    }
  ]
};