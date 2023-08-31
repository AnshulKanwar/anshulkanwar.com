import About from "./about";
import Contact from "./contact";
import Header from "./header";
import Projects from "./projects";

export default function Home() {
  return (
    <main className="mt-20 flex flex-col gap-16">
      <div className="flex flex-col gap-6">
        <Header />
        <About />
      </div>
      <Projects />
      <Contact />
    </main>
  );
}
