import React from 'react'

export default function Portfolio() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 px-4 mt-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-black">
            Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our featured projects and successful implementations across various industries and technologies.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-black mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise in delivering innovative solutions that drive business success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Project 1 - E-commerce Platform */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-[#ED1C24] to-red-700 flex items-center justify-center">
                <div className="text-6xl text-white group-hover:scale-110 transition-transform duration-300">🛒</div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#ED1C24] text-white text-sm font-medium rounded-full">E-commerce</span>
                  <span className="text-gray-500 text-sm">2024</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">ShopFlow - Multi-vendor E-commerce</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A comprehensive multi-vendor e-commerce platform with advanced inventory management, 
                  payment processing, and real-time analytics dashboard for business owners.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React.js", "Node.js", "MongoDB", "Stripe API"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 text-center border-t pt-6">
                  <div>
                    <div className="text-2xl font-bold text-[#ED1C24]">15K+</div>
                    <div className="text-sm text-gray-500">Users</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#ED1C24]">$2M+</div>
                    <div className="text-sm text-gray-500">Revenue</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#ED1C24]">98%</div>
                    <div className="text-sm text-gray-500">Uptime</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 - POS System */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <div className="text-6xl text-white group-hover:scale-110 transition-transform duration-300">💳</div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">POS System</span>
                  <span className="text-gray-500 text-sm">2024</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">RetailPro - Smart POS Solution</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Complete point-of-sale system with inventory tracking, customer management, 
                  sales analytics, and multi-location support for retail businesses.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React Native", "Spring Boot", "MySQL", "Firebase"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 text-center border-t pt-6">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">500+</div>
                    <div className="text-sm text-gray-500">Stores</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">50K+</div>
                    <div className="text-sm text-gray-500">Transactions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">99.9%</div>
                    <div className="text-sm text-gray-500">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            { [
              {
                title: "HealthCare Manager",
                category: "Healthcare",
                description: "Patient management system with appointment scheduling and medical records.",
                tech: ["Vue.js", "Laravel", "PostgreSQL"],
                color: "from-green-500 to-green-700",
                bgColor: "bg-green-500",
                icon: "🏥"
              },
              {
                title: "EduLearn Platform",
                category: "Education",
                description: "Online learning management system with video streaming and progress tracking.",
                tech: ["React.js", "Node.js", "MongoDB"],
                color: "from-blue-500 to-blue-700",
                bgColor: "bg-blue-500",
                icon: "📚"
              },
              {
                title: "FinanceTracker Pro",
                category: "Finance",
                description: "Personal finance management app with expense tracking and budget planning.",
                tech: ["React Native", "Express.js", "Firebase"],
                color: "from-yellow-500 to-yellow-700",
                bgColor: "bg-yellow-500",
                icon: "💰"
              },
              {
                title: "LogiFlow System",
                category: "Logistics",
                description: "Supply chain management platform with real-time tracking and analytics.",
                tech: ["Angular", "Spring Boot", "MySQL"],
                color: "from-indigo-500 to-indigo-700",
                bgColor: "bg-indigo-500",
                icon: "🚚"
              },
              {
                title: "EventHub Manager",
                category: "Events",
                description: "Event management platform with ticketing, scheduling, and attendee management.",
                tech: ["React.js", "Node.js", "PostgreSQL"],
                color: "from-pink-500 to-pink-700",
                bgColor: "bg-pink-500",
                icon: "🎉"
              },
              {
                title: "PropertyConnect",
                category: "Real Estate",
                description: "Real estate platform with property listings, virtual tours, and CRM integration.",
                tech: ["Next.js", "Supabase", "Stripe"],
                color: "from-orange-500 to-orange-700",
                bgColor: "bg-orange-500",
                icon: "🏠"
              }
            ].map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <div className="text-5xl text-white group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 ${project.bgColor} text-white text-sm font-medium rounded-full`}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-black mb-6">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients who trusted us with their digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            { [
              {
                company: "TechFlow Solutions",
                industry: "Technology",
                challenge: "Legacy system modernization",
                solution: "Complete digital transformation with cloud migration",
                result: "70% performance improvement, 50% cost reduction",
                testimonial: "Matrixmo transformed our entire infrastructure. The results exceeded our expectations.",
                person: "Sarah Chen, CTO",
                metric: "70%",
                metricLabel: "Performance Boost"
              },
              {
                company: "GreenMarket Co.",
                industry: "E-commerce",
                challenge: "Scaling online presence",
                solution: "Custom e-commerce platform with mobile app",
                result: "300% increase in online sales, 2M+ new users",
                testimonial: "The platform they built helped us scale from local to national. Amazing team!",
                person: "Mike Rodriguez, CEO",
                metric: "300%",
                metricLabel: "Sales Increase"
              },
              {
                company: "MedCare Systems",
                industry: "Healthcare",
                challenge: "Patient data management",
                solution: "HIPAA-compliant patient management system",
                result: "90% reduction in paperwork, improved patient satisfaction",
                testimonial: "Security and user experience were perfectly balanced. Highly recommended!",
                person: "Dr. Emily Watson",
                metric: "90%",
                metricLabel: "Paperwork Reduction"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-black mb-2">{story.company}</h3>
                  <span className="px-3 py-1 bg-[#ED1C24] text-white text-sm rounded-full">{story.industry}</span>
                </div>
                
                <div className="space-y-4 mb-6">
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
                    <p className="text-gray-600 text-sm">{story.result}</p>
                  </div>
                </div>

                <div className="text-center mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-[#ED1C24] mb-1">{story.metric}</div>
                  <div className="text-sm text-gray-600">{story.metricLabel}</div>
                </div>

                <blockquote className="italic text-gray-700 mb-4">
                  "{story.testimonial}"
                </blockquote>
                <cite className="text-sm text-gray-500 font-medium">— {story.person}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-black mb-6">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our projects leverage cutting-edge technologies to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            { [
              { name: "React", icon: "⚛️" },
              { name: "Node.js", icon: "🟢" },
              { name: "MongoDB", icon: "🍃" },
              { name: "Firebase", icon: "🔥" },
              { name: "Spring Boot", icon: "☕" },
              { name: "MySQL", icon: "🐬" },
              { name: "React Native", icon: "📱" },
              { name: "Supabase", icon: "⚡" }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center text-2xl group-hover:bg-[#ED1C24] group-hover:text-white transition-all duration-300">
                  {tech.icon}
                </div>
                <p className="text-sm font-medium text-gray-700">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Let's discuss your vision and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-[#ED1C24] text-white font-bold text-lg rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300">
              View More Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
