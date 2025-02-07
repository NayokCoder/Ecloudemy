import { FaGithub, FaXTwitter, FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black ">
      <footer className=" text-white py-10 px-6 max-w-[1440px] mx-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo Section */}
          <div>
            <h1 className="text-2xl font-bold">ZTM</h1>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
            <div>
              <h2 className="font-semibold text-white mb-3">Quick Links</h2>
              <ul className="space-y-2">
                <li>Home</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>Blog</li>
                <li>Cheat Sheets</li>
                <li>Industry Newsletters</li>
                <li>Community</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-white mb-3">The Academy</h2>
              <ul className="space-y-2">
                <li>Courses</li>
                <li>Career Paths</li>
                <li>Career Path Quiz</li>
                <li>Web Development</li>
                <li>Machine Learning & AI</li>
                <li>Data Analytics</li>
                <li>DevOps & Cloud</li>
                <li>Design</li>
                <li>Cyber Security</li>
                <li>Lifetime Challenge</li>
                <li>Learning Passport</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-white mb-3">Company</h2>
              <ul className="space-y-2">
                <li>About ZTM</li>
                <li>Ambassadors</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
          {/* Trustpilot Rating */}
          <p className="text-gray-300">
            Excellent <span className="text-white font-bold">4.9 out of 5</span> ⭐ Trustpilot
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaGithub className="text-gray-300 hover:text-white cursor-pointer text-xl" />
            <FaXTwitter className="text-gray-300 hover:text-white cursor-pointer text-xl" />
            <FaLinkedin className="text-gray-300 hover:text-white cursor-pointer text-xl" />
            <FaFacebook className="text-gray-300 hover:text-white cursor-pointer text-xl" />
            <FaInstagram className="text-gray-300 hover:text-white cursor-pointer text-xl" />
            <FaYoutube className="text-gray-300 hover:text-white cursor-pointer text-xl" />
          </div>

          {/* Legal Links */}
          <div className="text-gray-400 text-sm flex gap-4 mt-4 md:mt-0">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Cookies</p>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            <span className="font-bold text-white">Copyright © 2025</span>, Zero To Mastery Inc.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
