import { div } from "motion/react-m";
import React from "react";

const sections = [
  {
    title: "Humanities",
    image:
      "https://img.freepik.com/free-photo/explanation-material-by-teacher_23-2147885337.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium itaque natus, obcaecati totam architecto aliquid aliquam fugit velit odit maiores!",
  },
  {
    title: "STEM",
    image:
      "https://img.freepik.com/free-photo/medium-shot-woman-girl-lab_23-2148581931.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium itaque natus, obcaecati totam architecto aliquid aliquam fugit velit odit maiores!",
  },
  {
    title: "Arts",
    image:
      "https://img.freepik.com/free-photo/medium-shot-kids-spending-time-school_23-2150385334.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium itaque natus, obcaecati totam architecto aliquid aliquam fugit velit odit maiores!",
  },
  {
    title: "Innovations in Learning",
    image:
      "https://img.freepik.com/free-photo/front-view-boy-holding-laptop-while-wearing-virtual-reality-headset_23-2148556177.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium itaque natus, obcaecati totam architecto aliquid aliquam fugit velit odit maiores!",
  },
  {
    title: "Global Studies and Service",
    image:
      "https://img.freepik.com/premium-photo/group-multicultural-students-with-teachers-classroom-looking-globe-geography-lesson_562859-2356.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium itaque natus, obcaecati totam architecto aliquid aliquam fugit velit odit maiores!",
  },
];

const Explore = () => {
  return (
    <div>
      <center>
        <h2 className="text-3xl mb-6 font-bold text-center  text-blue-600">
          Explore Our Academics
        </h2>
      </center>
      <div className="lg:grid lg:grid-cols-5 p-4 sm:grid sm:grid-cols-1">
        {sections.map((section, index) => (
          <div
            key={index}
            className="relative group overflow-hidden cursor-pointer"
            style={{ height: "600px" }}
          >
            {/* Background Image */}
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <p className=" absolute text-xl bottom-10 text-center text-white bg-blue-600 lg:w-72 sm:w-full p-1 lg:ml-1">
              {section.title}
            </p>
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-blue-600 bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-white text-lg font-semibold">
                {section.title}
              </h1>
              <center className="text-white font-normal">
                {section.description}
              </center>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
