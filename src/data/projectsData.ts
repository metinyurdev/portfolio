import type { ProjectDetail } from './projectTypes';
import { nexusProject } from './projects/nexus';
import { textToSqlProject } from './projects/textToSql';
import { clinicalLlmProject } from './projects/clinicalLlm';

export type { ProjectDetail } from './projectTypes';

export const projectsData: Record<string, ProjectDetail> = {
  nexus: nexusProject,
  "text-to-sql": textToSqlProject,
  "clinical-llm": clinicalLlmProject,
};

// Eğer UI bileşeni projeleri dizi (array) olarak alıyorsa burayı kullanır:
export const projectsList: ProjectDetail[] = [
  nexusProject,
  clinicalLlmProject,
  textToSqlProject,
];