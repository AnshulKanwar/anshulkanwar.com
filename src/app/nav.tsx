import Logo from "@/components/logo";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="my-14 flex justify-between">
      <Logo />
      <nav className="flex gap-8">
        <Link
          href="https://resume.anshulkanwar.com"
          target="_blank"
          rel="noopner noreferrer"
          className="transition hover:text-white"
        >
          Resume
        </Link>
        <Link href="/blog" className="transition hover:text-white">
          Blog
        </Link>
      </nav>
    </div>
  );
}