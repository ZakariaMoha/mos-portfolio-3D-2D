import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle, Send } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format the form data into a WhatsApp message
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    // WhatsApp API URL with phone number and message
    const whatsappUrl = `https://wa.me/254768895536?text=${message}`;
    // Open WhatsApp URL in a new tab
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to transform your brand? Contact us today for a free consultation 
            and let's bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>
              <div className="space-y-6">
                <a
                  href="tel:0768895536"
                  className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? 'bg-gray-800 hover:bg-gray-700 text-white'
                      : 'bg-white hover:bg-gray-50 text-gray-900'
                  } shadow-lg hover:shadow-xl`}
                >
                  <div className="p-3 bg-green-500 text-white rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Primary Phone</div>
                    <div className="text-green-500 font-medium">0768 895 536</div>
                  </div>
                </a>

                <a
                  href="tel:0103154528"
                  className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? 'bg-gray-800 hover:bg-gray-700 text-white'
                      : 'bg-white hover:bg-gray-50 text-gray-900'
                  } shadow-lg hover:shadow-xl`}
                >
                  <div className="p-3 bg-blue-500 text-white rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Secondary Phone</div>
                    <div className="text-blue-500 font-medium">0103 154 528</div>
                  </div>
                </a>

                <div
                  className={`flex items-center space-x-4 p-4 rounded-2xl ${
                    isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                  } shadow-lg`}
                >
                  <div className="p-3 bg-yellow-500 text-black rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-yellow-500 font-medium">info@matondasigns.co.ke</div>
                  </div>
                </div>

                <div
                  className={`flex items-center space-x-4 p-4 rounded-2xl ${
                    isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                  } shadow-lg`}
                >
                  <div className="p-3 bg-red-500 text-white rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-red-500 font-medium">Nairobi, Kenya</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className={`p-6 rounded-2xl ${
              isDark ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Business Hours
              </h4>
              <div className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-3xl shadow-xl ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Send us a Message
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-500 font-medium">Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-gray-50 border-gray-300 text-gray-900'
                    }`}
                  >
                    <option value="">Select a service</option>
                    <option value="garments">Garments</option>
                    <option value="large-format">Large Format Printing</option>
                    <option value="paper-printing">Paper Printing</option>
                    <option value="signages">Signages</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>{isSubmitted ? 'Message Sent!' : 'Send Message'}</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;