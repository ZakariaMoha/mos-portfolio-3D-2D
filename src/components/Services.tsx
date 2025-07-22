import React from 'react';
import { Shirt, Printer, FileText, MapPin, Lightbulb } from 'lucide-react';

interface ServicesProps {
  isDark: boolean;
}

interface ServiceItem {
  name: string;
  description: string;
}

interface ServiceCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: ServiceItem[];
  color: string;
  bgGradient: string;
}

const Services: React.FC<ServicesProps> = ({ isDark }) => {
  const handleWhatsAppOrder = (productName: string, productPrice?: string) => {
    const phoneNumber = '254768895536'; // Kenya country code + number without leading 0
    const priceText = productPrice ? ` - ${productPrice}` : '';
    const message = encodeURIComponent(`Hello! I'm interested in ordering: ${productName}${priceText}. Can you provide more details and help me place an order?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const services: ServiceCategory[] = [
    {
      icon: <Shirt className="w-8 h-8" />,
      title: "Garments",
      description: "Custom apparel and corporate wear solutions",
      color: "text-blue-400",
      bgGradient: "from-blue-500/20 to-blue-600/10",
      items: [
        { name: "T-shirts", description: "Custom printed tees for any occasion", imageUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Reflectors", description: "High-visibility safety wear", imageUrl: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Overalls", description: "Professional workwear solutions", imageUrl: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Caps/Hats", description: "Branded headwear collection", imageUrl: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Bags", description: "Custom bags and promotional items", imageUrl: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Hoodies", description: "Comfortable branded hoodies", imageUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Corporate Shirts", description: "Professional business attire", imageUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Lanyards", description: "Custom ID and promotional lanyards", imageUrl: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Jackets/Coats", description: "Branded outerwear solutions", imageUrl: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400" }
      ]
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Large Format Printing",
      description: "Eye-catching displays and promotional materials",
      color: "text-green-400",
      bgGradient: "from-green-500/20 to-green-600/10",
      items: [
        { name: "Pop-up Banners", description: "Portable display solutions", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Roll-up Banners", description: "Professional exhibition displays", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Teardrop Banners", description: "Eye-catching outdoor flags", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Wall Stickers", description: "Custom vinyl wall graphics", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Flags", description: "Custom flags for events and promotion", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Vehicle Wraps", description: "Mobile advertising solutions", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Posters", description: "High-quality promotional posters", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Backdrops", description: "Event and photo backdrops", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" }
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Paper Printing",
      description: "Professional print materials for your business",
      color: "text-yellow-400",
      bgGradient: "from-yellow-500/20 to-yellow-600/10",
      items: [
        { name: "Business Cards", description: "Professional networking essentials", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Letterheads", description: "Branded correspondence materials", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Labels", description: "Custom product and shipping labels", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Brochures", description: "Marketing and informational brochures", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Books", description: "Custom book printing services", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Packaging", description: "Custom packaging solutions", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Gift Bags", description: "Branded gift and shopping bags", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Wedding Cards", description: "Elegant wedding invitations", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Funeral Programs", description: "Memorial service programs", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Calendars", description: "Custom promotional calendars", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" }
      ]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Signages",
      description: "Professional signage solutions for visibility",
      color: "text-red-400",
      bgGradient: "from-red-500/20 to-red-600/10",
      items: [
        { name: "Wall Branding", description: "Interior and exterior wall graphics", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Road Signs", description: "Traffic and directional signage", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "3D Signs", description: "Dimensional signage solutions", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "2D Signs", description: "Flat panel and printed signs", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Shop Signs", description: "Storefront and retail signage", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" }
      ]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Outdoor and Indoor Advertising",
      description: "Creative advertising solutions for indoor and outdoor spaces",
      color: "text-purple-400",
      bgGradient: "from-purple-500/20 to-purple-600/10",
      items: [
        { name: "Billboards", description: "Large scale outdoor advertising", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Light Boxes", description: "Illuminated advertising displays", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Digital Signage", description: "Dynamic digital advertising solutions", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Window Graphics", description: "Custom indoor window displays", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { name: "Exhibition Stands", description: "Custom indoor advertising stands", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400" }
      ]
    },
  ];

  return (
    <section
      id="services"
      className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Our Services
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            From custom garments to large format printing, we deliver comprehensive branding solutions 
            that elevate your business presence and make lasting impressions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 cursor-pointer transform-gpu ${
                isDark
                  ? 'bg-gray-800 border border-gray-700 hover:border-gray-600'
                  : 'bg-white border border-gray-200 hover:border-gray-300'
              } hover:shadow-2xl`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${service.bgGradient} ${service.color}`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Service Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.items.map((item, itemIndex) => (
                    <div
                      key={item.name}
                      className={`p-4 rounded-xl transition-all duration-300 hover:scale-102 ${
                        isDark
                          ? 'bg-gray-700/50 hover:bg-gray-700'
                          : 'bg-gray-100/50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        {item.imageUrl && (
                          <img 
                            src={item.imageUrl} 
                            alt={item.name}
                            className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {item.name}
                          </h4>
                          <p className={`text-xs mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {item.description}
                          </p>
                          {item.price && (
                            <p className="text-sm font-semibold text-green-500 mb-2">
                              {item.price}
                            </p>
                          )}
                          {item.price && (
                            <button
                              onClick={() => handleWhatsAppOrder(item.name, item.price)}
                              className="flex items-center space-x-1 text-xs bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full transition-colors duration-300"
                            >
                              <MessageCircle className="w-3 h-3" />
                              <span>Order on WhatsApp</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to action */}
                <div className="mt-8 pt-6 border-t border-opacity-20 border-gray-400">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                      service.title === 'Garments' 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : service.title === 'Large Format Printing'
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : service.title === 'Paper Printing'
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                        : 'bg-red-500 hover:bg-red-600 text-white'
                    }`}
                  >
                    Get Quote for {service.title}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
