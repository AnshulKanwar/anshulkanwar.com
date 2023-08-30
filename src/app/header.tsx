import Link from "next/link";

export default function Header() {
  return (
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
  );
}
