import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aisha Khan",
      role: "High School Student",
      quote:
        "This platform has transformed my learning experience! The courses are engaging, and I can learn at my own pace.",
      img: "https://img.freepik.com/free-photo/student-posing-with-big-smile_1163-918.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid", // Replace with actual image path
    },
    {
      name: "Rajesh Patel",
      role: "Math Teacher",
      quote:
        "As an educator, I’ve found the resources here invaluable. It has made teaching easier and more effective.",
      img: "https://img.freepik.com/free-photo/smiling-middle-aged-male-teacher-sits-table-with-school-supplies-holding-number-fans-classroom_141793-119813.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    },
    {
      name: "Williams",
      role: "College Student",
      quote:
        "Thanks to this platform, I aced my exams! The content is well-structured and easy to understand.",
      img: "https://img.freepik.com/free-photo/front-view-male-student-green-checkered-shirt-wearing-black-backpack-holding-files-smiling-blue-wall_140725-42410.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-blue-600 text-center">
          What People Say About Us
        </h2>
        <p className="mt-4 text-lg text-gray-700 text-center max-w-2xl mx-auto">
          Hear from students and educators who have experienced the impact of
          our platform firsthand.
        </p>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover shadow-lg"
              />
              {/* Quote */}
              <blockquote className="mt-4 text-gray-700 italic">
                “{testimonial.quote}”
              </blockquote>
              {/* Reviewer Info */}
              <div className="mt-4">
                <p className="text-lg font-semibold text-blue-600">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
