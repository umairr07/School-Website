import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 text-sm space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <p className="mt-2 text-sm">
              Have any questions? Get in touch with us!
            </p>
            <ul className="mt-4 text-sm space-y-2">
              <li>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:support@platform.com"
                  className="hover:underline"
                >
                  support@platform.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Phone:</span> +1 234 567 890
              </li>
              <li>
                <span className="font-semibold">Address:</span> 123 Education
                St, City, Country
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-6 mt-2">
              <a href="#" className="text-white hover:text-blue-400">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-pink-400">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-blue-700">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 Educational Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
