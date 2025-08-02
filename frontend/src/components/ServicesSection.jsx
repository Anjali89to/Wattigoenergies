import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Website Development & Performance',
      description:
        'High-performance websites tailored to your business, optimized for speed, UX, and conversions.',
    },
    {
      id: 2,
      title: 'Search Engine Optimization (SEO)',
      description:
        'Elevate your site’s visibility on search engines and attract more organic traffic.',
    },
    {
      id: 3,
      title: 'Performance Marketing',
      description:
        'Data-driven campaigns including PPC, display ads, and retargeting to boost growth.',
    },
    {
      id: 4,
      title: 'Growth Marketing',
      description:
        'Strategic initiatives designed to scale your business through experimentation and analytics.',
    },
    {
      id: 5,
      title: 'Social Media Optimization & Management',
      description:
        'Build a strong brand presence on platforms like Instagram, Facebook, LinkedIn, and more.',
    },
  ];

  return (
    <section className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Services List */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#001f3d] mb-4">
            Our Services
          </h2>

          {services.map((service) => (
            <div
              key={service.id}
              className="border border-gray-200 rounded-md p-4 transition-all duration-300 hover:bg-sky-100 hover:shadow-sm"
            >
              <h3 className="font-semibold text-base sm:text-lg mb-1">
                {String(service.id).padStart(2, '0')}. {service.title}
              </h3>
              <p className="text-sm text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src="services.jpg"
            alt="Digital Service Representation"
            className="w-full max-w-md md:max-w-full rounded-md object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
