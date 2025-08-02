import React from 'react';
import CountUp from 'react-countup';

const HighlightSection = () => {
  return (
    <section className="highlight-section bg-[#001f3d] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="highlight-box text-center bg-[#003366] p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold">
            <span className="highlight-number text-4xl font-extrabold">
              <CountUp end={240} duration={2} />+
            </span>{' '}
            Organizations Satisfied
          </h3>
          <p className="mt-4 text-sm md:text-base">We’ve helped 240+ businesses achieve digital excellence.</p>
        </div>
        <div className="highlight-box text-center bg-[#003366] p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold">
            <span className="highlight-number text-4xl font-extrabold">
              <CountUp end={256} duration={2} />+
            </span>{' '}
            Projects/Quarter
          </h3>
          <p className="mt-4 text-sm md:text-base">Delivering 256+ successful projects every quarter across domains.</p>
        </div>
        <div className="highlight-box text-center bg-[#003366] p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold">24/7 Chat & Calls Support</h3>
          <p className="mt-4 text-sm md:text-base">Round-the-clock assistance to help you stay on track anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
