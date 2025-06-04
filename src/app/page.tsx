import CoreServices from "./components/CoreServices";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import OurProjects from "./components/OurProjects";
import ValueProposition from "./components/ValueProposition";



export default function Home() {
  return (
    <div >
      <Hero/>
      <OurProjects/>
      <CoreServices/>
      <ValueProposition/>
      <Faq/>
    </div>
  );
}
