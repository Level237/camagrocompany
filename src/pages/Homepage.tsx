import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import Loader from "@/components/ui/Loader"
import about from "@/assets/about.png"
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
              <h2 className="text-4xl font-bold mb-6">CAMAGRO</h2>
              <p className="text-lg text-gray-700 mb-6">
                Leader camerounais dans l'importation et la distribution d'engrais et d'intrants agricoles, 
                nous accompagnons le développement de l'agriculture africaine depuis plus de 15 ans.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                Découvrir notre histoire
              </button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={about} 
                alt="Agriculture moderne" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-16 px-4 bg-green-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Chiffres Clés</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-lg">Années d'expérience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50k</div>
              <div className="text-lg">Hectares accompagnés</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">25k</div>
              <div className="text-lg">Tonnes d'engrais/an</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
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

      {/* Témoignages */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Ils nous font confiance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="italic text-gray-600 mb-4">
                  "Grâce aux produits et conseils de Camagro, nous avons augmenté nos rendements de 40% en deux ans."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Jean Kouam</h4>
                    <p className="text-sm text-gray-500">Coopérative agricole de l'Ouest</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="italic text-gray-600 mb-4">
                  "Un partenaire fiable qui comprend les besoins spécifiques de l'agriculture camerounaise."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Marie Ndongo</h4>
                    <p className="text-sm text-gray-500">Agricultrice - Région du Centre</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage