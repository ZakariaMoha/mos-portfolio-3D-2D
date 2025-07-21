import React from 'react';
import { Shirt, Printer, FileText, MapPin } from 'lucide-react';

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
  const services: ServiceCategory[] = [
    {
      icon: <Shirt className="w-8 h-8" />,
      title: "Garments",
      description: "Custom apparel and corporate wear solutions",
      color: "text-blue-400",
      bgGradient: "from-blue-500/20 to-blue-600/10",
      items: [
        { name: "T-shirts", description: "Custom printed tees for any occasion" },
        { name: "Reflectors", description: "High-visibility safety wear" },
        { name: "Overalls", description: "Professional workwear solutions" },
        { name: "Caps/Hats", description: "Branded headwear collection" },
        { name: "Bags", description: "Custom bags and promotional items" },
        { name: "Hoodies", description: "Comfortable branded hoodies" },
        { name: "Corporate Shirts", description: "Professional business attire" },
        { name: "Lanyards", description: "Custom ID and promotional lanyards" },
        { name: "Jackets/Coats", description: "Branded outerwear solutions" }
      ]
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Large Format Printing",
      description: "Eye-catching displays and promotional materials",
      color: "text-green-400",
      bgGradient: "from-green-500/20 to-green-600/10",
      items: [
        { name: "Pop-up Banners", description: "Portable display solutions" },
        { name: "Roll-up Banners", description: "Professional exhibition displays" },
        { name: "Teardrop Banners", description: "Eye-catching outdoor flags" },
        { name: "Wall Stickers", description: "Custom vinyl wall graphics" },
        { name: "Flags", description: "Custom flags for events and promotion" },
        { name: "Vehicle Wraps", description: "Mobile advertising solutions" },
        { name: "Posters", description: "High-quality promotional posters" },
        { name: "Backdrops", description: "Event and photo backdrops" }
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Paper Printing",
      description: "Professional print materials for your business",
      color: "text-yellow-400",
      bgGradient: "from-yellow-500/20 to-yellow-600/10",
      items: [
        { name: "Business Cards", description: "Professional networking essentials" },
        { name: "Letterheads", description: "Branded correspondence materials" },
        { name: "Labels", description: "Custom product and shipping labels" },
        { name: "Brochures", description: "Marketing and informational brochures" },
        { name: "Books", description: "Custom book printing services" },
        { name: "Packaging", description: "Custom packaging solutions" },
        { name: "Gift Bags", description: "Branded gift and shopping bags" },
        { name: "Wedding Cards", description: "Elegant wedding invitations" },
        { name: "Funeral Programs", description: "Memorial service programs" },
        { name: "Calendars", description: "Custom promotional calendars" }
      ]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Signages",
      description: "Professional signage solutions for visibility",
      color: "text-red-400",
      bgGradient: "from-red-500/20 to-red-600/10",
      items: [
        { name: "Wall Branding", description: "Interior and exterior wall graphics" },
        { name: "Road Signs", description: "Traffic and directional signage" },
        { name: "3D Signs", description: "Dimensional signage solutions" },
        { name: "2D Signs", description: "Flat panel and printed signs" },
        { name: "Shop Signs", description: "Storefront and retail signage" }
      ]
    }
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.items.map((item, itemIndex) => (
                    <div
                      key={item.name}
                      className={`p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                        isDark
                          ? 'bg-gray-700/50 hover:bg-gray-700'
                          : 'bg-gray-100/50 hover:bg-gray-100'
                      }`}
                    >
                      <h4 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {item.name}
                      </h4>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item.description}
                      </p>
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