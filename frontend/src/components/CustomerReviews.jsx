import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Vishnu P",
    text: "Very good and reliable product. Came in very nice packing. I think Waaree is one among the few companies providing direct to customer selling through their website. Would highly recommend. Only problem was a slight delivery delay from Bluedart. Bluedart kept the product in delivery location for 3 days. Otherwise all good.",
  },
  {
    name: "Chandan Kumar",
    text: "Waaree customer service is very good. We've ordered many products and received proper support, especially from Sonal Goswami. Looking forward to more discounts and deals regularly.",
  },
  {
    name: "Muthukumar",
    text: "Recently I bought Waaree Solar panels and I received them in good condition without any damages or any delay. Waaree representative Miss Priya was doing great job and support on my purchase from booking to the end. I would like to thank her personally for her good work and honest updates on time. I really appreciate the whole team of Waaree. Thanks all.",
  },
];

const Star = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
  </svg>
);

export default function CustomerReviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-yellow-50 py-12 px-4 sm:px-6 md:px-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-green-800 mb-10">
        WHAT OUR CUSTOMERS SAY
      </h2>

      <Slider {...settings}>
        {testimonials.map((item, i) => (
          <div key={i} className="px-2 sm:px-4">
            <div className="bg-white border border-yellow-300 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-md h-full flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-2 sm:mb-3">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <Star key={index} />
                    ))}
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
              <p className="mt-4 sm:mt-6 text-right font-semibold text-green-800 text-sm sm:text-base">
                — {item.name}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
