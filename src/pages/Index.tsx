import { motion } from "framer-motion";
import { useEffect } from "react";
import AboutSection from "../components/sections/AboutSection";
import CertificationsSection from "../components/sections/CertificationsSection";

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

      <AboutSection />

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

      <CertificationsSection />

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="animate-on-scroll">
            <div className="flex flex-row justify-center gap-4">
              <a
                href="mailto:anandshrivastava04@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Connect on Gmail
              </a>
              <a
                href="https://www.linkedin.com/in/anand1895"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/Anand1895"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                View on GitHub
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
