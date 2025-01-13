const courses = [
  {
    id: 1,
    title: "Mathematics Mastery",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, temporibus? Sit illum at praesentium nobis adipisci tempore atque corrupti sunt? Accusantium officia, pariatur id tempora maiores veritatis. Quia, nam fugiat.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, temporibus? Sit illum at praesentium nobis adipisci tempore atque corrupti sunt? Accusantium officia, pariatur id tempora maiores veritatis. Quia, nam fugiat.",
    buttonText: "Learn More",
    image:
      "https://img.freepik.com/free-photo/joyful-young-geometry-teacher-standing-front-chalkboard-classroom-holding-book-looking-front-doing-ok-sign_141793-120329.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
  },
  {
    id: 2,
    title: "Science Explorers",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, temporibus? Sit illum at praesentium nobis adipisci tempore atque corrupti sunt? Accusantium officia, pariatur id tempora maiores veritatis. Quia, nam fugiat.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, temporibus? Sit illum at praesentium nobis adipisci tempore atque corrupti sunt? Accusantium officia, pariatur id tempora maiores veritatis. Quia, nam fugiat.",
    buttonText: "Learn More",
    image:
      "https://img.freepik.com/premium-vector/scientist-children-checking-experiment_23-2147545637.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
  },
  {
    id: 3,
    title: "Art and Creativity",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, temporibus? Sit illum at praesentium nobis adipisci tempore atque corrupti sunt? Accusantium officia, pariatur id tempora maiores veritatis. Quia, nam fugiat.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, temporibus? Sit illum at praesentium nobis adipisci tempore atque corrupti sunt? Accusantium officia, pariatur id tempora maiores veritatis. Quia, nam fugiat.",
    buttonText: "Learn More",
    image:
      "https://img.freepik.com/free-photo/beautiful-latin-teacher-young-caucasian-girl-wearing-face-masks-are-painting-with-brush-blank-canvas-art-school_662251-49.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
  },
];

const AllCourses = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-12">
        Our Courses
      </h1>
      <div className="space-y-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transform transition duration-500 hover:-translate-y-2 hover:scale-10 cursor-pointer"
          >
            <div className="w-full md:w-1/2 bg-blue-200 flex items-center justify-center">
              <img
                src={course.image}
                alt={course.title}
                className="object-cover w-full h-full"
                style={{ height: "350px" }}
              />
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
                {course.title}
              </h2>
              <p className="text-fortext mb-4">{course.description}</p>
              <button className="self-start bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-200 hover:text-blue-600 transition duration-300">
                {course.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
