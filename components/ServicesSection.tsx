'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiHome, FiTruck, FiTool, FiLayout } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <FiHome className="w-12 h-12" />,
    title: 'Construction Résidentielle Premium',
    description: 'Réalisez votre rêve d\'une maison sur mesure à Madagascar. Notre expertise en construction résidentielle combine les standards internationaux avec les matériaux locaux de qualité. Nous gérons chaque projet avec une attention particulière aux détails, du concept à la livraison.',
    example: 'Villa moderne à Ivandry : 450m² sur 3 niveaux, piscine intégrée, système domotique.',
    cta: 'Demander un devis personnalisé'
  },
  {
    icon: <FiTruck className="w-12 h-12" />,
    title: 'Projets Commerciaux & Industriels',
    description: 'Développez votre entreprise avec des infrastructures robustes et modernes. Nos solutions commerciales et industrielles répondent aux normes internationales tout en s\'adaptant au contexte local malgache.',
    example: 'Centre logistique à Antsirabe : 2000m² d\'entrepôt climatisé, zones de chargement optimisées.',
    cta: 'Planifier une consultation'
  },
  {
    icon: <FiTool className="w-12 h-12" />,
    title: 'Rénovation & Réhabilitation',
    description: 'Donnez une nouvelle vie à vos bâtiments existants. Notre équipe spécialisée en rénovation combine techniques modernes et respect du patrimoine pour des résultats exceptionnels.',
    example: 'Réhabilitation historique à Antananarivo : restauration complète d\'un bâtiment colonial de 1920.',
    cta: 'Découvrir nos rénovations'
  },
  {
    icon: <FiLayout className="w-12 h-12" />,
    title: 'Conception & Plans Architecturaux',
    description: 'Transformez vos idées en plans détaillés avec notre service de conception architecturale. Nous intégrons les dernières innovations tout en respectant l\'architecture traditionnelle malgache.',
    example: 'Éco-resort à Nosy Be : conception bioclimatique, matériaux durables, intégration paysagère.',
    cta: 'Démarrer votre projet'
  }
];

export function ServicesSection() {
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
          <h2 className="text-4xl font-bold text-primary mb-4">Nos Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions de construction innovantes adaptées aux besoins spécifiques du marché malgache
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-secondary mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-500"><strong>Exemple :</strong> {service.example}</p>
              </div>
              <Button className="w-full bg-secondary text-white hover:bg-secondary/90">
                {service.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}