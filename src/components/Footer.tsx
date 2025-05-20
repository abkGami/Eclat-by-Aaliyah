import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Eclat_by_aaliyah
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional makeup artistry for all occasions. Enhancing your
              natural beauty and helping you feel confident and radiant for any
              special event.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M224,80a48,48,0,0,1-48-48h0a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8V168a24,24,0,1,1-24-24,8,8,0,0,0,0-16A40,40,0,1,0,144,168V96.6A79.4,79.4,0,0,0,176,112a79.3,79.3,0,0,0,48,16,8,8,0,0,0,8-8V88A8,8,0,0,0,224,80Z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div> */}
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-pink-300 transition duration-300"
                >
                  Home
                </a>
              </li>
              {/* <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-pink-300 transition duration-300"
                >
                  About Us
                </a>
              </li> */}
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-pink-300 transition duration-300"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-pink-300 transition duration-300"
                >
                  Contact
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-300 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li> */}
            </ul>
          </div>

          {/* <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-300 transition duration-300"
                >
                  Bridal Makeup
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-300 transition duration-300"
                >
                  Special Event Makeup
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-300 transition duration-300"
                >
                  Photoshoot Makeup
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-300 transition duration-300"
                >
                  Makeup Lessons
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-300 transition duration-300"
                >
                  Group Services
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} by abk.
          </p>
          {/* <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-pink-300 transition duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-pink-300 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-pink-300 transition duration-300"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
