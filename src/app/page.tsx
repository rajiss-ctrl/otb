import CoreServices from "./components/CoreServices";
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
    </div>
  );
}
