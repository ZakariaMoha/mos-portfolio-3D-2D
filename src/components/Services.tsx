import React from 'react';
import { Shirt, Printer, FileText, MapPin, Lightbulb, MessageCircle } from 'lucide-react';

interface ServicesProps {
  isDark: boolean;
}

interface ServiceItem {
  name: string;
  description: string;
  imageUrl?: string;
  price?: string;
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
      bgGradient: "from-blue-500/20 to-blue-600/10", // Keep this for the card background
      items: [
{ name: "T-shirts", description: "Custom printed tees for any occasion", imageUrl: "/images/t-shirt-1.jpeg"},
        { name: "Reflectors", description: "High-visibility safety wear", imageUrl: "/images/vest.jpeg" },
        { name: "Overalls", description: "Professional workwear solutions", imageUrl: "/images/services/overall.jpeg" },
        { name: "Caps/Hats", description: "Branded headwear collection", imageUrl: "/images/cape.jpeg" },
        { name: "Bags", description: "Custom bags and promotional items", imageUrl: "/images/bag.jpeg" },
        { name: "Hoodies", description: "Comfortable branded hoodies", imageUrl: "/images/hoodie.jpeg" },
        { name: "Can", description: "Custom printed Cans", imageUrl: "/images/can.jpeg" },
        { name: "Lanyards", description: "Custom ID and promotional lanyards", imageUrl: "/images/ly.jpeg" },
        { name: "Jackets/Coats", description: "Branded outerwear solutions", imageUrl: "/images/jckt.jpeg" }
      ]
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Large Format Printing",
      description: "Eye-catching displays and promotional materials",
      color: "text-green-400",
      bgGradient: "from-green-500/20 to-green-600/10", // Keep this for the card background
      items: [
        { name: "Pop-up Banners", description: "Portable display solutions", imageUrl: "/images/roll-2.jpeg" },
        { name: "Roll-up Banners", description: "Professional exhibition displays", imageUrl: "/images/roll-banner1.jpeg" },
        { name: "Teardrop Banners", description: "Eye-catching outdoor flags", imageUrl: "/images/t-drop.jpeg" },
        { name: "Wall Stickers", description: "Custom vinyl wall graphics", imageUrl: "/images/wall-brnd1.jpeg" },
        { name: "Flags", description: "Custom flags for events and promotion", imageUrl: "/images/flag.jpeg" },
        { name: "Vehicle Wraps", description: "Mobile advertising solutions", imageUrl: "/images/car-wrap.jpeg" },
        { name: "Posters", description: "High-quality promotional posters", imageUrl: "/images/poster.jpeg" },
        { name: "Backdrops", description: "Event and photo backdrops", imageUrl: "/images/backdrops.jpeg" }
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Paper Printing",
      description: "Professional print materials for your business",
      color: "text-yellow-400",
      bgGradient: "from-yellow-500/20 to-yellow-600/10", // Keep this for the card background
      items: [
        { name: "Business Cards", description: "Professional networking essentials", imageUrl: "/images/Business-card.jpeg" },
        { name: "Letterheads", description: "Branded correspondence materials", imageUrl: "/images/letterHead.jpeg" },
        { name: "Labels", description: "Custom product and shipping labels", imageUrl: "/images/labells.jpeg" },
        { name: "Brochures", description: "Marketing and informational brochures", imageUrl: "/images/bronchure.jpeg" },
        { name: "Books", description: "Custom book printing services", imageUrl: "/images/books.jpeg" },
        { name: "Packaging", description: "Custom packaging solutions", imageUrl: "/images/pkg.jpeg" },
        { name: "Gift Bags", description: "Branded gift and shopping bags", imageUrl: "/images/gift-pack.jpeg" },
        { name: "Wedding Cards", description: "Elegant wedding invitations", imageUrl: "/images/wedding-card.jpeg" },
        { name: "Funeral Programs", description: "Memorial service programs", imageUrl: "/images/fp.jpeg" },
        { name: "Calendars", description: "Custom promotional calendars", imageUrl: "/images/callender.jpeg" }
      ]
    },
    {
      icon: <MapPin className="w-16 h-16" />,
      title: "Signages",
      description: "Professional signage solutions for visibility",
      color: "text-red-400",
      bgGradient: "from-red-500/20 to-red-600/10", // Keep this for the card background
      items: [
        { name: "Wall Branding", description: "Interior and exterior wall graphics", imageUrl: "/images/wall-decor.jpeg" },
        { name: "Road Signs", description: "Traffic and directional signage", imageUrl: "/images/road-sign.jpeg" },
        { name: "3D Signs", description: "Dimensional signage solutions", imageUrl: "/images/3d.jpeg" },
        { name: "2D Signs", description: "Flat panel and printed signs", imageUrl: "/images/2d.jpeg" },
        { name: "Shop Signs", description: "Storefront and retail signage", imageUrl: "/images/shop-stand.jpeg" }
      ]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Outdoor and Indoor Advertising",
      description: "Creative advertising solutions for indoor and outdoor spaces",
      color: "text-purple-400",
      bgGradient: "from-purple-500/20 to-purple-600/10", // Keep this for the card background
      items: [
        { name: "Billboards", description: "Large scale outdoor advertising", imageUrl: "/images/Bill-board.jpeg" },
        { name: "Light Boxes", description: "Illuminated advertising displays", imageUrl: "/images/light-box.jpeg" },
        { name: "Digital Signage", description: "Dynamic digital advertising solutions", imageUrl: "/images/Digital-signage.jpeg" },
        { name: "Window Graphics", description: "Custom indoor window displays", imageUrl: "/images/window-graphics.jpeg" },
        { name: "Exhibition Stands", description: "Custom indoor advertising stands", imageUrl: "/images/E-stand.jpeg" }
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
<div className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-3 flex-wrap">
                        {item.imageUrl && (
<img 
  src={item.imageUrl} 
  alt={item.name}
  loading="lazy"
  className="w-full max-w-xs h-auto sm:w-48 sm:h-48 rounded-lg object-cover flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110"
/>
                        )}
                        <div className="flex-1 min-w-0 mt-3 sm:mt-0 sm:ml-4">
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