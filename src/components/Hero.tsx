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

      <div className="container mx-auto px-6 relative z-10">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
