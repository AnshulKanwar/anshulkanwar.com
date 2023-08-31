import About from "./about";
import Contact from "./contact";
import Header from "./header";
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
