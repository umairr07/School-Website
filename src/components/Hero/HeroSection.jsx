import { useState, useEffect } from "react";

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

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="hero-section">
      <img
        src={images[currentIndex].img}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full lg:h-screen sm:h-[50vh]"
      />
    </div>
  );
};

export default HeroSection;
