import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import Loader from "@/components/ui/Loader"
import about from "@/assets/about.png"
import about2 from "@/assets/about2.jpg"
import Footer from "@/components/layout/Footer"
import { Link } from "react-router-dom"

const Homepage = () => {
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
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Présentation de l'entreprise */}
      <section className="py-16 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">CAMEROON AGROBUSINESS COMPANY AGRICULTURE</h2>
              <div className="rounded-xl max-sm:block hidden mb-8 overflow-hidden shadow-2xl">
              <img 
                src={about} 
                alt="Agriculture moderne" 
                className="w-full h-[400px] object-cover"
              />
            </div>
              <p className="text-lg text-gray-700 mb-6">
                Leader camerounais dans l'importation et la distribution d'engrais et d'intrants agricoles, 
                nous accompagnons le développement de l'agriculture africaine depuis plus de 15 ans.
              </p>
              <Link to="/about" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                Découvrir notre histoire
              </Link>
            </div>
            <div className="rounded-xl max-sm:hidden overflow-hidden shadow-2xl">
              <img 
                src={about} 
                alt="Agriculture moderne" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Produits */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-950 opacity-90"></div>
        <div style={{ backgroundImage: `url(${about2})` }} className={`absolute inset-0  opacity-20`}></div>
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 right-0 w-60 h-60 bg-green-600/10 rounded-full blur-3xl"></div>
          
          <h2 className="text-4xl font-bold text-center mb-16 text-white relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-100 to-white">
              Nos Produits Phares
            </span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2 border border-white/10">
              <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent group-hover:scale-105 transition-transform">NPK</div>
              <div className="text-lg text-green-100">Engrais composé</div>
              <p className="mt-3 text-sm text-green-200/70">Idéal pour les cultures vivrières</p>
            </div>

            <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2 border border-white/10">
              <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent group-hover:scale-105 transition-transform">Urée</div>
              <div className="text-lg text-green-100">46% d'azote</div>
              <p className="mt-3 text-sm text-green-200/70">Pour tous types de cultures</p>
            </div>

            <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2 border border-white/10">
              <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent group-hover:scale-105 transition-transform">DAP</div>
              <div className="text-lg text-green-100">Phosphate</div>
              <p className="mt-3 text-sm text-green-200/70">Excellent pour le démarrage</p>
            </div>

            <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2 border border-white/10">
              <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent group-hover:scale-105 transition-transform">KCl</div>
              <div className="text-lg text-green-100">Potasse</div>
              <p className="mt-3 text-sm text-green-200/70">Renforce les cultures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services avec nouvelle transition */}
      <section className="py-16 px-4 bg-gradient-to-t from-gray-50 to-white relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-green-900/20 to-transparent"></div>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>Distribution d'Engrais</CardTitle>
                <CardDescription>Produits de qualité certifiée</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Large gamme d'engrais adaptés aux différentes cultures et sols africains.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>Intrants Agricoles</CardTitle>
                <CardDescription>Solutions complètes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Fourniture d'intrants de qualité pour optimiser vos rendements agricoles.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>Conseil Technique</CardTitle>
                <CardDescription>Expertise locale</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Accompagnement personnalisé par nos experts en agronomie.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Témoignages avec nouvelle transition */}
      <section className="relative py-24 overflow-hidden">
        {/* Éléments de design pour la transition */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-white to-slate-100"></div>
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-green-900/5 to-transparent"></div>
          <div className="absolute inset-0">
            <div className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-green-50 to-blue-50 blur-3xl opacity-50"></div>
            <div className="absolute -bottom-[500px] -left-[500px] w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-purple-50 to-pink-50 blur-3xl opacity-50"></div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] bg-[length:20px_20px]"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent inline-block">
              Ils nous font confiance
            </h2>
            <div className="mt-2 w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="relative bg-white rounded-2xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] transition-all duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur opacity-5 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative">
                  <svg className="w-10 h-10 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="italic text-gray-600 mb-6 leading-relaxed">
                    "Grâce aux produits et conseils de Camagro, nous avons augmenté nos rendements de 40% en deux ans."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mr-4 p-[2px]">
                      <div className="w-full h-full bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Yves Minsili</h4>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative bg-white rounded-2xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] transition-all duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-5 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative">
                  <svg className="w-10 h-10 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="italic text-gray-600 mb-6 leading-relaxed">
                    "Un partenaire fiable qui comprend les besoins spécifiques de l'agriculture camerounaise."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mr-4 p-[2px]">
                      <div className="w-full h-full bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Marie Ndongo</h4>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Homepage