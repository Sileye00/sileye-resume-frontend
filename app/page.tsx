import AboutSection from "@/components/AboutSection"
import CertificationsSection from "@/components/CertificationsSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CertificationsSection />
    </main>
  )
}