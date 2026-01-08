"use client"

import React from "react"
import Image from "next/image"
import { Link } from "react-scroll"
import { HiArrowDown } from "react-icons/hi"
import { FiDownload } from "react-icons/fi"

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      <div className="relative container mx-auto px-4 py-16 pt-24 sm:pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fadeIn">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sileye!</span>
              </h1>
              <div className="relative w-24 h-1 mx-auto lg:mx-0">
                <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" style={{ background: 'linear-gradient(90deg, #2563eb, transparent, #9333ea)', backgroundSize: '200% 100%', animation: 'shimmer 2s ease-in-out infinite' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 dark:from-white dark:via-blue-100 dark:to-purple-100" style={{ animation: 'diamondFlash 2s ease-in-out infinite', transform: 'rotate(45deg)' }} />
                </div>
              </div>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I&apos;m a{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Cloud/DevOps/AI/ML Engineer
              </span>{" "}
              based in Dallas, TX. I specialize in designing scalable cloud infrastructure, automating CI/CD pipelines, and building ML solutions across AWS, Google Cloud, and Azure ecosystems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="projects"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer inline-flex items-center justify-center"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                View Projects
              </Link>
              
              <button className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2">
                <FiDownload size={20} />
                Download CV
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex-shrink-0 animate-fadeIn animation-delay-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-full blur-sm opacity-75 animate-pulse"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse" />
              <Image
                src="/sileye.png"
                alt="Sileye Sarr - Cloud DevOps Engineer"
                width={300}
                height={300}
                className="relative rounded-full shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <Link
            to="about"
            className="cursor-pointer group py-4"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            {/* Just the animated arrow */}
            <HiArrowDown 
              size={32} 
              className="text-blue-500 group-hover:text-purple-500 animate-bounce transition-colors duration-300" 
              style={{filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.6))'}} 
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection