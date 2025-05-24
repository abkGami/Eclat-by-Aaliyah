import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-gray-800 mb-4">
            About <span className="text-pink-500">Eclat_by_aaliyah</span>
          </h2>
          <div className="w-20 h-1 bg-pink-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-quicksand font-bold text-gray-800 mb-6">
              Our Story
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2018, Glamour Glow began with a passion for bringing
              out each individual's natural beauty. Our team of professional
              makeup artists is dedicated to creating looks that enhance your
              features while ensuring you still feel like yourself.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe makeup should be an expression of your unique style and
              personality. Whether you're preparing for your wedding day, a
              special event, or a professional photoshoot, we create custom
              looks that complement your natural features and make you feel
              confident.
            </p>
            <div className="flex items-center space-x-4">
              <div className="h-10 w-1 bg-pink-400"></div>
              <p className="text-lg font-medium text-pink-500 italic">
                "Beauty begins the moment you decide to be yourself."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg transform hover:scale-105 transition duration-500">
              <img
                src="https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Makeup artist at work"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg transform hover:scale-105 transition duration-500 mt-6">
              <img
                src="https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Makeup products"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg transform hover:scale-105 transition duration-500">
              <img
                src="https://images.pexels.com/photos/1749452/pexels-photo-1749452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Makeup brushes"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg transform hover:scale-105 transition duration-500 mt-6">
              <img
                src="https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Beauty products"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
