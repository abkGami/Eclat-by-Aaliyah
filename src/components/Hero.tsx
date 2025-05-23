import React from "react";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-pink-50"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/2253832/pexels-photo-2253832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/60 to-pink-300/40"></div>

      <div className="container mx-auto px-6 relative z-10 ">
        <div className="max-w-xl mx-auto text-center md:mx-0 md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 animate-fade-in-up">
            Reveal Your Natural Beauty
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up animation-delay-200">
            Professional makeup artistry that enhances your unique beauty and
            makes you feel confident and radiant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400 justify-center md:justify-start">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-pink-500 hover:bg-pink-50 font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg"
            >
              Book Now
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-full transition duration-300"
            >
              Our Services
            </button>
            <div className="flex space-x-4  mt-4">
              <a
                href="https://www.instagram.com/makeup_by_eclatbyaaliyah?igsh=MTFwZHF2YzZ3c3JuOA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-100 p-3 rounded-full text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@makeup_by_eclatbyaaliyah?_t=ZM-8wSoGSuDXTL&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-100 p-3 rounded-full text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M224,80a48,48,0,0,1-48-48h0a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8V168a24,24,0,1,1-24-24,8,8,0,0,0,0-16A40,40,0,1,0,144,168V96.6A79.4,79.4,0,0,0,176,112a79.3,79.3,0,0,0,48,16,8,8,0,0,0,8-8V88A8,8,0,0,0,224,80Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
