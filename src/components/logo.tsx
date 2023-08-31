import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="font-script text-3xl font-bold transition hover:text-white">
        Anshul Kanwar
      </h1>
    </Link>
  );
}
