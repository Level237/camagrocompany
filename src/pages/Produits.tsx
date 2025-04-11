import { useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import { motion, AnimatePresence } from 'framer-motion';
import NavbarStyle from '@/components/layout/NavbarStyle';
import hero from "@/assets/hero.jpg"
import Footer from '@/components/layout/Footer';
import Loader from '@/components/ui/Loader';
import { useEffect } from 'react';
import agrovert from "@/assets/agrovert.jpg"
import camagro from "@/assets/camagro.jpg"
import produit1 from "@/assets/produit1.jpg"
import produit2 from "@/assets/produit2.jpg"

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  details: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Agrovert",
    image: agrovert,
    description: "Agrovert est un engrais composé idéal pour les cultures vivrières",
    details: "Agrovert est un engrais NPK équilibré spécialement formulé pour optimiser la croissance des cultures. Riche en nutriments essentiels, il favorise un développement sain des plantes et améliore les rendements agricoles."
  },
  {
    id: 2,
    name: "Camagro",
    image: camagro,
    description: "Camagro est un produit phytosanitaire idéal pour les cultures vivrières",
    details: "Camagro est un produit phytosanitaire idéal pour les cultures vivrières"
  },
  {
    id: 3,
    name: "Sprayer",
    image: produit1,
    description: "Optimisez vos traitements grâce à notre pulvérisateur de haute précision. Conçu pour assurer une couverture uniforme de vos cultures.",
    details: "Optimisez vos traitements grâce à notre pulvérisateur de haute précision. Conçu pour assurer une couverture uniforme de vos cultures."
  },
  {
    id: 4,
    name: "NPK",
    image: produit2,
    description: "NPK est Utilisé au bon dosage, l'engrais NPK améliore la santé de vos cultures, augmente les rendements et favorise un développement équilibré.",
    details: "NPK est Utilisé au bon dosage, l'engrais NPK améliore la santé de vos cultures, augmente les rendements et favorise un développement équilibré."
  }
];

const Produits = () => {
  
  const [isLoading, setIsLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white">
        <NavbarStyle/>
      <HeroSection title="Nos Produits" backgroundImage={hero} />

      {/* Categories Navigation */}
     

      {/* Products Grid */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-200 text-sm">{product.description}</p>
                  <button 
                    onClick={() => openModal(product)}
                    className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
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

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full"
            >
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/40 transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
                <p className="text-gray-600 mb-6">{selectedProduct.details}</p>
                
                <div className="flex justify-between items-center">
                  <a
                    href={`https://wa.me/+237672944528?text=Je suis intéressé par le produit ${selectedProduct.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Contacter sur WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer/>
    </div>
  );
};

export default Produits; 