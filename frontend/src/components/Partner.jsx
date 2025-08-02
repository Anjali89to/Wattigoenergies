import React from 'react';
import { FaStar } from 'react-icons/fa';

const Partner = () => {
  const testimonials = [
    { quote: 'ThinkAcademies has transformed the way I learn. The course structure is clear, and the mentors are super helpful!', name: 'Aarav G., Mumbai' },
    { quote: 'Best edtech platform I’ve used so far. Real-world projects and instant feedback made learning so much more effective.', name: 'Kavya R., Bengaluru' },
    { quote: 'Highly recommend ThinkAcademies to anyone looking to upskill. Their teaching style is easy to follow and very engaging.', name: 'Yash M., Hyderabad' },
    { quote: 'The curriculum is so well structured and easy to follow. I’m learning faster than ever.', name: 'Ishita S., Delhi' },
    { quote: 'Exceptional support from mentors. My doubts were always cleared quickly.', name: 'Rohit T., Pune' },
    { quote: 'Loved the hands-on projects. It’s the best way to learn.', name: 'Neha J., Jaipur' },
    { quote: 'Their platform is so smooth and user-friendly!', name: 'Sahil A., Ahmedabad' },
    { quote: 'I finally landed a job thanks to what I learned here.', name: 'Sneha B., Kolkata' },
    { quote: 'I didn’t expect to enjoy learning this much!', name: 'Vikram N., Chennai' },
    { quote: 'The quizzes and feedback helped me improve constantly.', name: 'Priya D., Indore' },
    { quote: 'ThinkAcademies is changing education for the better.', name: 'Aman P., Surat' },
    { quote: 'The instructors genuinely care about your progress.', name: 'Diya M., Bhopal' },
    { quote: 'I improved my skills quickly and efficiently.', name: 'Rajat K., Lucknow' },
    { quote: 'The mock interviews helped me gain confidence.', name: 'Nikita S., Nagpur' },
    { quote: 'Courses are up-to-date with industry trends.', name: 'Tarun V., Noida' },
    { quote: 'I felt supported throughout my learning journey.', name: 'Aisha H., Kanpur' },
    { quote: 'Assignments were challenging yet fun.', name: 'Parth M., Patna' },
    { quote: 'Affordable and high-quality education.', name: 'Meena C., Ranchi' },
    { quote: 'The best place for practical learning.', name: 'Ankur L., Amritsar' },
    { quote: 'I loved the community and peer reviews.', name: 'Simran G., Chandigarh' },
    { quote: 'Daily challenges kept me consistent.', name: 'Dev R., Ludhiana' },
    { quote: 'ThinkAcademies brought out the best in me.', name: 'Anjali P., Jodhpur' },
    { quote: 'The UI/UX course helped me land an internship.', name: 'Harsh V., Thane' },
    { quote: 'I refer ThinkAcademies to all my friends.', name: 'Kritika S., Agra' },
    { quote: 'The resume building module is a game-changer.', name: 'Uday R., Gwalior' },
    { quote: 'Incredible value for the price.', name: 'Divya N., Raipur' },
    { quote: 'The coding bootcamp was tough but worth it.', name: 'Naman B., Varanasi' },
    { quote: 'Mentors are industry professionals, and it shows.', name: 'Rhea D., Coimbatore' },
    { quote: 'Their AI course helped me crack interviews.', name: 'Pranav T., Mysuru' },
    { quote: 'Truly India’s best edtech platform.', name: 'Snehal M., Nashik' },
  ];

  const partners = [
    { img: 'OV.jpg', alt: 'Sydoverseas Logo', link: 'https://sydoverseas.com/' },
    { img: 'chlothzy.png', alt: 'Chlothzy Logo', link: 'https://chlothzy.shop/' },
    { img: 'UK.jpg', alt: 'Udaipur Kreation Logo', link: 'http://udaipurkreation.shop/' },
    { img: 'SK.jpg', alt: 'Partner 4 Logo', link: '#' },
  ];

  return (
    <>
      {/* Partner Section */}
      <section className="partner-section py-12 px-4 md:px-8 bg-[#1d3c6b] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Our Partners</h2>
            <p className="text-lg">We are proud to collaborate with these amazing companies.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
            {partners.map((partner, i) => (
              <a
                key={i}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${partner.alt} website`}
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={partner.img}
                  alt={partner.alt}
                  className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain rounded-lg shadow-lg"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="mt-20 bg-gray-50 py-12 px-6 rounded-lg shadow-md max-w-7xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 italic mb-8 text-center">
          What Our Learners Say
        </h3>

        <div
          className="overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 px-4 sm:px-6"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div className="flex gap-6 w-max pb-4">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="min-w-[250px] max-w-[320px] bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-300 flex-shrink-0"
                style={{ scrollSnapAlign: 'start' }}
              >
                <p className="text-gray-600 italic mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-1 text-yellow-400" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="mt-2 font-semibold text-gray-800 italic">– {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
