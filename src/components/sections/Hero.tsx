import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Sprout, Sun } from "lucide-react"
import hero from "@/assets/hero.jpg"
const Hero = () => {
  return (
    <div className="relative py-24 min-h-screen bg-gradient-to-b from-[#1B5E20] to-[#2E7D32] overflow-hidden">
      {/* Cercles décoratifs en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* Grille de points décorative */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative container mx-auto max-w-6xl px-4 h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <div className="flex items-center space-x-2">
              <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                Agriculture Durable
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Solutions Naturelles pour une Terre Plus Saine
            </h1>
            
            <p className="text-lg text-white/80 max-w-lg">
              Découvrez nos solutions d'engrais 100% naturels et nos services 
              d'accompagnement pour une agriculture respectueuse de l'environnement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-white text-[#2E7D32] hover:bg-green-50 font-semibold">
                Découvrir nos produits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Nos services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20 mt-8">
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-white/80">Naturel</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-white/80">Agriculteurs</div>
              </div>
              <div>
                <div className="text-3xl font-bold">10ans</div>
                <div className="text-sm text-white/80">d'expertise</div>
              </div>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square">
              {/* Cercles flottants avec icônes */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-10 right-10 bg-white/20 backdrop-blur-lg rounded-full p-4"
              >
                <Leaf className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-20 left-10 bg-white/20 backdrop-blur-lg rounded-full p-4"
              >
                <Sprout className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute top-1/2 right-20 bg-white/20 backdrop-blur-lg rounded-full p-4"
              >
                <Sun className="w-8 h-8 text-white" />
              </motion.div>

              {/* Cercle principal */}
              <div className="absolute inset-12 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-md rounded-full overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.2)] border border-white/30">
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent mix-blend-overlay"></div>
                <img 
                  src={hero} 
                  alt="Agriculture durable"
                  className="w-full h-full object-cover scale-[1.02] hover:scale-[1.05] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10 mix-blend-overlay"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero 