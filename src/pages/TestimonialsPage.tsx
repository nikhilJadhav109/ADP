import React from 'react';
import { Quote, Star, Calendar, MapPin } from 'lucide-react';

const TestimonialsPage: React.FC = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO, Tech Solutions Inc.',
      project: 'Corporate Office Design',
      location: 'Mumbai, Maharashtra',
      date: 'March 2023',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'Agrawal Ply Decor transformed our office space beyond our expectations. The attention to detail and professional execution was outstanding. Our team productivity has significantly improved in this beautiful environment. The project was completed on time and within budget.',
      projectImage: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      name: 'Priya Sharma',
      position: 'Homeowner',
      project: 'Luxury Villa Interior',
      location: 'Delhi, NCR',
      date: 'January 2023',
      image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'Working with Agrawal Ply Decor was an absolute pleasure. They understood our vision perfectly and created a home that reflects our style beautifully. Every corner tells a story of elegance and comfort. The team was professional, creative, and delivered exceptional results.',
      projectImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      name: 'Amit Patel',
      position: 'Restaurant Owner',
      project: 'Fine Dining Restaurant',
      location: 'Bangalore, Karnataka',
      date: 'November 2022',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'The team created an ambiance that perfectly complements our cuisine. The design has been instrumental in attracting customers and creating memorable dining experiences. Our revenue increased by 40% after the renovation. Highly recommended for commercial projects!',
      projectImage: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      name: 'Sneha Gupta',
      position: 'Interior Design Enthusiast',
      project: 'Modern Apartment',
      location: 'Pune, Maharashtra',
      date: 'September 2022',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'From the initial consultation to the final reveal, the process was seamless. They maximized our space beautifully while staying within budget. Our apartment now feels like a luxury hotel suite! The attention to detail and quality of work is exceptional.',
      projectImage: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      name: 'Dr. Vikram Singh',
      position: 'Medical Professional',
      project: 'Clinic Interior Design',
      location: 'Chennai, Tamil Nadu',
      date: 'July 2023',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'The clinic design perfectly balances professionalism with comfort. Patients frequently compliment the calming atmosphere. The team understood the unique requirements of a medical facility and delivered a space that enhances both patient experience and operational efficiency.',
      projectImage: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      name: 'Kavita Mehta',
      position: 'Boutique Owner',
      project: 'Retail Store Design',
      location: 'Jaipur, Rajasthan',
      date: 'May 2023',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'The retail space design has transformed our customer experience completely. Sales have increased significantly since the renovation. The layout is both functional and aesthetically pleasing, creating the perfect shopping environment for our customers.',
      projectImage: 'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Client <span className="text-teal-400">Testimonials</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about their experience working with us and the transformations we've created together.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-teal-500 dark:text-teal-400 mb-6" />

                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  "{testimonial.content}"
                </blockquote>

                {/* Project Image */}
                <div className="mb-6">
                  <img
                    src={testimonial.projectImage}
                    alt={testimonial.project}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>

                {/* Client Info */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</div>
                      <div className="text-gray-600 dark:text-gray-400">{testimonial.position}</div>
                      <div className="text-teal-600 dark:text-teal-400 font-medium text-sm">{testimonial.project}</div>
                    </div>
                  </div>
                  
                  <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center mb-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{testimonial.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-teal-600 dark:bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Client Satisfaction</h2>
            <p className="text-xl text-teal-100">Numbers that speak for our commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-teal-100">Client Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-teal-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-teal-100">Repeat Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">92%</div>
              <div className="text-teal-100">Referral Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Ready to Join Our Happy Clients?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's create your success story together. Contact us today to start your design journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Start Your Project
            </a>
            <a
              href="/portfolio"
              className="border-2 border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-500 hover:bg-teal-600 dark:hover:bg-teal-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;