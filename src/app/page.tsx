import HomePage from "../Pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
export default function Home() {
  return (
    <main className="flex flex-col bacground-main row-start-2 items-center sm:items-start">
      <section id="home" className="w-full">
        <HomePage />
      </section>
      <section id="about" className="w-full">
        <About />
      </section>
      <section id="projects" className="w-full">
        <Projects />
      </section>
      <section id="contact" className="w-full">
        <Contact />
      </section>
    </main>
  );
}
