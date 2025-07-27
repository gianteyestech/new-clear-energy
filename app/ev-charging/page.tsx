import Link from "next/link"
import { createPageUrl } from "@/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Car, Battery, Zap, Building, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function EVCharging() {
  const features = [
    {
      icon: Car,
      title: "Fast Charging Stations",
      description: "High-speed EV charging solutions for quick and convenient electric vehicle charging.",
    },
    {
      icon: Battery,
      title: "Energy Storage Integration",
      description: "Advanced battery systems that optimize energy usage and reduce peak demand charges.",
    },
    {
      icon: Zap,
      title: "Smart Energy Management",
      description: "Intelligent systems that balance energy storage and discharge for maximum efficiency.",
    },
    {
      icon: Building,
      title: "Scalable Solutions",
      description: "Configurable systems designed for hotels, industrial facilities, and commercial parks.",
    },
  ]

  const benefits = [
    "Reduced peak demand charges",
    "Minimized energy costs",
    "Uninterrupted power supply",
    "Scalable configurations",
    "Enhanced operational efficiency",
    "Future-proof infrastructure",
  ]

  const applications = [
    {
      title: "Hotels & Hospitality",
      description: "Convenient charging amenities for guests with integrated energy management systems.",
      icon: "🏨",
    },
    {
      title: "Industrial Facilities",
      description: "Robust charging infrastructure for fleet vehicles and employee transportation.",
      icon: "🏭",
    },
    {
      title: "Residential Complexes",
      description: "Comprehensive charging solutions for multi-unit residential developments.",
      icon: "🏢",
    },
    {
      title: "Commercial Parks",
      description: "Shared charging infrastructure for business parks and commercial centers.",
      icon: "🏪",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-500 via-blue-500 to-purple-600">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">EV Charging Stations</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Comprehensive EV charging solutions and large-scale battery systems designed to meet the diverse energy
              demands of commercial premises.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold shadow-xl"
            >
              <Link href={createPageUrl("Contact")}>
                Plan Your EV Infrastructure
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Complete Charging Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our EV charging stations and energy storage systems provide reliable, efficient, and cost-effective
              solutions for all your electric vehicle infrastructure needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Advanced EV Infrastructure</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our comprehensive EV charging solutions and large-scale battery systems are designed to meet the diverse
                energy demands of commercial premises. Engineered for reliability and efficiency, our EV charging
                stations provide fast and convenient charging options for electric vehicles, accommodating the growing
                need for sustainable transportation infrastructure.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Paired with our advanced energy storage systems, these solutions optimize energy usage by storing excess
                power and discharging it during peak demand periods, significantly reducing peak demand charges and
                minimizing energy costs. Our integrated systems ensure an uninterrupted power supply, even during grid
                fluctuations or outages.
              </p>

              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600"
              >
                <Link href={createPageUrl("Contact")}>
                  Get Infrastructure Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="EV charging station"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Versatile Applications</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our EV charging solutions are designed to meet the unique needs of various commercial and residential
              environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {application.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{application.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{application.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Electrify Your Future</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Transform your property with cutting-edge EV charging infrastructure that supports sustainable
            transportation and reduces operational costs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold shadow-xl"
          >
            <Link href={createPageUrl("Contact")}>
              Start Your EV Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
