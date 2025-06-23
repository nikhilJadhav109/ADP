import React from 'react';
import { CheckCircle, Award, Handshake } from 'lucide-react';

const BrandsPage: React.FC = () => {
  const brands = [
    { name: 'IKEA', logo: 'I', category: 'Furniture & Accessories' },
    { name: 'West Elm', logo: 'W', category: 'Modern Furniture' },
    { name: 'CB2', logo: 'C', category: 'Contemporary Design' },
    { name: 'Herman Miller', logo: 'H', category: 'Office Furniture' },
    { name: 'Steelcase', logo: 'S', category: 'Workplace Solutions' },
    { name: 'Knoll', logo: 'K', category: 'Modern Furniture' },
    { name: 'Pottery Barn', logo: 'P', category: 'Home Furnishings' },
    { name: 'Restoration Hardware', logo: 'R', category: 'Luxury Home' },
    { name: 'Crate & Barrel', logo: 'C', category: 'Home Decor' },
    { name: 'Design Within Reach', logo: 'D', category: 'Modern Design' },
    { name: 'Ligne Roset', logo: 'L', category: 'Contemporary Furniture' },
    { name: 'Cassina', logo: 'C', category: 'Italian Design' },
    { name: 'Vitra', logo: 'V', category: 'Design Furniture' },
    { name: 'Artek', logo: 'A', category: 'Scandinavian Design' },
    { name: 'Muuto', logo: 'M', category: 'Nordic Design' },
    { name: 'HAY', logo: 'H', category: 'Danish Design' }
  ];

  const categories = [
    {
      title: 'Furniture Partners',
      description: 'Premium furniture brands offering exceptional quality and design',
      brands: brands.slice(0, 8)
    },
    {
      title: 'Design Collaborators',
      description: 'Contemporary design houses known for innovation and style',
      brands: brands.slice(8, 16)
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Every product we source meets our stringent quality standards and comes with manufacturer warranties.'
    },
    {
      icon: Award,
      title: 'Best Pricing',
      description: 'Our partnerships enable us to offer competitive pricing on premium products without compromising quality.'
    },
    {
      icon: Handshake,
      title: 'Exclusive Access',
      description: 'Access to the newest collections and exclusive designs before they hit the general market.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-teal-400">Brand Partners</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We collaborate with the world's leading furniture and decor brands to bring you the finest quality products and latest design trends for your interior spaces.
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Partnership Benefits</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our strategic partnerships with premium brands ensure you get the best products, pricing, and service for your interior design projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Categories */}
      {categories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">{category.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.brands.map((brand, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-500 dark:bg-teal-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-teal-600 dark:group-hover:bg-teal-500 transition-colors duration-300">
                      <span className="text-white font-bold text-2xl">{brand.logo}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{brand.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{brand.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Partnership Process */}
      <section className="py-20 bg-teal-600 dark:bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How We Work With Brands</h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Our collaborative approach ensures seamless integration of premium products into your design projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-teal-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold mb-3">Product Selection</h3>
              <p className="text-teal-100 text-sm">
                We carefully curate products that align with your design vision and quality requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white text-teal-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold mb-3">Pricing Negotiation</h3>
              <p className="text-teal-100 text-sm">
                Our established relationships ensure you get the best possible pricing on premium products.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white text-teal-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold mb-3">Quality Control</h3>
              <p className="text-teal-100 text-sm">
                Every product is inspected for quality and authenticity before delivery to your project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white text-teal-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold mb-3">Installation Support</h3>
              <p className="text-teal-100 text-sm">
                Professional installation and setup services ensure perfect integration into your space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Ready to Access Premium Brands?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let us help you source the perfect products from our extensive network of premium brand partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="border-2 border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-500 hover:bg-teal-600 dark:hover:bg-teal-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandsPage;