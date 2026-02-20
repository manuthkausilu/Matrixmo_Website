import React from 'react'

export default function Contact() {
  return (
    <div className="bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
       {/* Hero Section */}
      <section className="relative py-32 px-4 mt-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-9xl font-bold mb-8 text-black tracking-tight">
            Let&apos;s Talk
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with innovative technology? Let&apos;s discuss your project and bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div className="bg-white p-12 rounded-3xl border-2 border-gray-200 shadow-lg">
              <h2 className="text-5xl font-bold text-black mb-10">Get In Touch</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-black mb-3 uppercase tracking-wide">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all duration-300 text-lg"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-3 uppercase tracking-wide">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all duration-300 text-lg"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-black mb-3 uppercase tracking-wide">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all duration-300 text-lg"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-black mb-3 uppercase tracking-wide">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all duration-300 text-lg"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-black mb-3 uppercase tracking-wide">Project Type</label>
                  <select className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all duration-300 text-lg">
                    <option value="">Select a project type</option>
                    <option value="pos">POS System</option>
                    <option value="ecommerce">E-commerce Platform</option>
                    <option value="website">Website Development</option>
                    <option value="mobile">Mobile Application</option>
                    <option value="custom">Custom Software</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-black mb-3 uppercase tracking-wide">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all duration-300 resize-none text-lg"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#ED1C24] hover:bg-red-700 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-xl text-lg"
                >
                  Send Message &rarr;
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-10">
              <div>
                <h2 className="text-5xl font-bold text-black mb-8">Contact Information</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Have a question or want to discuss your project? We&apos;d love to hear from you. 
                  Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Address",
                    content: "123 Tech Street, Digital City, DC 12345",
                    subtext: "Visit our office"
                  },
                  {
                    title: "Email",
                    content: "hello@matrixmo.com",
                    subtext: "We'll respond within 24 hours"
                  },
                  {
                    title: "Phone",
                    content: "+1 (555) 123-4567",
                    subtext: "Mon-Fri 9AM-6PM EST"
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-6 p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 border-2 border-gray-200">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">{contact.title}</h3>
                      <p className="text-lg text-black font-semibold mb-1">{contact.content}</p>
                      <p className="text-base text-gray-500">{contact.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-black p-10 rounded-2xl text-white">
                <h3 className="text-3xl font-bold mb-6">Why Choose Matrixmo?</h3>
                <ul className="space-y-4">
                  {[
                    "Expert team with 10+ years experience",
                    "Custom solutions tailored to your needs",
                    "24/7 support and maintenance",
                    "Competitive pricing and flexible packages",
                    "Proven track record with 50+ successful projects"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-lg">
                      <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-bold text-black mb-8 tracking-tight">FAQ</h2>
            <p className="text-2xl text-gray-600">
              Common questions about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "We specialize in MERN stack, Spring Boot, React Native, Firebase, Supabase, and modern databases like MongoDB and MySQL. We choose the best technology stack for each project."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, updates, security patches, and feature enhancements based on your needs."
              },
              {
                question: "How do you handle project communication?",
                answer: "We maintain transparent communication through regular updates, weekly calls, and project management tools. You'll have direct access to our team throughout the development process."
              },
              {
                question: "What is your development process?",
                answer: "Our process includes: 1) Requirements analysis, 2) Design & planning, 3) Development & testing, 4) Deployment & launch, 5) Ongoing support. We follow agile methodologies for flexibility."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-10 rounded-2xl shadow-sm border-2 border-gray-200 hover:border-black transition-all duration-300">
                <h3 className="text-2xl font-bold text-black mb-4">{faq.question}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  )
}
