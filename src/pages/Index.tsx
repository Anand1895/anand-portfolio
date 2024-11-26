import { motion } from "framer-motion";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-padding flex flex-col items-center justify-center min-h-screen text-center"
      >
        <span className="text-primary font-medium mb-4">Hello, I'm</span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Anand Shrivastava</h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
          AI ML Engineer pushing boundaries with carefully crafted LLMs AI and ML based solutions
        </p>
      </motion.section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              As an AI/ML Engineer with a strong foundation in data engineering, I specialize in developing cutting-edge solutions using Large Language Models (LLMs) and Generative AI. My expertise spans across the full machine learning lifecycle - from data pipeline development to model deployment and server management. I'm passionate about pushing the boundaries of what's possible with AI, particularly in creating practical, scalable solutions that solve real-world problems.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>GCP Essentials</li>
                <li>Python for Data Science</li>
                <li>Generative AI with Large Language Models</li>
                <li>Big Data Foundations - Level 1</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">{experience.role}</h3>
                  <p className="text-primary mb-2">{experience.company}</p>
                  <p className="text-gray-600 mb-4">{experience.duration}</p>
                  <p className="text-gray-700">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform">
                  <h3 className="font-semibold">{skill}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-primary mb-2">{edu.school}</p>
                  <p className="text-gray-600">{edu.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="animate-on-scroll">
            <a
              href="mailto:anandshrivastava04@gmail.com"
              className="text-primary hover:text-primary/80 transition-colors text-lg font-medium"
            >
              anandshrivastava04@gmail.com
            </a>
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/in/anand1895"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const experiences = [
  {
    role: "AI ML Engineer",
    company: "CAYPRO.io",
    duration: "December 2021 - Present",
    description: "Working on cutting-edge AI and ML solutions, specializing in Large Language Models.",
  },
  {
    role: "Data Analyst",
    company: "Self-employed",
    duration: "May 2021 - December 2021",
    description: "Analyzed and interpreted complex data sets to drive business decisions.",
  },
  {
    role: "Flutter Developer",
    company: "Freelancer",
    duration: "July 2019 - November 2021",
    description: "Developed cross-platform mobile applications using Flutter framework.",
  },
];

const skills = [
  "Python",
  "Machine Learning",
  "Artificial Intelligence",
  "Gen AI",
  "LLM",
  "Prompt Engineer",
  "Data Analyst",
  "Data Engineer",
  "Django",
  "Flask",
  "Fast API",
  "REST API",
  "MySQL",
  "NoSQL",
  "Postgres",
  "DevOps",
  "Software Engineer",
  "System Design Engineer",
  "Prototype Builder",
  "Streamlit"
];

const education = [
  {
    degree: "Post Graduate Diploma in Data Science",
    school: "Gujarat Technological University",
    duration: "2020 - 2021",
  },
  {
    degree: "Bachelor of Engineering - Computer Engineering",
    school: "L.D. College of Engineering",
    duration: "2017 - 2021",
  },
  {
    degree: "Diploma in Computer Software Engineering",
    school: "Government Polytechnic Ahmedabad",
    duration: "2014 - 2017",
  },
];

export default Index;