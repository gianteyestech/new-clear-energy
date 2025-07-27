import Link from "next/link"
import { createPageUrl } from "@/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Brain, BarChart3, Zap, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function ControlSystems() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced AI technology that continuously learns and optimizes energy management decisions.",
    },
    {
      icon: Zap,
      title: "Real-Time Optimization",
      description: "Dynamic energy flow adjustment based on real-time production and consumption data.",
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Data-driven insights that anticipate energy needs and optimize system performance.",
    },
    {
      icon: Cpu,
      title: "Seamless Integration",
      description: "Compatible with PV, PVT, and battery systems for comprehensive energy management.",
    },
  ]

  const benefits = [
    "Prioritizes self-generated power usage",
    "Minimizes reliance on the grid",
    "Significantly reduces energy expenses",
    "Ensures uninterrupted power supply",
    "Provides comprehensive monitoring",
    "Enables data-driven decision making",
  ]

  const capabilities = [
    {
      title: "Intelligent Decision Making",
      description:
        "AI-driven algorithms that make split-second decisions about energy allocation and usage optimization.",
    },
    {
      title: "Grid Independence",
      description:
        "Maximizes the use of renewable energy while intelligently switching to grid power only when necessary.",
    },
    {
      title: "Predictive Management",
      description: "Historical data analysis and environmental factors consideration for proactive energy planning.",
    },
    {
      title: "User-Friendly Interface",
      description: "Comprehensive monitoring capabilities with intuitive dashboards for complete visibility.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Advantage Control Systems</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              AI-powered energy management systems that intelligently control generation, consumption, and storage for
              optimal efficiency and cost savings.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold shadow-xl"
            >
              <Link href={createPageUrl("Contact")}>
                Discover AI Energy Management
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Next-Generation Energy Control</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our Advantage Control Systems leverage cutting-edge AI technology to deliver unprecedented efficiency and
              cost savings for your energy infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Intelligent Energy Management</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our Advantage Control Systems, powered by advanced AI technology, intelligently manage energy
                generation, consumption, and storage to deliver optimal efficiency and cost savings. Designed to
                seamlessly integrate with photovoltaic (PV), photovoltaic-thermal (PVT), and battery systems, our
                control systems prioritize the use of self-generated power.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The AI-driven decision-making process continuously monitors energy production and consumption in real
                time, dynamically adjusting the power flow to match demand while maximizing the use of renewable energy.
                By intelligently switching to the grid only when necessary, the system ensures uninterrupted power while
                keeping operational costs low.
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
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600"
              >
                <Link href={createPageUrl("Contact")}>
                  Optimize Your Energy System
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="AI control system dashboard"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Advanced System Capabilities</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our control systems provide comprehensive energy management with intelligent automation and insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{capability.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Benefits */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Technical Excellence</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our systems are designed to be scalable, adaptable, and future-ready for evolving energy needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Scalable Architecture",
                description: "Systems designed to grow with your business and adapt to changing energy requirements.",
                icon: "🔧",
              },
              {
                title: "Proactive Optimization",
                description:
                  "Predictive analytics that enhance operational efficiency and support long-term sustainability.",
                icon: "📊",
              },
              {
                title: "Complete Visibility",
                description:
                  "Comprehensive monitoring and reporting for informed decision-making and system optimization.",
                icon: "👁️",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Transform Your Energy Management</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Experience the future of energy control with our AI-powered systems that deliver unprecedented efficiency,
            cost savings, and environmental benefits.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold shadow-xl"
          >
            <Link href={createPageUrl("Contact")}>
              Implement Smart Control
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
