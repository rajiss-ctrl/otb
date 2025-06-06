'use client'
import ContactUs from "./components/ContactUs"
import CoreServices from "./components/CoreServices"
import DesktopMenu from "./components/DesktopMenu"
import Faq from "./components/Faq"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import OurProjects from "./components/OurProjects"
import ValueProposition from "./components/ValueProposition"
import { useMenu } from "./context/MenuContext"


export default function Home() {
    const { open, setOpen } = useMenu()
    
    const handleLogoClick = () => {
      // Close the menu if it's open
      if (open) {
        setOpen(false)
      }
    }

  return (
    <div className="relative">
        <DesktopMenu />
      <div onClick={handleLogoClick}  className="">
        <Hero />
        <OurProjects />
        <CoreServices />
        <ValueProposition />
        <Faq />
        <ContactUs />
        <Footer />
      </div>
    </div>
  )
}