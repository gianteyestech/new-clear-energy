import Link from "next/link"
import { createPageUrl } from "@/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Thermometer, Zap, TrendingUp, Layers, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function HeatPumps() {
  const features = [
    {
      icon: Layers,
      title: "Cascading Technology",
      description: "Multi-stage heat pumps that achieve higher temperature outputs with minimal energy consumption.",
    },
    {
      icon: Zap,
      title: "PV Integration",
      description: "Seamless connection with photovoltaic systems for direct solar-to-thermal energy conversion.",
    },
    {
      icon: TrendingUp,
      title: "Maximum Efficiency",
      description: "Optimal thermal performance through intelligent heat recovery and reuse systems.",
    },
    {
      icon: Thermometer,
      title: "Commercial Grade",
      description: "Designed for demanding commercial and industrial heating applications.",
    },
  ]

  const benefits = [
    "Significant reduction in energy waste",
    "Lower operational costs and expenses",
    "Reduced dependence on traditional power sources",
    "Enhanced sustainability strategy",
    "Consistent and efficient heating",
    "Future-proof energy solutions",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-pink-600">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Commercial Heat Pumps</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Innovative cascading heat pump solutions with PV integration designed to maximize energy efficiency and
              reduce operational costs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold shadow-xl"
            >
              <Link href={createPageUrl("Contact")}>
                Explore Heat Pump Solutions
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Advanced Heat Pump Technology</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our innovative commercial heat pump solutions deliver superior efficiency and performance for demanding
              commercial and industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Intelligent Heating Solutions</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our innovative commercial heat pump solutions and PV-to-heat pump integration are designed to maximise
                energy efficiency and sustainability. Cascading heat pumps utilise heat from multiple stages to achieve
                higher temperature outputs with minimal energy consumption, making them ideal for commercial and
                industrial applications.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                By integrating photovoltaic (PV) systems with heat pumps, we enable direct solar-to-thermal energy
                conversion, allowing businesses to harness clean, renewable power to support heating processes. This
                seamless integration significantly reduces operational costs and dependence on traditional power
                sources.
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
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
              >
                <Link href={createPageUrl("Contact")}>
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Commercial heat pump system"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Optimize Your Heating System</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            From concept to installation, our team is dedicated to delivering reliable, efficient, and future-proof
            solutions that drive down energy expenses.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold shadow-xl"
          >
            <Link href={createPageUrl("Contact")}>
              Design Your System
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
