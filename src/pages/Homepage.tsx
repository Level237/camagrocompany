import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import Loader from "@/components/ui/Loader"

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
      {/* Hero Section */}


      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Engrais Naturels</CardTitle>
                <CardDescription>Solutions organiques pour vos cultures</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Découvrez notre gamme d'engrais biologiques certifiés pour améliorer vos rendements.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conseil Agricole</CardTitle>
                <CardDescription>Expertise personnalisée</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Bénéficiez de l'accompagnement de nos experts en agriculture durable.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Formation</CardTitle>
                <CardDescription>Ateliers et séminaires</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Participez à nos sessions de formation sur les pratiques agricoles durables.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage