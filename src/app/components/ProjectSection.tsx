import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Syafiq",
    description: (
      <>
        Introducing Syafiq to the world, via SyafiqChat and an enriching user experience.
      </>
    ),
    tags: ["HTML", "CSS", "React", "TypeScript", "NextJs", "Framer"],
    image: "/syafiqweb.png",
  },
  {
    title: "IntelliFi",
    description: (
      <>
        A web-app for retail investors to track investments and cash, gain personalized investment recommendations and relevant news updates.
        <br /><br /> Visit <a href="https://github.com/syafiq9326/IntelliFi" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">here</a>.
      </>
    ),
    tags: ["HTML", "CSS", "React", "Node.js", "Firecloud", "NOSQL"],
    image: "/intellifi.gif",
  },
  {
    title: "EventPro",
    description: (
      <>
        A classic event management system, where organizers and participants can manage their schedule, similar to EventBrite, but with the added feature of analyzing event sentiments and turnout rate, such as a Taylor Swift concert via a dashboard.
        <br /><br /> Visit <a href="https://github.com/syafiq9326/EventPro" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">here</a>.
      </>
    ),
    tags: ["JavaEE", "MYSQL", "Java Persistence API", "Netbeans", "Primefaces"],
    image: "/fullEventPro.gif",
  },
  {
    title: "Ignite (In Progress)",
    description: (
      <>
        A fund management platform with dual customer/admin systems, featuring KYC verification, fund curation by admin and investment for customer, fund rebalancing, and a GPT-4 integrated chatbot, leveraging RAG as well as a live support system.
      </>
    ),

    tags: ["React", "Node", "Expressjs", "Firestore", "Nodemailer", "REST API", "NOSQL"],
    image: "/logo.png",
  },
  {
    title: "FlaskScrape (In Progress)",
    description: (
      <>
        Scraping sites, classifying them into topics and sentiments via Transformers and Hugging Faces, deploying insights on a real-time dashboard hosted via Flask.
      </>
    ),
    tags: ["HTML", "CSS", "Flask", "BS4", "Pandas", "HuggingFace", "Playwright", "TextBlob"],
    image: "/logo.png",
  },
  {
    title: "Predicting Bank Churn Rate",
    description: (
      <>
        A mini data science project, where I developed binary classification machine learning models to predict bank churn rate based on data from Kaggle, achieving over 86% accuracy.
        <br /><br /> Visit <a href="https://github.com/syafiq9326/EventPro" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">here</a>.
      </>
    ),
    tags: ["Python", "Pandas", "Scikit-Learn"],
    image: "/churn.png",
  },
];


const ProjectSection = () => {
  return (
    <motion.div
      className="h-auto min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black px-4 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }} // Ensure it happens each time in view

    >
      <h2 className="text-4xl font-bold text-white mb-12">Projects</h2>

      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectSection;
