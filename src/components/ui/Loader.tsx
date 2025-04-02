import { motion } from "framer-motion"
import { Leaf, Sprout } from "lucide-react"

const Loader = () => {
  // Animation pour la rotation du cercle
  const circleVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }

  // Animation pour les feuilles qui poussent
  const sproutVariants = {
    initial: {
      y: 10,
      opacity: 0,
      scale: 0.8
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  // Animation pour les feuilles qui tombent
  const leafVariants = {
    initial: { opacity: 0, x: -20, y: -20 },
    animate: {
      opacity: [0, 1, 0],
      x: 20,
      y: 20,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#1B5E20] to-[#2E7D32] flex items-center justify-center z-50">
      <div className="relative">
        {/* Cercle rotatif principal */}
        <motion.div
          variants={circleVariants}
          animate="animate"
          className="w-24 h-24 rounded-full border-4 border-white/20 border-t-white relative"
        />

        {/* Éléments décoratifs */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ 
              scale: 1.2,
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          >
            <Sprout className="w-8 h-8 text-white" />
          </motion.div>
        </div>

        {/* Feuilles qui poussent */}
        <motion.div
          variants={sproutVariants}
          initial="initial"
          animate="animate"
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Sprout className="w-6 h-6 text-green-200" />
        </motion.div>

        {/* Feuilles qui tombent */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              variants={leafVariants}
              initial="initial"
              animate="animate"
              style={{
                position: "absolute",
                top: `${30 * i}%`,
                left: `${30 * i}%`,
              }}
            >
              <Leaf className="w-4 h-4 text-green-200" />
            </motion.div>
          ))}
        </div>

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: {
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5
            }
          }}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-white font-medium"
        >
          Chargement...
        </motion.div>
      </div>

      {/* Cercles décoratifs en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
      </div>
    </div>
  )
}

export default Loader 