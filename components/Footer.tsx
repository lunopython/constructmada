'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FiFacebook, FiLinkedin, FiMessageCircle } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ConstructMada</h3>
            <p className="text-gray-300 mb-4">
              Votre partenaire de confiance pour tous vos projets de construction à Madagascar.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="text-white border-white hover:text-white">
                <FiFacebook className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="text-white border-white hover:text-white">
                <FiLinkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="text-white border-white hover:text-white">
                <FiMessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-white">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="text-gray-300 hover:text-white">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Avenue de l'Indépendance</li>
              <li>Antananarivo 101, Madagascar</li>
              <li>+261 20 22 123 456</li>
              <li>contact@constructmada.mg</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Restez informé de nos dernières actualités et offres.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-secondary text-white hover:bg-secondary/90">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2024 ConstructMada. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}