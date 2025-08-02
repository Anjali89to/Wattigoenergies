import React from 'react';

const Features = () => {
  const featuresData = [
    {
      title: "Google My Business (GMB)",
      img: "https://www.elearninfotech.com/img/skills/digitalmarketing/google-ads.webp",
      desc: "Optimize your GMB profile to improve local visibility and attract nearby customers."
    },
    {
      title: "SEO-Driven Strategy",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0I0lp5K9oTkcQNRqvnye0rY_tybaByhuUaP_BNgSH569apwOlMcyjWWiIfeK6k60HK8&usqp=CAU",
      desc: "Improve your Google rankings and attract organic traffic with proven SEO techniques."
    },
    {
      title: "Content Creation",
      img: "https://th.bing.com/th/id/OIP.CLBVr2MZCQHk1-Mb_rWIAQHaHa?pid=ImgDet&w=159&h=159&c=7",
      desc: "Engage your audience with high-quality content tailored to your brand voice."
    },
    {
      title: "Advanced Analytics",
      img: "https://cdn-icons-png.flaticon.com/512/4202/4202840.png",
      desc: "Measure campaign performance and make data-driven decisions in real time."
    },
    {
      title: "Social Media Marketing",
      img: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
      desc: "Grow your presence and engagement with expert-managed social strategies."
    },
    {
      title: "Email Campaigns",
      img: "https://bowwe.com/upload/domain/37991/images/university/recruitment-specialist.webp?3820038",
      desc: "Reach your audience directly with personalized and effective email marketing."
    }
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#001f3d] mb-3">Our Features</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore what makes our services stand out in the digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {featuresData.map((feature, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-24 h-24 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-[#001f3d] mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
