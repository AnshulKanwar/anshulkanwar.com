import Link from "next/link";

const projects = [
  {
    name: "Anya",
    description: "A CLI web server written from scratch",
    href: "https://github.com/AnshulKanwar/Anya",
  },
  {
    name: "Blockchain Demo",
    description: "A webapp to show the concepts of blockchain",
    href: "https://anshulkanwar.github.io/blockchain-demo/",
  },
  {
    name: "Trading Bot",
    description: "A crypto trading bot built using rust",
    href: "https://github.com/AnshulKanwar/trading-bot",
  },
  {
    name: "Tablytix",
    description: "Analyze, redact logos, and extract tables from documents",
    href: "http://tablytix.vercel.app",
  },
  {
    name: "Track",
    description: "A blazing fast CLI app to track your diet.",
    href: "https://github.com/AnshulKanwar/track",
  },
];

export default function Projects() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Projects</h2>
      <div className="grid grid-cols-3 gap-x-16 gap-y-6">
        {projects.map(({ name, description, href }) => (
          <div key={name}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              <h3 className="text-white font-semibold">{name}</h3>
            </Link>
            <p>{description}</p>
          </div>
        ))}
        <div className="self-center">
          <span>
            And many more on my{" "}
            <Link
              href="https://github.com/AnshulKanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Github
            </Link>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
