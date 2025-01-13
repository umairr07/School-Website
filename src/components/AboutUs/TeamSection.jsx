import React from "react";

const teamData = [
  {
    image:
      "https://img.freepik.com/premium-photo/sale-shopping-fashion-business-style-people-concept-elegant-young-man-choosing-trying-suit-tie-mall-clothing-store-snow_380164-159541.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    name: "John Doe",
    position: "Principal",
    description:
      "John leads the school with a vision of academic excellence and holistic development.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/vertical-shot-well-dressed-male-leaning-against-wall-looking-camera_181624-15421.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    name: "Jane Smith",
    position: "Vice Principal",
    description:
      "Jane ensures smooth operations and focuses on student engagement.",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/young-business-man-lawyer-with-laptop-alone-big-bright-conference-room_530697-23876.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    name: "Alice Johnson",
    position: "Sports Coach",
    description:
      "Alice inspires students to excel in sports and physical fitness.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/business-man-banner-concept-with-copy-space_23-2149601473.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    name: "Michael Brown",
    position: "Music Teacher",
    description:
      "Michael nurtures a love for music among students through creative classes.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/young-man-posing-outdoor_23-2148883562.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    name: "Emily Davis",
    position: "Science Teacher",
    description:
      "Emily fosters curiosity and innovation in the field of science.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/young-executiva-man-looking-horizon_1301-7014.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    name: "Chris Wilson",
    position: "Mathematics Teacher",
    description:
      "Chris helps students understand complex math concepts with ease.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/smiling-woman-holding-car-charger-electric-vehicle-charging-station_107420-94914.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    name: "Sophia Martinez",
    position: "Art Teacher",
    description:
      "Sophia encourages creativity and artistic expression in her classes.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/portrait-young-confident-handsome-man_114579-79356.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    name: "David Taylor",
    position: "History Teacher",
    description:
      "David brings history to life through engaging storytelling and lessons.",
  },
];

const TeamSection = () => {
  return (
    <div className="pb-20">
      <center>
        <h1 className="text-3xl font-bold text-blue-600 mt-5">Meet Our Team</h1>
      </center>

      <div className="flex flex-wrap justify-center gap-10 p-10">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="w-80 p-6 text-center rounded-lg shadow-lg transition-all duration-300 bg-white text-fortext hover:bg-blue-600 hover:text-white"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-blue-600"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm font-medium mb-2">{member.position}</p>
            <p className="text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
