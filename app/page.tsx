import Navbar from "@/components/Navbar";
import Benefits from "@/components/sections/Benefits";
import Contact from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import {Hero} from "@/components/sections/Home";
import Plans from "@/components/sections/Plans";
import { Process } from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Testimonails from "@/components/sections/Testimonails";
import Who from "@/components/sections/Who";

export default function Home() {
  return (
    <div className="flex relative flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Who />
      <Process />
      <Services />
      <Benefits />
      <Plans /> 
      <Testimonails />
      <Contact />
      <Footer />
      
    </div>
      );
}
