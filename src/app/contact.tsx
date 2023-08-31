import Message from "@/components/message";
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
      <h2 className="mb-6 text-xl font-bold">Contact</h2>
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-10">
        <div className="flex flex-row justify-between sm:flex-col gap-3">
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
        <Message />
      </div>
    </div>
  );
}
