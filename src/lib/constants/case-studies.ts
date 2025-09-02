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
        title: 'The Problem & My Role',
        content: [
          'As the lead front-end engineer on the A/B testing platform project, I witnessed firsthand how the existing legacy system was creating friction for teams across multiple game titles. The interface was clunky, the user experience was inconsistent, and critical features like test monitoring and enrollment management were either missing or poorly implemented.',
          'Product managers and analysts were spending hours navigating confusing workflows, while engineers struggled with limited visibility into test statuses and user enrollments. The disconnect between what users needed and what the system provided was clear - this was fundamentally a front-end and user experience problem.',
          'My role was to lead the complete redesign of the user interface and experience, while also architecting the API design for key features. I took ownership of creating intuitive workflows that would work for both technical and non-technical users, with a particular focus on designing the watchers system for real-time test monitoring and the enrollment manipulation features that would give teams unprecedented control over their experiments.',
        ],
      },
      techStack: {
        title: 'Frontend Architecture & Technology Choices',
        content: [
          'As the lead front-end engineer, I made strategic technology decisions that would enable us to build a scalable, maintainable platform capable of serving diverse user needs while integrating seamlessly with existing game infrastructure.',
        ],
        subsections: [
          {
            title: 'React & Component Architecture',
            content:
              'I architected a comprehensive React component system that prioritized reusability and consistency. Created a design system with shared components that could adapt to different user roles - from technical engineers needing detailed controls to product managers requiring simplified interfaces. This modular approach was crucial for maintaining consistency across complex workflows.',
          },
          {
            title: 'State Management & Real-time Updates',
            content:
              'Implemented Redux for complex state management with custom middleware for handling real-time updates. This was essential for the watchers feature I designed, which provided live monitoring of test status changes and enrollment fluctuations across multiple experiments simultaneously.',
          },
          {
            title: 'API Design & Integration Strategy',
            content:
              'Led the design of RESTful APIs for the watchers and enrollment manipulation features, ensuring they could handle high-frequency updates and complex filtering requirements. Collaborated closely with backend engineers to define optimal data structures and caching strategies for real-time monitoring capabilities.',
          },
          {
            title: 'Performance Optimization',
            content:
              'Implemented advanced optimization techniques including virtual scrolling for large datasets, intelligent caching for frequently accessed test data, and optimistic updates for enrollment changes. These optimizations were critical for maintaining smooth user experience when managing hundreds of concurrent experiments.',
          },
        ],
      },
      implementation: {
        title: 'Frontend Development & UX Design Leadership',
        content: [
          'Over 3 years as the lead front-end engineer, I spearheaded the complete redesign of the A/B testing experience, taking ownership of critical features that became the platform\'s most valuable capabilities.',
        ],
        subsections: [
          {
            title: 'Watchers System - Real-time Monitoring',
            content:
              'I led the full UX, UI, and API design for the watchers feature - a real-time monitoring system that allowed teams to track multiple experiments simultaneously. This involved designing intuitive filtering interfaces, creating responsive data visualizations, and architecting WebSocket connections for live updates. The feature became essential for teams managing large-scale experiments across different games.',
          },
          {
            title: 'Enrollment Manipulation Interface',
            content:
              'Designed and implemented the enrollment manipulation system from the ground up, including the user interface, user experience flows, and API specifications. This complex feature allowed precise control over user enrollment in experiments, with safeguards and approval workflows. I collaborated closely with product teams to understand their needs and created interfaces that made complex operations intuitive.',
          },
          {
            title: 'Cross-functional Collaboration',
            content:
              'Worked closely with 2 UX designers to translate user research into functional interfaces, while coordinating with 5 backend engineers to ensure API designs met frontend requirements. Established design review processes and created comprehensive component documentation to maintain consistency across the expanding platform.',
          },
          {
            title: 'Progressive Migration Strategy',
            content:
              'Led the frontend migration from the legacy system by designing backwards-compatible interfaces that could operate with both old and new backend systems. This phased approach allowed teams to continue their work uninterrupted while we gradually rolled out improved functionality.',
          },
          {
            title: 'Performance & Scalability Solutions',
            content:
              'Addressed performance challenges as the platform scaled by implementing sophisticated frontend optimizations: virtual scrolling for experiment lists, debounced search with caching, and intelligent prefetching for commonly accessed data. These improvements were crucial for maintaining responsiveness as usage grew 250%.',
          },
        ],
      },
      results: {
        title: 'Frontend Impact & Technical Achievements',
        content: [
          'The frontend redesign and key features I led fundamentally transformed how teams interacted with A/B testing tools, delivering measurable improvements in user satisfaction, productivity, and platform adoption.',
        ],
        subsections: [
          {
            title: 'Watchers Feature Adoption & Impact',
            content:
              'The real-time monitoring system I designed became the most-used feature on the platform, with 95% of active experiments utilizing watchers for status tracking. Teams reported 60% faster issue detection and resolution times, significantly reducing the risk of problematic experiments running unnoticed.',
          },
          {
            title: 'Enrollment Manipulation Success',
            content:
              'The enrollment control interface I designed enabled teams to make precise adjustments to running experiments without requiring backend engineering support. This reduced experiment modification requests to the engineering team by 80% and gave product teams unprecedented autonomy in managing their tests.',
          },
          {
            title: 'User Experience Transformation',
            content:
              'User satisfaction scores improved from 2.3/5 to 4.6/5 following the frontend redesign. The intuitive interfaces I created reduced onboarding time for new users from 2 weeks to 2 days, and support tickets related to UI confusion dropped by 85%.',
          },
          {
            title: 'Performance & Scalability Achievements',
            content:
              'The frontend optimizations I implemented supported a 250% increase in platform usage without degrading performance. Page load times decreased by 40%, and the interface remained responsive even when displaying thousands of experiments simultaneously.',
          },
          {
            title: 'Cross-Platform Consistency',
            content:
              'The component system and design patterns I established were successfully adopted across 8 different game titles, creating consistency in A/B testing experiences regardless of the game team using the platform. This standardization reduced training overhead and improved cross-team collaboration.',
          },
        ],
      },
    },
  },
  {
    title: 'Data Transform Kit',
    sections: {
      idea: {
        title: 'The Problem & Vision',
        content: [
          'As a frontend developer working with multiple APIs and data sources, I constantly encountered the same frustrating problem: transforming data between different formats, structures, and types. Each project required writing custom transformation logic, leading to code duplication and inconsistent data handling across applications.',
          'The challenge was particularly acute when dealing with API responses that needed to be transformed for frontend consumption - converting snake_case to camelCase, handling null values, formatting dates for different locales, and ensuring type safety throughout the transformation pipeline.',
          'I envisioned creating a comprehensive, production-ready TypeScript library that would eliminate this repetitive work. The goal was to build a tree-shakeable, zero-configuration toolkit with intelligent type inference that could handle any data transformation scenario while maintaining excellent developer experience and performance.',
        ],
      },
      techStack: {
        title: 'Library Architecture & Design Decisions',
        content: [
          'Building a production-ready TypeScript library required careful consideration of architecture, performance, and developer experience. Every technical decision was made to ensure the library would be both powerful and easy to use.',
        ],
        subsections: [
          {
            title: 'TypeScript-First Approach',
            content:
              'Built entirely in TypeScript with advanced type inference capabilities. The library provides intelligent autocomplete and compile-time type checking, ensuring developers catch transformation errors before runtime. Custom utility types and generics enable precise type transformations that maintain type safety throughout complex data pipelines.',
          },
          {
            title: 'Functional Programming Principles',
            content:
              'Designed around pure functions and immutability to ensure predictable behavior and easy testing. Each transformation function is side-effect free and composable, allowing developers to chain transformations while maintaining data integrity. This approach also enables better tree-shaking and optimization.',
          },
          {
            title: 'Modular Category System',
            content:
              'Organized 49 transformation functions into 5 logical categories: String, Number, Date, Object, and Array transformations. This modular approach allows developers to import only the functions they need, reducing bundle size and improving performance in production applications.',
          },
          {
            title: 'Bidirectional Adapters',
            content:
              'Implemented sophisticated adapter pattern that supports both forward and reverse transformations. This allows developers to transform data for API consumption and then reverse the transformation for frontend display, ensuring consistency across the entire data flow lifecycle.',
          },
        ],
      },
      implementation: {
        title: 'Development Process & Key Features',
        content: [
          'The development focused on creating a library that would solve real-world data transformation challenges while maintaining excellent performance and developer experience.',
        ],
        subsections: [
          {
            title: 'Comprehensive Transformation Suite',
            content:
              'Developed 49 transformation functions covering every common data transformation scenario: string case conversions, number formatting, date/time handling with timezone support, deep object transformations, and array manipulation utilities. Each function includes comprehensive error handling and edge case management.',
          },
          {
            title: 'Intelligent Type Inference',
            content:
              'Implemented advanced TypeScript generics that automatically infer output types based on input data and transformation functions. This provides developers with accurate autocomplete suggestions and compile-time type checking without requiring manual type annotations.',
          },
          {
            title: 'Zero Configuration Setup',
            content:
              'Designed the library to work immediately after installation with sensible defaults for all transformation functions. Developers can start using transformations right away, while still having the flexibility to customize behavior through optional configuration objects.',
          },
          {
            title: 'Performance Optimization',
            content:
              'Optimized for tree-shaking to ensure only used functions are included in production bundles. Implemented efficient algorithms for complex transformations and added memoization for expensive operations. Extensive benchmarking ensured the library performs well even with large datasets.',
          },
          {
            title: 'Comprehensive Testing & Documentation',
            content:
              'Achieved 100% test coverage with unit tests for all 49 functions, including edge cases and error conditions. Created extensive documentation with practical examples, TypeScript usage patterns, and migration guides from common manual transformation approaches.',
          },
        ],
      },
      results: {
        title: 'Impact & Technical Achievements',
        content: [
          'Data Transform Kit successfully solved the data transformation problem for TypeScript developers, providing a comprehensive solution that improves code quality, reduces development time, and ensures consistent data handling.',
        ],
        subsections: [
          {
            title: 'Developer Productivity Gains',
            content:
              'The library eliminates the need to write custom transformation logic, reducing development time for data handling tasks by an estimated 70%. Developers can focus on business logic instead of repetitive data transformation code, significantly improving productivity on frontend projects.',
          },
          {
            title: 'Type Safety & Code Quality',
            content:
              'Advanced TypeScript integration provides compile-time guarantees about data transformations, eliminating entire categories of runtime errors related to data type mismatches. The functional programming approach ensures predictable, testable code that\'s easier to maintain and debug.',
          },
          {
            title: 'Performance & Bundle Optimization',
            content:
              'Tree-shaking support means applications only include the transformation functions they actually use, resulting in minimal bundle size impact. Optimized algorithms and memoization ensure excellent runtime performance even with complex, nested data transformations.',
          },
          {
            title: 'Production-Ready Reliability',
            content:
              '100% test coverage and comprehensive error handling make the library suitable for production use in enterprise applications. Extensive edge case testing ensures reliable behavior across all supported transformation scenarios, reducing production bugs related to data handling.',
          },
          {
            title: 'Open Source Community Impact',
            content:
              'Published as an open-source NPM package, making advanced data transformation capabilities accessible to the broader TypeScript community. The library serves as a reference implementation for building type-safe, functional programming libraries in the JavaScript ecosystem.',
          },
        ],
      },
    },
  },
];
