import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"

const Homepage = () => {
  return (
    <div className="min-h-screen">
         <Navbar/>
      <Hero />
      {/* Hero Section */}
     
      <section className="py-20  px-4 bg-gradient-to-b from-green-50 to-white">
      
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800">Eco-responsable</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Solutions Naturelles pour une Agriculture Durable</h1>
            <p className="text-xl text-gray-600 mb-8">Des engrais 100% naturels pour une terre plus saine et productive</p>
            <Button className="bg-[#2E7D32] hover:bg-[#1B5E20]">Découvrir nos produits</Button>
          </div>
        </div>
      </section>

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