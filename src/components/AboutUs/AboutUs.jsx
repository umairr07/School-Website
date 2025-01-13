import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="py-32 sm:py-20 w-full" id="about">
      <div className="container mx-auto px-4 lg:px-8 overflow-x-hidden">
        <div className="lg:grid lg:grid-cols-2 gap-8 items-center sm:flex sm:flex-col-reverse">
          {/* Image Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src="https://img.freepik.com/free-photo/young-people-row-with-thumbs-up_1098-2557.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid"
              alt="About Us"
              className="w-full lg:w-3/4"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            <center>
              <h1 className="text-3xl font-bold text-blue-600 mb-6">
                About Us
              </h1>
            </center>
            <p className="text-fortext leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rem
              provident expedita autem dolorem doloribus quaerat debitis facere
              aperiam, ad cum ullam quidem consequuntur? Beatae exercitationem
              aut eveniet pariatur. Molestias eligendi voluptatibus sequi quia
              repellat in nostrum iure libero quidem? Optio ad illum
              consequuntur maxime dolor. Consectetur, obcaecati impedit. Ut
              facilis suscipit explicabo iusto, illum ullam sit eum sed tempora
              numquam modi officiis provident nostrum? Quod, reprehenderit
              soluta perspiciatis mollitia debitis tempore aperiam sint
              obcaecati magnam corporis perferendis! Placeat fugit, suscipit
              ipsa sequi nam ipsam consequuntur nemo voluptatibus, nobis nisi
              iste maiores sapiente eius vero voluptatem autem ab esse
              laboriosam accusantium officia, vel exercitationem iusto debitis!
              Laboriosam, voluptatem fuga.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
