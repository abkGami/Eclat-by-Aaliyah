import React, { useState } from 'react';

const portfolioItems = [
  {
    id: 1,
    category: 'bridal',
    title: 'Elegant Bridal',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 2,
    category: 'evening',
    title: 'Glamorous Evening',
    image: 'https://images.pexels.com/photos/3586091/pexels-photo-3586091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 3,
    category: 'natural',
    title: 'Natural Glow',
    image: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 4,
    category: 'creative',
    title: 'Artistic Expression',
    image: 'https://images.pexels.com/photos/7390/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 5,
    category: 'bridal',
    title: 'Classic Bridal',
    image: 'https://images.pexels.com/photos/2307377/pexels-photo-2307377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 6,
    category: 'evening',
    title: 'Red Carpet Ready',
    image: 'https://images.pexels.com/photos/1878522/pexels-photo-1878522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Our Work</h2>
          <div className="w-20 h-1 bg-pink-400 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our portfolio of makeup looks we've created for various occasions,
            from natural everyday beauty to glamorous evening and creative artistry.
          </p>
        </div>
        
        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {['all', 'bridal', 'evening', 'natural', 'creative'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`capitalize px-6 py-2 rounded-full transition duration-300 ${
                filter === category 
                  ? 'bg-pink-400 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-pink-100'
              }`}
            >
              {category === 'all' ? 'All' : category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group">
              <div className="overflow-hidden rounded-lg shadow-md bg-white">
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                    <div className="p-6 text-white w-full">
                      <h3 className="text-xl font-medium">{item.title}</h3>
                      <p className="capitalize text-pink-200">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;