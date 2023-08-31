import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between">
      <Link href="/">
        <h1 className="font-script text-3xl font-bold transition hover:text-white">
          Anshul Kanwar
        </h1>
      </Link>
      <nav className="flex gap-8">
        <Link
          href="https://resume.anshulkanwar.com"
          target="_blank"
          rel="noopner noreferrer"
          className="transition hover:text-white"
        >
          Resume
        </Link>
        <Link href="#" className="transition hover:text-white">
          Blog
        </Link>
      </nav>
    </div>
  );
}
