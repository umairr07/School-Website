import React from "react";
import { motion } from "framer-motion";

const images = [
  {
    img: "https://img.freepik.com/premium-photo/group-school-children-running-out-school_127093-63.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
  },
  {
    img: "https://img.freepik.com/premium-photo/school-kids-using-computer-classroom_107420-52180.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
  },
  {
    img: "https://img.freepik.com/premium-photo/little-girls-are-performing-dance-number-dance-helovinna-red-suits_186673-8978.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
  },
  {
    img: "https://img.freepik.com/premium-photo/education-people-concept-group-standing-smiling-students-with-diploma-corner-cap_380164-57992.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
  },
  {
    img: "https://img.freepik.com/free-photo/teenagers-reading-staircase-near-clock_23-2147864041.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
  },
];

const Gallery = () => {
  return (
    <div className="py-10">
      <center>
        <h2 className="text-3xl font-bold text-center  text-blue-600">
          Gallery
        </h2>
      </center>
      <div className="lg:grid grid-cols-6 grid-rows-2 gap-4 lg:p-20 sm:p-5 sm:gap-10 overflow-hidden">
        {/* heading */}

        {/* Top Row */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="col-span-2 row-span-1"
        >
          <img
            src={images[0].img}
            alt="Image 1"
            className="w-full h-full object-cover lg:rounded-lg"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="col-span-2 row-span-2"
        >
          <img
            src={images[2].img}
            alt="Image 2"
            className="w-full h-full object-cover lg:rounded-lg"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="col-span-2 row-span-1"
        >
          <img
            src={images[1].img}
            alt="Image 3"
            className="w-full h-full object-cover lg:rounded-lg"
          />
        </motion.div>

        {/* Bottom Row */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="col-span-2 row-span-1"
        >
          <img
            src={images[3].img}
            alt="Image 4"
            className="w-full h-full object-cover lg:rounded-lg"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="col-span-2 row-span-1"
        >
          <img
            src={images[4].img}
            alt="Image 5"
            className="w-full h-full object-cover lg:rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
