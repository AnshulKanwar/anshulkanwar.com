import Logo from "@/components/logo";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="max-w-2xl mx-5 md:mx-auto my-14 flex items-center justify-between">
      <Logo />
      <nav className="flex gap-8">
        <Link href="/music">music</Link>
        <Link
          href="https://resume.anshulkanwar.com"
          target="_blank"
          rel="noopner noreferrer"
          className="transition hover:text-white"
        >
          resume
        </Link>
      </nav>
    </div>
  );
}
