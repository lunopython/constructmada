'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiFacebook,
  FiLinkedin,
  FiMessageCircle
} from 'react-icons/fi';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  subject: z.string().min(2, 'Le sujet est requis'),
  message: z.string().min(10, 'Le message est trop court'),
});

const faqs = [
  {
    question: 'Quels types de projets réalisez-vous ?',
    answer: 'Nous réalisons tous types de projets de construction : résidentiel, commercial, industriel et rénovation. Chaque projet est unique et bénéficie de notre expertise complète.'
  },
  {
    question: 'Quels sont vos délais moyens de réalisation ?',
    answer: 'Les délais varient selon la complexité du projet. Une maison individuelle prend généralement 6-8 mois, un projet commercial 12-18 mois. Nous établissons un planning détaillé dès le début.'
  },
  {
    question: 'Travaillez-vous partout à Madagascar ?',
    answer: 'Oui, nous intervenons sur l&#39;ensemble du territoire malgache, avec une présence renforcée dans les grandes villes : Antananarivo, Toamasina, Mahajanga, etc.'
  },
  {
    question: 'Proposez-vous des garanties ?',
    answer: 'Oui, tous nos travaux sont garantis : garantie décennale pour le gros œuvre, garantie biennale pour les équipements. Nous sommes également assurés pour la responsabilité civile.'
  }
];

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    toast.success('Message envoyé avec succès !');
  };

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Contactez-nous</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discutons de votre projet et trouvons ensemble les meilleures solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  {...register('name')}
                  placeholder="Votre nom"
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && typeof errors.name.message === 'string' && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Input
                  {...register('email')}
                  type="email"
                  placeholder="Votre email"
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Input
                  {...register('phone')}
                  placeholder="Votre téléphone"
                  className={errors.phone ? 'border-red-500' : ''}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <Input
                  {...register('subject')}
                  placeholder="Sujet"
                  className={errors.subject ? 'border-red-500' : ''}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <Textarea
                  {...register('message')}
                  placeholder="Votre message"
                  className={errors.message ? 'border-red-500' : ''}
                  rows={6}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full bg-secondary text-white hover:bg-secondary/90">
                Envoyer le message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Informations de contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-secondary" />
                  <p>123 Avenue de l'Indépendance, Antananarivo 101, Madagascar</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <FiPhone className="text-secondary" />
                  <p>+261 20 22 123 456</p>
                </div>

                <div className="flex items-center gap-3">
                  <FiMail className="text-secondary" />
                  <p>contact@constructmada.mg</p>
                </div>

                <div className="flex items-center gap-3">
                  <FiClock className="text-secondary" />
                  <p>Lundi - Vendredi : 8h - 17h</p>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <Button variant="outline" size="icon">
                  <FiFacebook className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <FiLinkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <FiMessageCircle className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Questions fréquentes</h3>
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.214456529686!2d47.51686091489943!3d-18.91191998717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07de34a5c1943%3A0x6c386c1a6d87098!2sAntananarivo%2C%20Madagascar!5e0!3m2!1sfr!2sfr!4v1645789012345!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}