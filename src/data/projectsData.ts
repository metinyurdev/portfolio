import type { ProjectDetail } from './projectTypes';
import { nexusProject } from './projects/nexus';
import { textToSqlProject } from './projects/textToSql';

export type { ProjectDetail } from './projectTypes';

export const projectsData: Record<string, ProjectDetail> = {
  nexus: nexusProject,
  "text-to-sql": textToSqlProject,
};