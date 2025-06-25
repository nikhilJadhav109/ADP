import React from 'react';
import { Award, Users, Clock, Star, Target, Heart, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Clock, number: '1000+', label: 'Projects Completed' },
    { icon: Star, number: '4.9', label: 'Client Rating' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality standards in design and execution.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for design drives us to create spaces that truly resonate with our clients\' personalities and lifestyles.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'We build lasting relationships with our clients through transparency, reliability, and exceptional service.'
    }
  ];

  const team = [
  {
    name: 'Komal Dhanuka',
    position: 'Founder and Director',
    image: 'https://images.pexels.co/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Leads the vision and design excellence at Agrawal Ply Decor.'
  },
  {
    name: 'Kaustubh Dhanuka',
    position: 'Managing Director',
    image: 'https://images.pexels.co/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Drives operations and ensures strategic growth of the company.'
  },
  {
    name: 'Manish Singh',
    position: 'Business Development Manager',
    image: 'https://images.pexels.co/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Builds client relations and drives business expansion.'
  },
  {
    name: 'Payal Patil',
    position: 'Front Desk Manager',
    image: 'https://images.pexels.co/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Manages front office with professionalism and care.'
  }
];


  const milestones = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Started with a vision to transform spaces into extraordinary experiences.'
    },
    {
      year: '2012',
      title: 'Commercial Expansion',
      description: 'Expanded services to include large-scale commercial and hospitality projects.'
    },
    {
      year: '2018',
      title: 'Luxury Division',
      description: 'Launched dedicated luxury home division serving high-end residential clients.'
    },
    {
      year: '2023',
      title: 'Award Recognition',
      description: 'Received multiple industry awards for innovative design and client satisfaction.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-teal-400">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            For over a decade, we've been transforming spaces into masterpieces, combining innovative design with exceptional craftsmanship to create interiors that inspire and endure.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
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

      {/* Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These core principles guide everything we do and shape the way we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our talented team of designers and professionals are passionate about creating exceptional spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;