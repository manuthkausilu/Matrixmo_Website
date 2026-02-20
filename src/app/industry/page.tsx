import React from 'react'

export default function Industry() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 px-4 mt-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-black">
            Industries
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transforming businesses across diverse industries with tailored technology solutions that drive growth and innovation.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-black mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, delivering specialized solutions that address unique sector challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🛒",
                title: "Retail & E-commerce",
                description: "Transform your retail business with modern POS systems, e-commerce platforms, and inventory management solutions.",
                solutions: ["POS Systems", "E-commerce Platforms", "Inventory Management", "Customer Analytics"],
                bgColor: "from-blue-500 to-blue-700",
                accentColor: "bg-blue-500"
              },
              {
                icon: "🏥",
                title: "Healthcare",
                description: "HIPAA-compliant healthcare solutions including patient management, telemedicine, and medical record systems.",
                solutions: ["Patient Management", "Telemedicine", "Electronic Health Records", "Appointment Scheduling"],
                bgColor: "from-green-500 to-green-700",
                accentColor: "bg-green-500"
              },
              {
                icon: "🎓",
                title: "Education",
                description: "Educational technology solutions for schools, universities, and online learning platforms.",
                solutions: ["Learning Management Systems", "Student Portals", "Online Assessment", "Virtual Classrooms"],
                bgColor: "from-purple-500 to-purple-700",
                accentColor: "bg-purple-500"
              },
              {
                icon: "🏦",
                title: "Finance & Banking",
                description: "Secure financial technology solutions including payment processing, digital banking, and investment platforms.",
                solutions: ["Payment Processing", "Digital Banking", "Investment Platforms", "Risk Management"],
                bgColor: "from-yellow-500 to-yellow-700",
                accentColor: "bg-yellow-500"
              },
              {
                icon: "🏭",
                title: "Manufacturing",
                description: "Industry 4.0 solutions for smart manufacturing, supply chain optimization, and production management.",
                solutions: ["Production Management", "Supply Chain", "Quality Control", "IoT Integration"],
                bgColor: "from-orange-500 to-orange-700",
                accentColor: "bg-orange-500"
              },
              {
                icon: "🏠",
                title: "Real Estate",
                description: "Digital solutions for property management, real estate platforms, and virtual property tours.",
                solutions: ["Property Management", "Virtual Tours", "CRM Systems", "Booking Platforms"],
                bgColor: "from-indigo-500 to-indigo-700",
                accentColor: "bg-indigo-500"
              },
              {
                icon: "🍕",
                title: "Food & Beverage",
                description: "Restaurant management systems, food delivery platforms, and kitchen automation solutions.",
                solutions: ["Restaurant POS", "Delivery Platforms", "Kitchen Management", "Order Tracking"],
                bgColor: "from-red-500 to-red-700",
                accentColor: "bg-red-500"
              },
              {
                icon: "🚗",
                title: "Transportation",
                description: "Smart mobility solutions including fleet management, logistics optimization, and booking systems.",
                solutions: ["Fleet Management", "Route Optimization", "Booking Systems", "GPS Tracking"],
                bgColor: "from-teal-500 to-teal-700",
                accentColor: "bg-teal-500"
              },
              {
                icon: "💼",
                title: "Professional Services",
                description: "Business solutions for consultancies, law firms, and service-based organizations.",
                solutions: ["Client Management", "Project Tracking", "Billing Systems", "Document Management"],
                bgColor: "from-gray-600 to-gray-800",
                accentColor: "bg-gray-600"
              }
            ].map((industry, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#ED1C24]">
                <div className={`h-48 bg-gradient-to-br ${industry.bgColor} flex items-center justify-center`}>
                  <div className="text-6xl text-white group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 ${industry.accentColor} text-white text-sm font-medium rounded-full`}>
                      Industry
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{industry.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{industry.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Key Solutions:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <span key={solutionIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {solution}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories by Industry */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-black mb-6">Industry Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from businesses across different industries who trusted us with their digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                industry: "Retail",
                company: "FreshMart Chain",
                challenge: "Outdated POS system causing inventory issues",
                solution: "Modern cloud-based POS with real-time inventory",
                result: "40% reduction in stock-outs, 25% increase in sales",
                icon: "🛒",
                color: "bg-blue-500"
              },
              {
                industry: "Healthcare",
                company: "MediCare Clinic",
                challenge: "Paper-based patient records and scheduling",
                solution: "Digital patient management and scheduling system",
                result: "60% faster patient check-ins, improved data security",
                icon: "🏥",
                color: "bg-green-500"
              },
              {
                industry: "Education",
                company: "TechU University",
                challenge: "Need for remote learning capabilities",
                solution: "Comprehensive online learning platform",
                result: "300% increase in online course enrollment",
                icon: "🎓",
                color: "bg-purple-500"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${story.color} rounded-lg flex items-center justify-center text-2xl text-white mr-4`}>
                    {story.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">{story.company}</h3>
                    <span className="text-sm text-gray-500">{story.industry}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Solution:</h4>
                    <p className="text-gray-600 text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Result:</h4>
                    <p className="text-[#ED1C24] font-semibold text-sm">{story.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black text-black mb-8">Our Industry Expertise</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                With over a decade of experience, we understand the unique challenges and requirements of different industries.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Compliance & Security",
                    description: "We ensure all solutions meet industry-specific compliance requirements and security standards."
                  },
                  {
                    title: "Scalable Architecture",
                    description: "Our solutions are built to grow with your business, from startup to enterprise scale."
                  },
                  {
                    title: "Integration Capabilities",
                    description: "Seamless integration with existing systems and third-party services in your industry."
                  },
                  {
                    title: "Ongoing Support",
                    description: "Dedicated support teams with industry knowledge to assist you post-launch."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#ED1C24] rounded-full flex items-center justify-center text-white font-bold text-sm">{index + 1}</div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-lg border">
              <div className="text-center">
                <div className="text-6xl mb-6">📊</div>
                <h3 className="text-3xl font-bold text-black mb-4">Industry Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-700">Industries Served</span>
                    <span className="text-2xl font-bold text-[#ED1C24]">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-700">Projects Delivered</span>
                    <span className="text-2xl font-bold text-[#ED1C24]">200+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-700">Client Satisfaction</span>
                    <span className="text-2xl font-bold text-[#ED1C24]">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Let's discuss how our industry-specific solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-[#ED1C24] text-white font-bold text-lg rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
              Get Industry Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
