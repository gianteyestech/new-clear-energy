import Link from "next/link"
import { createPageUrl } from "@/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sun, Zap, TrendingDown, Leaf, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function PVSolutions() {
  const features = [
    {
      icon: Sun,
      title: "Advanced PV Systems",
      description:
        "High-efficiency photovoltaic panels that convert sunlight directly into electricity with maximum output.",
    },
    {
      icon: Zap,
      title: "PVT Technology",
      description:
        "Combined photovoltaic and thermal systems generating both electricity and heat energy simultaneously.",
    },
    {
      icon: TrendingDown,
      title: "Cost Reduction",
      description: "Significant reduction in energy costs and dependence on traditional power sources.",
    },
    {
      icon: Leaf,
      title: "Sustainable Impact",
      description: "Lower carbon footprint and enhanced environmental sustainability for your business.",
    },
  ]

  const benefits = [
    "Maximum energy efficiency optimization",
    "Seamless integration with existing systems",
    "Customized solutions for unique needs",
    "Long-term cost savings and ROI",
    "Reduced environmental impact",
    "Professional installation and support",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">PV & PVT Solutions</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Advanced photovoltaic and photovoltaic-thermal systems designed to maximize energy efficiency and
              sustainability for your business.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold shadow-xl"
            >
              <Link href={createPageUrl("Contact")}>
                Get Free Assessment
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Cutting-Edge Solar Technology</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our PV and PVT systems represent the next generation of renewable energy solutions, combining innovative
              technology with practical application.
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Revolutionary Energy Generation</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At NewClear Energy, we specialize in advanced photovoltaic (PV) and photovoltaic-thermal (PVT) systems
                designed to maximize energy efficiency and sustainability. Our cutting-edge PV systems convert sunlight
                directly into electricity, providing a reliable and clean power source that reduces dependence on
                non-renewable energy.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our PVT systems combine photovoltaic and thermal technologies to generate both electricity and thermal
                energy, optimizing power generation and heating. These innovative solutions help businesses reduce
                energy costs, lower carbon footprints, and enhance operational efficiency.
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
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Solar panel installation"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Installation Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From assessment to installation, we ensure seamless integration and optimal performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Assessment & Design",
                description:
                  "Comprehensive evaluation of your energy needs and site conditions for optimal system design.",
              },
              {
                step: "02",
                title: "Custom Integration",
                description:
                  "Seamless integration with existing infrastructure and tailored configuration for maximum efficiency.",
              },
              {
                step: "03",
                title: "Ongoing Support",
                description:
                  "Continuous monitoring, maintenance, and support to ensure long-term performance and reliability.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Harness Solar Power?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Partner with NewClear Energy to experience the next generation of renewable energy solutions and take a
            confident step toward a greener future.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold shadow-xl"
          >
            <Link href={createPageUrl("Contact")}>
              Start Your Solar Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
