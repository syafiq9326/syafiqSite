import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <motion.div
            className="h-screen bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center px-8 md:px-20 py-10" // Centered content overall
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} // Trigger animation when the section is in view
            transition={{ duration: 1.5 }}
            viewport={{ once: false }} // Ensure the animation happens every time it's in view
        >
            {/* Wrapper Div for Image and Text */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-20">

                {/* Profile Image */}
                <motion.div
                    className="w-60 h-60 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }} // Trigger on view
                    transition={{ duration: 0.7, delay: 0.5 }}
                    viewport={{ once: false }} // Ensure it happens each time in view
                >
                    <img
                        src="/photoshoot.jpg"
                        alt="Profile"
                        className="object-cover w-full h-full"
                    />
                </motion.div>

                {/* Text Section */}
                <div className="text-white max-w-lg text-center md:text-left">
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold"
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }} // Trigger on view
                        transition={{ duration: 1 }}
                        viewport={{ once: false }} // Repeat animation when in view
                    >
                        Syafiq Akmal
                    </motion.h1>
                    <motion.h2
                        className="text-xl md:text-xl mt-2"
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }} // Trigger on view
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        Developing Products & Stories.
                    </motion.h2><br />
                    <motion.p
                        className="text-s md:text-s mt-4 leading-relaxed"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }} // Trigger on view
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        I drive technology adoption across businesses, while yapping about life on Medium. Chat with SyafiqChat below to learn more, tap the icons above to view more.
                        <br /><br />
                        {/* NUS Computing | TP-Course Gold Medalist, IMDA Excellence Award, Dell-Global B.V. Special Industry Recipient, Dean&apos;s List. */}
                        NUS Computing | TP-Course Gold Medalist, IMDA Excellence Award, Dell-Global B.V. Special Industry Recipient.

                    </motion.p><br/>
                    {/* <motion.a
                        href="/Syafiq_Resume.pdf" // Link to your resume PDF file in the public directory
                        download="Syafiq_Resume.pdf" // Name for the downloaded file
                        className="bg-white text-black px-6 py-3 rounded-full mt-6 font-bold hover:bg-gray-300 transition"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }} // Trigger on view
                        transition={{ duration: 0.7, delay: 0.6 }}
                        viewport={{ once: false }}
                    >
                        Download Resume
                    </motion.a> */}
                </div>
            </div>
        </motion.div>
    );
};

export default HeroSection;
