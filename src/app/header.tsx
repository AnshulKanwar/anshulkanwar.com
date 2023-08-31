import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between">
      <Link href="/">
        <h1 className="font-script text-3xl font-bold transition hover:text-white">
          Anshul Kanwar
        </h1>
      </Link>
      <Link href="#" className="transition hover:text-white">
        Blog
      </Link>
    </div>
  );
}
