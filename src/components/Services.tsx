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
{ name: "T-shirts", description: "Custom printed tees for any occasion", imageUrl: "/images/services/t-shirt.jpeg"},
        { name: "Reflectors", description: "High-visibility safety wear", imageUrl: "/images/services/reflector.jpeg" },
        { name: "Overalls", description: "Professional workwear solutions", imageUrl: "/images/services/overall.jpeg" },
        { name: "Caps/Hats", description: "Branded headwear collection", imageUrl: "/images/services/garment_cap.jpg" },
        { name: "Bags", description: "Custom bags and promotional items", imageUrl: "/images/services/garment_bag.jpg" },
        { name: "Hoodies", description: "Comfortable branded hoodies", imageUrl: "/images/services/garment_hoodie.jpg" },
        { name: "Corporate Shirts", description: "Professional business attire", imageUrl: "/images/services/garment_corporate_shirt.jpg" },
        { name: "Lanyards", description: "Custom ID and promotional lanyards", imageUrl: "/images/services/garment_lanyard.jpg" },
        { name: "Jackets/Coats", description: "Branded outerwear solutions", imageUrl: "/images/services/garment_jacket.jpg" }
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
        { name: "Teardrop Banners", description: "Eye-catching outdoor flags", imageUrl: "/images/services/.jpg" },
        { name: "Wall Stickers", description: "Custom vinyl wall graphics", imageUrl: "/images/wall-brnd1.jpeg" },
        { name: "Flags", description: "Custom flags for events and promotion", imageUrl: "/images/services/large_format_flag.jpg" },
        { name: "Vehicle Wraps", description: "Mobile advertising solutions", imageUrl: "/images/services/large_format_vehicle_wrap.jpg" },
        { name: "Posters", description: "High-quality promotional posters", imageUrl: "/images/services/large_format_poster.jpg" },
        { name: "Backdrops", description: "Event and photo backdrops", imageUrl: "/images/services/large_format_backdrop.jpg" }
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Paper Printing",
      description: "Professional print materials for your business",
      color: "text-yellow-400",
      bgGradient: "from-yellow-500/20 to-yellow-600/10", // Keep this for the card background
      items: [
        { name: "Business Cards", description: "Professional networking essentials", imageUrl: "/images/services/paper_business_card.jpg" },
        { name: "Letterheads", description: "Branded correspondence materials", imageUrl: "/images/services/paper_letterhead.jpg" },
        { name: "Labels", description: "Custom product and shipping labels", imageUrl: "/images/services/paper_label.jpg" },
        { name: "Brochures", description: "Marketing and informational brochures", imageUrl: "/images/services/paper_brochure.jpg" },
        { name: "Books", description: "Custom book printing services", imageUrl: "/images/services/paper_book.jpg" },
        { name: "Packaging", description: "Custom packaging solutions", imageUrl: "/images/services/paper_packaging.jpg" },
        { name: "Gift Bags", description: "Branded gift and shopping bags", imageUrl: "/images/services/paper_gift_bag.jpg" },
        { name: "Wedding Cards", description: "Elegant wedding invitations", imageUrl: "/images/services/paper_wedding_card.jpg" },
        { name: "Funeral Programs", description: "Memorial service programs", imageUrl: "/images/services/paper_funeral_program.jpg" },
        { name: "Calendars", description: "Custom promotional calendars", imageUrl: "/images/services/paper_calendar.jpg" }
      ]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Signages",
      description: "Professional signage solutions for visibility",
      color: "text-red-400",
      bgGradient: "from-red-500/20 to-red-600/10", // Keep this for the card background
      items: [
        { name: "Wall Branding", description: "Interior and exterior wall graphics", imageUrl: "/images/services/signage_wall_branding.jpg" },
        { name: "Road Signs", description: "Traffic and directional signage", imageUrl: "/images/services/signage_road_sign.jpg" },
        { name: "3D Signs", description: "Dimensional signage solutions", imageUrl: "/images/services/signage_3d_sign.jpg" },
        { name: "2D Signs", description: "Flat panel and printed signs", imageUrl: "/images/services/signage_2d_sign.jpg" },
        { name: "Shop Signs", description: "Storefront and retail signage", imageUrl: "/images/services/signage_shop_sign.jpg" }
      ]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Outdoor and Indoor Advertising",
      description: "Creative advertising solutions for indoor and outdoor spaces",
      color: "text-purple-400",
      bgGradient: "from-purple-500/20 to-purple-600/10", // Keep this for the card background
      items: [
        { name: "Billboards", description: "Large scale outdoor advertising", imageUrl: "/images/services/outdoor_billboard.jpg" },
        { name: "Light Boxes", description: "Illuminated advertising displays", imageUrl: "/images/services/outdoor_lightbox.jpg" },
        { name: "Digital Signage", description: "Dynamic digital advertising solutions", imageUrl: "/images/services/outdoor_digital_signage.jpg" },
        { name: "Window Graphics", description: "Custom indoor window displays", imageUrl: "/images/services/outdoor_window_graphic.jpg" },
        { name: "Exhibition Stands", description: "Custom indoor advertising stands", imageUrl: "/images/services/outdoor_exhibition_stand.jpg" }
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
                           loading="lazy"
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
