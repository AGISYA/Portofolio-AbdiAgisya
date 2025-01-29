import { ReactNode } from "react";
import { FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-gray-900 shadow-md p-6 rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export default function Skills() {
  const skills = [
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-6xl" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-green-400 text-6xl" />,
    },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-6xl" /> },
  ];

  return (
    <div className="flex flex-col md:-mt-0 -mt-44 h-32">
      <section className="py-12 px-6 bg-gray-800 flex-1 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-green-600 mb-8">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="flex flex-col items-center shadow-lg">
              {skill.icon}
              <CardContent className="text-lg font-semibold text-white mt-4">
                {skill.name}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <footer className="bg-gray-900 text-white text-center py-6">
        <p className="text-lg font-semibold">Get in Touch!</p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="mt-4 text-sm">Dibuat dengan ❤ oleh Abdiagisya</p>
      </footer>
    </div>
  );
}
