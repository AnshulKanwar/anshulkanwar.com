import About from "./about";
import Contact from "./contact";
import Projects from "./projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
