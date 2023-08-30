import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-20 flex flex-col gap-10">
      <div className="flex justify-between text-zinc-500">
        <h1 className="font-bold transition hover:text-white cursor-pointer">
          Anshul Kanwar
        </h1>
        <Link href="#">Blog</Link>
      </div>

      <div>
        <p>
          Hi I am a computer sicence undergraduate. I love to build stuff using
          code and I know a thing or two about web development, mobile
          development, computer graphics and cybersecurity
        </p>
      </div>
    </main>
  );
}
