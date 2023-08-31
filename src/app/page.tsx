import About from "./about";
import Header from "./header";
import Projects from "./projects";

export default function Home() {
  return (
    <main className="mt-20 flex flex-col gap-14">
      <div className="flex flex-col gap-6">
        <Header />
        <About />
      </div>
      <Projects />
    </main>
  );
}
