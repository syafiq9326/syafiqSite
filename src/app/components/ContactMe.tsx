import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa"; // Email and LinkedIn icons

const ContactSection = () => {
  return (
    <motion.div
      className="h-auto min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-gray-600 to-black px-8 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      <h2 className="text-4xl font-bold text-white mb-12">Contact Me</h2>

      <div className="flex space-x-8">
        {/* Gmail Icon - opens Gmail compose window in browser */}
        {/* <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=syafiq9326@gmail.com&su=We%20Are%20Keen%20to%20Connect&body=Hi%20Syafiq%2C%0D%0A%0D%0AWe%20are%20keen%20to%20discuss%20further%20opportunities%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-5xl"
        >
          <FaEnvelope />
        </a> */}

        {/* LinkedIn Icon - links to LinkedIn profile */}
        <a
          href="https://www.linkedin.com/in/syafiqakmal/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-5xl"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Display Email Address */}
      {/* <p className="text-white text-lg mt-8">
        Email address: syafiq9326@gmail.com
      </p> */}
    </motion.div>
  );
};

export default ContactSection;
