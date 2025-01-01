import React from 'react';
import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/apo-theddy",
      label: "GitHub",
      hoverColor: "hover:text-purple-400"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/juan-esquives-579397239",
      label: "LinkedIn",
      hoverColor: "hover:text-blue-400"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/apotheddy",
      label: "Instagram",
      hoverColor: "hover:text-pink-400"
    },
    {
      icon: Mail,
      href: "mailto:apotheddy@hotmail.com",
      label: "Email",
      hoverColor: "hover:text-green-400"
    }
  ];

  return (
    <footer className="snap-start bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ApoTheddy
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Desarrollador apasionado por crear experiencias web únicas y memorables.
              Especializado en tecnologías modernas y soluciones innovadoras.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <p className="text-gray-300 text-sm">
              © {currentYear} <span className="font-semibold">ApoTheddy</span>
            </p>
            <span className="text-gray-300 text-sm flex items-center">
              - Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> in Perú
            </span>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transform transition-all duration-300 hover:scale-110 ${hoverColor}`}
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
