import React from "react"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsArrowUpRightSquare, BsCalendar, BsAward } from "react-icons/bs"
import { SiAmazonaws, SiMicrosoft, SiOracle } from "react-icons/si"
import { FaGraduationCap } from "react-icons/fa"

const certifications = [
  {
    name: "AWS ML Engineer – Associate",
    issuer: "Amazon Web Services",
    status: "In Progress",
    date: "Jan 2025",
    description: "Advanced machine learning engineering certification focusing on ML model deployment, optimization, and production workflows on AWS.",
    icon: <SiAmazonaws className="w-8 h-8" />,
    color: "from-orange-500 to-yellow-500",
    link: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/"
  },
  {
    name: "AWS AI Practitioner",
    issuer: "Amazon Web Services",
    status: "Certified",
    date: "Feb 2023",
    description: "Foundational certification demonstrating knowledge of AI/ML concepts and AWS AI services.",
    icon: <SiAmazonaws className="w-8 h-8" />,
    color: "from-orange-500 to-yellow-500",
    link: "https://aws.amazon.com/certification/certified-ai-practitioner/"
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "Certified",
    date: "Sep 2022",
    description: "Foundational certification covering AWS cloud concepts, services, security, and pricing.",
    icon: <SiAmazonaws className="w-8 h-8" />,
    color: "from-orange-500 to-yellow-500",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
  },
  {
    name: "OCI Foundations Associate",
    issuer: "Oracle",
    status: "Certified",
    date: "Dec 2022",
    description: "Foundational certification covering Oracle Cloud Infrastructure services and concepts.",
    icon: <SiOracle className="w-8 h-8" />,
    color: "from-red-500 to-orange-500",
    link: "https://education.oracle.com/oracle-cloud-infrastructure-foundations-2021-associate/pexam_1Z0-1085-21"
  },
  {
    name: "Azure Fundamentals",
    issuer: "Microsoft",
    status: "Certified",
    date: "Nov 2022",
    description: "Foundational certification covering Microsoft Azure cloud services and concepts.",
    icon: <SiMicrosoft className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    link: "https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals/"
  },
  {
    name: "Aviatrix Multi-Cloud Network Associate",
    issuer: "Aviatrix",
    status: "Certified",
    date: "Oct 2022",
    description: "Specialized certification in multi-cloud networking and connectivity solutions.",
    icon: <BsAward className="w-8 h-8" />,
    color: "from-green-500 to-blue-500",
    link: "https://aviatrix.com/ace-multicloud-networking-associate/"
  },
]

const education = [
  {
    name: "AWS Machine Learning Fundamentals Nanodegree",
    issuer: "Udacity",
    date: "Aug 2024",
    description: "Comprehensive program covering machine learning fundamentals with AWS services.",
    icon: <FaGraduationCap className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "AI Programming with Python Nanodegree",
    issuer: "Udacity",
    date: "Nov 2023",
    description: "Advanced program focusing on AI programming techniques using Python.",
    icon: <FaGraduationCap className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "AWS re/Start",
    issuer: "Per Scholas",
    date: "Oct 2022",
    description: "Full-time cloud computing program preparing for AWS cloud careers.",
    icon: <FaGraduationCap className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-500"
  },
]

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Certifications & <span className="text-blue-600 dark:text-blue-400">Education</span>
          </h2>
          <div className="relative w-24 h-1 mx-auto mb-6">
            <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" style={{ background: 'linear-gradient(90deg, #2563eb, transparent, #9333ea)', backgroundSize: '200% 100%', animation: 'shimmer 2s ease-in-out infinite' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-3 h-3 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 dark:from-white dark:via-blue-100 dark:to-purple-100" style={{ animation: 'diamondFlash 2s ease-in-out infinite', transform: 'rotate(45deg)' }} />
            </div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Industry-recognized certifications and continuous learning in cloud technologies and machine learning
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => {
              return (
                <SlideUp key={idx} offset="-100px">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                    {/* Header with gradient */}
                    <div className={`bg-gradient-to-r ${cert.color} p-4 text-white`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-white/90">
                          {cert.icon}
                        </div>
                        <div className="flex items-center space-x-1 text-white/90">
                          <BsCalendar size={16} />
                          <span className="text-sm font-medium">{cert.date}</span>
                        </div>
                      </div>
                      <h3 className="text-base font-bold leading-tight mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-white/90 font-medium text-sm">
                        {cert.issuer}
                      </p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                        cert.status === 'In Progress' 
                          ? 'bg-yellow-200 text-yellow-800' 
                          : 'bg-green-200 text-green-800'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 text-sm">
                        {cert.description}
                      </p>
                      
                      <Link 
                        href={cert.link} 
                        target="_blank"
                        className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 font-medium text-sm"
                      >
                        <span>Learn More</span>
                        <BsArrowUpRightSquare size={16} />
                      </Link>
                    </div>
                  </div>
                </SlideUp>
              )
            })}
          </div>
        </div>
        
        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Education & Training
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {education.map((edu, idx) => {
              return (
                <SlideUp key={idx} offset="-100px">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                    <div className={`bg-gradient-to-r ${edu.color} p-4 text-white`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-white/90">
                          {edu.icon}
                        </div>
                        <span className="text-white/90 text-sm font-medium">{edu.date}</span>
                      </div>
                      <h3 className="text-base font-bold leading-tight mb-1">
                        {edu.name}
                      </h3>
                      <p className="text-white/90 font-medium text-sm">
                        {edu.issuer}
                      </p>
                    </div>
                    
                    <div className="p-4">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </SlideUp>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection