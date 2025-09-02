export interface CaseStudySection {
  title: string;
  content: string[];
  subsections?: {
    title: string;
    content: string;
  }[];
}

export interface CaseStudyData {
  title: string;
  sections: {
    idea: CaseStudySection;
    techStack: CaseStudySection;
    implementation: CaseStudySection;
    results: CaseStudySection;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  featured: boolean;
  githubUrl?: string | null;
  liveUrl?: string | null;
  completedDate: string;
  sections: {
    idea: CaseStudySection;
    techStack: CaseStudySection;
    implementation: CaseStudySection;
    results: CaseStudySection;
  };
}

export const caseStudyData: CaseStudyData[] = [
  {
    title: 'A/B Testing Platform',
    sections: {
      idea: {
        title: 'The Challenge & Vision',
        content: [
          'The gaming industry relies heavily on data-driven decision making, and A/B testing is crucial for optimizing player experience and engagement. However, our organization was facing significant challenges with fragmented testing processes across multiple game titles.',
          "The existing legacy system was outdated, difficult to use, and couldn't scale with our growing testing needs. Teams were struggling with inconsistent documentation, poor communication between stakeholders, and limited visibility into test results across different games.",
          'The vision was to create a centralized, user-friendly platform that would streamline the entire A/B testing lifecycle - from initial test design and documentation to launch coordination and results analysis. The platform needed to support multiple game environments while providing a consistent experience for diverse stakeholders including product managers, designers, analysts, and engineers.',
        ],
      },
      techStack: {
        title: 'Technology Decisions & Architecture',
        content: [
          'The platform was built using a modern, scalable architecture designed to handle the complex needs of enterprise-level A/B testing across multiple game titles.',
        ],
        subsections: [
          {
            title: 'React Frontend - Component-Based UI',
            content:
              'React was chosen for its component reusability and excellent ecosystem. This allowed us to create a consistent user interface while supporting the diverse needs of different user types - from technical engineers to non-technical product managers.',
          },
          {
            title: 'Node.js Backend - API Layer',
            content:
              'Node.js provided the perfect middle layer for handling API requests, managing user authentication, and orchestrating communication between the frontend and various backend services. Its async nature was ideal for handling multiple concurrent test operations.',
          },
          {
            title: 'Java Integration - Legacy System Bridge',
            content:
              'Java components were essential for integrating with existing game infrastructure and legacy testing systems. This hybrid approach allowed us to modernize the user experience while maintaining compatibility with critical existing systems.',
          },
          {
            title: 'API Integration Strategy',
            content:
              'The platform needed to integrate with multiple external services including game analytics platforms, user segmentation tools, and result tracking systems. We implemented a robust API layer that could handle various data formats and service requirements.',
          },
        ],
      },
      implementation: {
        title: 'Development Process & Key Challenges',
        content: [
          'Leading a multidisciplinary team of 7 members over 3 years presented unique challenges that required careful coordination and strategic decision-making.',
        ],
        subsections: [
          {
            title: 'Team Leadership & Coordination',
            content:
              'Managing a team with 2 designers and 5 engineers required establishing clear communication protocols and development workflows. I implemented agile methodologies with regular sprint planning, daily standups, and retrospectives to ensure everyone stayed aligned with the project vision.',
          },
          {
            title: 'Legacy System Integration',
            content:
              'One of the biggest technical challenges was replacing the existing legacy documentation system while ensuring zero downtime for ongoing tests. We implemented a phased migration strategy with parallel systems running during the transition period.',
          },
          {
            title: 'Complex API Services Integration',
            content:
              'Integrating with multiple game backends, each with different API structures and data formats, required building flexible adapter layers. We created a unified interface that could handle various game-specific requirements while presenting a consistent experience to users.',
          },
          {
            title: 'Scalability & Performance',
            content:
              'As the platform grew to support more games and users, we faced performance challenges. We implemented caching strategies, optimized database queries, and introduced lazy loading for large datasets to maintain responsive user experience.',
          },
          {
            title: 'User Experience Challenges',
            content:
              'Creating an interface that worked for both technical and non-technical users required extensive user research and iterative design. We conducted regular user testing sessions and gathered feedback from different stakeholder groups to refine the UI/UX.',
          },
        ],
      },
      results: {
        title: 'Impact & Achievements',
        content: [
          'The experimentation platform successfully transformed how A/B testing was conducted across the organization, delivering significant improvements in efficiency, collaboration, and test quality.',
        ],
        subsections: [
          {
            title: 'Increased Testing Volume & Frequency',
            content:
              'The platform enabled teams to launch tests 3x faster than the previous system, resulting in a 250% increase in overall test volume across all game titles. The streamlined workflow removed bottlenecks that previously delayed test launches.',
          },
          {
            title: 'Improved Cross-Team Collaboration',
            content:
              'The centralized documentation and communication features dramatically improved collaboration between product, design, engineering, and analytics teams. Stakeholders now had real-time visibility into test progress and results.',
          },
          {
            title: 'Enhanced Test Quality & Documentation',
            content:
              "The platform's structured approach to test documentation resulted in more rigorous test designs and better documentation practices. This improved the reliability of test results and made it easier to share learnings across teams.",
          },
          {
            title: 'Successful Team Development',
            content:
              "Successfully onboarded and mentored multiple summer interns and junior team members, contributing to their professional growth while expanding the team's capabilities. Several team members were promoted during the project timeline.",
          },
          {
            title: 'Platform Adoption & Scaling',
            content:
              'The platform was successfully adopted across multiple game titles and became the standard for A/B testing in the organization. The architecture proved scalable and adaptable to different game requirements and testing methodologies.',
          },
        ],
      },
    },
  },
];
