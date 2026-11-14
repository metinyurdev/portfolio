import type { ProjectDetail } from './projectTypes';
import { nexusProject } from './projects/nexus';
import { textToSqlProject } from './projects/textToSql';
import { clinicalLlmProject } from './projects/clinicalLlm';
import { kubernetesProject } from './projects/kubernetes';

export type { ProjectDetail } from './projectTypes';

export const projectsData: Record<string, ProjectDetail> = {
  nexus: nexusProject,
  "text-to-sql": textToSqlProject,
  "clinical-llm": clinicalLlmProject,
  kubernetes: kubernetesProject,
};

export const projectsList: ProjectDetail[] = [
  nexusProject,
  clinicalLlmProject,
  textToSqlProject,
  kubernetesProject,
];