import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white border-8 border-white">
      {/* Video Background Section */}
      <section className="relative h-screen w-full overflow-hidden">
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
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

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
    </div>
  );
}
