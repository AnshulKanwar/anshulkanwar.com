import About from "./about";
import Contact from "./contact";
import Projects from "./projects";

export default function Home() {
  return (
    <main className="max-w-2xl mx-5 md:mx-auto flex flex-col gap-16">
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
