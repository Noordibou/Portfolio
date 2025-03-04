// types/award.ts
export interface Project {
    title: string;
    slug: string;
    href: string;
    github: string;
    imageUrl: string;
    description: string;
    longDescription: string;
    features: string[];
    challenges: string[];
    techStack: string[];
    images: string[];
  }
  
  export interface Award {
    title: string;
    organization: string;
    date: string;
    description: string;
  }
  
  export interface AwardedProject extends Project {
    award: Award;
    demoVideo?: string;
    teamSize?: number;
    duration?: string;
    recognition?: string[];
    certificate?: string;
  }
  
  export const awardedProjects: AwardedProject[] = [
    {
      title: 'Feeling Friends',
      slug: 'feeling-friends',
      href: 'https://mindful-journal.vercel.app/',
      github: 'https://github.com/Noordibou/Feeling-Friends',
      imageUrl: '/ff-main.png',
      description: 'A user-friendly app designed for neurodiverse students to help with emotional regulation and social interactions.',
      longDescription: 'Feeling Friends is a user-friendly app designed with neurodiverse students in mind. It addresses a range of challenges they may face, including behavioral issues, emotional regulation, social interactions, and executive functioning. The app offers a dual perspective: one for students and one for teachers.',
      features: [
        'Daily emotion check-ins for students',
        'Teacher dashboard for monitoring student progress',
        'Interactive emotion regulation tools',
        'Personalized coping strategies',
        'Real-time communication between teachers and students',
        'Progress tracking and reporting'
      ],
      challenges: [
        'Creating an intuitive interface for neurodiverse users',
        'Implementing real-time communication features',
        'Designing effective emotion tracking mechanisms',
        'Ensuring data privacy and security',
        'Building an accessible and inclusive user experience'
      ],
      techStack: ['React', 'Express', 'NodeJS', 'MongoDB', 'TailwindCSS', 'Framer Motion'],
      images: ['/ff-main.png', '/ffs1.png', '/fft.png'],
      award: {
        title: "People's Choice Award",
        organization: "General Assembly",
        date: "2024",
        description: "First place in a 3-day intensive hackathon focused on creating solutions for neurodiverse students"
      },
      teamSize: 4,
      duration: "3 days",
      recognition: [
        "Best User Experience",
        "Most Innovative Solution",
        "Best Technical Implementation"
      ],
      certificate: "/ff.jpg"
    },
    {
      title: 'Bottomless Closet',
      slug: 'bottomless-closet',
      href: 'https://main.d415obh25yr7h.amplifyapp.com/',
      github: 'https://github.com/sramalho94/bottomlesscloset',
      imageUrl: '/bc-main.png',
      description: 'Redesigned website for a New York-based Non-Profit Organization helping women enter the workforce.',
      longDescription: 'Our team secured first place at the Winter General Assembly Hackathon by successfully tackling the challenge of redesigning Bottomless Closet website. The project focused on creating a more accessible and user-friendly platform for women seeking employment resources and professional attire.',
      features: [
        'Appointment scheduling system',
        'Resource library for job seekers',
        'Donation management system',
        'Volunteer registration portal',
        'Event calendar and registration',
        'Success stories showcase'
      ],
      challenges: [
        'Implementing an efficient appointment system',
        'Creating an intuitive donation process',
        'Ensuring mobile responsiveness',
        'Optimizing site performance',
        'Integrating multiple third-party services'
      ],
      techStack: ['Next.js', 'TypeScript', 'Tailwind', 'AWS Amplify', 'Sequelize', 'Jest'],
      images: ['/bc-main.png', '/bc-detail1.png', '/bc-detail2.png'],
      award: {
        title: "1st Place - Winter Hackathon",
        organization: "General Assembly",
        date: "2023",
        description: "Led the winning team in redesigning a non-profit organization's website"
      },
      teamSize: 5,
      duration: "5 days",
      recognition: [
        "Best UI/UX Design",
        "Most Impactful Solution",
        "Excellence in Accessibility"
      ],
      certificate: ""
    }
  ];