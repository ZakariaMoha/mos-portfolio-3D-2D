import React, { useState } from 'react';
import { MessageCircle, Filter, Star } from 'lucide-react';

interface LightingProductsProps {
  isDark: boolean;
}

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
  rating: number;
}

const LightingProducts: React.FC<LightingProductsProps> = ({ isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products: Product[] = [
    {
      id: 1,
      name: "Decor Wall Light",
      price: "KSh 1,500",
      image: "/images/lighting/decor-wall-light.jpg",
      category: "Decor",
      description: "Modern LED wall light perfect for home decoration",
      rating: 4.5
    },
    {
      id: 2,
      name: "Security Flood Light",
      price: "KSh 2,800",
      image: "/images/lighting/security-flood-light.jpg",
      category: "Security",
      description: "Motion sensor security light with LED technology",
      rating: 4.8
    },
    {
      id: 3,
      name: "Crystal Chandelier",
      price: "KSh 15,000",
      image: "/images/lighting/crystal-chandelier.jpg",
      category: "Chandeliers",
      description: "Elegant crystal chandelier for dining rooms",
      rating: 4.9
    },
    {
      id: 4,
      name: "LED Strip Lights",
      price: "KSh 800",
      image: "/images/lighting/led-strip-lights.jpg",
      category: "Decor",
      description: "RGB LED strip lights for ambient lighting",
      rating: 4.3
    },
    {
      id: 5,
      name: "Solar Security Light",
      price: "KSh 3,500",
      image: "/images/lighting/solar-security-light.jpg",
      category: "Security",
      description: "Solar powered security light with motion detection",
      rating: 4.6
    },
    {
      id: 6,
      name: "Modern Chandelier",
      price: "KSh 12,000",
      image: "/images/lighting/modern-chandelier.jpg",
      category: "Chandeliers",
      description: "Contemporary chandelier with adjustable brightness",
      rating: 4.7
    },
    {
      id: 7,
      name: "Pendant Decor Light",
      price: "KSh 2,200",
      image: "/images/lighting/pendant-decor-light.jpg",
      category: "Decor",
      description: "Stylish pendant light for kitchen and dining areas",
      rating: 4.4
    },
    {
      id: 8,
      name: "PIR Security Light",
      price: "KSh 1,800",
      image: "/images/lighting/pir-security-light.jpg",
      category: "Security",
      description: "PIR motion sensor light for outdoor security",
      rating: 4.2
    }
  ];

  const categories = ['All', 'Decor', 'Security', 'Chandeliers'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleWhatsAppOrder = (productName: string, productPrice: string) => {
    const phoneNumber = '254768895536';
    const message = encodeURIComponent(`Hello, I'm interested in ordering: ${productName} - ${productPrice}. Can you provide more details?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <section
      id="lighting-products"
      className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Lighting Products
          </h2>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Discover our premium collection of lighting solutions. From decorative lights to security systems, 
            we have everything to illuminate your space perfectly.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-yellow-500 text-black shadow-lg'
                    : isDark
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                isDark ? 'bg-gray-700' : 'bg-white'
              }`}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                  product.category === 'Decor'
                    ? 'bg-blue-500 text-white'
                    : product.category === 'Security'
                    ? 'bg-red-500 text-white'
                    : 'bg-purple-500 text-white'
                }`}>
                  {product.category}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className={`text-lg font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {product.name}
                </h3>
                
                <p className={`text-sm mb-3 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    ({product.rating})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-green-500">
                    {product.price}
                  </span>
                </div>

                {/* WhatsApp Order Button */}
                <button
                  onClick={() => handleWhatsAppOrder(product.name, product.price)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Order on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              No products found in this category.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className={`inline-block p-8 rounded-3xl ${
            isDark
              ? 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/20'
              : 'bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Need Custom Lighting Solutions?
            </h3>
            <p className={`mb-6 max-w-md mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Can't find what you're looking for? Contact us for custom lighting installations and bulk orders.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LightingProducts;