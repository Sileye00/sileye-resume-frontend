import React from "react"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { FiCode, FiDatabase, FiCpu } from "react-icons/fi"

const projects = [
  {
    name: "SilEye AI",
    description: "SaaS platform offering multimodal AI tools including chat, image generation, music, video, and code generation through API integrations.",
    technologies: ["Generative AI", "SaaS", "API Integration", "Multimodal AI"],
    github: "https://github.com/Sileye00/sileye-ai.git",
    demo: "#",
    icon: <FiCpu className="w-6 h-6" />
  },
  {
    name: "AWS Agentic Customer Support System",
    description: "Built an agentic customer support system using Amazon Bedrock AgentCore and Strands SDK with tool use, memory, and multi-agent orchestration.",
    technologies: ["Amazon Bedrock", "Strands SDK", "AgentCore", "Multi-Agent"],
    github: "https://github.com/Sileye00/aws-bedrock-customer-support-chatbot.git",
    demo: "#",
    icon: <FiCpu className="w-6 h-6" />
  },
  {
    name: "Amazon Bedrock Agentic AI & Multi-Agent Systems",
    description: "Designed and deployed multi-agent systems on Amazon Bedrock with RAG, agent memory, routing, state management, and AI governance.",
    technologies: ["Amazon Bedrock", "RAG", "LLM", "AI Governance"],
    github: "https://github.com/Sileye00/ai-support-agent.git",
    demo: "#",
    icon: <FiCode className="w-6 h-6" />
  },
  {
    name: "Scones Unlimited ML Workflow",
    description: "Developed ML pipelines with Lambda, SageMaker, and Step Functions, including deployment and monitoring.",
    technologies: ["AWS SageMaker", "Lambda", "Step Functions", "MLOps"],
    github: "https://github.com/sileye/ml-workflow-sagemaker",
    demo: "#",
    icon: <FiDatabase className="w-6 h-6" />
  },
  {
    name: "Cloud Resume Challenge",
    description: "Full-stack serverless resume website with CI/CD pipeline, visitor counter, and infrastructure as code deployment.",
    technologies: ["Next.js", "AWS Lambda", "DynamoDB", "CloudFormation"],
    github: "https://github.com/Sileye00/sileye-resume-frontend.git",
    demo: "https://sileye-resume.com",
    icon: <FiCode className="w-6 h-6" />
  },
]

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-200 dark:border-gray-700 h-full">
    <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-2">
        <div className="p-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white shadow-sm">
          {project.icon}
        </div>
        <div className="flex space-x-1">
          <Link href={project.github} target="_blank"
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-200">
            <BsGithub size={15} />
          </Link>
          <Link href={project.demo} target="_blank"
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-purple-600 dark:hover:bg-purple-500 transition-all duration-200">
            <BsArrowUpRightSquare size={15} />
          </Link>
        </div>
      </div>
      <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">{project.name}</h3>
    </div>
    <div className="p-4">
      <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 3).map((tech, techIdx) => (
          <span key={techIdx} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg text-xs font-medium">{tech}</span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-xs">+{project.technologies.length - 3}</span>
        )}
      </div>
    </div>
  </div>
)

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-600">
      <div className="px-8">
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

        {/* Top row — 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {projects.slice(0, 3).map((project, idx) => (
            <SlideUp key={idx} offset="-100px">
              <ProjectCard project={project} />
            </SlideUp>
          ))}
        </div>

        {/* Bottom row — 2 cards centered */}
        <div className="grid md:grid-cols-2 gap-6 lg:w-2/3 lg:mx-auto">
          {projects.slice(3).map((project, idx) => (
            <SlideUp key={idx} offset="-100px">
              <ProjectCard project={project} />
            </SlideUp>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-px shadow-lg">
          <div className="bg-white dark:bg-gray-900 rounded-xl px-6 py-5">
            <h3 className="text-lg font-bold text-center mb-5 text-gray-900 dark:text-white">🏆 Achievements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50">
                <span className="text-xl mt-0.5">🥇</span>
                <div>
                  <h4 className="font-bold text-sm text-blue-700 dark:text-blue-400">AWS DeepRacer League 2023 Winner</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">Championship Finalist · AWS re:Invent 2023</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/50">
                <span className="text-xl mt-0.5">🎓</span>
                <div>
                  <h4 className="font-bold text-sm text-purple-700 dark:text-purple-400">Amazon Campus Summer Series 2024</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">Participant · Invite-only program</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
