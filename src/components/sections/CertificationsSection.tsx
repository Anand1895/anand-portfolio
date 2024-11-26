import React from "react";

const certifications = [
  {
    name: "GCP Essentials",
    issuer: "Google Cloud Platform",
    date: "2023",
  },
  {
    name: "Python for Data Science",
    issuer: "IBM",
    date: "2023",
  },
  {
    name: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI",
    date: "2023",
  },
  {
    name: "Big Data Foundations - Level 1",
    issuer: "IBM",
    date: "2023",
  },
];

const CertificationsSection = () => (
  <section className="section-padding bg-white">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">Certifications</h2>
      <div className="space-y-8">
        {certifications.map((cert, index) => (
          <div key={index} className="animate-on-scroll">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
              <p className="text-primary mb-2">{cert.issuer}</p>
              <p className="text-gray-600">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;