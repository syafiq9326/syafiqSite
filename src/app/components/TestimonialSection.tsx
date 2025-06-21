import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // For navigation arrows

const testimonials = [
   {
    image: "/credit testimonial.png",
  },
  {
    image: "/SAS.png", // Replace with actual testimonial image path

  },
  {
    image: "/prison.png",

  },
  {
    image: "/mti.png",
  },
 

];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <motion.div
      className="h-auto min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black px-4 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex items-center mb-12">
        <h2 className="text-4xl font-bold text-white">Testimonials</h2>
      </div>
      <img src="/companieslogo_bg_removed.png" alt="testimonial icon" className="w-25 h-20 ml-4" /><br/>

      <div className="relative flex items-center justify-center w-full max-w-3xl">
        {/* Arrow for Previous */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
        >
          <FaArrowLeft className="text-white" size={24} />
        </button>

        {/* Testimonial Content */}
        <motion.div
          className="flex flex-col items-center text-center"
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={testimonials[currentIndex].image}
            // alt={testimonials[currentIndex].name}
            className="w-100 h-100 object-cover mb-4 shadow-lg"
          />
          <h3 className="text-xl font-semibold text-white mb-2">
            {/* {testimonials[currentIndex].name} */}
          </h3>
          {/* <p className="text-gray-400 mb-2">{testimonials[currentIndex].role}</p>
          <p className="text-gray-300 max-w-lg">{testimonials[currentIndex].feedback}</p> */}
        </motion.div>

        {/* Arrow for Next */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
        >
          <FaArrowRight className="text-white" size={24} />
        </button>
      </div>
    </motion.div>
  );
};

export default TestimonialSection;
