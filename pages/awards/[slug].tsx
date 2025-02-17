// pages/awards/[slug].tsx
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsGithub, BsArrowLeft } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { AwardedProject, awardedProjects } from '../../types/award';

export async function getStaticPaths() {
  const paths = awardedProjects.map((project) => ({
    params: { slug: project.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const project = awardedProjects.find((p) => p.slug === params.slug);
  return { props: { project } };
}

const ProjectDetails = ({ project }: { project: AwardedProject }) => {
  const router = useRouter();

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Project Information - 4 columns (1/3) */}
        <div className="lg:col-span-4 space-y-8 py-6 px-8">
          <Link
            href="/#awards"
            className="flex items-center gap-2 text-primaryColor hover:text-secondaryColor transition-colors mb-8"
          >
            <BsArrowLeft size={20} />
            <span>Back to Awards</span>
          </Link>

          <div>
            <h1 className="text-4xl font-bold text-primaryColor mb-4">{project.title}</h1>
            <span className="inline-block bg-titleColor text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {project.award.title}
            </span>
            <p className="text-thirdColor mb-2">
              {project.award.organization} • {project.award.date}
            </p>
            <p className="text-primaryColor mb-6">
              {project.award.description}
            </p>
            <div className="flex gap-4">
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

          <div>
            <h2 className="text-xl font-semibold text-secondaryColor mb-3">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-primaryColor">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            {project.teamSize && (
              <div>
                <h3 className="text-lg font-semibold text-secondaryColor">Team Size</h3>
                <p className="text-primaryColor">{project.teamSize} members</p>
              </div>
            )}
            {project.duration && (
              <div>
                <h3 className="text-lg font-semibold text-secondaryColor">Duration</h3>
                <p className="text-primaryColor">{project.duration}</p>
              </div>
            )}
          </div>

          {project.recognition && (
            <div>
              <h2 className="text-xl font-semibold text-secondaryColor mb-3">Recognition</h2>
              <ul className="list-disc list-inside space-y-2 text-primaryColor">
                {project.recognition.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Project Images - 8 columns (2/3) */}
        <div className="lg:col-span-8 space-y-6 py-16 px-8 h-full relative bg-stone-300">
          {/* SVG Pattern Background */}
          <div className="absolute inset-0 z-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path 
                  d="M 100 0 L 0 0 0 100" 
                  fill="none" 
                  stroke="rgba(75, 85, 99, 0.5)"
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

          {/* Certificate (if exists) */}
          {project.certificate && (
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg z-20">
              <Image
                src={project.certificate}
                alt="Award Certificate"
                className="object-cover"
                fill
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;