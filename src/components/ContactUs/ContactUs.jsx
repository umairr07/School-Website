import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-600 text-center mb-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">
              Send Us a Message
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-100"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-50 rounded-md shadow-sm focus:ring-blue-200 focus:border-blue-600 sm:text-sm"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-100"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-50 rounded-md shadow-sm focus:ring-blue-200 focus:border-blue-600 sm:text-sm"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-100"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border border-gray-50 rounded-md shadow-sm focus:ring-blue-200 focus:border-blue-600 sm:text-sm"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="p-8 rounded-lg shadow-md bg-blue-600 text-white">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-sm mb-6">
              Feel free to reach out to us for any inquiries or assistance.
              We're here to help!
            </p>
            <ul className="space-y-4">
              <li>
                <strong>Address:</strong>
                <br />
                123 Education Lane, Knowledge City, Country
              </li>
              <li>
                <strong>Email:</strong>
                <br />
                <a
                  href="mailto:support@educationalplatform.com"
                  className="underline"
                >
                  support@educationalplatform.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong>
                <br />
                +1 234 567 890
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-semibold">Office Hours:</h4>
              <p className="text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
