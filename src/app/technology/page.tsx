import React from 'react'

export default function Technology() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 px-4 mt-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-black">
            Technology
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Powered by modern tech stack to deliver robust POS systems, e-commerce platforms, and custom software solutions.
          </p>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-black mb-6">Core Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the most advanced technologies to deliver exceptional solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🤖",
                title: "Artificial Intelligence",
                description: "Machine learning, deep learning, and AI-powered solutions that automate processes and provide intelligent insights.",
                features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
              },
              {
                icon: "☁️",
                title: "Cloud Computing",
                description: "Scalable cloud infrastructure and services that ensure reliability, security, and performance.",
                features: ["AWS/Azure/GCP", "Microservices", "Containerization", "Serverless Architecture"]
              },
              {
                icon: "🔗",
                title: "Blockchain",
                description: "Decentralized solutions and smart contracts that provide transparency and security.",
                features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Cryptocurrency Integration"]
              },
              {
                icon: "📱",
                title: "Mobile Development",
                description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
                features: ["iOS/Android", "React Native", "Flutter", "Progressive Web Apps"]
              },
              {
                icon: "🌐",
                title: "Web Development",
                description: "Modern web applications built with the latest frameworks and technologies.",
                features: ["React/Vue/Angular", "Node.js", "TypeScript", "Responsive Design"]
              },
              {
                icon: "🔒",
                title: "Cybersecurity",
                description: "Comprehensive security solutions to protect your data and systems from threats.",
                features: ["Penetration Testing", "Security Audits", "Encryption", "Compliance"]
              }
            ].map((tech, index) => (
              <div key={index} className="group bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-[#ED1C24] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{tech.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-[#ED1C24] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black text-black mb-8">Innovation Lab</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Our dedicated innovation lab is where we experiment with emerging technologies and develop breakthrough solutions that shape the future of digital transformation.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#ED1C24] rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Research & Development</h3>
                    <p className="text-gray-600">Continuous exploration of new technologies and methodologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#ED1C24] rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Prototyping</h3>
                    <p className="text-gray-600">Rapid development of proof-of-concepts and prototypes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#ED1C24] rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Testing & Validation</h3>
                    <p className="text-gray-600">Rigorous testing to ensure reliability and performance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-12 rounded-3xl">
              <div className="text-center">
                <div className="text-6xl mb-6">🔬</div>
                <h3 className="text-3xl font-bold text-black mb-4">Innovation Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-700">R&D Investment</span>
                    <span className="text-2xl font-bold text-[#ED1C24]">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-700">Patents Filed</span>
                    <span className="text-2xl font-bold text-[#ED1C24]">12+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-700">Innovation Awards</span>
                    <span className="text-2xl font-bold text-[#ED1C24]">8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-black mb-6">Areas of Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized knowledge and experience across multiple technology domains.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Enterprise Solutions",
                description: "Comprehensive technology solutions for large-scale enterprises",
                technologies: ["ERP Systems", "CRM Platforms", "Business Intelligence", "Data Analytics"]
              },
              {
                title: "Startup Acceleration",
                description: "Rapid development and scaling solutions for growing startups",
                technologies: ["MVP Development", "Scalable Architecture", "Growth Hacking", "Market Validation"]
              },
              {
                title: "Digital Transformation",
                description: "Modernizing legacy systems and processes for the digital age",
                technologies: ["Legacy Migration", "Process Automation", "Digital Workflows", "Change Management"]
              },
              {
                title: "Emerging Technologies",
                description: "Cutting-edge solutions using the latest technological innovations",
                technologies: ["IoT Solutions", "AR/VR Applications", "Quantum Computing", "Edge Computing"]
              }
            ].map((area, index) => (
              <div key={index} className="group bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-[#ED1C24] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-black mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-red-100 text-[#ED1C24] text-sm font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8">Ready to Transform Your Technology?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let's discuss how our cutting-edge solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-[#ED1C24] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
              <span className="relative z-10">Schedule Consultation</span>
            </button>
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
              <span className="relative z-10">View Our Work</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
