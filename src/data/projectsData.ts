import type { ProjectDetail } from './projectTypes';
import { nexusProject } from './projects/nexus';
import { textToSqlProject } from './projects/textToSql';

export type { ProjectDetail } from './projectTypes';

export const projectsData: Record<string, ProjectDetail> = {
  nexus: nexusProject,
  "text-to-sql": textToSqlProject,
};

// Eğer UI bileşeni projeleri dizi (array) olarak alıyorsa burayı kullanır:
export const projectsList: ProjectDetail[] = [
  nexusProject,
  textToSqlProject,
];