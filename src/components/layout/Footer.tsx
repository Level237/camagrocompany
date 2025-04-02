import React from 'react';
import logo from "@/assets/logo-white.png"

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-950 text-white">
        <div className="container mx-auto max-w-6xl py-12 px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className='-mt-12 '>
              <img src={logo} alt="logo" className="w-36 mb-8" />
              <p className="text-gray-300 -mt-12 text-sm">
                Leader camerounais dans l'importation et la distribution d'engrais et d'intrants agricoles.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-green-400 transition">Accueil</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Produits</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Services</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Douala, Cameroun</li>
                <li>Tel: +237 233 XX XX XX</li>
                <li>Email: contact@camagro.cm</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition">
                  <span className="sr-only">Facebook</span>
                  {/* Icône Facebook */}
                </a>
                <a href="#" className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition">
                  <span className="sr-only">LinkedIn</span>
                  {/* Icône LinkedIn */}
                </a>
                <a href="#" className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition">
                  <span className="sr-only">Twitter</span>
                  {/* Icône Twitter */}
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-green-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} CAMAGRO. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
) 




}

export default Footer;