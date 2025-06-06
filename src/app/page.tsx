'use client'
import ContactUs from "./components/ContactUs"
import CoreServices from "./components/CoreServices"
import DesktopMenu from "./components/DesktopMenu"
import Faq from "./components/Faq"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import OurProjects from "./components/OurProjects"
import ValueProposition from "./components/ValueProposition"


export default function Home() {


  return (
    <div className="relative">
      <DesktopMenu />
      <Hero />
      <OurProjects />
      <CoreServices />
      <ValueProposition />
      <Faq />
      <ContactUs />
      <Footer />
    </div>
  )
}