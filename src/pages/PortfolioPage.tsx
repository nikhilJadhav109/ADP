import React, { useState } from 'react';
import { Eye, ArrowUpRight, Calendar, MapPin } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Residential', 'Commercial', 'Luxury Homes'];
  
  const projects = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      category: 'Luxury Homes',
      location: 'Mumbai, Maharashtra',
      year: '2023',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Contemporary design meets luxury living in this stunning 5-bedroom villa with panoramic city views.',
      details: 'This project showcased our ability to blend modern aesthetics with traditional comfort, featuring custom-designed furniture, smart home integration, and sustainable materials throughout.'
    },
    {
      id: 2,
      title: 'Executive Office Suite',
      category: 'Commercial',
      location: 'Delhi, NCR',
      year: '2023',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Sophisticated office design that enhances productivity and reflects corporate brand identity.',
      details: 'A complete transformation of a 10,000 sq ft corporate office space, incorporating biophilic design elements, flexible workspaces, and state-of-the-art technology integration.'
    },
    {
      id: 3,
      title: 'Elegant Apartment',
      category: 'Residential',
      location: 'Bangalore, Karnataka',
      year: '2023',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Maximizing space and style in this beautifully designed urban apartment.',
      details: 'Smart space planning and multi-functional furniture solutions transformed this compact 2BHK into a spacious, elegant home perfect for modern urban living.'
    },
    {
      id: 4,
      title: 'Boutique Hotel Lobby',
      category: 'Commercial',
      location: 'Goa',
      year: '2022',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Creating memorable first impressions with luxurious hospitality design.',
      details: 'A stunning hotel lobby that captures the essence of coastal luxury, featuring locally sourced materials, custom lighting installations, and artwork from regional artists.'
    },
    {
      id: 5,
      title: 'Contemporary Home',
      category: 'Residential',
      location: 'Pune, Maharashtra',
      year: '2022',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Clean lines and natural materials create a serene family environment.',
      details: 'This family home emphasizes connection with nature through large windows, natural materials, and an open-plan design that seamlessly integrates indoor and outdoor living.'
    },
    {
      id: 6,
      title: 'Penthouse Paradise',
      category: 'Luxury Homes',
      location: 'Mumbai, Maharashtra',
      year: '2022',
      image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Sky-high luxury with panoramic city views and premium finishes.',
      details: 'A breathtaking penthouse featuring floor-to-ceiling windows, custom Italian marble finishes, and a rooftop terrace with infinity pool overlooking the city skyline.'
    },
    {
      id: 7,
      title: 'Minimalist Studio',
      category: 'Residential',
      location: 'Chennai, Tamil Nadu',
      year: '2023',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Efficient design maximizes functionality in a compact studio apartment.',
      details: 'Clever storage solutions and multi-purpose furniture create distinct living zones within a single space, proving that small can be both beautiful and functional.'
    },
    {
      id: 8,
      title: 'Luxury Restaurant',
      category: 'Commercial',
      location: 'Hyderabad, Telangana',
      year: '2023',
      image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Fine dining experience enhanced by sophisticated interior design.',
      details: 'An upscale restaurant design that creates intimate dining experiences through strategic lighting, acoustic treatments, and luxurious material selections.'
    },
    {
      id: 9,
      title: 'Heritage Home Revival',
      category: 'Luxury Homes',
      location: 'Jaipur, Rajasthan',
      year: '2022',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Restoring grandeur while adding modern amenities to a heritage property.',
      details: 'Careful restoration of a 100-year-old haveli, preserving original architectural elements while seamlessly integrating modern conveniences and luxury amenities.'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-teal-400">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our curated collection of exceptional interior design projects that showcase our expertise in creating stunning, functional spaces across residential and commercial sectors.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-teal-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <Eye className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{project.year}</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-teal-500 transition-colors duration-200" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{project.location}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                  
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{project.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 dark:bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Dream Space?</h2>
          <p className="text-xl mb-8">
            Let's discuss how we can transform your space into something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
            >
              Start Your Project
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;