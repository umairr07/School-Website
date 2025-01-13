import React from "react";

const blogs = [
  {
    id: 1,
    title: "5 Tips to Make Learning Fun and Engaging",
    excerpt:
      "Discover simple strategies to make the learning experience enjoyable and productive for students of all ages.",
    thumbnail:
      "https://img.freepik.com/free-photo/excited-young-female-student-wearing-headphones-bandana-neck-backpack-holding-note-book-looking-up-showing-idea-bubble-isolated-olive-green-background_141793-137100.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid", // Replace with actual image URLs
    link: "https://www.quora.com/What-are-some-ways-to-make-learning-fun-and-engaging",
  },
  {
    id: 2,
    title: "Why Personalized Learning is the Future of Education",
    excerpt:
      "Explore how personalized learning adapts to individual student needs and boosts educational outcomes.",
    thumbnail:
      "https://img.freepik.com/free-photo/kid-playing-with-vr-glasses_23-2148925463.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    link: "https://www.highereducationdigest.com/personalized-learning-is-the-future-of-education/",
  },
  {
    id: 3,
    title: "Top 10 Online Tools for Effective Teaching",
    excerpt:
      "Check out our curated list of online tools that empower educators to deliver engaging lessons.",
    thumbnail:
      "https://img.freepik.com/free-vector/electronic-education_1284-725.jpg?ga=GA1.1.814425940.1733824537&semt=ais_hybrid",
    link: "#",
  },
];

const BlogHighlights = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-12" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-600 text-center mb-8">
          Blog Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600">
                  {blog.title}
                </h3>
                <p className="mt-4 text-gray-600 text-sm">{blog.excerpt}</p>
                <a
                  href={blog.link}
                  className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;
