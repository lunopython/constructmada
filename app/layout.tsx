import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Construction Madagascar - Solutions de Construction Professionnelles',
  description: 'Votre partenaire de confiance pour tous vos projets de construction à Madagascar. Services professionnels, expertise locale, qualité garantie.',
  keywords: 'construction madagascar, entreprise construction, bâtiment madagascar, construction professionnelle, construction antananarivo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}