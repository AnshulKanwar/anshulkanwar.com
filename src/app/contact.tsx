import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const contacts = [
  {
    name: "Github",
    href: "https://github.com/AnshulKanwar",
    icon: <Github size={18} />,
  },
  {
    name: "Mail",
    href: "mailto:work@anshulkanwar.com",
    icon: <Mail size={18} />,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/anshul-kanwar/",
    icon: <Linkedin size={18} />,
  },
];

export default function Contact() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Contact</h2>
      <div className="flex justify-between">
        {contacts.map(({ name, href, icon }) => (
          <div key={name}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            className="flex gap-2 items-center hover:text-white"
            >
              <span>{icon}</span>
              <span>{name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
