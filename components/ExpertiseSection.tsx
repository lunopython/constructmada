'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiAward,
  FiUsers,
  FiTrendingUp,
  FiCheckCircle
} from 'react-icons/fi';

const expertise = [
  {
    title: 'Construction Durable',
    skills: [
      'Certification HQE',
      'Matériaux écologiques',
      'Gestion énergétique',
      'Architecture bioclimatique'
    ],
    level: 90,
    certifications: ['ISO 14001', 'LEED Green Associate'],
    cases: 'Eco-lodge à Nosy Be utilisant 100% d\'énergies renouvelables'
  },
  {
    title: 'Génie Civil',
    skills: [
      'Structures complexes',
      'Fondations spéciales',
      'Ouvrages d\'art',
      'Études géotechniques'
    ],
    level: 95,
    certifications: ['ISO 9001', 'OHSAS 18001'],
    cases: 'Pont suspendu de 120m à Mahajanga'
  },
  {
    title: 'Rénovation Patrimoniale',
    skills: [
      'Restauration historique',
      'Techniques traditionnelles',
      'Conservation',
      'Mise aux normes'
    ],
    level: 85,
    certifications: ['Qualification Qualibat', 'Monument Historique'],
    cases: 'Restauration du Rova d\'Antananarivo'
  }
];

const stats = [
  { icon: <FiAward />, value: '25+', label: 'Années d\'expérience' },
  { icon: <FiUsers />, value: '500+', label: 'Projets réalisés' },
  { icon: <FiTrendingUp />, value: '98%', label: 'Satisfaction client' },
  { icon: <FiCheckCircle />, value: '100%', label: 'Projets livrés dans les délais' }
];

export function ExpertiseSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Notre Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une expertise technique pointue au service de vos projets à Madagascar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">{item.title}</h3>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-bold">Niveau d'expertise</span>
                  <span>{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-secondary h-2 rounded-full"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-2">Compétences clés :</h4>
                <ul className="space-y-2">
                  {item.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FiCheckCircle className="text-secondary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-2">Certifications :</h4>
                <div className="flex flex-wrap gap-2">
                  {item.certifications.map((cert, idx) => (
                    <span
                      key={idx}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-2">Cas d'usage :</h4>
                <p className="text-gray-600">{item.cases}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl text-secondary mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}