import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    icon: "🎓",
    title: "Academic Excellence",
    description:
      "At VIBGYOR Group of Schools, our learners achieve amazing things. Recognised as one of the leading school brands in India...",
    buttonText: "Read more",
  },
  {
    icon: "🎨",
    title: "Liberal Arts And Sports Tradition",
    description:
      "We value the role of sports and arts in life. It is an integral part of our student’s learning experience...",
    buttonText: "Read more",
  },
  {
    icon: "🌟",
    title: "Mentor And Guide",
    description:
      "With our passionate, well-qualified, and highly experienced teachers, our students are destined to shine on the global platform...",
    buttonText: "Read more",
  },
];

const CardSection = () => {
  return (
    <div className="py-20">
      <center>
        <h1 className="text-3xl font-bold text-blue-600 mt-5">
          3 Pillars of Our Success
        </h1>
      </center>
      <div className="flex flex-wrap justify-center gap-20 p-10">
        {data.map((item, index) => (
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            key={index}
            className="w-80 flex flex-col justify-between gap-5 p-6 text-center rounded-lg shadow-lg transition-all  cursor-pointer duration-300 bg-white text-fortext hover:bg-blue-600 hover:text-white border border-fortext"
          >
            <div className="text-5xl mb-4 text-blue-600">{item.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="mb-6">{item.description}</p>
            </div>
            <button className="px-4 py-2 border border-blue-600 rounded-lg font-semibold transition-all hover:bg-blue-200 hover:text-blue-600">
              {item.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
