import Completion from "@/components/Completion";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Tech from "@/components/Tech";
export default function Home() {
  return (
      <div>
      <HeroSection/>
      <Tech/>
      <Completion/>
      <Project/>
      <ContactForm/>
      </div>
  );
}
