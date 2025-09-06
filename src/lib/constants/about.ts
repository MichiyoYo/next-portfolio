import {
  Code2,
  Target,
  Users,
  BookOpen,
  Rocket,
  Award,
  Gamepad2,
  HeartIcon,
  Handshake,
} from 'lucide-react';

export const skills = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'PostgreSQL', 'GraphQL', 'REST APIs', 'Docker'],
  },
  { category: 'Tools', skills: ['Git', 'VS Code', 'Figma', 'AWS', 'Vercel'] },
  {
    category: 'Soft Skills',
    skills: [
      'Problem Solving',
      'Team Leadership',
      'Communication',
      'Mentoring',
    ],
  },
];

export const journey = [
  {
    year: '2010',
    title: 'Computer Science Studies',
    description:
      'Completed most coursework in Computer Science at University of Pisa, Italy, focusing on programming, algorithms, and software engineering.',
    icon: BookOpen,
  },
  {
    year: '2013',
    title: 'Web Developer at LiberSoft',
    description:
      'Built enterprise websites with Drupal, WordPress, Django, and Symfony. Led DevOps, deployment automation, and contributed to government-scale digital signature software.',
    icon: Code2,
  },
  {
    year: '2017',
    title: 'Site Reliability Engineer & Front End Developer',
    description:
      'Maintained 200+ websites at Studio III Marketing, developed proprietary platforms, optimized performance, and ensured accessibility and SEO best practices.',
    icon: Rocket,
  },
  {
    year: '2021',
    title: 'Full Stack Engineer Certification',
    description:
      'Completed Full Stack Engineer Certification at Career Foundry, focusing on React, Node.js, TDD, and modern web technologies.',
    icon: Award,
  },
  {
    year: '2022',
    title: 'Full Stack & UX Engineer at Activision',
    description:
      'Developed A/B testing platform, design systems, and internal tooling for AAA titles. Led UX/UI meetings, mentored developers, and launched major marketing sites.',
    icon: Gamepad2,
  },
  {
    year: '2025',
    title: 'Microsoft UX Design Certification',
    description:
      'Earned the Microsoft UX Design Specialization, demonstrating advanced skills in user experience and interface design.',
    icon: Award,
  },
];

export const values = [
  {
    icon: Target,
    title: 'User-Centered',
    description:
      'Every line of code should ultimately serve to create better user experiences.',
  },
  {
    icon: HeartIcon,
    title: 'Accessibility',
    description:
      'I prioritize building digital experiences that are usable by everyone, regardless of ability.',
  },
  {
    icon: Users,
    title: 'Inclusion',
    description:
      'I strive to create technology that welcomes and empowers people from all backgrounds.',
  },
  {
    icon: Handshake,
    title: 'Collaboration',
    description:
      'The best solutions come from diverse perspectives and open communication.',
  },
];

export const certificates = [
  {
    title: 'Microsoft UX Design Specialization',
    issuer: 'Microsoft (Coursera)',
    date: '2025',
    credentialId: '9147IJDOO1AZ',
    description:
      'Earned the Microsoft UX Design Specialization, demonstrating advanced skills in user experience and interface design.',
  },
  {
    title: 'Full Stack Engineer Certification',
    issuer: 'Career Foundry',
    date: '2021',
    credentialId: '',
    description:
      'Completed Full Stack Engineer Certification at Career Foundry, focusing on React, Node.js, TDD, and modern web technologies.',
  },
];

export const reviews = [
  {
    name: 'Laura Zodrow',
    role: 'Engineering Manager',
    company: 'Cactus | ex-Activision',
    content:
      "Having managed Cristina for two years, I can attest to her exceptional talent and leadership. She's an incredibly skilled developer who stays current with latest technologies. Her ability to work swiftly without compromising code quality is impressive, and she excels at creative problem-solving. Cristina proactively improves team processes and demonstrates strong leadership when mentoring others. Her communication skills ensure alignment across stakeholders, and her positive energy makes her a valuable team asset.",
    rating: 5,
  },
  {
    name: 'Loic Vourch',
    role: 'Senior Software Engineer',
    company: 'Metropolis Technologies | ex-Activision',
    content:
      'Cristina is an amazing engineer with a rare blend of technical prowess and project management skills. She produces high-quality work quickly and tackles intricate problems with creativity. Her autonomy and detail-oriented approach ensure thorough coverage from design to implementation. As an excellent communicator, she efficiently coordinates between teams and presents to any audience. She collaborated exceptionally with our Design and UX team, making meaningful contributions to craft the best product possible.',
    rating: 5,
  },
  {
    name: 'Mahad Rehan',
    role: 'Software Engineer',
    company: 'Amazon',
    content:
      'As an intern at Activision, I was fortunate to have Cristina as my mentor. She was consistently enthusiastic about teaching and made time to ensure I learned effectively. Her mentorship prepared me well for my future career, offering insightful tips that continue to guide my development. Cristina was patient, passionate, and made learning engaging. Her guidance has significantly shaped me as a developer, and I would recommend her mentorship to anyone looking to grow in this field.',
    rating: 5,
  },
];