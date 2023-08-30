import About from "./about";
import Header from "./header";

export default function Home() {
  return (
    <main className="mt-20 flex flex-col gap-10">
      <Header />
      <About />
    </main>
  );
}
