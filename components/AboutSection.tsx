import React from "react"
import Image from "next/image"

const skills = [
  { skill: "AWS", category: "cloud" },
  { skill: "Azure", category: "cloud" },
  { skill: "Multi-Cloud Networks", category: "cloud" },
  { skill: "Docker", category: "devops" },
  { skill: "Kubernetes", category: "devops" },
  { skill: "Terraform", category: "devops" },
  { skill: "CI/CD Pipelines", category: "devops" },
  { skill: "Python", category: "programming" },
  { skill: "JavaScript", category: "programming" },
  { skill: "TypeScript", category: "programming" },
  { skill: "Bash", category: "programming" },
  { skill: "Git", category: "programming" },
  { skill: "React", category: "frontend" },
  { skill: "Next.js", category: "frontend" },
  { skill: "WordPress", category: "frontend" },
  { skill: "HTML", category: "frontend" },
  { skill: "Linux", category: "systems" },
  { skill: "Troubleshooting", category: "systems" },
  { skill: "Networking", category: "systems" },
  { skill: "PyTorch", category: "ml" },
  { skill: "CNNs", category: "ml" },
  { skill: "AutoGluon", category: "ml" },
  { skill: "Deep Learning", category: "ml" },
  { skill: "SageMaker", category: "ml" },
  { skill: "Lambda", category: "ml" },
  { skill: "NumPy", category: "ml" },
  { skill: "Matplotlib", category: "ml" },
  { skill: "Jupyter", category: "ml" },
]

const getSkillColor = (category: string) => {
  const colors = {
    cloud: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-700",
    devops: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-700",
    programming: "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:border-purple-700",
    frontend: "bg-pink-100 text-pink-800 border-pink-200 dark:bg-pink-900 dark:text-pink-200 dark:border-pink-700",
    systems: "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900 dark:text-orange-200 dark:border-orange-700",
    ml: "bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900 dark:text-indigo-200 dark:border-indigo-700",
  }
  return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
}

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-600">
      <div className="px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="relative w-24 h-1 mx-auto mb-6">
            <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" style={{ background: 'linear-gradient(90deg, #2563eb, transparent, #9333ea)', backgroundSize: '200% 100%', animation: 'shimmer 2s ease-in-out infinite' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-3 h-3 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 dark:from-white dark:via-blue-100 dark:to-purple-100" style={{ animation: 'diamondFlash 2s ease-in-out infinite', transform: 'rotate(45deg)' }} />
            </div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about building scalable cloud infrastructure and automating deployment pipelines
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Built on Curiosity
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I&apos;m a{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">curious self-learner</span>{" "}
                who loves turning ideas into things that actually work. Based in the Dallas area, I build across cloud, AI, and automation — from scalable infrastructure and CI/CD pipelines to machine learning and intelligent AI systems.
              </p>
              <p>
                My journey started with web development and grew into cloud computing, machine learning, and now generative and agentic AI. I&apos;m especially interested in building AI systems that can reason, use tools, retrieve knowledge, remember context, and collaborate through{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">multi-agent workflows</span>.
              </p>
              <p>
                I believe the best way to learn technology is to build with it. Whether I&apos;m experimenting with Amazon Bedrock and AgentCore, deploying ML solutions, automating cloud infrastructure, or exploring a new idea — I&apos;m always learning, testing, and improving.
              </p>
              <p>
                For me, technology isn&apos;t just about writing code — it&apos;s about solving real problems and building something useful.
              </p>
            </div>
          </div>
          
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              My Skills
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((item, idx) => {
                return (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-sm ${getSkillColor(item.category)}`}
                  >
                    {item.skill}
                  </span>
                )
              })}
            </div>
            
            {/* Professional Image - moved back */}
            <div className="relative mt-8 mx-auto lg:mx-0 max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur-xl opacity-20" />
              <Image
                src="/sileyefinal.png"
                alt="Sileye Sarr professional photo"
                width={400}
                height={300}
                className="relative rounded-lg shadow-lg brightness-110 dark:brightness-125 dark:contrast-110 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection