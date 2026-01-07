import React from "react"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { FiCode, FiDatabase, FiCpu } from "react-icons/fi"

const projects = [
  {
    name: "Pre-trained Image Classifier (Dog Breeds)",
    description: "Automated breed recognition using a pre-trained model with high accuracy for dog breed classification.",
    technologies: ["Python", "PyTorch", "Machine Learning", "Computer Vision"],
    github: "https://github.com/sileye/dog-breed-classifier",
    demo: "#",
    icon: <FiCpu className="w-6 h-6" />
  },
  {
    name: "Bike-Sharing Demand Forecasting",
    description: "Predicted demand using historical data and automated workflows with AutoGluon for accurate forecasting.",
    technologies: ["AutoGluon", "Python", "Data Analysis", "Time Series"],
    github: "https://github.com/sileye/bike-sharing-forecast",
    demo: "#",
    icon: <FiDatabase className="w-6 h-6" />
  },
  {
    name: "Scenes Unlimited ML Workflow",
    description: "Developed ML pipelines with Lambda, SageMaker, and Step Functions, including deployment and monitoring.",
    technologies: ["AWS SageMaker", "Lambda", "Step Functions", "MLOps"],
    github: "https://github.com/sileye/ml-workflow-sagemaker",
    demo: "#",
    icon: <FiCode className="w-6 h-6" />
  },
  {
    name: "Cloud Resume Challenge",
    description: "Full-stack serverless resume website with CI/CD pipeline, visitor counter, and infrastructure as code deployment.",
    technologies: ["Next.js", "AWS Lambda", "DynamoDB", "CloudFormation"],
    github: "https://github.com/sileye/cloud-resume",
    demo: "https://sileye-resume.com",
    icon: <FiCode className="w-6 h-6" />
  },
  {
    name: "SilEye AI",
    description: "SaaS platform offering multimodal AI tools including chat, image generation, music, video, and code generation through API integrations.",
    technologies: ["Generative AI", "SaaS", "API Integration", "Multimodal AI"],
    github: "https://github.com/sileye/sileye-ai",
    demo: "#",
    icon: <FiCpu className="w-6 h-6" />
  },
  {
    name: "Landmark Classification",
    description: "Built a model to identify and tag major landmarks in photos using computer vision techniques.",
    technologies: ["Computer Vision", "CNN", "Image Processing", "Python"],
    github: "https://github.com/sileye/landmark-classification",
    demo: "#",
    icon: <FiDatabase className="w-6 h-6" />
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="relative w-24 h-1 mx-auto mb-6">
            <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" style={{ background: 'linear-gradient(90deg, #2563eb, transparent, #9333ea)', backgroundSize: '200% 100%', animation: 'shimmer 2s ease-in-out infinite' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-3 h-3 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 dark:from-white dark:via-blue-100 dark:to-purple-100" style={{ animation: 'diamondFlash 2s ease-in-out infinite', transform: 'rotate(45deg)' }} />
            </div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Machine Learning and AI projects showcasing expertise in PyTorch, AWS, and data science
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            return (
              <SlideUp key={idx} offset="-100px">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-200 dark:border-gray-700">
                  {/* Project Header */}
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md text-white">
                        {project.icon}
                      </div>
                      <div className="flex space-x-2">
                        <Link 
                          href={project.github} 
                          target="_blank"
                          className="p-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <BsGithub size={16} />
                        </Link>
                        <Link 
                          href={project.demo} 
                          target="_blank"
                          className="p-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <BsArrowUpRightSquare size={16} />
                        </Link>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {project.name}
                    </h3>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-4">
                    <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            )
          })}
        </div>
        
        {/* Achievements Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            🏆 Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <h4 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-2">
                AWS DeepRacer League 2023 Winner
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Championship Finalist (Competed at AWS re:Invent 2023)
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-lg text-purple-600 dark:text-purple-400 mb-2">
                Amazon Campus Summer Series 2024
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Participant (Invite-only program)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection