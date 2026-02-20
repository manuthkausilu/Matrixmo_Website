'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === 'feedback') {
            setIsFeedbackVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const feedbackSection = document.getElementById('feedback');
    if (feedbackSection) observer.observe(feedbackSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .opacity-0 {
          opacity: 0;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Video Background Section */}
      <section className="relative h-screen w-full overflow-hidden border-10 border-white">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/bgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div> */}

        {/* Content Overlay */}
        <div className="relative z-10 flex items-end justify-center h-full pb-20">
          <div className="text-center text-white px-6 max-w-full">
            <h1 className="text-4xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tight whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
              Innovating the Future,
            </h1>
            <h1 className="text-4xl md:text-8xl lg:text-9xl font-bold tracking-tight whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
              One Solution at a Time
            </h1>
          </div>
        </div>
      </section>


       {/* About Us Section */}
      <section className="py-40 bg-white">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-8xl font-bold text-black mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Powered by Innovation & Built on Trust
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Matrixmo is a forward thinking software and digital solutions company dedicated to helping businesses thrive in the digital era.
            </p>
          </div>

          {/* Alternating Content Boxes */}
          <div className="space-y-24">
            {/* Row 1 - Video Right, Text Left */}
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 items-center">
              {/* Text Content Left - No Box */}
              <div className="p-12 lg:col-span-3">
                <h3 className="text-7xl font-bold text-black mb-8 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Building the Future with Matrixmo
                </h3>
                <p className="text-2xl text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Matrixmo is a forward thinking software and digital solutions company dedicated to helping businesses thrive in the digital era. We specialize in crafting innovative, scalable, and user focused technology solutions that solve real world problems and drive growth.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  From custom software development to web & mobile applications, UI/UX design, and digital transformation services, our team combines technical expertise with creative vision to deliver results that exceed expectations.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  At Matrixmo, we don't just build software, we create experiences. Our solutions are tailored to meet the unique needs of each client, ensuring efficiency, security, and long term success.
                </p>
              </div>

              {/* Video Box Right with Text Overlay */}
              <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl group lg:col-span-3 aspect-[4/3]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                >
                  <source src="/innovation.mp4" type="video/mp4" />
                </video>
                
                {/* Text Overlay on Video */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-12">
                  <div className="text-white">
                    <h4 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Innovation in Action
                    </h4>
                    <p className="text-xl opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Transforming ideas into reality with modern technology
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 - Video Left, Video Right */}
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-12 items-center">
              {/* Video Box Left with Text Overlay - 2 columns */}
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl group lg:col-span-2 aspect-[9/16]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                >
                  <source src="/clientfocus.mp4" type="video/mp4" />
                </video>
                
                {/* Text Overlay on Video */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-12">
                  <div className="text-white">
                    <h4 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Focused on Clients
                    </h4>
                    <p className="text-xl opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Built on Trust. Driven by Dedication. Focused on You.
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Box Right with Text Overlay - 5 columns */}
              <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl group lg:col-span-5 aspect-[3/2]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/qa.mp4" type="video/mp4" />
                </video>
                
                {/* Text Overlay on Video */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-12">
                  <div className="text-white">
                    <h4 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Driven by Quality
                    </h4>
                    <p className="text-xl opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Delivering perfection through rigorous standards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Animated Services Ticker */}
      <section className="relative py-12 bg-white overflow-hidden">
        {/* Left Blur Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Right Blur Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of services */}
            <div className="flex items-center gap-8 px-6 whitespace-nowrap">
              <div className="border-2 border-gray-300 rounded-xl px-8 py-4 bg-white">
                <span className="text-gray-600 text-2xl md:text-4xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>Web Development</span>
              </div>
              <div className="border-2 border-gray-300 rounded-xl px-8 py-4 bg-white">
                <span className="text-gray-600 text-2xl md:text-4xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>UI/UX Design</span>
              </div>
              <div className="border-2 border-gray-300 rounded-xl px-8 py-4 bg-white">
                <span className="text-gray-600 text-2xl md:text-4xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>API Integration</span>
              </div>
              <div className="border-2 border-gray-300 rounded-xl px-8 py-4 bg-white">
                <span className="text-gray-600 text-2xl md:text-4xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>Cloud Deployment</span>
              </div>
              <div className="border-2 border-gray-300 rounded-xl px-8 py-4 bg-white">
                <span className="text-gray-600 text-2xl md:text-4xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>Mobile Apps</span>
              </div>
              <div className="border-2 border-gray-300 rounded-xl px-8 py-4 bg-white">
                <span className="text-gray-600 text-2xl md:text-4xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>E-Commerce</span>
              </div>
              <div className="border-2 border-gray-300 rounded-xl px-8 py-4 bg-white">
                <span className="text-gray-600 text-2xl md:text-4xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>POS Systems</span>
              </div>
              <div className="border-2 border-gray-300 rounded-xl px-8 py-4 bg-white">
                <span className="text-gray-600 text-2xl md:text-4xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>Custom Software</span>
              </div>
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-8 px-6 whitespace-nowrap">
              <div className="border-2 border-gray-300 rounded-xl px-8 py-4 bg-white">
                <span className="text-gray-600 text-2xl md:text-4xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>Web Development</span>
              </div>
              <div className="border-2 border-gray-300 rounded-xl px-8 py-4 bg-white">
                <span className="text-gray-600 text-2xl md:text-4xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>UI/UX Design</span>
              </div>
              <div className="border-2 border-gray-300 rounded-xl px-8 py-4 bg-white">
                <span className="text-gray-600 text-2xl md:text-4xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>API Integration</span>
              </div>
              <div className="border-2 border-gray-300 rounded-xl px-8 py-4 bg-white">
                <span className="text-gray-600 text-2xl md:text-4xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>Cloud Deployment</span>
              </div>
              <div className="border-2 border-gray-300 rounded-xl px-8 py-4 bg-white">
                <span className="text-gray-600 text-2xl md:text-4xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>Mobile Apps</span>
              </div>
              <div className="border-2 border-gray-300 rounded-xl px-8 py-4 bg-white">
                <span className="text-gray-600 text-2xl md:text-4xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>E-Commerce</span>
              </div>
              <div className="border-2 border-gray-300 rounded-xl px-8 py-4 bg-white">
                <span className="text-gray-600 text-2xl md:text-4xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>POS Systems</span>
              </div>
              <div className="border-2 border-gray-300 rounded-xl px-8 py-4 bg-white">
                <span className="text-gray-600 text-2xl md:text-4xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>Custom Software</span>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      {/* Trusted Leaders Section */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-8xl font-bold text-black mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Partners in Digital Transformation
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              We're proud to partner with industry leading companies who trust our innovative solutions to drive their success
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-20 max-w-5xl mx-auto flex-wrap">

            {/* Logo 1 - Nalin Trading */}
            <div className="flex items-center justify-center transition-all duration-300 border-2 border-gray-300 rounded-xl p-8 bg-white shadow-md">
              <Image 
                src="/NalinTrading.jpeg"
                alt="Nalin Trading Pvt.Ltd"
                width={280}
                height={280}
                className="object-contain"
                style={{ width: '280px', height: '180px' }}
              />
            </div>

            {/* Logo 2 - Bright Mark */}
            <div className="flex items-center justify-center transition-all duration-300 border-2 border-gray-300 rounded-xl p-8 bg-white shadow-md">
              <Image 
                src="/BrightMark.png"
                alt="Bright Mark"
                width={280}
                height={280}
                className="object-contain"
                style={{ width: '280px', height: '180px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feedback/Testimonials Section */}
      <section id="feedback" className={`pt-0 pb-40 bg-white ${isFeedbackVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-8xl font-bold text-black mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              What Our Clients Say
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Real feedback from businesses we've helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Testimonial 1 */}
            <div className="group relative bg-white rounded-3xl p-12 border border-gray-200 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl min-h-[400px] flex flex-col">
              {/* Quote Icon */}
              <div className="absolute top-10 right-10 opacity-10">
                <svg className="w-20 h-20 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <p className="text-xl text-gray-700 mb-auto leading-relaxed relative z-10 flex-grow" style={{ fontFamily: 'Inter, sans-serif' }}>
                "Matrixmo transformed our digital presence with their innovative solutions. The team's expertise and dedication exceeded our expectations."
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="relative">
                  <Image
                    src="/ceo.jpg"
                    alt="John Doe"
                    width={72}
                    height={72}
                    className="rounded-full object-cover ring-4 ring-gray-200"
                    style={{ width: '72px', height: '72px' }}
                    quality={95}
                    priority
                  />
                </div>
                <div>
                  <p className="font-bold text-black text-xl" style={{ fontFamily: 'Inter, sans-serif' }}>John Doe</p>
                  <p className="text-base text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>CEO, Tech Company</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group relative bg-white rounded-3xl p-12 border border-gray-200 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl min-h-[400px] flex flex-col">
              {/* Quote Icon */}
              <div className="absolute top-10 right-10 opacity-10">
                <svg className="w-20 h-20 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <p className="text-xl text-gray-700 mb-auto leading-relaxed relative z-10 flex-grow" style={{ fontFamily: 'Inter, sans-serif' }}>
                "Outstanding service and exceptional quality. Matrixmo delivered beyond what we imagined possible for our business."
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="relative">
                  <Image
                    src="/ceo.jpg"
                    alt="Sarah Miller"
                    width={72}
                    height={72}
                    className="rounded-full object-cover ring-4 ring-gray-200"
                    style={{ width: '72px', height: '72px' }}
                    quality={95}
                    priority
                  />
                </div>
                <div>
                  <p className="font-bold text-black text-xl" style={{ fontFamily: 'Inter, sans-serif' }}>Sarah Miller</p>
                  <p className="text-base text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>Founder, E-Commerce</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="group relative bg-white rounded-3xl p-12 border border-gray-200 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl min-h-[400px] flex flex-col">
              {/* Quote Icon */}
              <div className="absolute top-10 right-10 opacity-10">
                <svg className="w-20 h-20 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <p className="text-xl text-gray-700 mb-auto leading-relaxed relative z-10 flex-grow" style={{ fontFamily: 'Inter, sans-serif' }}>
                "Professional, reliable, and innovative. Matrixmo is the perfect partner for digital transformation."
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="relative">
                  <Image
                    src="/ceo.jpg"
                    alt="Robert Park"
                    width={72}
                    height={72}
                    className="rounded-full object-cover ring-4 ring-gray-200"
                    style={{ width: '72px', height: '72px' }}
                    quality={95}
                    priority
                  />
                </div>
                <div>
                  <p className="font-bold text-black text-xl" style={{ fontFamily: 'Inter, sans-serif' }}>Robert Park</p>
                  <p className="text-base text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>Director, Retail</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 px-4 bg-white text-white">
        <div className="max-w-8xl mx-auto bg-gray-900 text-center border-8 border-white rounded-3xl p-16">
          <h2 className="text-6xl md:text-8xl font-bold mb-10 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
            Ready to Get Started?
          </h2>
          <p className="text-2xl text-gray-300 mb-16 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Let's transform your business with innovative technology solutions. Get in touch with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contact"
              className="px-10 py-5 bg-[#ED1C24] hover:bg-red-700 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contact Us Now
            </a>
            <a 
              href="/services"
              className="px-10 py-5 border-2 border-white text-white font-bold text-xl rounded-xl hover:bg-white hover:text-black transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
