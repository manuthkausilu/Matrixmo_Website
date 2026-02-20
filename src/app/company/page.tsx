import React from 'react'

export default function Company() {
  return (
    <div>
     {/* Hero Section */}
      <section className="relative py-24 px-4 mt-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-black">
            About Matrixmo
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Crafting innovative, scalable, and user-focused technology solutions that solve real-world problems and drive sustainable business growth.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-black mb-6">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Matrixmo provides comprehensive software and digital solutions designed to help businesses grow and succeed in the digital era.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "💻",
                title: "Custom Software Development",
                description: "Tailored software solutions built to meet your specific business requirements and objectives."
              },
              {
                icon: "📱",
                title: "Web & Mobile Applications",
                description: "Modern, responsive web and mobile applications that deliver exceptional user experiences."
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                description: "User-centered design solutions that create intuitive and engaging digital experiences."
              },
              {
                icon: "🚀",
                title: "Digital Transformation",
                description: "Strategic digital transformation services to modernize your business processes and operations."
              }
            ].map((service, index) => (
              <div key={index} className="group text-center p-8 rounded-2xl border border-gray-200 hover:border-[#ED1C24] hover:shadow-2xl transition-all duration-300">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gray-50 p-12 rounded-2xl shadow-lg">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🎯</div>
                <h2 className="text-4xl font-bold text-black mb-6">Our Mission</h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                To craft innovative, scalable, and user-focused technology solutions that solve real-world problems, 
                enhance efficiency, and drive sustainable business growth for our clients.
              </p>
            </div>
            
            <div className="bg-gray-100 p-12 rounded-2xl shadow-lg">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">👁️</div>
                <h2 className="text-4xl font-bold text-black mb-6">Our Vision</h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                To be the leading technology partner for businesses worldwide, empowering them with cutting-edge 
                digital solutions that transform ideas into reality and drive success in the digital era.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-black mb-6">Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with businesses, startups, and organizations seeking modern, reliable, and creative digital solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏢",
                title: "Businesses",
                description: "Established companies looking to modernize their digital infrastructure and enhance operational efficiency.",
                features: ["Digital Transformation", "Process Automation", "System Integration", "Legacy Modernization"]
              },
              {
                icon: "🚀",
                title: "Startups",
                description: "Emerging companies needing scalable technology solutions to accelerate growth and market entry.",
                features: ["MVP Development", "Rapid Prototyping", "Scalable Architecture", "Market Validation"]
              },
              {
                icon: "🏛️",
                title: "Organizations",
                description: "Institutions requiring reliable digital solutions to streamline operations and improve user experience.",
                features: ["Custom Solutions", "Security Focus", "Compliance", "User Training"]
              }
            ].map((audience, index) => (
              <div key={index} className="group bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300">
                <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {audience.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 text-center">{audience.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-center">{audience.description}</p>
                <ul className="space-y-2">
                  {audience.features.map((feature, featureIndex) => (
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

      {/* Company Values */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-black mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🔧",
                title: "Technical Excellence",
                description: "Combining deep technical expertise with creative, forward-thinking approaches."
              },
              {
                icon: "👥",
                title: "User-Focused",
                description: "Creating solutions that prioritize user experience and deliver real value."
              },
              {
                icon: "📈",
                title: "Scalable Solutions",
                description: "Building technology that grows with your business and adapts to changing needs."
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "Continuously exploring new technologies and methodologies to solve complex problems."
              }
            ].map((value, index) => (
              <div key={index} className="group text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-black mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries driving Matrixmo's mission to deliver exceptional technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                position: "Chief Executive Officer",
                experience: "15+ years in technology leadership",
                specialty: "Strategic Vision & Business Development",
                initials: "JS"
              },
              {
                name: "Sarah Johnson",
                position: "Chief Technology Officer", 
                experience: "12+ years in software development",
                specialty: "Technical Architecture & Innovation",
                initials: "SJ"
              },
              {
                name: "Michael Brown",
                position: "Chief Design Officer",
                experience: "10+ years in UI/UX design",
                specialty: "User Experience & Creative Direction",
                initials: "MB"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-24 h-24 bg-[#ED1C24] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">{member.initials}</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">{member.name}</h3>
                <p className="text-[#ED1C24] font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 mb-2">{member.experience}</p>
                <p className="text-sm text-gray-500 italic">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join the businesses that trust Matrixmo to deliver innovative, scalable technology solutions 
            that drive growth and success in the digital era.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-[#ED1C24] text-white font-bold text-lg rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
      
    </div>
  )
}
