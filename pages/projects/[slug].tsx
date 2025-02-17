// pages/projects/[slug].tsx
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsGithub, BsArrowLeft } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { projects, Project } from '../../types/project';

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  return { props: { project } };
}

const ProjectDetail = ({ project }: { project: Project }) => {
  const router = useRouter();

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12"> {/* Changed to 12 columns */}
        {/* Project Information - 4 columns (1/3) */}
        <div className="lg:col-span-4 space-y-8 py-6 px-8">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-primaryColor hover:text-secondaryColor transition-colors mb-8"
          >
            <BsArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>
          {/* Project Information content remains the same */}
          <div>
            <h1 className="text-4xl font-bold text-primaryColor mb-4">{project.title}</h1>
            <div className="flex gap-4 mb-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-thirdColor hover:text-secondaryColor transition-colors"
              >
                <BsGithub size={20} />
                <span>View Code</span>
              </a>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-thirdColor hover:text-secondaryColor transition-colors"
              >
                <FiExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-secondaryColor mb-3">Overview</h2>
            <p className="text-primaryColor">{project.longDescription}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-secondaryColor mb-3">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondaryColor/30 rounded-full text-sm text-primaryColor"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.features && (
            <div>
              <h2 className="text-xl font-semibold text-secondaryColor mb-3">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-primaryColor">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

{/* Project Images - 8 columns (2/3) */}
<div className="lg:col-span-8 space-y-6 py-16 px-8 h-full relative bg-stone-300"> {/* Added bg-gray-100 */}
  {/* SVG Pattern Background */}
  <div className="absolute inset-0 z-10">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
        <path 
          d="M 100 0 L 0 0 0 100" 
          fill="none" 
          stroke="rgba(75, 85, 99, 0.5)" // Changed to darker color (gray-600 with opacity)
          strokeWidth="1.5"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>

  {/* Main Image */}
  <div className="relative h-96 rounded-lg overflow-hidden shadow-lg z-20">
    <Image
      src={project.imageUrl}
      alt={project.title}
      className="object-cover"
      fill
      priority
    />
  </div>

  {/* Gallery Images */}
  {project.images && project.images.length > 1 && (
    <div className="grid grid-cols-2 gap-4">
      {project.images.slice(1).map((image, index) => (
        <div key={index} className="relative h-80 rounded-lg overflow-hidden shadow-lg z-20">
          <Image
            src={image}
            alt={`${project.title} detail ${index + 1}`}
            className="object-cover"
            fill
          />
        </div>
      ))}
    </div>
  )}
</div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;