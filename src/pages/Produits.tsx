import { useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import { motion } from 'framer-motion';
import NavbarStyle from '@/components/layout/NavbarStyle';
import hero from "@/assets/hero.jpg"
import Footer from '@/components/layout/Footer';
import Loader from '@/components/ui/Loader';
import { useEffect } from 'react';
import agrovert from "@/assets/agrovert.jpg"
import camagro from "@/assets/camagro.jpg"
import produit1 from "@/assets/produit1.jpg"
import produit2 from "@/assets/produit2.jpg"

const Produits = () => {
  
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simuler un temps de chargement
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 secondes de chargement

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }
  return (
    <div className="min-h-screen bg-white">
        <NavbarStyle/>
      <HeroSection title="Nos Produits" backgroundImage={hero} />

      {/* Categories Navigation */}
     

      {/* Products Grid */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Product Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={agrovert}
                alt="NPK"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold mb-2">Agrovert</h3>
                <p className="text-gray-200 text-sm">
                  Agrovert est un engrais composé idéal pour les cultures vivrières
                </p>
                <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={camagro}
                alt="NPK"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold mb-2">Camagro</h3>
                <p className="text-gray-200 text-sm">
                  Camagro est un produit phytosanitaire idéal pour les cultures vivrières
                </p>
                <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={produit1}
                alt="NPK"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold mb-2">Sprayer</h3>
                <p className="text-gray-200 text-sm">
                Optimisez vos traitements grâce à notre pulvérisateur de haute précision. Conçu pour assurer une couverture uniforme de vos cultures.
                </p>
                <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={produit2}
                alt="NPK"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold mb-2">NPK</h3>
                <p className="text-gray-200 text-sm">
                NPK est Utilisé au bon dosage, l’engrais NPK améliore la santé de vos cultures, augmente les rendements et favorise un développement équilibré.
                </p>
                <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>
          </motion.div>
          {/* Repeat similar product cards */}
        </div>
      </div>

      {/* Product Features */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualité Certifiée</h3>
              <p className="text-gray-600">Tous nos produits sont testés et certifiés</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Livraison Rapide</h3>
              <p className="text-gray-600">Service de livraison dans tout le pays</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Support Technique</h3>
              <p className="text-gray-600">Conseils d'experts disponibles</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Produits; 