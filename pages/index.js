import Navbar from "../components/Navbar"
import Sponsors from "../components/Sponsors"
import About from "./About"
import Community from "./Community"
import Courses from "./Courses"
import Hero from "./Home"
import Footer from "../components/Footer"
import Testimonials from "./Testimonial"
import Faq from "./Faq"



export default function Home() {
  return (
    <div className="h-full overflow-hidden bg-gen-blue">
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <Courses />
      <Testimonials />
      <Community />
      <Faq />
      <Footer />
    </div>
  )
}
