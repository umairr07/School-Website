import React from "react";

const features = [
  {
    image:
      "https://img.freepik.com/free-photo/medium-shot-boy-holding-book_23-2148892765.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    title: "Progressive Education",
  },
  {
    image:
      "https://img.freepik.com/premium-vector/get-know-my-school_679557-334.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    title: "The City is Our Campus",
  },
  {
    image:
      "https://img.freepik.com/free-vector/back-school-with-happiness_18591-52319.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    title: "A School for Children",
  },
  {
    image:
      "https://img.freepik.com/free-vector/teenager-boy-girl-cartoon_24640-47164.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    title: "A Strong Foundation",
  },
];

const WhyIqra = () => {
  return (
    <div className="bg-gray-50 py-20">
      <center>
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Why Our School?
        </h2>
      </center>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            {/* Circular Image */}
            <div className="w-56 h-56 overflow-hidden rounded-full border-4 border-blue-200">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-fortext">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyIqra;
