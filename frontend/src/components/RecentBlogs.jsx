import React from "react";

const blogs = [
  {
    title: "Troubleshooting Solar Panel Issues on Your Roof: A Safe and Simple Guide",
    image: "https://cdn-icons-png.flaticon.com/512/3039/3039431.png",
  },
  {
    title: "Your Complete Guide to Buying Solar Kits from Waaree Online",
    image: "https://cdn11.bigcommerce.com/s-unnwlv5df8/images/stencil/390x250/uploaded_images/bnpl2.jpg?t=1749459452",
  },
  {
    title: "How to Buy Products Using the ‘Buy Now, Pay Later’ Option",
    image: "https://cdn11.bigcommerce.com/s-unnwlv5df8/images/stencil/390x250/uploaded_images/chatgpt-image-jun-25-2025-03-38-07-pm.jpg?t=1750846218",
  },
];

export default function RecentBlogs() {
  return (
    <div className="py-16 bg-white px-4 md:px-10">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
        RECENT BLOGS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {blogs.map((blog, index) => (
          <div key={index} className="px-4">
            <div className="h-48 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden mb-4">
              {blog.image ? (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <div className="text-gray-400 text-sm flex flex-col items-center">
                  <svg
                    className="w-12 h-12 mb-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15l9-4.5M3 6.75l9 4.5m0 0l9-4.5M12 10.5v10.875M21 6.75v10.875a2.25 2.25 0 01-1.214 2.015l-7.036 3.52a2.25 2.25 0 01-2 0l-7.036-3.52A2.25 2.25 0 013 17.625V6.75"
                    />
                  </svg>
                  <span>IMAGE COMING SOON</span>
                </div>
              )}
            </div>
            <p className="text-green-900 font-semibold text-base leading-snug px-2">
              {blog.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
