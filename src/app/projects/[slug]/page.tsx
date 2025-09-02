import { getCaseStudyBySlug, getAllCaseStudies, generateSlug } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { CaseStudyContent } from '@/components/sections/CaseStudyContent';
import { CaseStudy } from '@/lib/constants/case-studies';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyContent caseStudy={caseStudy} />;
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study: CaseStudy) => ({
    slug: generateSlug(study.title),
  }));
}
