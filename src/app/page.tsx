import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-20 flex flex-col gap-10">
      <div className="flex justify-between text-zinc-500">
        <Link href="/">
          <h1 className="font-script text-3xl transition hover:text-white">
            Anshul Kanwar
          </h1>
        </Link>
        <Link href="#" className="transition hover:text-white">
          Blog
        </Link>
      </div>

      <div>
        <p>
          Hey, I love to build stuff using
          code and I know a thing or two about{" "}
          <span className="font-semibold">web development</span>,{" "}
          <span className="font-semibold">mobile development</span>,{" "}
          <span className="font-semibold">computer graphics</span> and{" "}
          <span className="font-semibold">cybersecurity</span>.
        </p>
      </div>
    </main>
  );
}
