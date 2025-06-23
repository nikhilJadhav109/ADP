import React from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Clock, number: '1000+', label: 'Projects Completed' },
    { icon: Star, number: '4.9', label: 'Client Rating' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-teal-600 dark:text-teal-400">Agrawal Ply Decor</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            For over a decade, we've been transforming spaces into masterpieces, combining innovative design with exceptional craftsmanship to create interiors that inspire and endure.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Founded with a passion for exceptional design and quality craftsmanship, Agrawal Ply Decor has grown from a small local business into one of the region's most trusted interior design firms.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Our team of experienced designers, architects, and craftspeople work collaboratively to bring your vision to life, ensuring every project reflects your unique style and exceeds your expectations.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              We believe that great design should be both beautiful and functional, creating spaces that not only look stunning but also enhance the way you live and work.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Our team at work"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500 dark:bg-teal-600 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;