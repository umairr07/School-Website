import React from "react";

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

const Curriculum = () => {
  return (
    <div className="p-6 py-10 mt-5 bg-gray-50">
      {/* Page Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Academics - CBSE
        </h1>
        <p className="text-lg text-gray-700">
          Comprehensive Curriculum to Foster Academic Excellence and Holistic
          Development
        </p>
      </header>

      {/* Text Content */}
      <section className="max-w-4xl mx-auto text-justify mb-12">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          Overview of CBSE Curriculum
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          The Central Board of Secondary Education (CBSE) curriculum is one of
          the most reputed and widely accepted educational frameworks in India.
          It emphasizes a holistic approach to learning, encouraging students to
          excel academically, develop critical thinking, and grow as individuals
          prepared for the global stage.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Our school offers the CBSE curriculum, which is structured to provide
          students with a robust foundation in various subjects, including
          Mathematics, Science, Social Studies, and Languages. It focuses on
          conceptual understanding and practical application, ensuring students
          are equipped to meet real-world challenges.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          From the primary grades, the curriculum is designed to foster
          curiosity and a love for learning. As students progress, they are
          exposed to more advanced concepts, practical experiments, and
          research-based learning. The CBSE curriculum also integrates
          co-curricular and extracurricular activities to promote physical,
          emotional, and social well-being.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          The board emphasizes life skills, environmental awareness, and
          value-based education. Our teachers employ modern teaching
          methodologies, including activity-based learning, project work, and
          the use of technology, to make lessons engaging and effective.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          At the senior secondary level, students are provided with a range of
          elective options to explore their interests and career aspirations.
          Our school ensures personalized attention, rigorous preparation for
          board exams, and ample opportunities for skill development and
          extracurricular participation.
        </p>
        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          Why Choose CBSE?
        </h2>
        <ul className="list-disc ml-6 text-gray-700 mb-6">
          <li>
            Uniform and standardized syllabus recognized nationally and
            globally.
          </li>
          <li>
            Focus on conceptual understanding and application-oriented learning.
          </li>
          <li>
            Integration of life skills and value-based education into academics.
          </li>
          <li>
            Flexibility with elective subjects and career-oriented courses in
            senior grades.
          </li>
          <li>
            Equal emphasis on academics, co-curricular activities, and sports.
          </li>
        </ul>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Our school is committed to providing an enriching learning
          environment, ensuring students not only excel academically but also
          grow as responsible, confident, and compassionate individuals.
        </p>
      </section>

      {/* Image Section */}
      <section className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {images.map((item, idx) => (
            <img
              key={idx}
              src={item.img}
              alt={`Gallery`}
              className="w-1/6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Curriculum;
