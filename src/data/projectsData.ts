import type { ProjectDetail } from './projectTypes';
import { nexusProject } from './projects/nexus';
import { textToSqlProject } from './projects/textToSql';
// Henüz dosyaları hazır olmadığı için clinical ve kubernetes'i şimdilik yorumda tutuyoruz:
// import { clinicalLlmProject } from './projects/clinicalLlm';
// import { kubernetesProject } from './projects/kubernetes';

export type { ProjectDetail } from './projectTypes';

export const projectsData: Record<string, ProjectDetail> = {
  nexus: nexusProject,
  "text-to-sql": textToSqlProject,
};