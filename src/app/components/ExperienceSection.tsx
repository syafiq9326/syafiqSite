import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        year: "Jan 2025 - Jun 2025",
        title: "Software Engineer",
        company: "Crédit Agricole Investment Bank",
        description:
            " Engineered scalable KYC batch pipeline (files hosted on AWS S3) via Java Spring, migrated C# (SSIS nodes) to SQL to accelerate institutional investors onboarding, and led full-stack Angular encryption app POC, gained functional knowledge on EU banking domain.",
        tags: ["Java Spring Boot",  "Spring Batch", "Angular", "MYSQL", "AWS S3", "Jenkins", "Gitlab", "SSIS", "C#", "Know-Your-Customer"],
        logo: "/cacrop.png",

    },
    {
        year: "May 2024 - Oct 2024",
        title: "Software Engineer",
        company: "Synapxe Pte Ltd",
        description:
            "Led POC on web scraping via BS4, HuggingFace deployed on Flask, projected 50% accelerated intel generation. Spearheaded multiple VBA automation pipelines for a 50 pax procurement department, presented to C-suite management level.",
        tags: ["Javascript",  "VBA", "Procurement", "Data Analytics", "Flask", "TextBlob", "Pandas", "Beautiful Soup", "Playwright", "Project Management"],
        logo: "/synapxe.png",

    },
    {
        year: "May 2023 - Aug 2023",
        title: "Product Analyst (GoBusiness Portal)",
        company: "Ministry of Trade & Industry",
        description: (
            <>
                Co-led a cross-country analysis of the <a href="https://www.gobusiness.gov.sg/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    GoBusiness portal
                </a> against 10 counterparts, delivering UI/UX and enterprise actions to GovTech and Smart Nation Office. Liaised with NEA, HSA, SFA, SPF, and MOH on licensing onboarding GoBusiness and TradeNet.
            </>
        ),
        tags: ["UI/UX Principles", "Data Analysis", "Stakeholder Management"],
        logo: "/mti-modified.png",
    },
    {
        year: "May 2022 - Aug 2022",
        title: "Data Analyst (Assistant Executive)",
        company: "Singapore Prison HQ",
        description:
            "Spearheaded an automation pipeline via Python (Pandas), to generate report data on excel, accounting for over 80% of manual effort for the Data & Analytics branch.",
        tags: ["Python", "Pandas", "Data Analysis", "Automation"],   
        logo: "/prisonlogo-modified.png",
    },

    {
        year: "Jul 2019 - Feb 2020",
        title: "Pre-Sales Engineer (APAC)",
        company: "SAS Institute Pte Ltd",
        description:
            "Developed proof-of-concept solutions for clients (banking to government) from text analytics to data visualizations, including a front-end site, demo presented to over 600 staff across APAC. ",
        tags: ["Python", "SAS Viya", "D3.js", "HTML", "CSS", "REST API"],   
        logo: "/saslog-modified.png",
    },
];

const ExperienceSection = () => {
    return (
        <motion.div
            className="h-auto min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-gray-600 to-black px-8 py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }} // Ensure it happens each time in view

            
        >
            <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>

            <div className="flex flex-col space-y-12">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-start md:items-center w-full"
                    >
                        {/* Year */}
                        <div className="text-gray-400 text-lg font-semibold md:w-1/4 mb-4 md:mb-0">
                            {exp.year}
                        </div>


                        {/* Job Details */}
                        <div className="flex-grow md:w-3/4 bg-gray-800 p-6 rounded-lg shadow-lg flex items-center">
                            {/* Company Logo */}
                            <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className="w-15 h-20 object-contain mr-4" // Adjust size as needed
                            />

                            <div>
                                <h3 className="text-xl font-semibold text-white">
                                    {exp.title} - <span className="text-gray-400">{exp.company}</span>
                                </h3>
                                <p className="text-gray-400 mt-2 mb-4">{exp.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};
export default ExperienceSection;
