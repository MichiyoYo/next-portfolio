import type { CaseStudy, CaseStudyData } from './constants/case-studies';
import { PROJECTS } from './constants/projects';
import { caseStudyData } from './constants/case-studies';

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

function getCaseStudies(): CaseStudy[] {
  return caseStudyData.map((data: CaseStudyData) => {
    const project = PROJECTS.find((p) => p.title === data.title);
    if (!project) {
      throw new Error(`Project with title "${data.title}" not found`);
    }
    return {
      ...project,
      sections: data.sections,
    };
  });
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const caseStudies = getCaseStudies();
  return (
    caseStudies.find((study) => generateSlug(study.title) === slug) || null
  );
}

export function getAllCaseStudies(): CaseStudy[] {
  return getCaseStudies();
}

export function hasCaseStudy(projectTitle: string): boolean {
  const caseStudies = getCaseStudies();
  return caseStudies.some((study) => study.title === projectTitle);
}

export function getProjectUrl(project: {
  title: string;
  githubUrl?: string | null;
  liveUrl?: string | null;
}): string {
  // Check if case study exists
  if (hasCaseStudy(project.title)) {
    const slug = generateSlug(project.title);
    return `/projects/${slug}`;
  }

  // Otherwise return live URL or GitHub URL
  if (project.liveUrl) {
    return project.liveUrl;
  }

  if (project.githubUrl) {
    return project.githubUrl;
  }

  // Fallback to projects page
  return '/projects';
}
