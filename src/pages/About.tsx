import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import NavbarStyle from '@/components/layout/NavbarStyle';
import Footer from '@/components/layout/Footer';
import about from "@/assets/about3.jpg"

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavbarStyle />
      <HeroSection 
        title="À Propos de Nous" 
        subtitle="Plus de 20 ans d'expertise au service de l'agriculture camerounaise"
        backgroundImage={about}
      />

      {/* Histoire et Mission */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Notre Histoire</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Depuis notre création en 2000, CAMAGRO s'est engagé à transformer le secteur agricole camerounais en apportant des solutions innovantes et durables aux agriculteurs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre parcours est marqué par une croissance constante et un engagement inébranlable envers la qualité et l'innovation, faisant de nous un leader reconnu dans le secteur agricole.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src={about} 
                  alt="Notre Histoire" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-100 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Nos Valeurs
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "Innovation",
                description: "Nous recherchons constamment de nouvelles solutions pour améliorer les pratiques agricoles."
              },
              {
                icon: "🤝",
                title: "Engagement",
                description: "Nous nous engageons pleinement dans la réussite de nos clients et partenaires."
              },
              {
                icon: "♻️",
                title: "Durabilité",
                description: "Nous promouvons une agriculture respectueuse de l'environnement."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Notre Équipe
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Jean Kouassi",
                role: "Directeur Général",
                image: "/images/team-1.jpg"
              },
              {
                name: "Marie Ndongo",
                role: "Responsable Technique",
                image: "/images/team-2.jpg"
              },
              {
                name: "Paul Tamba",
                role: "Expert Agronome",
                image: "/images/team-3.jpg"
              },
              {
                name: "Sarah Eyenga",
                role: "Responsable Commercial",
                image: "/images/team-4.jpg"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-full transform rotate-6"></div>
                  <div className="absolute inset-1 bg-white rounded-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-gradient-to-br from-green-900 to-green-800 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "20+", label: "Années d'expérience" },
              { number: "1000+", label: "Clients satisfaits" },
              { number: "50+", label: "Experts" },
              { number: "4", label: "Agences" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 