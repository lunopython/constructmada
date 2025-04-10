import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose
} from '@/components/ui/drawer';

const projects = [
  {
    id: 1,
    title: 'Résidence de Luxe Ivandry',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'Résidentiel',
    location: 'Antananarivo',
    description: 'Villa contemporaine de 450m² alliant luxe et durabilité. Integration de solutions domotiques avancées et matériaux premium.',
    technologies: ['Architecture bioclimatique', 'Domotique', 'Matériaux écologiques'],
    testimonial: {
      text: 'Une réalisation exceptionnelle qui dépasse nos attentes. L\'équipe a su parfaitement traduire notre vision en réalité.',
      author: 'M. Rakoto',
      position: 'Propriétaire'
    }
  },
  {
    id: 2,
    title: 'Centre Commercial Tana Water Front',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'Commercial',
    location: 'Antananarivo',
    description: 'Complex commercial de 15000m² comprenant boutiques, restaurants et espaces de loisirs avec vue panoramique.',
    technologies: ['Structure métallique', 'Façade vitrée', 'Système HVAC'],
    testimonial: {
      text: 'Un projet ambitieux réalisé dans les délais avec un professionnalisme remarquable.',
      author: 'Mme. Ratsima',
      position: 'Directrice du centre'
    }
  }
];

const categories = ['Tous', 'Résidentiel', 'Commercial', 'Industriel'];

// Définir une interface pour les projets
interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  location: string;
  description: string;
  technologies: string[];
  testimonial: {
    text: string;
    author: string;
    position: string;
  };
}

// Définir une interface pour les props de ProjectCard
interface ProjectCardProps {
  project: Project;
  inView: boolean;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, inView, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8 }}
    className="group cursor-pointer"
    onClick={onClick}
  >
    <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform group-hover:scale-110"
      />
    </div>
    <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
    <p className="text-gray-600">{project.location}</p>
  </motion.div>
);

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Vérifie la taille initiale
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!project) return null;

  return isMobile ? (
    <Drawer open={!!project} onOpenChange={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{project.title}</DrawerTitle>
          <DrawerClose asChild>
            <Button variant="outline">Fermer</Button>
          </DrawerClose>
        </DrawerHeader>
        <div className="p-4 max-h-full overflow-y-auto">
          <div className="relative h-64 mb-4">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="mb-4">
            <h4 className="font-bold mb-2">Technologies utilisées :</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="italic mb-2">&ldquo;{project.testimonial.text}&rdquo;</p>
            <p className="font-bold">{project.testimonial.author}</p>
            <p className="text-gray-600">{project.testimonial.position}</p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  ) : (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-full overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <div className="relative h-80 mb-6">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">{project.description}</p>
          <div>
            <h4 className="font-bold mb-2">Technologies utilisées :</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="italic mb-4">&ldquo;{project.testimonial.text}&rdquo;</p>
            <p className="font-bold">{project.testimonial.author}</p>
            <p className="text-gray-600">{project.testimonial.position}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export function PortfolioSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('Tous');

  const filteredProjects = projects.filter((project) => filter === 'Tous' || project.category === filter);

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Nos Réalisations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos projets phares à Madagascar, témoins de notre expertise et de notre engagement
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              onClick={() => setFilter(category)}
              className={filter === category ? 'bg-secondary' : ''}
              aria-pressed={filter === category}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              inView={inView}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
}
