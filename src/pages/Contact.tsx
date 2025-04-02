import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import NavbarStyle from '@/components/layout/NavbarStyle';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import contact from "@/assets/contact.jpg";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import Loader from '@/components/ui/Loader';
const Contact = () => {
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
      <NavbarStyle />
      <HeroSection 
        title="Contactez-nous" 
        subtitle="Notre équipe est à votre écoute pour répondre à vos besoins"
        backgroundImage={contact}
      />

      {/* Contact Info Cards */}
      <section className="py-16 relative">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-20">
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Téléphone",
                info: "+237 123 456 789",
                color: "bg-blue-500"
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email",
                info: "contact@camagro.com",
                color: "bg-green-500"
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Adresse",
                info: "Douala, Cameroun",
                color: "bg-purple-500"
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Horaires",
                info: "Lun-Ven: 8h-17h",
                color: "bg-orange-500"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 w-2 h-full ${item.color} group-hover:w-full transition-all duration-300 opacity-10`} />
                <div className={`w-12 h-12 ${item.color} bg-opacity-10 rounded-lg flex items-center justify-center mb-4 text-gray-700 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.info}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nom</label>
                    <Input type="text" placeholder="Votre nom" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Prénom</label>
                    <Input type="text" placeholder="Votre prénom" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <Input type="email" placeholder="votre@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Sujet</label>
                  <Input type="text" placeholder="Sujet de votre message" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea 
                    placeholder="Votre message..." 
                    className="min-h-[150px]"
                  />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Envoyer le message
                </Button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254744.54821959847!2d9.765764228697799!3d4.050864852537935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128f4c118b5%3A0x97c8e530a95fb70c!2sDouala%2C%20Cameroun!5e0!3m2!1sfr!2sfr!4v1647081577713!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              {/* Additional Info */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Informations supplémentaires</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Notre équipe d'experts est disponible pour vous accompagner dans tous vos projets agricoles.
                  </p>
                  <p>
                    Service client disponible du lundi au vendredi de 8h à 17h.
                  </p>
                  <div className="pt-4 border-t">
                    <p className="font-semibold text-gray-800">Urgence technique :</p>
                    <p className="text-green-600">+237 123 456 789</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Questions fréquentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Comment puis-je obtenir un devis ?",
                answer: "Vous pouvez nous contacter par téléphone ou remplir le formulaire de contact ci-dessus."
              },
              {
                question: "Quels sont les délais de réponse ?",
                answer: "Nous nous engageons à répondre à toutes les demandes sous 24h ouvrées."
              },
              {
                question: "Proposez-vous des visites sur site ?",
                answer: "Oui, nos experts peuvent se déplacer sur votre exploitation sur rendez-vous."
              },
              {
                question: "Quelles sont les zones couvertes ?",
                answer: "Nous intervenons dans toutes les régions du Cameroun."
              }
            ].map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact; 