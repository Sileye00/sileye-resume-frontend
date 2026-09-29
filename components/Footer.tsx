import React from "react"
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai"
import { RiTwitterXLine } from "react-icons/ri"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="px-8 py-5">
        <div className="text-center mb-4">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">
            Let&apos;s Connect
          </h3>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/sileye00" rel="noreferrer" target="_blank">
              <AiOutlineGithub
                className="hover:-translate-y-1 transition-transform cursor-pointer text-purple-500 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                size={24}
              />
            </a>
            <a href="https://x.com/sileye_sarr" rel="noreferrer" target="_blank">
              <RiTwitterXLine
                className="hover:-translate-y-1 transition-transform cursor-pointer text-purple-500 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                size={24}
              />
            </a>
            <a href="https://linkedin.com/in/sileyesarr" rel="noreferrer" target="_blank">
              <AiOutlineLinkedin
                className="hover:-translate-y-1 transition-transform cursor-pointer text-purple-500 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                size={24}
              />
            </a>
            <a href="mailto:sileye79@hotmail.com">
              <AiOutlineMail
                className="hover:-translate-y-1 transition-transform cursor-pointer text-purple-500 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                size={24}
              />
            </a>
          </div>
        </div>
        
        <hr className="w-full h-0.5 mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient border-0 rounded mb-3"></hr>
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
          <div>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold text-sm">
              © {currentYear} Sileye Sarr
            </span>
          </div>
          <div className="text-sm">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Built with</span> <span className="text-red-500">❤️</span> <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer