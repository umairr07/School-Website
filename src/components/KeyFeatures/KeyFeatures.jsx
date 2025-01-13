import React from "react";
import { FaChalkboardTeacher, FaBook, FaLaptop } from "react-icons/fa"; // Icons from react-icons
import { motion } from "framer-motion";

const featuresData = [
  {
    id: 1,
    title: "Expert Teachers",
    description:
      "Learn from highly qualified and experienced educators who are passionate about teaching.",
    icon: "https://img.freepik.com/free-photo/smiling-showing-one-male-teacher-wearing-glasses-holding-number-fans-sitting-table-with-school-tools-classroom_141793-114349.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
  },
  {
    id: 2,
    title: "Comprehensive Materials",
    description:
      "Access a rich library of learning resources, from e-books to interactive content.",
    icon: "https://img.freepik.com/free-vector/school-materials-vector_23-2147497138.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
  },
  {
    id: 3,
    title: "Flexible Learning",
    description:
      "Study anytime, anywhere with our user-friendly and flexible learning options.",
    icon: "https://img.freepik.com/free-photo/cute-classmates-with-papers_23-2147666910.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
  },
];

const KeyFeatures = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-blue-600">Our Features</h2>
        <p className="mt-4 text-lg text-gray-700 text-fortext">
          Discover the unique features that make our platform a leader in
          educational innovation.
        </p>

        {/* Features Grid */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center  p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative w-full h-72  mb-6 overflow-hidden rounded-lg">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-blue-600">
                {feature.title}
              </h3>
              <p className="mt-2 text-fortext leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeatures;
