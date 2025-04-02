import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, Leaf } from "lucide-react"
import logo from "@/assets/logo.png"
import logoWhite from "@/assets/logo-white.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Suivre le scroll pour le changement d'apparence
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Produits", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "À propos", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <motion.nav
      initial={{ backgroundColor: "transparent" }}
      animate={{
        position: isScrolled ? "fixed" : "absolute",
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        boxShadow: isScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "none",
      }}
      transition={{ duration: 0.3 }}
      className="top-0 left-0 right-0 w-full z-50"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <Link 
              to="/" 
              className={`flex items-center space-x-2 transition-colors duration-300 ${
                isScrolled ? 'text-[#2E7D32]' : 'text-white'
              }`}
            >
              {isScrolled ? (
                <img src={logo} alt="logo" className="w-36 h-36" />
              ) : (
                <img src={logoWhite} alt="logo" className="w-36 h-36" />
              )}
              
            </Link>
          </motion.div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-[#2E7D32] hover:bg-green-50' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button 
                className={`rounded-full px-6 ${
                  isScrolled 
                    ? 'bg-[#2E7D32] hover:bg-[#1B5E20] text-white' 
                    : 'bg-white text-[#2E7D32] hover:bg-green-50'
                }`}
              >
                Contactez-nous
              </Button>
            </motion.div>
          </div>

          {/* Menu Mobile */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={`rounded-full ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </motion.div>
        </div>

        {/* Menu Mobile Dropdown */}
        <motion.div
          initial={false}
          animate={isOpen ? { 
            height: "auto", 
            opacity: 1,
            transition: {
              height: { duration: 0.3 },
              opacity: { duration: 0.2 }
            }
          } : { 
            height: 0, 
            opacity: 0,
            transition: {
              height: { duration: 0.3 },
              opacity: { duration: 0.2 }
            }
          }}
          className="md:hidden overflow-hidden"
        >
          <motion.div 
            className={`py-4 px-2 rounded-2xl mb-4 backdrop-blur-lg ${
              isScrolled 
                ? 'bg-white shadow-lg' 
                : 'bg-white/10'
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 rounded-xl transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#2E7D32] hover:bg-green-50' 
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <Button 
                className={`w-full rounded-xl ${
                  isScrolled 
                    ? 'bg-[#2E7D32] hover:bg-[#1B5E20] text-white' 
                    : 'bg-white text-[#2E7D32] hover:bg-green-50'
                }`}
              >
                Contactez-nous
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar 