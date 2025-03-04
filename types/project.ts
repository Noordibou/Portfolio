// types/project.ts
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
  export const projects: Project[] = [
    {
      title: 'Time Totes',
      slug: 'time-totes',
      href: 'https://e-shop-unty.vercel.app/',
      github: 'https://github.com/Noordibou/E-shop',
      imageUrl: '/tt-main.png',
      description: 'E-commerce platform for luxury watches, bags, and accessories.',
      longDescription: 'Time Totes is a sophisticated e-commerce platform specializing in luxury accessories. Built with Next.js and TypeScript, it offers a seamless shopping experience for high-end watches, bags, and sunglasses. The platform features secure payment processing through Stripe, user authentication, and a robust shopping cart system.',
      features: [
        'Secure payment processing with Stripe integration',
        'User account management and order history',
        'Advanced product filtering and search',
        'Shopping cart with persistent storage',
        'Responsive product galleries',
        'Order tracking and management system'
      ],
      challenges: [
        'Implementing secure payment processing with Stripe',
        'Creating a responsive and intuitive product catalog',
        'Managing complex state for shopping cart functionality',
        'Optimizing image loading for product galleries',
        'Ensuring secure user data handling and storage'
      ],
      techStack: ['NextJS', 'TypeScript', 'MongoDB', 'Stripe', 'TailwindCSS'],
      images: ['/tt1-main.png', '/tt-detail1.png', '/tt-detail2.png']
    },
    {
      title: 'Caffeine Chronicles',
      slug: 'caffeine-chronicles',
      href: 'https://coffee-shop-blog.vercel.app/',
      github: 'https://github.com/Noordibou/Coffee-Shop-Blog',
      imageUrl: '/cc1-main.png',
      description: 'A coffee shop review platform for sharing cafe experiences and discoveries.',
      longDescription: 'Caffeine Chronicles is a dynamic coffee shop review platform that brings coffee enthusiasts together. Users can create detailed reviews of their favorite cafes, share their experiences through blog posts, and discover new coffee spots in their area. The platform features a user-friendly interface for writing and managing blog posts, complete with image uploads and interactive user profiles.',
      features: [
        'User authentication and personalized profiles',
        'Interactive blog post creation and editing system',
        'Image upload functionality for cafe photos',
        'Google Maps integration for cafe locations',
        'Search and filter functionality for finding specific cafes',
        'Responsive design for mobile and desktop use'
      ],
      challenges: [
        'Implementing secure user authentication and authorization',
        'Integrating Google Maps API for location services',
        'Creating an efficient image upload and storage system',
        'Designing a responsive and intuitive user interface',
        'Optimizing database queries for better performance'
      ],
      techStack: ['React', 'Express', 'NodeJS', 'MongoDB', 'HTML', 'CSS', 'TailwindCSS'],
      images: ['/cc1-main.png', '/cc-detail1.png', '/cc-detail2.png']
    },
    {
      title: 'Projects Planner',
      slug: 'projects-planner',
      href: 'https://managerapp.fly.dev/',
      github: 'https://github.com/Noordibou/CRUD-PROJECT',
      imageUrl: '/pp-main1.png',
      description: 'Task management app for creating and organizing project checklists.',
      longDescription: 'Projects Planner is a intuitive task management application that helps users organize their projects and tasks effectively. Built with Express and MongoDB, it provides a clean interface for creating, managing, and tracking project progress through customizable checklists and task lists.',
      features: [
        'Custom checklist creation and management',
        'Task prioritization and scheduling',
        'Progress tracking and status updates',
        'Due date management and reminders',
        'Project categorization and organization',
        'Collaborative task sharing capabilities'
      ],
      challenges: [
        'Implementing efficient task sorting and filtering',
        'Creating an intuitive drag-and-drop interface',
        'Managing real-time updates for task status changes',
        'Designing a scalable database structure',
        'Building a responsive and accessible user interface'
      ],
      techStack: ['Express', 'NodeJS', 'MongoDB', 'EJS', 'Bootstrap'],
      images: ['/pp-main1.png']
    },
    {
      title: 'The Dessert Palette',
      slug: 'dessert-palette',
      href: 'https://long-breeze-6908.fly.dev/',
      github: 'https://github.com/Noordibou/Dessert-Palette-2.0',
      imageUrl: '/dp-main.png',
      description: 'Recipe platform featuring categorized dessert recipes and cooking guides.',
      longDescription: 'The Dessert Palette is a comprehensive recipe platform built with Django and PostgreSQL, focusing on dessert recipes and baking guides. The application allows users to explore, save, and share their favorite dessert recipes, complete with detailed instructions, ingredient lists, and beautiful food photography.',
      features: [
        'Recipe categorization and tagging system',
        'User recipe collections and favorites',
        'Detailed recipe instructions with step-by-step guides',
        'Recipe rating and review system',
        'Advanced search with filtering options',
        'Mobile-responsive design for cooking on the go'
      ],
      challenges: [
        'Designing an efficient database schema for recipe management',
        'Implementing complex search and filtering functionality',
        'Creating a user-friendly recipe submission system',
        'Optimizing image handling for food photography',
        'Building a responsive layout for various screen sizes'
      ],
      techStack: ['Django', 'PostgreSQL', 'Python', 'Bootstrap'],
      images: ['/dp-main.png', '/dp-detail1.png', '/dp-detail2.png']
    }
  ];