import type { ProjectDetail } from '../projectTypes';

export const kubernetesProject: ProjectDetail = {
  id: "kubernetes",
  title: "Scalable FastAPI Microservice on Minikube Kubernetes",
  subtitle: "Containerized Python Microservice Orchestration with Ingress & Automated Client Testing",
  category: "Cloud Computing & DevOps",
  problem: "Modern microservices require robust containerization, automated load balancing, fault-tolerant pod orchestration, and seamless local-to-cluster networking without manual intervention.",
  solution: "Engineered a scalable Python FastAPI microservice packaged via Docker and orchestrated on a local Minikube Kubernetes cluster. Configured robust Kubernetes Deployments, ClusterIP services, Nginx Ingress routing, and automated Python client verification scripts handling computational limits and business constraints.",
  metrics: [
    "100% Containerized via Docker & Multi-Layer Caching",
    "Minikube Pod Orchestration with Ingress Routing",
    "Automated Fault-Tolerant Client Validation"
  ],
  stack: ["Python", "FastAPI", "Docker", "Kubernetes", "Minikube", "Nginx Ingress", "YAML"],
  github: "https://github.com/metinyurdev/fastapi-kubernetes-microservice",
  demoLabel: "Explore Kubernetes Repository & Manifests",
  images: [
    { url: "/assets/projects/kubernetes/kubernetes-1.png", caption: "Figure 1.1: Multi-stage Docker build process packaging the FastAPI application container (`cube-service:v1`)." },
    { url: "/assets/projects/kubernetes/kubernetes-2.png", caption: "Figure 2.1: Minikube cluster status verification showing running pods, ClusterIP services, and Nginx Ingress mappings." },
    { url: "/assets/projects/kubernetes/kubernetes-3.png", caption: "Figure 3.1: Automated Python client execution demonstrating successful API computation and error response handling." }
  ],
  architectureDetails: [
    {
      title: "Containerization & Multi-Stage Builds",
      description: "Optimized Python 3.13-slim Docker image leveraging dependency caching and clean environment layers for lightning-fast container deployment."
    },
    {
      title: "Kubernetes Pod & Service Orchestration",
      description: "Configured robust Deployment manifests ensuring high availability alongside ClusterIP internal routing for secure pod communication."
    },
    {
      title: "Nginx Ingress Traffic Routing",
      description: "Integrated Kubernetes Ingress controller to manage external HTTP access and route incoming traffic efficiently to the microservice cluster."
    },
    {
      title: "Automated Client Verification",
      description: "Developed comprehensive Python test clients (`client.py`) to validate REST endpoints, verify computational payloads, and handle boundary exceptions."
    }
  ]
};