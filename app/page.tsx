import { Navbar } from "@/components/Landing/Navbar";
import { Hero } from "@/components/Landing/Hero";
import { About } from "@/components/Landing/About";
import { Highlights } from "@/components/Landing/Highlights";
import { Departments } from "@/components/Landing/Departments";
import { Courses } from "@/components/Landing/Courses";
import { Faculty } from "@/components/Landing/Faculty";
import { Facilities } from "@/components/Landing/Facilities";
import { Placements } from "@/components/Landing/Placements";
import { NewsEvents } from "@/components/Landing/NewsEvents";
import { Testimonials } from "@/components/Landing/Testimonials";
import { Footer } from "@/components/Landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Departments />
      <Courses />
      <Faculty />
      <Facilities />
      <Placements />
      <NewsEvents />
      <Testimonials />
      <Footer />
    </main>
  );
}
